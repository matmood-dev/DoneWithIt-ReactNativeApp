import { Image, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { useState } from "react";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        icon="email"
        autoCapitalize={false}
        autoCorrect={false}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
      />
      <AppTextInput
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        keyboardType="email-address"
        textContentType="password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      <AppButton title="Login" onPress={() => console.log(email, password)}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginTop: 50,
  },
  container:{
    padding: 10
  }
});

export default LoginScreen;
