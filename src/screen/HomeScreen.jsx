import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import Header from '../components/Header';
import { fontsFamilies } from '../constants/fonts';
import SongCard from '../components/SongCard';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import { songsWithCategory } from '../../data/songsWithCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
      data={songsWithCategory}
      renderItem={SongCardWithCategory}
      contentContainerStyle={{
        paddingBottom: 400,
      }}
      />
      <FloatingPlayer/>
    </View>  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.background,
    flex: 1,
  },
});