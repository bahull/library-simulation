import axios from 'axios';

// CONSTANTS
const UPDATE_USERNAME = 'UPDATE_NAME';
const UPDATE_USERNAMEID = 'UPDATE_NAME';
const UPDATE_USERNAME_INFO = 'UPDATE_NAME_INFO';
const UPDATE_ID = 'UPDATE_ID';

// ACTION BUILDERS
export function updateUsernameID(username, password) {
  return {
    type: UPDATE_USERNAMEID,
    payload: axios
      .post('/api/auth/login', {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.responseU) {
          console.log(response);
          return response.data;
        } else {
          alert('This is not a valid login, please register before continuing');
        }
      })
  };
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}

export function updateId(userID) {
  return {
    type: UPDATE_ID,
    payload: userID
  };
}

let initialState = {
  username: '',
  userID: 0
};

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAMEID + '_PENDING':
      return Object.assign({}, state, { loading: true });
    case UPDATE_USERNAMEID + '_FULFILLED':
      if (action.payload) {
        return Object.assign({}, state, {
          username: action.payload.responseU,
          userID: action.payload.responseI
        });
      }
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    case UPDATE_ID:
      return Object.assign({}, state, { userID: action.payload });
    default:
      return state;
  }
}
