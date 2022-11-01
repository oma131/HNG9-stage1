import React from 'react';
import ProfileImg from '../ProfileImg.svg';

export default function Header () {
    return (
        <div className="App-header">
            <img src={ProfileImg} className="Profile-img" alt="profile_img" />
            <h2 className="Header-text">Annette Black</h2>
        </div>
    );
}