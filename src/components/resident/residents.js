import React from 'react';
import { Typography, Layout, Button, Modal, Row } from 'antd';
import Resident from './resident'
import { CreateResident } from './residentForm';
import * as firebase from 'firebase';
import { app } from '../config';
const { Title } = Typography;
const { Header, Content } = Layout;


class Residents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            residentsState: [],
            modalVisible: false,
        }

        this.addResident = this.addResident.bind(this);
    }

    componentDidMount = e => {
        this.db = firebase.database();
        this.listenForChange();
    }

    listenForChange = e => {
        this.db.ref('residents').on('child_added', snapshot => {
            let resident = {
                key: snapshot.key,
                name: snapshot.val().name,
                roomNumber: snapshot.val().roomNumber,
                email: snapshot.val().email,
                lockouts: snapshot.val().lockouts,
                returns: snapshot.val().returns,
            }

            let residents = this.state.residentsState;
            residents.push(resident);

            this.setState({
                residentsState: residents
            });
        })
    }

    openForm = e => {
        this.setState({
            modalVisible: true,
        });
    }

    onCancel = e => {
        this.setState({
            modalVisible: false,
        });
    }

    addResident = e => {
        firebase.database().ref('residents').push({
            name: e.name,
            roomNumber: e.roomNumber,
            email: e.email,
            lockouts: [],
            returns: [],
        })
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return (
            <Layout>
                <Header>
                    <Title style={{ color: 'white' }}>
                        Residents
                    </Title>
                </Header>
                <Content>
                    <Row>
                        {
                            this.state.residentsState.map(resident =>
                                <Resident key={resident.key} data={resident} id={resident.key} />
                            )
                        }
                    </Row>
                    <Button type='primary' onClick={this.openForm}>
                        Add Resident
                    </Button>
                    <Modal
                        title='Add New Resident'
                        centered
                        visible={this.state.modalVisible}
                        onCancel={this.onCancel}
                        footer={null}>
                        <CreateResident onSubmit={this.addResident} onCancel={this.onCancel} />
                    </Modal>
                </Content>
            </Layout>
        );
    }
}

export default Residents;