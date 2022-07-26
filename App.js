import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigation";

const feachFonts = () => {
  return Font.loadAsync({
    "opne-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opne-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

enableScreens();
export default function App() {
  const [forntLoaded, setFontLoaded] = useState(false);
  if (!forntLoaded) {
    return (
      <AppLoading
        startAsync={feachFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  screen: {},
});
