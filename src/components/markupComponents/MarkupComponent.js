import React from 'react';
import './MarkupComponent.css';

function MarkupComponent() {
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
            <textarea rows="10"></textarea>
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
            <textarea rows="10"></textarea>
        </div>
    </>
  )
}

export default MarkupComponent