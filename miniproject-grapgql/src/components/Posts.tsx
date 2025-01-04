
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../utils/graphqlQueries';
import PostForm from './PostForm';

const Posts: React.FC = () => {
    const { loading, error, data } = useQuery(GET_USER_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="posts-section">
            <h2>User Posts</h2>
            <PostForm onClose={function (): void {
                throw new Error('Function not implemented.');
            } } />
            <ul>
                {data.posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;