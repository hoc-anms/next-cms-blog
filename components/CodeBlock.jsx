import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    const customStyle = {...dracula};
    customStyle['pre[class*="language-"]']['background'] = '#011626 !important'
    return !inline && match ? (
    <SyntaxHighlighter
      style={customStyle}
      language={match[1]} 
      PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default CodeBlock