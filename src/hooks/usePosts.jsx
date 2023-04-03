import React from "react";
import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        return sort
          ? [...posts].sort((post1, post2) => post1[sort].localeCompare(post2[sort]))
          : posts;
    }, [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts, sort, searchQuery) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return searchQuery 
          ? sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
          : sortedPosts
    }, [searchQuery, sortedPosts]);
    return sortedAndSearchedPosts;
}