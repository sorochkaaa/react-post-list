import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm(props) {
    let [post, setPost] = useState({title: '', description: ''});

    function createNewPost(e) {
        e.preventDefault();
        if (!post.title.trim() || !post.description.trim()) return;
        props.addNewPost({
            id: Date.now(),
            ...post,
        });
        setPost({title: '', description: ''});
    }

    return (        
        <form>
            <MyInput 
                value={post.title} 
                onChange={(e) => setPost({...post, title: e.target.value})} 
                placeholder='Post name...'>
            </MyInput>
            <MyInput 
                value={post.description} 
                onChange={(e) => setPost({...post, description: e.target.value})} 
                placeholder='Description...'>
            </MyInput>
            <MyButton onClick={createNewPost}>Add</MyButton>
        </form>
    )
}

export default PostForm;