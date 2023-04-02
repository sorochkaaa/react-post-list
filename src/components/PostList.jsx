import React from "react";
import PostItem from "./PostItem";

function PostList({posts, ...props}) {
    return (
        <div>
            {posts.length 
                ? posts.map((post, index) => <PostItem {...props} index={index + 1} key={post.id} post={post}></PostItem>)
                : <h2 style={{textAlign: "center"}}>Посты не найдены!!!</h2>
            }
        </div>
    )
}

export default PostList;