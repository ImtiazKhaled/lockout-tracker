import React from 'react';
import { Typography, Card, Button } from 'antd';
import { connect } from 'react-redux';
import { AddEvent } from '../../redux/eventActions';
import Event from './event';
const { Text } = Typography;

const logToAdd = {
    "id": 11,
    "happyMemory": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
    "date": "31.08.2017",
    "caloriesLost": 5613,
    "caloriesGained": 4715
};

class Events extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
                {
                    logs.map(log =>
                        <Event log={log} />
                    )
                }
                <Button title='Add Event' onClick={() => this.props.addEvent(logToAdd)}>
                    Add Event
                    </Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (log) => { dispatch(AddEvent(log)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);