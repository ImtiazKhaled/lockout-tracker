import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Checkout Type',
        dataIndex: 'checkoutType',
        key: 'checkoutType',
    },
    {
        title: 'Checked Out',
        dataIndex: 'checkOutItem',
        key: 'checkOutItem',
    },
    {
        title: 'Code',
        dataIndex: 'itemCode',
        key: 'itemCode',
    },
    {
        title: 'Checkout Date',
        dataIndex: 'checkOutDate',
        key: 'checkOutDate',
    },
    {
        title: 'Checkout Time',
        dataIndex: 'checkoutTime',
        key: 'checkoutTime',
    },
    {
        title: 'Checkedout By',
        dataIndex: 'checkedOutBy',
        key: 'checkedOutBy',
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