import React from "react";
import {
  Button,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import Landing from "./components/LandingScreen";
import Welcome from "./components/Welcome";
import Dress from "./components/Dress";
import Accessiories from "./components/Accessiories";
import Hoodies from "./components/Hoodies";
import Jackets from "./components/Jackets";
import Party from "./components/Party";
import Jeans from "./components/Jeans";
import Shirt from "./components/Shirt";
import Shoes from "./components/Shoes";
import Shorts from "./components/Shorts";
import Thanks from "./components/Thanks";

const RootStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    Landing: Landing,
    Dress: Dress,
    Accessiories: Accessiories,
    Hoodies: Hoodies,
    Jackets: Jackets,
    Party: Party,
    Jeans: Jeans,
    Shirt: Shirt,
    Shoes: Shoes,
    Shorts: Shorts,
    Thanks: Thanks,
    initialRouteName: "Welcome"
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}
