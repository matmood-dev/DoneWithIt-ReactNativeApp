import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Other", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          placeholder="Category"
          icon="apps"
        />
        <AppTextInput please="Email" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
