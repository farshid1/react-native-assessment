import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../Constants/color";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (newText: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      placeholderTextColor={Colors.placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    width: "100%",
    color: Colors.placeholder,
    marginBottom: 18,
  },
});
