import React from 'react';
import { Typography, Card, Button } from 'antd';
import { connect } from 'react-redux';
import { AddEvent } from '../../redux/eventActions';
const { Text, Title } = Typography;

const logToAdd = {
    "id": 11,
    "happyMemory": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
    "date": "31.08.2017",
    "caloriesLost": 5613,
    "caloriesGained": 4715
};

class Event extends React.Component {
    render() {
        const { log } = this.props
        return (
            <Card>
                <Title>
                    Date: {log.data}
                </Title>
                <Text>
                    Calories Lost: {log.caloriesLost}
                </Text>
                <Text>
                    Calories Gained: {log.caloriesGained}
                </Text>
                {/* <Text>
                    Net Calories: {netCalories}
                </Text> */}
                <Text>
                    A Happy Memory From Today: {log.happyMemory}
                </Text>
                {/* <Button title='Edit Log' onPress={() => this.props.editLog(log)} /> */}
            </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);