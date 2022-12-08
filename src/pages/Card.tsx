import React from 'react';

function Card({ Post }: { Post: any }) {
    return (
        
        <div className="">
               
            <div className="nftBox">
                <img className="nftimg" width="auto" alt={Post.name} src={process.env.PUBLIC_URL +  Post.imgPath} />
                    <div>
                        <h2>{Post.Username}</h2>
                        <p>{Post.description}</p>
                        <p>Owner: {Post.owner}</p>
                    </div>
            </div>
            
        </div>
        
    );
}

export default Card;