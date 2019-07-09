import React from 'react';
import Lockouts from '../lockout/lockouts';
import Returns from '../lockout/returns';
import { CreateLockout } from '../lockout/lockoutForm';
import { CreateReturn } from '../lockout/returnForm';
import { Card, Col, Row, Button, Modal } from 'antd';


class Resident extends React.Component {
    state = {
        lockoutState: [],
        returnState: [],
        modalVisibleOne: false,
        modalVisibleTwo: false,
    }

    componentDidMount = e => {
        this.setState({
            lockoutState: this.props.lockouts,
            returnState: this.props.returns
        })
    }

    openFormOne = e => {
        this.setState({
            modalVisibleOne: true,
        });
    }

    openFormTwo = e => {
        this.setState({
            modalVisibleTwo: true,
        });
    }

    onCancel = e => {
        this.setState({
            modalVisibleOne: false,
            modalVisibleTwo: false,
        });
    }

    addLockout = e => {
        const lockout = {
            key: this.state.lockoutState.length + 1,
            checkoutType: 'MAVX',
            checkOutItem: 'CARD',
            itemCode: '9950',
            checkOutDate: '5/12/2019',
            checkoutTime: '9:00PM',
            checkedOutBy: 'imtiaz',
        }
        this.setState({
            lockoutState: [...this.state.lockoutState, lockout],
            modalVisibleOne: false,
        })
    }

    addReturn = e => {
        const returnItem = {
            key: this.state.returnState.length + 1,
            checkInDate: '5/12/2019',
            checkInTime: '10:00PM',
            checkedInBy: 'imtiaz',
        }
        this.setState({
            returnState: [...this.state.returnState, returnItem],
            modalVisibleTwo: false,
        })
    }

    render() {
        return (
            <Col span={12}>
                <Card>
                    <Row>
                        <Col span={6}>
                            {this.props.name}
                        </Col>
                        <Col span={12}>
                            {this.props.email}
                        </Col>
                        <Col span={6}>
                            {this.props.roomNumber}
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.lockoutState.length === 0 ?
                                <div>no lockouts yet</div>
                                :
                                <div>
                                    <Col span={16}>
                                        <Lockouts data={this.state.lockoutState} />
                                    </Col>
                                    <Col span={8}>
                                        {
                                            this.state.returnState.length === this.state.lockoutState.length ?
                                                <Returns data={this.state.returnState} /> :
                                                this.state.returnState.length === 0 ?
                                                    <div>
                                                        <Button onClick={this.openFormTwo} type='secondary'>
                                                            Checkin Card
                                                    </Button>
                                                        <Modal
                                                            title='Checkin Card'
                                                            centered
                                                            visible={this.state.modalVisibleTwo}
                                                            onCancel={this.onCancel}
                                                            footer={null}>
                                                            <CreateLockout onSubmit={this.addReturn} onCancel={this.onCancel} />
                                                        </Modal>
                                                    </div>
                                                    :
                                                    <div>
                                                        <Returns data={this.state.returnState} />
                                                        <Button onClick={this.openFormTwo} type='secondary'>
                                                            Checkin Card
                                                        </Button>
                                                        <Modal
                                                            title='Checkin Card'
                                                            centered
                                                            visible={this.state.modalVisibleTwo}
                                                            onCancel={this.onCancel}
                                                            footer={null}>
                                                            <CreateLockout onSubmit={this.addReturn} onCancel={this.onCancel} />
                                                        </Modal>
                                                    </div>
                                        }
                                    </Col>
                                </div>
                        }
                    </Row>
                    <Row>
                        <Button onClick={this.openFormOne} type='primary'>
                            Checkout Card
                    </Button>
                        <Modal
                            title='Checkout Card'
                            centered
                            visible={this.state.modalVisibleOne}
                            onCancel={this.onCancel}
                            footer={null}>
                            <CreateReturn onSubmit={this.addLockout} onCancel={this.onCancel} />
                        </Modal>
                    </Row>
                </Card>
            </Col>
        );
    }
}

export default Resident;