import React, { useRef } from 'react';
import { useState } from 'react';
import { CommentOutlined } from '@ant-design/icons'
import _ from 'lodash'
import socketIOClient from "socket.io-client";
import { useEffect } from 'react';
import UserLogin from './UserLogin';
import ChatBoxSender from './ChatBoxSender';
import ChatBoxReceiver from './ChatBoxFunction';
import InputText from './InputText';




const ChatContainer = () => {
    let socketio = socketIOClient('http://localhost:5000')
    const [chats, setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const avatar = localStorage.getItem('avatar')
    // const messagesEndRef = useRef(null)
    // const scrollToBottom = () => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // }


    useEffect(() => {
        socketio.on('chat', senderChats => {
            setChats(senderChats)
        })
    })

    function sendChatToSocket(chat) {
        socketio.emit("chat", chat)
    }

    function addMessage(chat) {
        const newChat = { ...chat, user: localStorage.getItem("user"), avatar }
        // addToFirrebase(chat)
        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }


    function ChatsList() {
        return (<div style={{ height: '75vh', overflow: 'scroll', overflowX: 'hidden' }}>
            {
                chats.map((chat, index) => {
                    if (chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                    return < ChatBoxReceiver key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                })
            }
            {/* <div ref={messagesEndRef} /> */}
        </div>)

    }


    return (
        <div>
            {
                user ? <div>
                    <ChatsList
                    />

                    <InputText addMessage={addMessage} />
                </div> : <UserLogin setUser={setUser}></UserLogin>
            }

        </div>
    );
};

export default ChatContainer;