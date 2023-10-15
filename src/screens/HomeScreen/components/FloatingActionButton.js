import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import styles from "../styles";
import { auth } from "../../../firebase/config";

const FloatingActionButton = (props) => (
  <View style={styles.createEventButton}>
    <FloatingAction
      showBackground={false}
      onPressMain={(name) => { props.onPressItem() }}

    />
  </View>
);

export default FloatingActionButton;
