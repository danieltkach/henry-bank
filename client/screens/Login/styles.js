import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
  },
  logo: {
    height: 80,
    resizeMode: 'contain',
    width: 150,

  },
  inputs: {
    flex:1,
    justifyContent:'center',

  },
  foto: {
    position: "absolute",
    left: 140,
    top: 50,
  },
  button: {
    position: "absolute",
    top: 500,
    left: 137,
  }
});

export default styles;
