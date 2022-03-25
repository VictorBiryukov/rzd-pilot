import React, { FC, useState } from 'react'

import { Tag, Form, Input, InputNumber, Modal, Spin, Table, Col, Row } from 'antd'
import { EditOutlined, PlusOutlined, DeleteOutlined, HistoryOutlined } from '@ant-design/icons'

import { useSearchRiskQuery, SearchRiskDocument, RiskAttributesFragment, useCreateRiskMutation, useUpdateRiskMutation, useDeleteRiskMutation, _UpdateRiskInput } from '../__generate/graphql-frontend'

import { RiskHistoryList } from './RiskHistoryList'

const columns = [
    {
        title: "Описание",
        key: 'descr',
        dataIndex: 'descr',
    },
    {
        title: "Стоимость",
        key: 'cost',
        dataIndex: 'cost',
    },
    {
        title: "Вероятность",
        key: 'probability',
        dataIndex: 'probability',
    },
    {
        title: "",
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

    const [selectedRiskId, setSelectedRiskId] = useState<string>()

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
                    cost: elem.cost,
                    probability: elem.probability,
                    action: (<>
                        <Tag style={{ margin: "2px" }}
                            key={elem.id}
                            onClick={() => {
                                setInputParameters(mapToInput(elem))
                                setShowForm(ShowForm.Update)
                            }}
                        ><EditOutlined />
                        </Tag>
                        <Tag style={{ margin: "2px" }}
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
                                    },
                                    refetchQueries:["getStatesRisk"]
                                })
                            }}
                        ><DeleteOutlined />
                        </Tag>
                        <Tag style={{ margin: "2px" }}
                            key={elem.id}
                            onClick={() => {
                                setSelectedRiskId(elem.id)
                            }}
                        ><HistoryOutlined />
                        </Tag>
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
            <Tag style={{ margin: "2px" }}
                onClick={() => {
                    setInputParameters({ subProject: subProjectId, cost: 0, probability: 1 })
                    setShowForm(ShowForm.Create)
                }}>
                <PlusOutlined />
            </Tag>
            <Modal visible={showForm != ShowForm.None}
                onCancel={() => setShowForm(ShowForm.None)}
                onOk={() => {
                    if (showForm == ShowForm.Create) {
                        createRiskMutation({
                            variables: {
                                input: Object.assign(inputParameters)
                            },
                            refetchQueries: ["searchRisk","getStatesRisk"]
                        })
                    } else if (showForm == ShowForm.Update) {
                        updateRiskMutation({ 
                            variables: { input: Object.assign(inputParameters) as _UpdateRiskInput },
                            refetchQueries: ["getStatesRisk"]
                        })
                    }
                    setShowForm(ShowForm.None)
                }}
            >
                <Form>
                    <Form.Item>
                        <Input placeholder="Описание"
                            value={inputParameters.descr!}
                            onChange={e => changeInputParameters({ descr: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item extra={"Стоимость"}>
                        <InputNumber<string>
                            value={inputParameters.cost!}
                            onChange={value => changeInputParameters({ cost: value })}
                            min="0"
                            max="999999999999"
                            step="100000"
                            stringMode
                        />
                    </Form.Item>
                    <Form.Item extra={"Вероятность"}>
                        <InputNumber<string>
                            value={inputParameters.probability!}
                            onChange={value => changeInputParameters({ probability: value })}
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

            <Modal visible={selectedRiskId ? true : false}
                cancelText='Закрыть'
                onCancel={() => { setSelectedRiskId(undefined) }}
                footer={null}
            >
                <RiskHistoryList riskId={selectedRiskId!} />
            </Modal >

        </>}</>
    )
}

