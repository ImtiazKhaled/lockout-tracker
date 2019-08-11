import React from 'react';
import { Typography, Card, Col, Row, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { CreateCheckin } from './checkinForm';
import { AddEvent } from '../../redux/eventActions';
const { Text, Title } = Typography;

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibleOne: false,
        }
    }

    openFormOne = e => {
        this.setState({
            modalVisibleOne: true,
        });
    }

    addEvent = event => {
        // this.props.addEvent(event);
        this.setState({
            modalVisibleOne: false,
        });
    }

    onCancel = e => {
        this.setState({
            modalVisibleOne: false,
        });
    }


    checkIn = resident => {
        let event = {
            ...this.props.event,
            attending_residents: [
                ...this.props.event.attending_residents,
                resident
            ]
        }
        this.props.change(resident);
    }

    render() {
        const { event } = this.props
        return (
            <Card>
                <Row>
                    <Col span={16}>
                        <Title>
                            {event.title}
                        </Title>
                        <Text>
                            {event.attending_residents}
                        </Text>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Text>
                                RA {event.ra_name}
                            </Text>
                        </Row>
                        <Row>
                            <Text>
                                {event.date}
                            </Text>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {event.attending_residents.length}
                </Row>
                <Modal
                    title='Checkin Card'
                    centered
                    visible={this.state.modalVisibleOne}
                    onCancel={this.onCancel}
                    footer={null}>
                    <CreateCheckin onCancel={this.onCancel} onSubmit={this.checkIn} />
                </Modal>
                <Button type='primary' onClick={this.openFormOne}>
                    Check-in
                </Button>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (event) => { dispatch(AddEvent(event)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);