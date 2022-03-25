import React, { FC, useState } from 'react'

import { Form, Input, Modal, Row, Col, Spin, Tag, Tree } from 'antd'
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'

import { useSearchSubProjectTreeQuery, SubProjectTreeAttributesFragment, useCreateSubProjectMutation, useUpdateSubProjectMutation, useDeleteSubProjectMutation, _CreateSubProjectInput } from '../__generate/graphql-frontend'
import { DataNode } from 'antd/lib/tree'
import { RiskList } from './RiskList'



enum ShowForm {
    None,
    Create,
    Update
}

interface SubProjectTreeProps {
    rootProjectId: string
}

type InputParameters = Partial<_CreateSubProjectInput>

function mapToInput(data: SubProjectTreeAttributesFragment | undefined): InputParameters {
    const result = { ...data }
    delete result.__typename
    delete result.childs
    return result
}

export const SubProjectTree: FC<SubProjectTreeProps> = ({ rootProjectId }) => {

    const [showForm, setShowForm] = useState<ShowForm>(ShowForm.None)
    const [inputParameters, setInputParameters] = useState<InputParameters>({})

    const [selectedSubProjectId, setSelectedSubProjectId] = useState<string>()


    const { data, loading, error } = useSearchSubProjectTreeQuery({
        variables: {
            cond: "it.rootProject.$id == '" + rootProjectId + "' && it.parent == null"
        }
    })
    const subProjectTree = data?.searchSubProject.elems

    const [createSubProjectMutation] = useCreateSubProjectMutation()
    const [updateSubProjectMutation] = useUpdateSubProjectMutation()
    const [deleteSubProjectMutation] = useDeleteSubProjectMutation()

    const changeInputParameters = (params: InputParameters) => {
        var input = { ...inputParameters }
        setInputParameters(Object.assign(input, params))
    }

    const mapToTree = (list: typeof subProjectTree): DataNode[] | undefined => {

        const treeNode = (elem: SubProjectTreeAttributesFragment): DataNode => {
            return ({
                key: elem.id ?? "",
                children: elem.childs?.elems?.map(x => { return treeNode(x as SubProjectTreeAttributesFragment) }),
                title: (
                    <>
                        <Row>
                            <Col>
                                <Tag color={'green'}
                                    onClick={() => setSelectedSubProjectId(elem.id)}
                                >
                                    {elem.name}
                                </Tag>
                            </Col>
                            <Col>
                                <Tag>
                                    <EditOutlined
                                        onClick={() => {
                                            setInputParameters(Object.assign(mapToInput(elem)))
                                            setShowForm(ShowForm.Update)
                                        }} />
                                </Tag>
                            </Col>
                            <Col>
                                <Tag>
                                    <DeleteOutlined
                                        onClick={() => {
                                            deleteSubProjectMutation({
                                                variables:{ id: elem.id},
                                                refetchQueries:["searchSubProjectTree"]
                                            })
                                        }} />
                                </Tag>
                            </Col>
                            <Col >
                                <Tag>
                                    <PlusOutlined
                                        onClick={x => {
                                            setInputParameters({ parent: elem.id, rootProject: rootProjectId })
                                            setShowForm(ShowForm.Create)
                                        }} />
                                </Tag>
                            </Col>
                        </Row>
                    </>
                )
            }
            )
        }

        return (
            list?.map(elem => {
                return treeNode(elem)
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            <Tag style={{ margin: "2px" }}
                onClick={() => {
                    setInputParameters({ rootProject: rootProjectId })
                    setShowForm(ShowForm.Create)
                }}>
                <PlusOutlined />
            </Tag>
            <Modal visible={showForm != ShowForm.None}
                onCancel={() => setShowForm(ShowForm.None)}
                onOk={() => {
                    if (showForm == ShowForm.Create) {
                        createSubProjectMutation({
                            variables: {
                                input: Object.assign(inputParameters)
                            },
                            refetchQueries: ["searchSubProjectTree"]
                        })
                    } else if (showForm == ShowForm.Update) {
                        updateSubProjectMutation({ variables: { input: Object.assign(inputParameters) } })
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
                </Form>
            </Modal>
            <Row>
                <Col span={12} >
                    <Tree
                        treeData={mapToTree(subProjectTree)}
                    ></Tree>
                </Col>
                <Col span={10}>
                    <RiskList subProjectId={selectedSubProjectId!} />
                </Col>
            </Row>
        </>
    )




}

