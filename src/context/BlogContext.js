import React, { createContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider value={['Gocho!', 'Bocho', 'Docho']}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
