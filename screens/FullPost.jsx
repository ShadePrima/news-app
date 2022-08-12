import React from "react";
import axios from "axios";
import styled from "styled-components/native";
import { View } from "react-native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://62f4f9f7ac59075124c881d8.mockapi.io/articles/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Artical receipr error");
        alert("Artical receipt error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
};
