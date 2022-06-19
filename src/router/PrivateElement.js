import {selectUser} from "../redux/userSlice";
import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router";
import {paths} from "./Router";
import {useEffect} from "react";

const PrivateElement = ({children}) => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate()
  useEffect(() => {
    if(!user.isLoggedIn){
      navigate(paths.login)
    }
  })
  if(!user.isLoggedIn){
    return null;
  }
  return children;
}

export default PrivateElement;
