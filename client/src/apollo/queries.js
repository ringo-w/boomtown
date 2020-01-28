import gql from "graphql-tag";

/**
 * Item and user-related queries and mutations.
 */

const ItemFields = gql`
  fragment ItemFields on Item {
    id
    title
    imageurl
    description
    created
    tags {
      id
      title
    }
    itemowner {
      id
      fullname
      email
      bio
    }
    borrower {
      id
      fullname
      email
      bio
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  query items($filter: ID) {
    ...ItemFields
    # @TODO: Query items (optionally by tag id) and return the ItemFields fragment.
  }
  ${ItemFields}
`;

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    id
    bio
    email
    fullname

    items {
      ...ItemFields
    }

    borrowed {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const ALL_TAGS_QUERY = gql`
  query tags {
    id
    title
  }
`;

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($item: NewItemInput!) {
    addItem(item: $item!) {
      id
    }
    # @TODO: Pass the item and image into the addItem mutation as arguments
    # and return the new item id when the mutation is complete.
  }
`;

// /**
//  * Auth-related queries and mutations.
//  */

export const VIEWER_QUERY = gql`
  query viewer {
    id
    email
    fullname
    bio
  }
`;
// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `;

// export const SIGNUP_MUTATION = gql`
//   mutation signup($user: SignupInput!) {
//     # @TODO: Pass the user into the signup mutation as an argument
//     # and return the token and user id.
//   }
// `;

// export const LOGIN_MUTATION = gql`
//   mutation login($user: LoginInput!) {
//     # @TODO: Pass the user into the login mutation as an argument
//     # and return the token and user id.
//   }
// `;
