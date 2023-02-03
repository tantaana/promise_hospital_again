import { message } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ChatBoxReceiver from './ChatBoxFunction';
import ChatBoxSender from './ChatBoxSender';
import ChatContainer from './ChatContainer';
import InputText from './InputText';

const Chatbox = () => {
    const chats = [
        {
            id: '1',
            user: 'jahid',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUSIVNEKVVIzX4QtyIQRFDPua0Ibur8GvLQ&usqp=CAU',
            message: 'hallo world'
        }
    ]

    const chatsSender = [
        {
            id: '1',
            user: 'Shohel',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB5IRAujmQLpNmi6ZLJwg_SS9yRO-QHQfUA&usqp=CAU',
            message: 'hallo jahid'
        }
    ]

    return (
        <div>
            <h1 className='text-2xl'>
                <h1>hallo world</h1>
            </h1>

            <ChatContainer></ChatContainer>

        </div>
    );
};

export default Chatbox;