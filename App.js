import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Messenger from './Messenger';
import styles from './styles';

const App = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Messenger />
    </ScrollView>
  );
};

export default App;