import { Image, StyleSheet } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          name="email"
          autoCapitalize={false}
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppFormField
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          textContentType="password"
          secureTextEntry
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
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
  container: {
    padding: 10,
  },
});

export default LoginScreen;
