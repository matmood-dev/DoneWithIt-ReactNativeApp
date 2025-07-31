import { Image, StyleSheet } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              autoCapitalize={false}
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <AppText style={{color: colors.danger}}>{errors.email}</AppText>
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
            <AppText style={{color: colors.danger}}>{errors.password}</AppText>

            <AppButton title="Login" onPress={handleSubmit} />
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
