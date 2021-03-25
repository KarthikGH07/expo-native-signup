import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import querystring from "querystring";
import axios from "axios";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toHome, setToHome] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  const handleUserChange = (inputText) => setUsername(inputText);
  const handlePasswordChange = (inputText) => setPassword(inputText);
  const handleToHomeChange = () => setToHome(!setToHome);

  const clearFields = () => {
    onChangePassword("");
    onChangeUsername("");
  };

  const handleSubmit = () => {
    const form = {
      user_name: username,
      password: password,
    };

    console.log(querystring.stringify(form));
    async function run() {
      const res = await axios.post(
        "http://youtube.maksinfotech.com/api/login.php",
        querystring.stringify(form),
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(res.data);
      alert(`${res.data.status} ${res.data.msg}`);
      setUserDetails(res.data.details);
      setToHome(true);
    }
    run();
  };
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
        <Route
          path="/login"
          render={() => (
            <Login
              username={username}
              password={password}
              toHome={toHome}
              onUserChange={handleUserChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleSubmit}
            />
          )}
        />
        <Route
          path="/home"
          render={() => (
            <Home
              userDetails={userDetails}
              onToHomeChange={handleToHomeChange}
            />
          )}
        />
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
