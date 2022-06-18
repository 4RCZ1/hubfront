import {loginAsync, selectUser, signupAsync} from "../redux/userSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate()
  if(user.isLoggedIn){
    navigate('/main')
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
        <label>
          Name:
          <input type="text" name="name" id="name"/>
        </label>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
export default Login;
