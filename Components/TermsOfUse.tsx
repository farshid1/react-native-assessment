import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface TermsOfUserProps {
  onPress: () => void;
}

const TermsOfUser: React.FC<TermsOfUserProps> = ({ onPress }) => {
  return (
    <Text style={styles.container}>
      By creating an account, you are indicating that you agree to the{" "}
      <Text style={styles.underline} onPress={onPress}>
        Terms of Use
      </Text>{" "}
      and that you are over the age of 13.
    </Text>
  );
};

export default TermsOfUser;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    color: "#8c8c8c",
    textAlign: "center",
    fontSize: 12,
    marginTop: 35,
  },
  underline: { textDecorationLine: "underline" },
});
