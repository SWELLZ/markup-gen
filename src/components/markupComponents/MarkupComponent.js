import React, { useState } from 'react';
import './MarkupComponent.css';
import { marked } from 'marked';

function MarkupComponent() {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <div className='input'>
                <div className='input-nav'>
                    <div className='title'>
                        <p><i class="fa-solid fa-hashtag"></i>Editor</p>
                    </div>
                    <div className='expand'>
                        <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </div>
                </div>
                <textarea rows="10" value={input} onChange={handleChange}></textarea>
            </div>
            <div className='output'>
                <div className='input-nav'>
                    <div className='title'>
                        <p><i class="fa-solid fa-hashtag"></i>Previewer</p>
                    </div>
                    <div className='expand'>
                        <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </div>
                </div>
                <div className='output-area'>
                    <div>{input}</div>
                </div>
            </div>
        </>
  )
}

export default MarkupComponent