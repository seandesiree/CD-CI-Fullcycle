
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_ALBUMS } from '../utils/graphqlQueries';
import Album from './Album';

const Albums: React.FC = () => {
    const { loading, error, data } = useQuery(GET_USER_ALBUMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="albums-section">
            <h2>User Albums</h2>
            <div className="album-list">
                {data.albums.map(album => (
                    <Album key={album.id} album={album} />
                ))}
            </div>
        </div>
    );
};

export default Albums;