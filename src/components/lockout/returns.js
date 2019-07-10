import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Checkin Time',
        dataIndex: 'checkinTime',
        key: 'checkinTime',
    },
    {
        title: 'Checkin By',
        dataIndex: 'checkinBy',
        key: 'checkinBy',
    },
    
];

export class Returns extends React.Component {
    render() {
        return (
            <Table pagination={false} columns={columns} dataSource={this.props.data}/>
        );
    }
}

export class ReturnsS extends React.Component {
    render() {
        return (
            <Table pagination={false} columns={columns} dataSource={this.props.data} scroll={{ x: 100 }}/>
        );
    }
}
