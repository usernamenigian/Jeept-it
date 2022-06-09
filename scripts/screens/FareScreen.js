import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';

import fare from '../Fare';
import styles from './styles';

const content = {
    tableHead: ['Distance (km)', 'Regular', 'Discounted'],
    tableData: fare
}

class FareScreen extends Component {
    render() {
        return (
          <Card style={styles.card}>
           <Card.Title title="Jeepney Fare Guide" />
           <Card.Content>
              <ScrollView style={styles.view}>
                <Table borderStyle={{borderWidth: 2, borderColor: 'orange'}}>
                    <Row data={content.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={content.tableData} textStyle={styles.text}/>
                </Table>
              </ScrollView>
           </Card.Content>
          </Card>
        )
    }
}

export default FareScreen