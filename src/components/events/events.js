import React from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { AddEvent } from '../../redux/eventActions';
import Event from './event';
import { CreateEvent } from './eventForm';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibleOne: false,
        }
    }

    addEvent = event => {
        this.props.addEvent(event);
        this.setState({
            modalVisibleOne: false,
        });
    }

    onCancel = e => {
        this.setState({
            modalVisibleOne: false,
        });
    }

    openFormOne = e => {
        this.setState({
            modalVisibleOne: true,
        });
    }

    render() {
        const { events } = this.props
        return (
            <div>
                {
                    events.map(event =>
                        <Event change={this.addEvent} key={event.id} event={event} />
                    )
                }
                <Button title='Add Event' onClick={this.openFormOne}>
                    Add Event
                </Button>
                <Modal
                    title='Checkin Card'
                    centered
                    visible={this.state.modalVisibleOne}
                    onCancel={this.onCancel}
                    footer={null}>
                    <CreateEvent responsive={this.props.responsive} onSubmit={this.addEvent} onCancel={this.onCancel} />
                </Modal>
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
        addEvent: (event) => { dispatch(AddEvent(event)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);