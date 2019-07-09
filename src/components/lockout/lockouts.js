import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Type',
        dataIndex: 'checkoutType',
        key: 'checkoutType',
    },
    {
        title: 'Item',
        dataIndex: 'checkoutItem',
        key: 'checkoutItem',
    },
    {
        title: 'Checkout Time',
        dataIndex: 'checkoutTime',
        key: 'checkoutTime',
    },
    {
        title: 'Checkout By',
        dataIndex: 'checkoutBy',
        key: 'checkoutBy',
    },
    
];

class Lockouts extends React.Component {
    render() {
        return (
            <Table pagination={false} columns={columns} dataSource={this.props.data} />
        );
    }
}

export default Lockouts;