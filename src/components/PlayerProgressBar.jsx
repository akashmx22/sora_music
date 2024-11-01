import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontsFamilies } from '../constants/fonts';
import { fontSize, spacing } from '../constants/dimensions';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import TrackPlayer, { useProgress, useActiveTrack } from 'react-native-track-player';
import formatSecondsToMinute from "../utils/index";

const PlayerProgressBar = () => {

  const { position, duration } = useProgress();
  const progress = useSharedValue(0.7);
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    const isSliding = useSharedValue(false);

    if(!isSliding.value){
      progress.value = duration > 0 ? position / duration : 0;
    }

    const trackRemainingTime = formatSecondsToMinute(duration - position);


  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{formatSecondsToMinute(position)}</Text>
        <Text style={styles.timeText}>{"-"}{trackRemainingTime}</Text>
      </View>
      <Slider
    style={styles.slidercontainer}
    containerStyle={{
      height:7,
      borderRadius: spacing.sm,
    }}
    theme={{
      maximumTrackTintColor: colors.maximumTintColor,
      minimumTrackTintColor: colors.minimumTintColor,
    }}
    progress={progress}
    minimumValue={min}
    maximumValue={max}
    thumbWidth={18}
    onSlidingStart={()=>(isSliding.value = true)}
    onValueChange={async (value) => {
      await TrackPlayer.seekTo(value * duration);
    }}
    onSlidingComplete={async (value)=> {
      if(!isSliding.value){
        return;
      }
      isSliding.value = false;
      await TrackPlayer.seekTo(value * duration);
    }}
  />
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: spacing.xl,
    },
    timeText:{
        color: colors.textPrimary,
        fontFamily:  fontsFamilies.regular,
        fontSize: fontSize.sm,
        opacity: 0.75,
    },
    slidercontainer:{
      marginVertical:spacing.lg,
    },
});