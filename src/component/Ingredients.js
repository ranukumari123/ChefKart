import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Ingredients = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
});

export default Ingredients;