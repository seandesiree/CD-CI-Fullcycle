
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST, UPDATE_POST } from '../utils/graphqlQueries';

const PostForm: React.FC<{ post?: any; onClose: () => void }> = ({ post, onClose }) => {
    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');
    const [createPost] = useMutation(CREATE_POST);
    const [updatePost] = useMutation(UPDATE_POST);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const variables = { title, content };
        if (post) {
            updatePost({ variables: { id: post.id, ...variables }});
        } else {
            createPost({ variables });
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Post Title" 
                required 
            />
            <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Post Content" 
                required 
            />
            <button type="submit">{post ? 'Update' : 'Create'} Post</button>
        </form>
    );
};

export default PostForm;