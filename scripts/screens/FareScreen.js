import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';
import fare from '../Fare';

const content = {
    tableHead: ['Distance (km)', 'Regular', 'Discounted'],
    tableData: fare
}

class FareList extends Component {
    render() {
        return (
          <Card style={styles.card}>
           <Card.Title title="Jeepney Fare Guide" />
           <Card.Content>
              <ScrollView>
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

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
    head: { height: 50, backgroundColor: 'skyblue'},
    text: { margin: 5, textAlign: 'center', fontWeight: '500'}
})

export default FareList