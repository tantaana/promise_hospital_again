import { Avatar, Image } from 'antd';
import React from 'react';

const ChatBoxReceiver = ({ avatar, message, user }) => {
    // const { avatar, message, user } = chat;
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>

            <Avatar
                size={50}
                src={<Image
                    src={avatar}
                    style={{
                        objectFit: 'cover',
                        width: 45,
                        height: 45,
                        borderRadius: "100%"
                    }}

                    preview={false}
                />}
            />

            <p className="p-3" style={{ background: '#ddd', borderRadius: 10 }}>
                <strong>
                    {user}
                </strong>
                <br />
                {message}
            </p>
        </div>
    )
};

export default ChatBoxReceiver;