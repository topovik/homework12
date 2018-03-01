import React from 'react'
import { render } from 'react-dom'
import Thread from './components/Thread'
import NewTweet from './components/NewTweet'

render(
    <div>
    <NewTweet />
    <Thread />
    </div>,
    document.getElementById('root')
);