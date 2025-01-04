
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '././apolloClient'; 
import Profile from './components/Profile';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Todos from './components/Todos';


const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="app">
                <h1>User Dashboard</h1>
                <Profile />
                <Posts />
                <Albums />
                <Todos />
            </div>
        </ApolloProvider>
    );
};

export default App;