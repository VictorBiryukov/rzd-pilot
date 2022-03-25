import React, { FC } from 'react'

import { Spin, Table } from 'antd'

import { useGetStatesRiskQuery } from '../__generate/graphql-frontend'

const columns = [
    {
        title: "Время изменения",
        key: 'changeTime',
        dataIndex: 'changeTime',
    },
    {
        title: "Вероятность",
        key: 'probability',
        dataIndex: 'probability',
    },
    {
        title: "Стоимость",
        key: 'cost',
        dataIndex: 'cost',
    },
]

interface RiskHistoryListProps {
    riskId: string
}


export const RiskHistoryList: FC<RiskHistoryListProps> = ({ riskId }) => {

    const { data, loading, error } = useGetStatesRiskQuery({
        variables: { riskId }
    })
    const riskHistoryList = data?.getStatesRisk.elems

    const mapToView = (list: typeof riskHistoryList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.sysHistoryTime ?? "",
                    changeTime: new Date(elem.sysHistoryTime).toLocaleString(),
                    cost: elem.cost,
                    probability: elem.probability,

                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
            <Table
                columns={columns}
                dataSource={mapToView(riskHistoryList)}
            />
    )




}

