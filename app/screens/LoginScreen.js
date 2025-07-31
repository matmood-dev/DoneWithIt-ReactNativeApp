import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              autoCapitalize={false}
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              keyboardType="email-address"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />

            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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
