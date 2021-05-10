import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Button, IconButton } from "../../Components/Buttons";
import Input from "../../Components/Input";
import TermsOfUser from "../../Components/TermsOfUse";
import UnderlineButton from "../../Components/Buttons/UnderlineButton";
import { Colors } from "../../Constants/color";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const disabled = !email.trim().length || !password.trim().length;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={[styles.container]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.main}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text)}
          />
          <IconButton
            style={{ marginTop: 30 }}
            icon={<FontAwesome name="apple" style={styles.btnIcon} />}
            text="Sign up with Apple"
          />
          <IconButton
            icon={
              <FontAwesome5
                name="facebook"
                style={[styles.btnIcon, styles.iconBlue]}
              />
            }
            text="Sign up with Facebook"
          />
        </ScrollView>
        <View style={styles.footer}>
          <TermsOfUser onPress={() => {}} />
          <Button
            text="Next"
            round
            shadow
            textStyle={styles.nextBtnTxt}
            disabled={disabled}
          />
          <UnderlineButton text="Cancel" color={Colors.disabled} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
  },
  footer: { paddingHorizontal: 30 },
  btnIcon: { fontSize: 22, marginRight: 12 },
  iconBlue: { color: Colors.facebook, fontSize: 24 },
  nextBtnTxt: { color: Colors.white },
  cancelBtnTxt: { color: Colors.disabled },
});
