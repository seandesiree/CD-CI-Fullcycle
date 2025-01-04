import React from 'react';

const Album: React.FC<{ album: any }> = ({ album }) => (
    <div className="album">
        <h3>{album.title}</h3>
    </div>
);

export default Album;