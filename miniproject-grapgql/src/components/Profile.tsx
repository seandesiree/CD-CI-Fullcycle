import React, { useEffect, useState } from 'react';
import { GET_USER_PROFILE } from '../utils/graphqlQueries';
import { useQuery } from '@apollo/client';

const Profile: React.FC = () => {
    const { loading, error, data } = useQuery(GET_USER_PROFILE);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { name, email, address, phone, website, company } = data.user;

    return (
        <div className="profile-section">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> {website}</p>
            <p><strong>Company:</strong> {company}</p>
        </div>
    );
};

export default Profile;