import React from 'react';
import { Card, Col, Row } from 'antd';


class Resident extends React.Component {
    render() {
        return (
            <Card>
                <Row>
                    <Col span={12}>
                        {this.props.name}
                    </Col>
                    <Col span={12}>
                        {this.props.roomNumber}
                    </Col>
                </Row>
                <Row>
                    {this.props.lockouts}
                </Row>
            </Card>
        );
    }
}

export default Resident;