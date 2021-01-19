import React from 'react';
import './post.css';

const Post = ({author, date, content, image}) => (

    <div className="post">
        <div className="anakyn-Post">
            <div className="info">
                <img className="pic" src={author.photo}></img>
                <div className="author-Info">
                    <p className="name">{author.name}</p>
                    <p className="nickname">{author.nickname}</p>
                    <p className="data">{date}</p>
                </div>
                <p className="content">{content}</p>
                <img className="post-Image" src={image}></img>
            </div>
        </div>
    </div>

);

export default Post;