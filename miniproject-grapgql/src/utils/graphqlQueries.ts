
import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
    query GetUserProfile {
        user {
            name
            email
            address
            phone
            website
            company
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts {
        posts {
            id
            title
            content
        }
    }
`;

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $content: String!) {
        createPost(title: $title, content: $content) {
            id
            title
            content
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $title: String!, $content: String!) {
        updatePost(id: $id, title: $title, content: $content) {
            id
            title
            content
        }
    }
`;

export const GET_USER_ALBUMS = gql`
    query GetUserAlbums {
        albums {
            id
            title
        }
    }
`;

export const GET_USER_TODOS = gql`
    query GetUserTodos {
        todos {
            id
            title
            completed
        }
    }
`;