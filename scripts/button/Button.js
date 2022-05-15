import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native'
import styles from './ButtonStyles';

class Button extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Pressable
                 style={[styles.button, this.props.backgroundColor]}
                 onPress={this.props.onPress}
                 >
                     <Text style={[styles.text, this.props.textColor]}>{this.props.content}</Text>
                 </Pressable>
            </View>
        )
    }
}

export default Button