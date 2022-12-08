import React, { useState } from 'react';
import Search from './Search';
import initialDetails from '../data/initialDetails';

function Feed() {
    return (
        <div className="collection">
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
                <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>
            <div className='post'>
            <span style={{ fontWeight: 'bold' }}>Username</span>
               <p>Content of the post</p>
               <div className='interactives'>
                    <button>Like</button>
                    <button>Repost</button>
               </div>
            </div>

        </div>
        
        /*<>
            <div className="feedcontent">
                <Search details={initialDetails} />
            </div>
        </>*/

    );
}

export default Feed;