import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Checkin Date',
        dataIndex: 'checkInDate',
        key: 'checkInDate',
    },
    {
        title: 'Checkin Time',
        dataIndex: 'checkInTime',
        key: 'checkInTime',
    },
    {
        title: 'Checkedin By',
        dataIndex: 'checkedInBy',
        key: 'checkedInBy',
    },
    
];

class Returns extends React.Component {
    render() {
        return (
            <Table pagination={false} columns={columns} dataSource={this.props.data} />
        );
    }
}

export default Returns;