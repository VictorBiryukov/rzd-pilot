import React, { FC, useState } from 'react'
import { Button, Col, DatePicker, Form, Input, InputNumber, List, Modal, Row, Space, Spin, Tabs } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import moment from 'moment';

import { useSearchRootProjectQuery, SearchRootProjectDocument, RootProjectAttributesFragment, useCreateRootProjectMutation, useUpdateRootProjectMutation, useDeleteRootProjectMutation, _UpdateRootProjectInput } from '../__generate/graphql-frontend'
import { SubProjectTree } from './SubProjectTree'
import { RiskWarmMap } from './RiskWarmMap'

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
                        <Space wrap>
                            <Button
                                onClick={() => {
                                    setInputParameters(mapToInput(elem))
                                    setShowForm(ShowForm.Update)
                                }}
                            ><EditOutlined /></Button>
                            <Button
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
                            ><DeleteOutlined /></Button>
                            {"Максимальная стоимость: " + elem.maxCost}
                        </Space><p />
                        <SubProjectTree rootProjectId={elem.id} />
                        {/* <Row>
                            <Col span={4}></Col>
                            <Col span={16} style={{ margin: '5px' }}> */}
                                <RiskWarmMap rootProjectId={elem.id} maxCost={elem.maxCost ?? 0} />
                            {/* </Col>
                            <Col span={4}></Col>
                        </Row> */}
                    </TabPane>
                )
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            <Row>
                <Col span={10}></Col>
                <Col span={4}>
                    <Button type='primary' style={{ margin: "2px" }}
                        onClick={() => {
                            setInputParameters({})
                            setShowForm(ShowForm.Create)
                        }}>
                        Добавить корневой проект
                    </Button>
                </Col>
                <Col span={10}></Col>
            </Row>

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
                        <Input placeholder="Наименование"
                            value={inputParameters.name!}
                            onChange={e => changeInputParameters({ name: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder="Дата открытия"
                            //defaultValue={moment()}
                            value={inputParameters.dateOpen ? moment(inputParameters.dateOpen, "YYYY-MM-DD") : null}
                            //value={inputParameters.dateOpen}
                            onChange={moment => changeInputParameters({ dateOpen: moment?.format("YYYY-MM-DD") })}
                            format="YYYY-MM-DD"

                        />
                    </Form.Item>
                    <Form.Item extra={"Максимальная стоимость"}>
                        <InputNumber<string>
                            value={inputParameters.maxCost!}
                            onChange={value => changeInputParameters({ maxCost: value })}
                            //       defaultValue="0"
                            min="0"
                            max="999999999999"
                            step="100000"
                            stringMode
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

