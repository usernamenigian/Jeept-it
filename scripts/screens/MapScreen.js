import React, { Component } from 'react';

class MapScreen extends Component {
  constructor(props) {
    super(props)
  }

  render () {
        return (
          this.props.route.params.jeepMap
        )
    }
}

export default MapScreen