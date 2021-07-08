import React, {FC} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FlexStyles} from '../styles';
import {Text} from '../texts';
import {Colors} from '@app/themes';
import {scale} from 'react-native-size-matters';
import {SocialButtonProps} from './type';

export const SocialButton: FC<SocialButtonProps> = ({
  title,
  leftIcon,
  onPress,
  iconSize = 25,
  ...touchableOpacityProps
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    {...touchableOpacityProps}>
    <View style={[FlexStyles.flexDirectionRow, FlexStyles.alignItemsCenter]}>
      <Image
        resizeMode="contain"
        source={leftIcon}
        style={[
          {
            width: scale(iconSize),
            height: scale(iconSize),
          },
          styles.image,
        ]}
      />
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.darkSlateGray,
    borderRadius: scale(40),
    borderWidth: scale(1),
    padding: scale(10),
    width: scale(225),
  },
  image: {
    marginRight: scale(12),
  },
});
