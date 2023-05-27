import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'


const PopularDishes = ({ item }) => {
    // console.log(item);

    if (!item) {
        return null;
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };


export default PopularDishes

const styles = StyleSheet.create({
    container: {
      marginRight: 12,
      marginTop: '5%',
    },
    outerCircle: {
      height: 80,
      width: 80,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: 'orange',
    },
    innerCircle: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      height: 70,
      width: 70,
      margin: 4,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 40,
      borderWidth: 1,
      opacity: 0.7,
    },
    text: {
      textAlign: 'center',
      position: 'absolute',
      zIndex: 1,
      color: '#fff',
      fontWeight: '500',
      margin: '3%',
      alignSelf: 'center',
    },
  });