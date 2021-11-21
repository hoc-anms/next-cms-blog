import React from 'react'

const PostCard = ({post}) => {
    return (
        <div key={post.title}>
            {post.title}
            {post.excerpt}
        </div>
    )
}

export default PostCard