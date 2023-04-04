import React, { useEffect, useMemo } from 'react';
import { useState, useRef } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import "./styles/App.css"
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({selectedSort: '', searchQuery: ''});
  const sortedAndSearchedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery);
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setPostLoading] = useState(false);


  useEffect(() => {
    loadPosts();
  }, [])

  function addNewPost(post) {
    setPosts([...posts, post]);
    setModal(false);
  }

  async function loadPosts() {
    setPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setPostLoading(false);
    }, 3000)
    
  }

  function deletePost(postID) {
    setPosts(posts.filter(post => post.id != postID));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: ".5rem", marginBottom: ".5rem"}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal modal={modal} setModal={setModal}>
        <PostForm addNewPost={addNewPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr/>
      {isPostsLoading
      ? <Loader/>
      : <PostList deletePost={deletePost} posts={sortedAndSearchedPosts}></PostList>}
    </div>
  )
}

export default App;
