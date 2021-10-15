
import React from 'react';
import PageContextProvider from './PageContextProvider';
import Header from './Header';
function App() {
    return (
        <div className="App">
            <PageContextProvider>
                <Header />
            </PageContextProvider>
        </div>
    );
}
export default App;


import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) => {
    const [user, setUser] = useState({
        'name': 'harry potter'
    });
    return (
        <PageContext.Provider value={{ 
            user: user,
        }}>
        	{props.children}
        </PageContext.Provider>
    );
}
export default PageContextProvider;



import React, { useContext } from 'react';
import { PageContext } from './PageContextProvider';
const Header = () => {
    const { user } = useContext(PageContext);
    return (
        <div className="header">
        	{user.name}
        </div>
    );
}
export default Header;