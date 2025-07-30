import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <AppButton title="login" onPress={() => console.log('Pressed')}/>
  );
}
