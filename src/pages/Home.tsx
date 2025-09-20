import React from 'react';
import ShortenForm from '../components/ShortenForm';
import UrlList from '../components/UrlList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>URL Shortener</h1>
            <ShortenForm />
            <UrlList />
        </div>
    );
};

export default Home;