import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';

import jeeps from '../JeepsList';
import styles from './styles';

class JeepLocation extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (<View>
           <Dropdown
            label = 'Location'
            data = {{}}
            onChangeText={{}}
            />
          </View>
    )
  }
}

export default JeepLocation