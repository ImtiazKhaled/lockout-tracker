import React from 'react';
import { Typography, Layout } from 'antd';
import Resident from './resident'
import { CreateResident } from './residentForm';
import { residents } from '../fakedata/residents';
const { Title } = Typography;
const { Header, Content } = Layout;


class Residents extends React.Component {
    state = {
        residentsState: []
    }

    componentDidMount = e => {
        this.setState({
            residentsState: residents
        })
    }

    addResident = e => {
        const resident = {
            id: this.state.residentsState.length + 1,
            name: e.name,
            roomNumber: e.roomNumber,
            lockouts: []
        }
        this.setState({
            residentsState: [...this.state.residentsState, resident]
        })
        // console.log('made it, data is', e);
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
                            <Resident key={resident.id} name={resident.name} roomNumber={resident.roomNumber} lockouts={resident.lockouts} />
                        )
                    }
                    <CreateResident onSubmit={this.addResident} />
                </Content>
            </Layout>
        );
    }
}

export default Residents;