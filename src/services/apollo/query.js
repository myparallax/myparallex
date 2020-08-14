import { gql } from '@apollo/react-hooks'; 

export const LOGIN = gql`

  mutation signIn($login:String! , $password:String!) { 

    signIn(login:$login , password:$password) {
        token
    }
  }

` ;

// export const SIGNUP  = gql `

// mutation signUp($login:String! , $password:String!){
//   signUp(login:$login , password:$password){
//     token 
//   }
// }
// `;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const query = gql`
  query setlogin {
      isLoggedIn
  }
`;

