import React, { FC, useState } from 'react'
import { Card, Col, Row, Select, Spin } from 'antd'
import colorGradient from 'javascript-color-gradient';

import { useSearchRiskQuery, SearchRiskDocument, RiskAttributesFragment } from '../__generate/graphql-frontend'



const { Option } = Select

const columns = [
    {
        title: "Descr",
        key: 'descr',
        dataIndex: 'descr',
    },
    {
        title: "Cost",
        key: 'cost',
        dataIndex: 'cost',
    },
    {
        title: "Probability",
        key: 'probability',
        dataIndex: 'probability',
    },
    {
        title: "Action",
        key: 'action',
        dataIndex: 'action',
    },
]


interface RiskWarmMapProps {
    rootProjectId: string,
    maxCost: number,

}


export const RiskWarmMap: FC<RiskWarmMapProps> = ({ rootProjectId, maxCost }) => {


    const { data, loading, error } = useSearchRiskQuery({
        variables: {
            cond: "it.aggregateRoot.$id == '" + rootProjectId + "'"
        }
    })
    const riskList = data?.searchRisk.elems

    const mapToWarmMapView = (list: typeof riskList, bucketsCount: number) => {



        // @ts-ignore
        const gradientArray = colorGradient.setGradient("#39FF33", "#FF3333").setMidpoint(9).getArray();

        //const bucketsCount = 5
        const riskMap = new Map<string, RiskAttributesFragment[]>()
        const costBucketSize = maxCost / bucketsCount
        const probabilityBucketSize = 1 / bucketsCount

        if (list?.length == 0){
            return <Card>Нет рисков в проекте</Card>
        }

        list?.forEach(x => {
            const key =
                Math.min(Math.floor((x.cost ?? 0) / costBucketSize), bucketsCount).toString() +
                ":" +
                Math.min(Math.floor((x.probability ?? 0) / probabilityBucketSize), bucketsCount-1).toString()

            console.log("key:" + key)

            if (riskMap.has(key)) {
                riskMap.get(key)!.push(x)
                riskMap.set(key, riskMap.get(key)!)
            } else {
                riskMap.set(key, [x])
            }

        })

        console.log(riskMap)

        const toKey = (x: number, y: number) => {
            return (4 - x).toString() + ":" + y.toString()
        }

        return (
            <>
                {
                    Array.from(Array(bucketsCount).keys()).map(x => {
                        return (
                            <Row key={x}>
                                {
                                    Array.from(Array(bucketsCount).keys()).map(y => {
                                        return (
                                            <Col key={y} span={4}>
                                                <Card style={{ backgroundColor: gradientArray[(4 - x) + y] }}>
                                                    <ul>
                                                        {riskMap.has(toKey(x, y)) ?
                                                            riskMap.get(toKey(x, y))?.map(x => {
                                                                return (
                                                                    <li>{x.descr}</li>
                                                                )
                                                            })
                                                            :
                                                            null}
                                                    </ul>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })

                }
            </>
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            {mapToWarmMapView(riskList,5)}
        </>
    )




}

