import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from './app/components/Screen';
import Icon from './app/components/Icon'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Icon name="trash-can" size={50} backgroundColor="red" iconColor="white"/>
      </Screen>
    </GestureHandlerRootView>
  );
}