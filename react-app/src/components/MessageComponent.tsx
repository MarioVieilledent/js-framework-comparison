import { useState } from 'react';
import logo from './logo.svg';
import './MessageComponent.css';

function MessageComponent(props: any) {
    return <div className="elem">
        <span className="message">{props.message.message}</span>
        <span className="date">{props.message.date.toString()}</span>
    </div>;
};

export default MessageComponent;
function componentDidMount(arg0: () => void) {
    throw new Error('Function not implemented.');
}

