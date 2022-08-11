import React from "react";
import { View } from "react-native";
import { StatusBar } from "react-native-web";
import Post from "./components/Post";
import axios from "axios";

export default function App() {
  // const [items, setItems] = React.useState;

  React.useEffect(() => {
    axios
      .get("https://62f4f9f7ac59075124c881d8.mockapi.io/articles")
      .then(({ data }) => {
        setItems(data).catch((error) => {
          console.log(error);
          alert("Artical receipt error");
        });
      });
  });
  return (
    <View>
      <Post
        title="test"
        createdAd="11.08.2022"
        imageUrl="https://mobimg.b-cdn.net/v3/fetch/b4/b4998cef88539ca8075898078e52ece0.jpeg"
      />
      <StatusBar theme="auto" />
    </View>
  );
}
