import React, { createContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider value={1}>
            {children}
        </BlogContext.Provider>
    );
};
