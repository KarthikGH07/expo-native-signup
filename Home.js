import React, { useState } from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { Redirect, useParams } from "react-router-native";

const Home = (props) => {
  const [toLogin, setToLogin] = useState(false);
  return (
    <TouchableOpacity style={{ margin: 20 }}>
      {toLogin && <Redirect to="/login" />}
      <Text>User ID: {props.userDetails.user_id}</Text>
      <Text>Name: {props.userDetails.name}</Text>
      <Text>Phone: {props.userDetails.phone}</Text>
      <Text>E-mail: {props.userDetails.email}</Text>
      <Text>Address: {props.userDetails.address}</Text>
      <Text>{"                           "}</Text>
      <Button
        title="Log Out"
        color="red"
        accessibilityLabel="Click Here to log out"
        onPress={() => {
          props.onToHomeChange();
          setToLogin(true);
        }}
      >
        Logout
      </Button>
    </TouchableOpacity>
  );
};
export default Home;
