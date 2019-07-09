import React from 'react';
import { Typography, Layout, Button, Modal } from 'antd';
import Resident from './resident'
import { CreateResident } from './residentForm';
import { residents } from '../fakedata/residents';
const { Title } = Typography;
const { Header, Content } = Layout;


class Residents extends React.Component {
    state = {
        residentsState: [],
        modalVisible: false,
    }
    
    componentDidMount = e => {
        this.setState({
            residentsState: residents
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
        const resident = {
            id: this.state.residentsState.length + 1,
            name: e.name,
            roomNumber: e.roomNumber,
            email: e.email,
            lockouts: []
        }
        this.setState({
            residentsState: [...this.state.residentsState, resident],
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
                    {
                        this.state.residentsState.map(resident =>
                            <Resident 
                              key={resident.id} 
                              name={resident.name} 
                              roomNumber={resident.roomNumber} 
                              email={resident.email}
                              lockouts={resident.lockouts} />
                        )
                    }
                    <Button onClick={this.openForm}>
                        Add Resident
                    </Button>
                    <Modal
                        title='Add New Resident'
                        centered
                        visible={this.state.modalVisible}
                        onCancel={this.onCancel}
                        footer={null}
                    >
                        <CreateResident onSubmit={this.addResident} onCancel={this.onCancel}/>
                    </Modal>
                </Content>
            </Layout>
        );
    }
}

export default Residents;