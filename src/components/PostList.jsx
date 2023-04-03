import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function PostList({posts, ...props}) {
    return (
        <div>
            {!posts.length ? <h2 style={{textAlign: "center"}}>Посты не найдены!!!</h2> : ""}
            <TransitionGroup>
                {
                    posts.map((post, index) => {
                        return (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem {...props} index={index + 1} post={post}></PostItem>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
        </div>
    )
}

export default PostList;