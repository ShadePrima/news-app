import styled from "styled-components/native";

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

const PostWiew = styled.View`
  flex-direction: row;
  margin-top: 30px;
  padding: 30px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-style: solid;
`;
const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 12px;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};

export const Post = ({ title, imageUrl, createdAd }) => {
  return (
    <PostWiew>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostData>{new Date(createdAd).toLocaleDateString()}</PostData>
      </PostDetails>
    </PostWiew>
  );
};
