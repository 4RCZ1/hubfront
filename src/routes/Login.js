import {loginAsync, selectUser, signupAsync} from "../redux/userSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router";
import {paths} from "../router/Router";

const Login = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  if(user.isLoggedIn){
    navigate(paths.main)
  }
  const login = () => {
    const name = document.getElementById("name").value;
    dispatch(loginAsync(name));
  }
  const signup = () => {
    const name = document.getElementById("name").value;
    dispatch(signupAsync(name));
  }
  return (
    <div>
      <h1>Login</h1>
      {user.status === 'failed'? <h3>Login failed</h3>: null}
        <label>
          Name:
          <input type="text" name="name" id="name"/>
        </label>
      <button onClick={login} disabled={user.status === 'loading'}>Login</button>
      <button onClick={signup} disabled={user.status === 'loading'}>Signup</button>
    </div>
  );
}
export default Login;
