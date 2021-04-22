

export const auth = (state = { isLoggedIn: true}, action) => {
  switch (action.type) {
    case "Login_Succsess": {
      return {
        ...state,
        isLoggedIn : true
      }
    }

    case "Logout_Succsess" : {
      return {
        ...state,
        isLoggedIn : false
      }
    }
    default:
      return state;
  }
};
