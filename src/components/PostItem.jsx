import React from "react";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
    const {id, title, description} = props.post;
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.index}. {title}</strong>
                <div>{description}</div>
            </div>
        <MyButton onClick={() => props.deletePost(id)}>Delete</MyButton>
      </div>
    )
}

export default PostItem;