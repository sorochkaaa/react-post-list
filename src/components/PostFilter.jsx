import { useMemo } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect"
import React from "react";

function PostFilter({filter, setFilter}) {

    return (
        <div>
            <MyInput 
                placeholder="Search..."
                value={filter.searchQuery}
                onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}
            />
            <hr/>
            <MySelect
                value={filter.selectedSort}
                onChange={sort => setFilter({...filter, selectedSort: sort})}
                defaultValue="Sort by:"
                options={[
                    {value: 'title', name: 'title'},
                    {value: 'body', name: 'body'}
                ]}
            />
        </div>
    )
}

export default PostFilter;