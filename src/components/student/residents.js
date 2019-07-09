import React from 'react';
import { Typography, Layout, Button } from 'antd';
import Resident from './resident'
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
        // console.log(this.state.residentsState);
        const resident = {
            id: this.state.residentsState.length + 1,
            name: 'parjal sharma',
            roomNumber: '235B',
            lockouts: []
        }
        this.setState({
            residentsState: [...this.state.residentsState, resident]
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
                            <Resident key={resident.id} name={resident.name} roomNumber={resident.roomNumber} lockouts={resident.lockouts} />
                        )
                    }
                    <Button type='primary' onClick={this.addResident}>
                        add resident
                    </Button>
                </Content>
            </Layout>
        );
    }
}

export default Residents;