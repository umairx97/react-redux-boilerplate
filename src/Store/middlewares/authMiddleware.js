import AuthActions from '../actions/authActions'
import axios from 'axios'; 

class AuthMiddleware { 
  static userLoginMiddleware = (data) => { 
    return dispatch => {

      axios.get("http://localhost:3000").then(response => {
       
        dispatch(AuthActions.userLoginSuccess({user: response.data.data}))

      }).catch(err => { 
        console.log(err.message)
      })
    }
  }

}

export default AuthMiddleware