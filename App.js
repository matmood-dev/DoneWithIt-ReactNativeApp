import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem
          title="My title"
          ImageComponent={<Icon />}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
