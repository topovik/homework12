import React from 'react'

let Tweet = (props) => {
    const {post} = props;
    return(
        <section className='tweet'>
            <h3>{post.user}</h3>
            <p>{post.text}</p>
            <button>Retweet</button>
        </section>
    )
}

export default Tweet;