import React from 'react';
import { Typography, Card, Col, Row, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { CreateCheckin } from './checkinForm';
import { AddCheckin } from '../../redux/eventActions';
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

    onCancel = e => {
        this.setState({
            modalVisibleOne: false,
        });
    }


    checkIn = resident => {
        let checkIn = {
            ...resident,
            eventId: this.props.event.id,
        }
        this.props.addCheckin(checkIn);
    }

    render() {
        const { event } = this.props
        return (
            // <div style={this.props.responsive.Resident}>
                <div> 
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
            </div>
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
        addCheckin: (checkIn) => { dispatch(AddCheckin(checkIn)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);