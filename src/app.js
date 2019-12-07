import React from 'react';
import './css/app.css';

import Header from './components/Header';
import MainBody from './components/MainBody';
import PostList from './components/PostList';

function app() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default app;
