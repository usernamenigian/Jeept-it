import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import fare from '../Fare';

const content = {
    tableHead: ['Distance (km)', 'Regular', 'Discounted'],
    tableData: fare
}

class FareList extends Component {
    render() {
        return (
            <View style={styles.tableContainer}>
              <ScrollView>
                <Table borderStyle={{borderWidth: 2, borderColor: 'orange'}}>
                    <Row data={content.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={content.tableData} textStyle={styles.text}/>
                </Table>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tableContainer: { flex: 1, padding: 16, paddingTop: 100, alignContent: 'center', marginBottom: '20%' },
    head: { height: 50, backgroundColor: 'skyblue'},
    text: { margin: 5, textAlign: 'center', fontWeight: '500'}
})

export default FareList