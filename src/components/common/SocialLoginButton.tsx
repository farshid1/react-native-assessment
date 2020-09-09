import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';
import { colors } from '../../constants/colors';

interface Props {
  logo: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

export const SocialLoginButton = ({ logo, title, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.boulder,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: colors.boulder,
    fontSize: 15,
  },
  logo: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
