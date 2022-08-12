import React from "react";
import {
  Alert,
  View,
  ActivityIndicator,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { Post } from "../components/Post";

export function Home({ navigation }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(items);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://62f4f9f7ac59075124c881d8.mockapi.io/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Artical receipr error");
        alert("Artical receipt error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text
          style={{
            marginTop: 15,
          }}
        >
          Loading ...
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAd={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
      {/* {[...items, ...items].map((obj) => (
        <Post
          key={obj.id}
          title={obj.title}
          createdAd={obj.createdAt}
          imageUrl={obj.imageUrl}
        />
      ))} */}
    </View>
  );
}
