import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';

import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";



import { fontsFamilies } from '../constants/fonts';

const isDarkMode = true;

const CustomDrawerContent = (props) => {
    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
      };
  return (
    <DrawerContentScrollView style={styles.container}>
        <View style={styles.headerIconcontainer}>
            <TouchableOpacity>
                <AntDesign
                name={"close"}
                color={colors.iconSecondary}
                size={iconSizes.lg}
                onPress={toggleDrawer}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicons
                name={isDarkMode?"sun":"moon"}
                color={colors.iconSecondary}
                size={iconSizes.lg}/>
            </TouchableOpacity>
        </View>
        <View style={styles.drawerItemContainer}>
            <DrawerItem label={"Profile"} icon={()=>(
                <FontAwesome name={"user"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            />
            <DrawerItem label={"Liked Songs"} icon={()=>(
                <AntDesign name={"hearto"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            onPress={()=>{props.navigation.navigate("LIKE_SCREEN")}}
            />
            <DrawerItem label={"Language"} icon={()=>(
                <MaterialIcons name={"language"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            />
            <DrawerItem label={"Contact Us"} icon={()=>(
                <FontAwesome  name={"envelope"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            />
            <DrawerItem label={"FAQs"} icon={()=>(
                <FontAwesome  name={"question-circle-o"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            />
            <DrawerItem label={"Settings"} icon={()=>(
                <Ionicons name={"settings-outline"} size={iconSizes.md} color={colors.iconSecondary}/>
            )}
            labelStyle={styles.labelStyle}
            style={styles.DrawerItem}
            />
        </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.lg,
    },
    headerIconcontainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    drawerItemContainer:{
        marginVertical: spacing.lg,
    },
    labelStyle: {
        fontSize: fontSize.md,
        color: colors.textPrimary,
        fontFamily: fontsFamilies.md,

    },
    DrawerItem: {
        marginVertical: spacing.sm,
    },
});