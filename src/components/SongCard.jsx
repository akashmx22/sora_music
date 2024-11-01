import {Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontsFamilies } from '../constants/fonts';
import { TouchableOpacity } from 'react-native';

import { fontSize, spacing } from '../constants/dimensions';
import TrackPlayer from 'react-native-track-player';
const imageUrl = "https://linkstorage.linkfire.com/medialinks/images/9a0a8391-dd16-4888-848d-2c66f4d075fa/artwork-440x440.jpg";


const handlePlay =async (item) => {
  
};

export const SongCard = ({item,containerStyle,imageStyle,handlePlay}) => {
  return (
    <TouchableOpacity style={[styles.container,
    containerStyle]} onPress={()=>handlePlay(item)}>
     <Image source={{uri: item.artwork}} style={[styles.coverImage,imageStyle]} />
     <Text style={styles.title} numberOfLines={1}>{item.title} </Text>
     <Text style={styles.artist} numberOfLines={1}>{item.artist}</Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
    container: {
      
    },
    coverImage: {
      width: 250,
      height:250,
      borderRadius: 10,
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontsFamilies.medium,
        textAlign: "center",
        fontSize: fontSize.lg,
        paddingVertical: spacing.sm,
    },
    artist: {
        color: colors.textSecondary,
        textAlign: "center",
        fontSize: fontSize.md,
        fontFamily: fontsFamilies.regular,
    },
});