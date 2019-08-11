import React from 'react';
import { Typography, Card, Col, Row, Button } from 'antd';
import { connect } from 'react-redux';
import { AddEvent } from '../../redux/eventActions';
const { Text, Title } = Typography;

class Event extends React.Component {
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
                <Button type='primary'>
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