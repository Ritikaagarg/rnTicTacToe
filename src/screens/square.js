import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Square = (props) => {
  return (
    <TouchableOpacity
      style={styles.squareContainer}
      onPress={props.onPressEvent}
    >
      <Text style={styles.titleText}>{props.value}</Text>
    </TouchableOpacity>
  )
}

export default Square;