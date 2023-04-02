import React, { useMemo } from 'react';
import { useState, useRef } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';

import "./styles/App.css"

function App() {
  let [posts, setPosts] = useState([
    {id :'1', title: "JavaScript", description: "JavaScript is a programming language!"},
    {id :'2', title: "HTML", description: "HTML is HyperText Markup Language!"},
    {id :'3', title: "Python", description: "Python is a programming language!"},
    {id :'4', title: "Orange", description: "Orange is a fruit!"}
  ]);
  
  const [filter, setFilter] = useState({selectedSort: '', searchQuery: ''});

  function addNewPost(post) {
    setPosts([...posts, post]);
    setModal(false);
  }

  function deletePost(postID) {
    setPosts(posts.filter(post => post.id != postID));
  }

  const sortedPosts = useMemo(() => {
    return filter.selectedSort
      ? [...posts].sort((post1, post2) => post1[filter.selectedSort].localeCompare(post2[filter.selectedSort]))
      : posts;
  }, [filter.selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
      return  filter.searchQuery 
        ? sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
        : sortedPosts
  }, [filter.searchQuery, sortedPosts]);

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <MyButton style={{marginTop: ".5rem", marginBottom: ".5rem"}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal modal={modal} setModal={setModal}>
        <PostForm addNewPost={addNewPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr/>
      <PostList deletePost={deletePost} posts={sortedAndSearchedPosts}></PostList>
    </div>
  )
}

export default App;
