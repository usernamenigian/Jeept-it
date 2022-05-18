import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

class JeepScreen extends Component {
    render() {
        return (
            <Card style={styles.card}>
                <ScrollView style={styles.view}>





                </ScrollView>
            </Card>
        )
    }

}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginTop: '5%',
    marginBotttom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  view: {height: '90%'}
})

export default JeepScreen