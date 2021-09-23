import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Board from './board';
import styles from './styles';

const Game = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.titleText, { marginTop: 100 }]}>Tic Tac Toe</Text>
      <Board />
    </SafeAreaView>
  )
}

export default Game;