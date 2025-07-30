import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AccountScreen />
    </GestureHandlerRootView>
  );
}
