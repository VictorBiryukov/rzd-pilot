import React, { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Spin, Tabs } from 'antd'
import moment from 'moment';

import { useSearchRootProjectQuery, SearchRootProjectDocument, RootProjectAttributesFragment, useCreateRootProjectMutation, useUpdateRootProjectMutation, useDeleteRootProjectMutation, _UpdateRootProjectInput } from '../__generate/graphql-frontend'
import { SubProjectList } from './SubProjectList'
import { SubProjectTree } from './SubProjectTree'

const { TabPane } = Tabs

enum ShowForm {
    None,
    Create,
    Update
}

type InputParameters = Partial<_UpdateRootProjectInput>

function mapToInput(data: RootProjectAttributesFragment | undefined): InputParameters {
    const result = { ...data }
    delete result.__typename
    return result
}

export const RootProjectTabs: FC = () => {

    const [showForm, setShowForm] = useState<ShowForm>(ShowForm.None)
    const [inputParameters, setInputParameters] = useState<InputParameters>({})

    const { data, loading, error } = useSearchRootProjectQuery()
    const rootProjectList = data?.searchRootProject.elems

    const [createRootProjectMutation] = useCreateRootProjectMutation()
    const [updateRootProjectMutation] = useUpdateRootProjectMutation()
    const [deleteRootProjectMutation] = useDeleteRootProjectMutation()

    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const getTabs = (list: typeof rootProjectList) => {
        return (
            list?.map(elem => {
                return (
                    <TabPane key={elem.id ?? ""} tab={elem.name}>
                        {elem.dateOpen}<p />
                        <Button style={{ margin: "2px" }}
                            onClick={() => {
                                setInputParameters(mapToInput(elem))
                                setShowForm(ShowForm.Update)
                            }}
                        >Edit rootProject</Button>
                        <Button style={{ margin: "2px" }}
                            key={elem.id ?? ""}
                            onClick={(e) => {
                                deleteRootProjectMutation({
                                    variables: {
                                        id: elem.id
                                    },
                                    update: (store) => {
                                        store.writeQuery({
                                            query: SearchRootProjectDocument,
                                            data: {
                                                searchRootProject: {
                                                    elems: rootProjectList!.filter(x => x.id !== elem.id)
                                                }
                                            }
                                        })
                                    }
                                })
                            }}
                        >Delete rootProject</Button>
                        <p />
                        {/* <SubProjectList rootProjectId={elem.id} /> */}
                        <SubProjectTree rootProjectId={elem.id} />
                    </TabPane>
                )
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            <Button style={{ margin: "2px" }}
                onClick={() => {
                    setInputParameters({})
                    setShowForm(ShowForm.Create)
                }}>
                Add new rootProject
            </Button>
            <Modal visible={showForm != ShowForm.None}
                onCancel={() => setShowForm(ShowForm.None)}
                onOk={() => {
                    if (showForm == ShowForm.Create) {

                        createRootProjectMutation({
                            variables: {
                                input: inputParameters
                            },
                            update: (store, result) => {
                                store.writeQuery({
                                    query: SearchRootProjectDocument,
                                    data: {
                                        searchRootProject: {
                                            elems: [, ...rootProjectList!, result.data?.packet?.createRootProject]
                                        }
                                    }
                                })
                            }
                        })
                    } else if (showForm == ShowForm.Update) {
                        updateRootProjectMutation({ variables: { input: Object.assign(inputParameters) as _UpdateRootProjectInput } })
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
                    <Form.Item>
                        <DatePicker placeholder="RootProject Date"
                            //defaultValue={moment()}
                            value={inputParameters.dateOpen ? moment(inputParameters.dateOpen, "YYYY-MM-DD") : null}
                            //value={inputParameters.dateOpen}
                            onChange={moment => changeInputParameters({ dateOpen: moment?.format("YYYY-MM-DD") })}
                            format="YYYY-MM-DD"

                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Form style={{ margin: "2px" }}>
                <Form.Item>
                    <Tabs>
                        {getTabs(rootProjectList)}
                    </Tabs>
                </Form.Item>
            </Form>

        </>
    )




}

