import { FlatList ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import { spacing } from '../constants/dimensions';
import { fontSize} from '../constants/dimensions';
import { colors } from '../constants/colors';
import { fontsFamilies } from '../constants/fonts';
import TrackPlayer from 'react-native-track-player';


export const SongCardWithCategory = ({ item }) => {
  //create a function that will play song in queue
  const handlePlayTrack= async (selectedTrack) => {
    const songs = item.songs;
    //make a queue and play the song
    const trackIndex = songs.findIndex(
      (track)=> track.url === selectedTrack.url
    );
    //if track does not exist
    if (trackIndex === -1) {
      return;
    }
    const beforeTracks = songs.slice(0,trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);
    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };
  return (
    <View style={styles.container}>
      <Text style = {styles.headingText}>{item.title}</Text>
      <FlatList
      data={item.songs}
      renderItem={({ item })=><SongCard
      item={item}
      handlePlay={(selectedTrack)=>{
        handlePlayTrack(selectedTrack);
      }}/>}
      horizontal={true}
      ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}}/>}
      contentContainerStyle={{
      paddingHorizontal:spacing.lg,
      }}
      />
    </View>
  );
};

export default SongCardWithCategory;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headingText: {
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontsFamilies.bold,
        paddingVertical: spacing.lg,
        paddingHorizontal:spacing.lg,
      },
});