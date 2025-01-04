import { gql, useQuery, useMutation, DocumentNode } from '@apollo/client';

const MY_QUERY = gql`
  query GetSomeData {
    someData {
      id
      name
    }
  }
`;

const MY_MUTATION = gql`
  mutation UpdateSomeData($id: ID!, $name: String!) {
    updateSomeData(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const useGraphql = (query: DocumentNode) => {
    return useQuery(query);
};

export const useGraphqlMutation = (mutation: DocumentNode) => {
    return useMutation(mutation);
};
