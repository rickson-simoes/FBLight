import React, { Component } from 'react';
import MainBody from './MainBody';

import picBoy1 from '../images/boy1.jpg';
import picGirl1 from '../images/girl1.png';
import picBoy2 from '../images/boy2.jpg';
import picGirl2 from '../images/girl2.jpg';
import picBoy3 from '../images/boy3.png';

class PostList extends Component{  

  state = {
    posts: [
      {
        id: 1,
        author:[
          {
            name: "Young Padawan",
            avatar: picBoy1
          }],
        date: "04 Jun 2019",
        content: "Olá, sou novo aqui!",
        comments: [
          {
            id: 1,
            author: {
              name: "Storm Girl",
              avatar: picGirl1
            },
            content: "Bem vindo!!"
          }
        ]
      },
      {
        id: 2,
        author: [
          {
            name: "Knight Fury",
            avatar: picBoy2
          }],
        date: "04 Jun 2019",
        content: "Olá, alguém com algum grupo para estudar?",
        comments: [
          {
            id: 2,
            author: {
              name: "Sweet Tempest",
              avatar: picGirl2
            },
            content: "Eu!! Pode me adicionar!"
          },
          {
            id: 3,
            author: {
              name: "Endeavor",
              avatar: picBoy3
            },
            content: "Gostaria de participar também!"
          },
        ]
      }
    ]
  };
  

  render() {
    const { posts } = this.state;

    return (
      <div className="fullContent">
        {posts.map(post=> (   
          <div className="mainBody" key={post.id}>      
            <MainBody {...post}/>
          </div>       
        ))}
      </div>
      
    )    
  }  
}

export default PostList;