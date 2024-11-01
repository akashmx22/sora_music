import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontSize, iconSizes } from '../constants/dimensions';
import { fontsFamilies } from '../constants/fonts';
import { spacing } from '../constants/dimensions';
import { GotoPreviousButton } from './PlayerControl';
import { PlayPauseButton } from './PlayerControl';
import { GotoNextButton } from './PlayerControl';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import MovingText from './MovingText';
import { useNavigation } from '@react-navigation/native';
import { useProgress, useActiveTrack ,usePlaybackState} from 'react-native-track-player';
import TrackPlayer, { State } from 'react-native-track-player';
import { useState,useEffect} from 'react';


const FloatingPlayer = () => {
  const navigation = useNavigation();
  const { position, duration } = useProgress();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);
  const activeTrack = useActiveTrack();
  const playbackState = usePlaybackState()

  if (!activeTrack) {
    return null; // Don't render anything if there's no active track
  }

  if(!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  const handleOpenPlayerScreen = ()=> {
    navigation.navigate("PLAYER_SCREEN")
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ zIndex:1 }}>
        <Slider
         style={styles.progressBar}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          maximumTrackTintColor: colors.maximumTintColor,
          minimumTrackTintColor: colors.minimumTintColor,
        }}

        containerStyle = {{
          ///height: 10,
        }}

        thumbWidth={2} // Hide thumb for minimal look
        onSlidingStart={() => (isSliding.value = true)}
        onValueChange={async (value) => {
          await TrackPlayer.seekTo(value * duration);
        }}
        onSlidingComplete={async (value) => {
          if (!isSliding.value) return;
          isSliding.value = false;
          await TrackPlayer.seekTo(value * duration);
        }}
        />

      </View>
      <TouchableOpacity activeOpacity={0.85} onPress={handleOpenPlayerScreen} style={styles.container}>
      <Image source={{uri: activeTrack?.artwork}} style={styles.coverImage}/>
      <View style={styles.titleContainer}>
        < MovingText
        text={activeTrack?.title || 'No track playing'}
        animationThreshold={15}
        style={styles.title} />

      <Text style={styles.artist}>{activeTrack?.artist || 'Unknown artist'}</Text>
      </View>
      <View style={styles.PlayerControlContainer}>
        <GotoPreviousButton size={iconSizes.md}/>
        <PlayPauseButton size={iconSizes.md}/>
        <GotoNextButton size={iconSizes.md}/>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
  },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm,
        overflow: "hidden",
        marginLeft: spacing.sm,
        marginRight: spacing.lg,
    },
    title:{
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontFamily: fontsFamilies.medium,
    },
    artist:{
      color: colors.textSecondary,
    },
    PlayerControlContainer: {
      flexDirection: 'row',
      alignItems: "center",
      gap: 20,
      paddingRight: spacing.lg,
    },
});