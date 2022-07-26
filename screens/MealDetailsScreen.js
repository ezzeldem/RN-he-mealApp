import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-nativigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='go Back'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationdata) => {
  const mealId = navigationdata.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => console.log(1221)}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
