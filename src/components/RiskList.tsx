import React, { FC, useState } from 'react'

import { Button, Form, Input, InputNumber, Modal, Select, Spin, Table } from 'antd'

import { useSearchRiskQuery, SearchRiskDocument, RiskAttributesFragment, useCreateRiskMutation, useUpdateRiskMutation, useDeleteRiskMutation, _UpdateRiskInput } from '../__generate/graphql-frontend'

const { Option } = Select

const columns = [
    {
        title: "Descr",
        key: 'descr',
        dataIndex: 'descr',
    },
    {
        title: "Action",
        key: 'action',
        dataIndex: 'action',
    },
]

enum ShowForm {
    None,
    Create,
    Update
}

interface RiskListProps {
    subProjectId: string
}

type InputParameters = Partial<_UpdateRiskInput>

function mapToInput(data: RiskAttributesFragment | undefined): InputParameters {
    const result = { ...data }
    delete result.__typename
    return result
}

export const RiskList: FC<RiskListProps> = ({ subProjectId }) => {

    const [showForm, setShowForm] = useState<ShowForm>(ShowForm.None)
    const [inputParameters, setInputParameters] = useState<InputParameters>({})

    const { data, loading, error } = useSearchRiskQuery({
        variables: {
            cond: "it.subProject.$id == '" + subProjectId + "'"
        }
    })
    const riskList = data?.searchRisk.elems

    const [createRiskMutation] = useCreateRiskMutation()
    const [updateRiskMutation] = useUpdateRiskMutation()
    const [deleteRiskMutation] = useDeleteRiskMutation()

    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const mapToView = (list: typeof riskList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
                    descr: elem.descr,
                    action: (<>
                        <Button style={{ margin: "2px" }}
                            key={elem.id}
                            onClick={() => {
                                setInputParameters(mapToInput(elem))
                                setShowForm(ShowForm.Update)
                            }}
                        >Edit
                        </Button>
                        <Button style={{ margin: "2px" }}
                            onClick={() => {
                                deleteRiskMutation({
                                    variables: {
                                        id: elem.id
                                    },
                                    update: (store) => {
                                        // rewrite Apollo cache for search query after element delete
                                        store.writeQuery({
                                            query: SearchRiskDocument,
                                            variables: {
                                                cond: "it.subProject.$id == '" + subProjectId + "'"
                                            },
                                            data: {
                                                searchRisk: {
                                                    elems: riskList!.filter(x => x.id !== elem.id)
                                                }
                                            }
                                        })
                                    }
                                })
                            }}
                        >Delete
                        </Button>
                    </>
                    )
                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>{subProjectId && <>
            <Button type="primary" style={{ margin: "2px" }}
                onClick={() => {
                    setInputParameters({ subProject: subProjectId })
                    setShowForm(ShowForm.Create)
                }}>
                Add new risk
            </Button>
            <Modal visible={showForm != ShowForm.None}
                onCancel={() => setShowForm(ShowForm.None)}
                onOk={() => {
                    if (showForm == ShowForm.Create) {
                        createRiskMutation({
                            variables: {
                                input: Object.assign(inputParameters)
                            },
                            update: (store, result) => {
                                // rewrite Apollo cache for search query after new element create
                                store.writeQuery({
                                    query: SearchRiskDocument,
                                    variables: {
                                        cond: "it.subProject.$id == '" + subProjectId + "'"
                                    },
                                    data: {
                                        searchRisk: {
                                            elems: [, ...riskList!, result.data?.packet?.createRisk]
                                        }
                                    }
                                })
                            }
                        })
                    } else if (showForm == ShowForm.Update) {
                        updateRiskMutation({ variables: { input: Object.assign(inputParameters) as _UpdateRiskInput } })
                    }
                    setShowForm(ShowForm.None)
                }}
            >
                <Form>
                    <Form.Item>
                        <Input placeholder="Descr"
                            value={inputParameters.descr!}
                            onChange={e => changeInputParameters({ descr: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item extra={"Cost"}>
                        <InputNumber<string> placeholder="Cost"
                            value={inputParameters.cost!}
                            onChange={value => changeInputParameters({ cost: value })}
                            defaultValue="0"
                            min="0"
                            max="999999999999"
                            step="100000"
                            stringMode
                        />
                    </Form.Item>
                    <Form.Item extra={"Probability"}>
                        <InputNumber<string> placeholder="Probability"
                            value={inputParameters.probability!}
                            onChange={value => changeInputParameters({ probability: value })}
                            defaultValue="1"
                            min="0"
                            max="1"
                            step="0.01"
                            stringMode
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Table
                columns={columns}
                dataSource={mapToView(riskList)}
            />
        </>}</>
    )




}

