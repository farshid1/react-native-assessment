import * as React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  text: string;
  round?: boolean;
  shadow?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  shadow,
  containerStyle,
  textStyle,
  round = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        round ? styles.roundButton : null,
        shadow ? styles.btnShadow : null,
        containerStyle,
        disabled ? styles.disabledStyle : null,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 250,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  roundButton: {
    backgroundColor: "#DA1631",
    borderRadius: 50,
  },
  btnShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowColor: "#000",
  },
  text: { fontSize: 18 },
  disabledStyle: { backgroundColor: "#D5D5D5" },
});
