import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function app() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    <View style={styles.container}>
        <Text style={styles.title}>Hello GoStacks</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
      color: '#FFF',
      fontSize: 32  ,
      fontWeight: 'bold'
    },
});