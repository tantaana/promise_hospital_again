import React from 'react';
import { useState } from 'react';

const InputText = ({ addMessage }) => {
    const [message, setMessage] = useState('')

    const addAMessage = () => {
        addMessage({
            message
        })
        setMessage('')
    }
    return (
        <div>
            <div className="form-control">
                <label className="input-group">
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder="Writing something" className="input input-bordered" />
                    <button onClick={() => addAMessage()} className="btn">Button</button>
                </label>
            </div>
        </div>
    );
};

export default InputText;