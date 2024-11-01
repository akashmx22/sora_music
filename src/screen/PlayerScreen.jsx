import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { fontsFamilies } from '../constants/fonts';
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from '../components/PlayerControl';
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';


const PlayerScreen = () => {

  const navigation = useNavigation();

  const activeTrack = useActiveTrack();

  const isLiked = false;
  const [isMute,setIsMute] = useState(false);

  const handleGoBack =  ()=> {
    navigation.goBack();
  };
  if(!activeTrack) {
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.background,
      }}>
        <ActivityIndicator size={'large'} color={colors.iconPrimary}/>
      </View>
    );
  }

  const handleToggleVolume = ()=> {
    TrackPlayer.setVolume(isMute ? 1 : 0);
    setIsMute(!isMute);
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={ handleGoBack}>
          <AntDesign name={'arrowleft'} color={colors.iconPrimary} size={iconSizes.md}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>
      <View style={styles.coverImageContainer}>
      <Image source={{uri: activeTrack?.artwork}} style={styles.coverImage}/>
      </View>
      <View style={styles.titleHeartContainer}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{activeTrack?.title}</Text>
        <Text style={styles.author}>{activeTrack?.artist}</Text>
        </View>
        <TouchableOpacity>
      <AntDesign name={isLiked ? 'heart':'hearto'}
      color={colors.iconPrimary}
      size={iconSizes.md}/>
      </TouchableOpacity>
      </View>
      <View style={styles.playersControlContainer}>
        <TouchableOpacity style={styles.VolumeWrapper} onPress={handleToggleVolume}>
        <Feather name={isMute ?'volume-x':'volume-1'} color={colors.iconSecondary} size={iconSizes.lg}/>
        </TouchableOpacity>
        <View style={styles.RepeatShuffleContainer}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      <PlayerProgressBar />
      <View style={styles.playPauseContainer}>
        <GotoPreviousButton size={iconSizes.lg}/>
        <PlayPauseButton size={iconSizes.lg}/>
        <GotoNextButton size={iconSizes.lg}/>
      </View>
      </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,

  },
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerText: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontsFamilies.medium,
    flex : 1,
    textAlign : 'center',
  },
  coverImage: {
    height: 300,
    width : 300,
    borderRadius: 10,
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent : 'center',
    marginVertical : spacing.xl,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.xl,
    alignItems: 'center',
  },
  titleHeartContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'center',
  },
  author:{
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  playersControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,

  },
  VolumeWrapper: {
    flex :1,
  },
  RepeatShuffleContainer: {
    flexDirection : 'row',
    gap: spacing.lg,
  },
  playPauseContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginTop: spacing.xl,
  },
});