import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import {
      Login,
      Profile,
      StudentHome,
      FacultyHome,
    } from '../screens'
  import {useDispatch, useSelector, shallowEqual} from 'react-redux';
  
  const ProtectedRoute = ({children, ...rest}) => {
      const authState = useSelector(state => state.authReducer, shallowEqual)
      return (
          <Route
              {...rest}
              render={({ location }) =>
                  authState.refreshToken ? (
                      children
                  ) : (
                      <Redirect
                          to="/"
                      />
                  )
                }
          />
      )
  }
  
  export default () => {
    const authState = useSelector(state => state.authReducer, shallowEqual)
      return (
          <Router>
              <Switch>
                  <Route exact path="/" >
                      <Login />
                  </Route>                 
                  <ProtectedRoute path="/profile" >
                      <Profile />
                  </ProtectedRoute>
                  <ProtectedRoute path="/home" >
                      {
                          authState.role === 'STUDENT'
                          ?
                          <StudentHome />
                          :
                          <FacultyHome />
                      }
                  </ProtectedRoute>
                  <Route path="*">
                      <div>Error Page</div>
                  </Route>
              </Switch>
          </Router>
      )
  }