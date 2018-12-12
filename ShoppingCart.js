import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./containers/HomeScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import BooksScreen from "./containers/BooksScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import CartScreen from "./containers/CartScreen";

export default class ShoppingCart extends Component {
  render() {
    return (
      <Root />
    );
  }
}

const navigationOptions = {
  headerTitle: "Shopping App",
  headerRight: <ShoppingCartIcon />
};

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions,
  },
  Electronics: {
    screen: ElectronicsScreen,
    navigationOptions,
  },
  Books: {
    screen: BooksScreen,
    navigationOptions,
  },
  Cart: {
    screen: CartScreen,
    navigationOptions,
  }
});

const Root = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});