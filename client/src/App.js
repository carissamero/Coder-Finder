import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

import Main from './pages/Main'
import ProfileDev from './pages/ProfileDev'
import ProfileClient from './pages/ProfileClient'
import HomeDev from './pages/HomeDev'
import HomeCli from './pages/HomeClient'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SearchDev from './pages/Search'
import About from './pages/About'
import ClientProfile from './pages/ClientProfile'

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client} >
        < Router >
            < div >
                <Navbar />
                <Routes>
                <Route exact path="/"component={<Main/>}/> 
                <Route exact path="/homecli"element={<HomeCli/>}/> 
                <Route exact path="/homedev"element={<HomeDev/>}/> 
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup"element={<Signup/>}/> 
                <Route exact path="/profiledev/:userId"element={<ProfileDev/>}/> 
                <Route exact path="/me"element={<ProfileDev/>}/> 
                <Route exact path="/client"element={<ClientProfile/>}/> 
                <Route exact path="/profileclient/:userId"element={<ProfileClient/>}/> 
                <Route exact path="/clientprofile/:userId"element={<ClientProfile/>}/> 
                <Route exact path="/search"element={<SearchDev/>}/>
                <Route exact path="/about"element={<About/>}/>
                </Routes>
                <Footer />    
                </div> 
                </Router>
                </ApolloProvider>    
                )
};

                export default App;