import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import querystring from "querystring";
import axios from "axios";
import { Redirect } from "react-router-native";

const SignUp = () => {
  const [username, onChangeUsername] = useState("");
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [address, onChangeAddress] = useState("");

  const [toLogin, setToLogin] = useState(false);

  const handleClick = () => {
    const form = {
      user_name: username,
      phone,
      address,
      name,
      email,
      password: password,
    };

    const clearFields = () => {
      onChangeAddress("");
      onChangeEmail("");
      onChangeName("");
      onChangePassword("");
      onChangePhone("");
      onChangeUsername("");
    };

    console.log(querystring.stringify(form));
    async function run() {
      const res = await axios.post(
        "http://youtube.maksinfotech.com/api/registration.php",
        querystring.stringify(form),
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(res.data);
      alert(`${res.data.status} ${res.data.msg}`);
      clearFields();
      if (res.data.status === 200) {
        setToLogin(true);
      } else {
        alert("Try Again!");
      }
    }

    run();
  };

  const styles = StyleSheet.create({
    input: {
      height: 35,
      margin: 8,
      borderWidth: 1,
      color: "black",
    },
    button: {
      marginBottom: 10,
      marginTop: 15,
      fontSize: 20,
    },
  });

  return (
    <ScrollView>
      {toLogin && <Redirect to="/login" />}
      <TouchableOpacity style={{ margin: 20 }}>
        <Text>User Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={onChangeUsername}
        />
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={onChangeName}
        />
        <Text>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={onChangeAddress}
        />
        <Text>Phone</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={phone}
          onChangeText={onChangePhone}
        />
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          autoCompleteType="email"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Button
          title="Sign UP"
          color="#841584"
          accessibilityLabel="Click Here to register"
          onPress={handleClick}
        />
        <Text style={styles.button}> Already Register?? </Text>
        <Button
          title="Login Here!!"
          color="#841584"
          accessibilityLabel="Click Here to Login"
          onPress={() => setToLogin(true)}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SignUp;
