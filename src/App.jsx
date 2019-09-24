import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Posts from "./components/atomic/atoms/Posts/Posts";
import Pagination from "./components/atomic/atoms/Pagination/Pagination";
import PostNumberChanger from "./components/atomic/atoms/PostNumberChanger/PostNumberChanger";
import "./styles.scss";
import githubImage from "./images/GitHub-Mark-32px.png";

const API_ENDPOINT =
  "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";

const useMountEffect = fun => useEffect(fun, []);

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "fetch": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "success": {
      return {
        ...state,
        isLoading: false,
        posts: action.posts
      };
    }
    default:
      break;
  }
  return state;
};

const initalFetchState = {
  isLoading: false,
  posts: []
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const [state, dispatch] = useReducer(fetchReducer, initalFetchState);
  const { isLoading, posts } = state;

  useMountEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: "fetch" });
      const res = await axios.get(API_ENDPOINT);
      dispatch({ type: "success", posts: res.data.items });
    };

    fetchPosts();
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const changePostsPerPage = newPostsPerPage => {
    setCurrentPage(1);
    setPostsPerPage(newPostsPerPage);
  };

  return (
    <>
      <header className='topbar'>
        <h1 className='topbarHeader'>
          <span>Get posts from Github</span>
          <img alt='Github logo' src={githubImage} />
        </h1>
      </header>
      <PostNumberChanger
        postsPerPage={postsPerPage}
        changePostsPerPage={changePostsPerPage}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        changePaginationPage={setCurrentPage}
        currentPage={currentPage}
        numberOfPages={Math.ceil(posts.length / postsPerPage)}
        loading={isLoading}
      />
      <Posts posts={currentPosts} loading={isLoading} />
    </>
  );
};

export default App;
