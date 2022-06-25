import {loginAsync, selectUser, signupAsync} from "../redux/userSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router";
import {paths} from "../router/Router";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

const Login = () => {
    const dispatch = useDispatch();
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    if (user.isLoggedIn) {
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
        <div className={"container"}>
            <h1>Login</h1>
            {user.status === 'failed' ? <p className={"error"}>Login failed</p> : null}
            <label>
                <TextField helperText="Please enter your name" color={"secondary"} id="name" label="Name" />
                {/*  <input type="text" name="name" id="name"/>
                   <PersonIcon fontSize={"large"}/>
               <TextField label="Name: " color="secondary" focused id="name"/>
           */}
            </label><br/>

            <ButtonGroup>
                <Button startIcon={<LoginIcon/>} variant={"contained"} color={"primary"} onClick={login}
                        disabled={user.status === 'loading'}>Log in</Button>
                <Button color={"secondary"} variant={"contained"} onClick={signup} disabled={user.status === 'loading'}>Sign
                    up</Button>
            </ButtonGroup>
        </div>
    );
}
export default Login;
