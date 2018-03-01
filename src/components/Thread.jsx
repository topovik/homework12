import React from 'react'
import Tweet from '../components/Tweet';
import Posts from '../Users';

let Thread = () => {
    return(
        <section className='thread'>
            <Tweet post={Posts[0]} />
            <Tweet post={Posts[1]} />
        </section>
    )
}

export default Thread