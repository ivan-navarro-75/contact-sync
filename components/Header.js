import React from 'react'
import { Animated, StyleSheet, View, Text } from 'react-native'

const Header = ({ title, subtitle, colorStyle }) => (
  <View style={styles.container}>
    <Animated.Text style={[styles.titleText, colorStyle]}>
      {title}
    </Animated.Text>
    <View style={{ marginTop: 16 }} />
    <Text style={styles.subtitleText}>{subtitle}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#808080'
  }
})

export default Header
