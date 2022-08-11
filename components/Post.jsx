import styled from "styled-components/native";

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: 700px;
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

const Post = ({ title, imageUrl, createdAd }) => {
  return (
    <PostWiew>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostData>{createdAd}</PostData>
      </PostDetails>
    </PostWiew>
  );
};

export default Post;
