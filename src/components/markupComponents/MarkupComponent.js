import React, { useState } from 'react';
import './MarkupComponent.css';
import { marked } from 'marked';

marked.setOptions({
    breaks: true,
});

const placeholder = `# Welcome to my Markdown Generator!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... 
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.google.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F165042%2Fraw%2Fd9e974b1966b3984986721aba1b12539-neon-retrowave-skyline.jpg&f=1&nofb=1)`

function MarkupComponent() {
    const [input, setInput] = useState(placeholder);
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const getMarkdownText = () => {
        var rawMarkup = marked.parse(input);
        return {__html: rawMarkup}
    }

    return (
        <>
            <div className='input'>
                <div className='input-nav'>
                    <div className='title'>
                        <p><i className="fa-solid fa-hashtag"></i>Editor</p>
                    </div>
                </div>
                <textarea rows="10" value={input} onChange={handleChange}></textarea>
            </div>
            <div className='output'>
                <div className='input-nav'>
                    <div className='title'>
                        <p><i className="fa-solid fa-hashtag"></i>Previewer</p>
                    </div>
                </div>
                <div className='output-area'>
                    <div dangerouslySetInnerHTML={getMarkdownText()}></div>
                </div>
            </div>
        </>
  )
}

export default MarkupComponent