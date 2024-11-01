import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import AntDesign from  'react-native-vector-icons/AntDesign';
import { iconSizes, spacing } from '../constants/dimensions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { fontSize } from '../constants/dimensions';
import { fontsFamilies } from '../constants/fonts';
import SongCard from '../components/SongCard';
import { FlatList } from  "react-native"
import FloatingPlayer from '../components/FloatingPlayer';
const LikeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <TouchableOpacity>
            <AntDesign
            name={'arrowleft'}
            color={colors.iconPrimary}
            size={iconSizes.md}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <SimpleLineIcons
            name={'equalizer'}
            color={colors.iconPrimary}
            size={iconSizes.md}
            />
        </TouchableOpacity>
        </View>
      <FlatList
      ListHeaderComponent={<Text style={styles.headingText}>Liked Songs</Text>}
      data={[1, 2, 3, 4, 5,6,7,8]}
      renderItem={()=> <SongCard containerStyle={{width: '47%'}}
         imageStyle={{
            height: 180,
            width: 180,
        }}
    />}
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: 200,
        paddingHorizontal: spacing.md,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginVertical: spacing.lg,

      }}
      />
      <FloatingPlayer/>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
    },
    headingText:{
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontsFamilies.bold,
    },
});