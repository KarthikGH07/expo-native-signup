import React, { useState } from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { Redirect } from "react-router-native";

const Home = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <TouchableOpacity style={{ margin: 20 }}>
      {toLogin && <Redirect to="/login" />}
      <Text>This is HOME Page!</Text>
      <Button
        title="Log Out"
        color="red"
        accessibilityLabel="Click Here to log out"
        onPress={() => setToLogin(true)}
      >
        Logout
      </Button>
    </TouchableOpacity>
  );
};
export default Home;
