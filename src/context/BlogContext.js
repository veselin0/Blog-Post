import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1} `}])
    }

    const blogPosts = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'}
    ];

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}} >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
