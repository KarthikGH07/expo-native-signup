import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Sign Up</Text>
          </Link>
          <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Login</Text>
          </Link>
          {/* <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link> */}
        </View>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
