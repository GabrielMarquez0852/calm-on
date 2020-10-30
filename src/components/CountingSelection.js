import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import sprit from "../../assets/counting/spirit2.png";
import bg from "../../assets/counting/backdrop.png";
import Recipes from "./countingData" 

export default CountingSelection = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.spritBox3}>
          <Image style={styles.sprit} source={sprit} />
        </View>
        <View style={styles.fin}>
          <DialogBox
            message={{
              style: styles.textBox2,
              text:
                "Are you feeling worried? Let’s play a game together! Pick a category to start.",
            }}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigate("Counting", { stuff: Recipes.start })}
          >
            <Text style={{color: "#3B96B2"}}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
