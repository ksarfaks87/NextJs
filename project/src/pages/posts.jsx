import axios from "axios";
import { useEffect, useState } from "react";
// import Posts from "../components/main/components/Posts";
import MainContainer from "../components/MainContainer";
import Pagination from "../components/Pagination";
import api from "../services/api";

const posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsCount, setPostsCount] = useState(0);

  useEffect(() => {
    api.posts.getCountPosts().then((res) => {
      setPostsCount(res.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:1337/posts`).then((res) => {
  //     const data = res.data;
  //     setPosts(data);
  //   });
  // }, []);

  return (
    <MainContainer keywords="konstrut posts" title="posts">
      <div className="posts_cover">
        <Pagination postsCount={postsCount} postsPerPage={4} />
      </div>
    </MainContainer>
  );
};

export default posts;
