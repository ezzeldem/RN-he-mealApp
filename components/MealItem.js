import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.img }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetaile }}>
            <Text>{props.duration}M</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealItem: {
    marginBottom: 10,
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    borderRadius: 10,
  },
  mealHeader: {
    height: "75%",
  },
  mealDetaile: {
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0 ,0 ,0.4)",
  },
  title: {
    fontFamily: "opne-sans-bold",
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
});

export default MealItem;
