import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import { Redirect, Link } from "react-router-native";

const Login = (props) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      color: "black",
    },
  });

  return (
    <TouchableOpacity style={{ margin: 20 }}>
      {props.toHome && <Redirect to="/home" />}
      <Text>User Name</Text>
      <TextInput
        style={styles.input}
        value={props.username}
        onChangeText={props.onUserChange}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={props.password}
        onChangeText={props.onPasswordChange}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <Link to={`/home`}>
        <Button
          title="Log In"
          color="#841584"
          accessibilityLabel="Click Here to Loogin"
          onPress={props.onSubmit}
        />
      </Link>
    </TouchableOpacity>
  );
};
export default Login;
