// import {
//     USER_LOADING,
//     USER_LOADED,
//     AUTH_ERROR,
//     REGISTER_SUCCESS, // added
//     REGISTER_FAIL, // added
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     LOGOUT_SUCCESS
//   } from 'DatingApp/dating/src/components/AccoutAuth/types.jsx';
  
//   export default function(state = initialState, action) {
//     switch (action.type) {
//       // ...
//       case REGISTER_SUCCESS: // added
//       case LOGIN_SUCCESS:
//         localStorage.setItem('token', action.payload.token);
//         return {
//           ...state,
//           isLoading: false,
//           isAuthenticated: true,
//           ...action.payload
//         };
//       case AUTH_ERROR:
//       case REGISTER_FAIL: // added
//       case LOGIN_FAIL:
//       case LOGOUT_SUCCESS:
//         localStorage.removeItem('token');
//         return {
//           ...state,
//           isLoading: false,
//           isAuthenticated: false,
//           user: null,
//           token: null
//         };
//       // ...
//     }
//   }
  