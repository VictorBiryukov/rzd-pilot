import React, { FC, useState } from 'react'

import { Button, Form, Input, Modal, Select, Spin, Table } from 'antd'

import { useSearchSubProjectQuery, SearchSubProjectDocument, SubProjectAttributesFragment, useCreateSubProjectMutation, useUpdateSubProjectMutation, useDeleteSubProjectMutation, _UpdateSubProjectInput } from '../__generate/graphql-frontend'

const { Option } = Select

const columns = [
    {
        title: "Name",
        key: 'name',
        dataIndex: 'name',
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

interface SubProjectListProps {
    rootProjectId: string
}

type InputParameters = Partial<_UpdateSubProjectInput>

function mapToInput(data: SubProjectAttributesFragment | undefined): InputParameters {
    const result = { ...data }
    delete result.__typename
    return result
}

export const SubProjectList: FC<SubProjectListProps> = ({ rootProjectId }) => {

    const [showForm, setShowForm] = useState<ShowForm>(ShowForm.None)
    const [inputParameters, setInputParameters] = useState<InputParameters>({})

    const { data, loading, error } = useSearchSubProjectQuery({
        variables: {
            cond: "it.rootProject.$id == '" + rootProjectId + "'"
        }
    })
    const subProjectList = data?.searchSubProject.elems

    const [createSubProjectMutation] = useCreateSubProjectMutation()
    const [updateSubProjectMutation] = useUpdateSubProjectMutation()
    const [deleteSubProjectMutation] = useDeleteSubProjectMutation()

    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const mapToView = (list: typeof subProjectList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
                    name: elem.name,
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
                                deleteSubProjectMutation({
                                    variables: {
                                        id: elem.id
                                    },
                                    update: (store) => {
                                        // rewrite Apollo cache for search query after element delete
                                        store.writeQuery({
                                            query: SearchSubProjectDocument,
                                            variables: {
                                                cond: "it.rootProject.$id == '" + rootProjectId + "'"
                                            },
                                            data: {
                                                searchSubProject: {
                                                    elems: subProjectList!.filter(x => x.id !== elem.id)
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
        <>
            <Button type="primary" style={{ margin: "2px" }}
                onClick={() => {
                    setInputParameters({})
                    setShowForm(ShowForm.Create)
                }}>
                Add new subProject
            </Button>
            <Modal visible={showForm != ShowForm.None}
                onCancel={() => setShowForm(ShowForm.None)}
                onOk={() => {
                    if (showForm == ShowForm.Create) {
                        createSubProjectMutation({
                            variables: {
                                input: Object.assign(inputParameters, { rootProject: rootProjectId })
                            },
                            update: (store, result) => {
                                // rewrite Apollo cache for search query after new element create
                                store.writeQuery({
                                    query: SearchSubProjectDocument,
                                    variables: {
                                        cond: "it.rootProject.$id == '" + rootProjectId + "'"
                                    },
                                    data: {
                                        searchSubProject: {
                                            elems: [, ...subProjectList!, result.data?.packet?.createSubProject]
                                        }
                                    }
                                })
                            }
                        })
                    } else if (showForm == ShowForm.Update) {
                        updateSubProjectMutation({ variables: { input: Object.assign(inputParameters) as _UpdateSubProjectInput } })
                    }
                    setShowForm(ShowForm.None)
                }}
            >
                <Form>
                    <Form.Item>
                        <Input placeholder="Name"
                            value={inputParameters.name!}
                            onChange={e => changeInputParameters({ name: e.target.value })}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Table
                columns={columns}
                dataSource={mapToView(subProjectList)}
            />
        </>
    )




}

