import * as React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/color";
import Button from "./Button";

interface UnderlineButtonProps {
  text: string;
  color?: string;
}

const UnderlineButton: React.FC<UnderlineButtonProps> = ({ text, color }) => {
  return (
    <Button
      text={text}
      textStyle={{ color }}
      containerStyle={styles.container}
    />
  );
};

export default UnderlineButton;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    width: undefined,
    alignSelf: "center",
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.disabled,
  },
});
