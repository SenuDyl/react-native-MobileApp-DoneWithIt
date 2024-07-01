import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ensure the correct icon library is imported
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Screen>
//         <ListItem
//           title="My title"
//           //subTitle="My subtitle"
//           imageComponent={<MaterialCommunityIcons name="email" size={40} color="black" />}
//         />
//       </Screen>
//     </GestureHandlerRootView>
//   );
// }

export default function App() {

  return <Screen></Screen>
}