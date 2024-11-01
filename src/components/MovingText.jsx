import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';

const MovingText = ({text,animationThreshold,style}) => {
    const translateX = useSharedValue(0);

    const shouldAnimate = text.length >= animationThreshold;

    const textWidth = text.length * 3;

    useEffect(() => {
      if (!shouldAnimate) return;
      //we have to animate this
      translateX.value = withDelay(
        1000,
        withRepeat(
          withTiming(-textWidth,{
            duration: 5000,
            easing: Easing.linear,
          }),
          -1,//infinite time
          true,//should reverse or not
        )
      );
    }, [translateX, text, animationThreshold, shouldAnimate, textWidth]);

    const animatedStyle = useAnimatedStyle(()=> {
        return {
            transform: [{translateX: translateX.value}],
        };
    });
  return (
      <Animated.Text
        numberOfLines={1}
        style={[
          animatedStyle,
          style,
          shouldAnimate && {
            width: 9999,
            paddingLeft: 16,
          },
        ]}
      >
        {text}
      </Animated.Text>
    );
};

export default MovingText;

const styles = StyleSheet.create({});