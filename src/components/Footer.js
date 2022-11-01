import React from 'react';
import Zuri_Logo from '../Zuri_Logo.svg';
import I4G from '../I4G.svg';
import '../App.css';

export default function Footer () {
    return (
        <footer className="Footer-main">
          <div className="Footer-container">
                <img src={Zuri_Logo} className="Logo" alt="Zuri internship logo" />
                <p className='Footer-text'>HNG Internship 9 Frontend Task</p>
                <img src={I4G} className="Logo" alt="Ingressive For Good logo" />
          </div>
        </footer>
    )
}