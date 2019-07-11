import React from 'react';
import { Layout, Button, Modal } from 'antd';
import Resident from './resident'
import { CreateResident } from './residentForm';
import * as firebase from 'firebase';
import { SearchResidents } from './searchForm';
import { styles } from '../styles.js/styles';
import { app } from '../config';
const { Content, Footer } = Layout;


class Residents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            residentsState: [],
            modalVisible: false,
            filteredResidents: [],
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
                numLockouts: snapshot.val().lockouts ? Object.keys(snapshot.val().lockouts).length : 0,
                numReturns: snapshot.val().returns ? Object.keys(snapshot.val().returns).length : 0
            }

            let residents = this.state.residentsState;
            residents.push(resident);

            this.setState({
                residentsState: residents,
                filteredResidents: residents,
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

    searchResident = e => {
        const search = {
            searchName: e.searchName ? e.searchName.toLowerCase() : '',
            searchRoomNumber: e.searchRoomNumber ? e.searchRoomNumber.toLowerCase() : '',
            searchCheckout: e.searchCheckout ? e.searchCheckout : 'both',
        }

        const filteredResidents = this.state.residentsState.filter(
            (resident) => {
                return resident.name.toLowerCase().indexOf(search.searchName) !== -1;
            }
        ).filter(
            (resident) => {
                return resident.roomNumber.toLowerCase().indexOf(search.searchRoomNumber) !== -1;
            }
        ).filter(
            (resident) => {
                if (search.searchCheckout === 'both')
                    return resident;
                else if (search.searchCheckout === 'checkedout') {
                    return (resident.numLockouts === resident.numReturns)
                        !== (search.searchCheckout === 'checkedout');
                } else {
                    return (resident.numLockouts !== resident.numReturns)
                        !== (search.searchCheckout !== 'checkedout');
                }

            }
        )

        this.setState({
            filteredResidents: filteredResidents
        })
    }

    render() {

        return (
            <Layout>
                <div style={styles.HeaderBar}>
                    <div style={styles.Title}>
                        KC Hall Lockouts
                        </div>
                    <SearchResidents responsive={styles} onSearch={this.searchResident} />
                </div>
                <Content>
                    <div style={styles.MainContainer}>
                        <div>
                            {
                                Object.keys(this.state.filteredResidents).length === 0 ?
                                    <div style={styles.NoResident} > No Resident Found </div>
                                    :
                                    this.state.filteredResidents.map(resident =>
                                        <Resident
                                            responsive={styles}
                                            key={resident.key}
                                            data={resident}
                                            id={resident.key} />
                                    )
                            }
                        </div>
                        <div style={styles.AddResidentButtonContainer}>
                            <Button style={styles.AddButton} type='primary' onClick={this.openForm}>
                                Add Resident
                        </Button>
                        </div>
                    </div>
                    <Modal
                        title='Add New Resident'
                        centered
                        visible={this.state.modalVisible}
                        onCancel={this.onCancel}
                        footer={null}>
                        <CreateResident responsive={styles} onSubmit={this.addResident} onCancel={this.onCancel} />
                    </Modal>
                </Content>
                <Footer style={styles.Footer}>Imtiaz Mujtaba Khaled ©2019</Footer>

            </Layout>
        );
    }
}

export default Residents;