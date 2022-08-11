import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  background-color: red;
  height: 100px;
  width: 100px;
  border-radius: 30px;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textText}>Мое первое приложение на ангдроид!</Text>

      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textText: {
    color: "red",
    fontSize: 44,
  },
});
