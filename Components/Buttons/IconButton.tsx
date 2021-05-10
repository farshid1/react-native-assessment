import * as React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ViewStyle,
} from "react-native";
import { Colors } from "../../Constants/color";

interface IconButtonProps {
  icon: React.ReactNode;
  text: string;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      {icon}
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 230,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: Dimensions.get("window").width / 3,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },

  btnText: { color: Colors.btn, fontSize: 15 },
});
