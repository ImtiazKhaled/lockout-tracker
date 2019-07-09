import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import Lockouts from '../lockout/lockouts';
import Returns from '../lockout/returns';


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
                    {this.props.email}
                </Row>
                <Row>
                    {
                        this.props.lockouts.length === 0 ?
                            <div>no lockouts yet</div>
                            :
                            <div>
                                <Col span={16}>
                                    <Lockouts data={this.props.lockouts} />
                                </Col>
                                <Col span={8}>
                                    {
                                        this.props.returns.length === this.props.lockouts.length ?
                                            <Returns data={this.props.returns} /> :
                                            <Button type='secondary'>
                                                Checkin Card
                                            </Button>
                                    }
                                </Col>
                            </div>
                    }
                </Row>
                <Row>
                    <Button type='primary'>
                        Checkout Card
                    </Button>
                </Row>
            </Card>
        );
    }
}

export default Resident;