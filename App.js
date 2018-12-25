import React from 'react'
import { Animated, StyleSheet, View, Switch } from 'react-native'
import { Constants } from 'expo'
import Icon from '@expo/vector-icons/Ionicons'

import Header from './components/Header'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
    enabled: false
  }

  toggleSwitch = newValue => {
    this.setState({ enabled: newValue })
    const toValue = newValue ? 1 : 0

    Animated.timing(this.state.animation, {
      toValue,
      duration: 500
    }).start()
  }

  render() {
    const scaleBackgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 20]
    })
    const opacityBackgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.1, 0.11, 1],
      outputRange: [0, 0, 1, 1]
    })
    const headerColorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.79, 0.8, 1],
      outputRange: ['#808080', '#808080', '#007FFF', '#007FFF']
    })

    const backgroundStyle = {
      opacity: opacityBackgroundInterpolate,
      transform: [
        {
          scale: scaleBackgroundInterpolate
        }
      ]
    }
    const titleColorStyle = {
      color: headerColorInterpolate
    }

    return (
      <View style={styles.container}>
        <Header
          colorStyle={titleColorStyle}
          title="Allow Discovery"
          subtitle="Turn on to allow your phone number to be displayed in your friends' Contacts"
        />
        <View style={{ marginTop: 30 }} />
        <View style={styles.row}>
          <Animated.View style={[styles.roundBackground, backgroundStyle]} />
          <AnimatedIcon name="md-contacts" size={50} style={titleColorStyle} />
          <Switch
            value={this.state.enabled}
            onValueChange={this.toggleSwitch}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: Constants.statusBarHeight,
    overflow: 'hidden'
  },
  row: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  roundBackground: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 153, 0, 0.5)',
    bottom: 20,
    right: 20
  }
})
