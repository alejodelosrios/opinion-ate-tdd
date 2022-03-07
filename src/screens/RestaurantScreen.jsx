import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RestaurantList} from '../components/RestaurantList';

export const RestaurantScreen = () => {
  return (
    <View>
      <Text>RestaurantScreen</Text>
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});
