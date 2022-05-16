import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const distance = 25 //distance in km
const distanceArray = []
const regularArray = []
const discountedArray = []
for(let i = 1; i <= distance; i++) {
    distanceArray.push(i)
    if (i <= 4) {
        regularArray.push(9)
        discountedArray.push(6.25)
    } 
}
for(let j = 1.5; j < distanceArray.length + 7; j += 1.5) {
        regularArray.push(9 + j)
}
for(let j = 1.25; j < distanceArray.length + 1; j += 1.25) {
        discountedArray.push(6.25 + j)
}

const content = {
    tableHead: ['Distance (km)', 'Regular', 'Discounted'],
    tableData: [distanceArray, regularArray, discountedArray]
}

class FareList extends Component {
    render() {
        return (
            <View style={styles.tableContainer}>
                <Table borderStyle={{borderWidth: 2}}>
                    <Row data={content.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Cols data={content.tableData} style={styles.column} textStyle={styles.text}/>
                </Table>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tableContainer: { flex: 1, padding: 16, paddingTop: 100 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    column: { width: 28 },
    text: { textAlign: 'center' }
})

export default FareList