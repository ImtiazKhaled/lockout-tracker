import React from 'react';
import { Layout } from 'antd';
import { styles } from '../styles.js/styles';
import Events from './events';
const { Content, Footer } = Layout;


export default class EventsContainer extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    style={{
                        minHeight: '30vh',
                        background: 'linear-gradient(to left, #3BB78F, #0BAB64)',
                    }}
                />
                <Content>
                    <Events responsive={styles} />
                </Content>
                <Footer style={styles.Footer}>Imtiaz Mujtaba Khaled ©2019</Footer>

            </Layout>
        );
    }
}