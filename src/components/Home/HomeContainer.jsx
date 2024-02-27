// /components/Home/HomeContainer.jsx
import React from 'react';
import Header from '../Common/Header';
import HomePage from './HomePage';

const HomeContainer = () => {
    return (
        <div>
            <Header />
            <main>
                <HomePage />
            </main>
        </div>
    );
};

export default HomeContainer;
