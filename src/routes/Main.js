import {addPointAsync, selectUser} from "../redux/userSlice";
import {useAppSelector} from "../redux/hooks";
import Actions from "../components/main/Actions";
import {Fragment, useEffect} from "react";
import {useDispatch} from "react-redux";
import Events from "../components/main/Events";
import WebSocketManager from "../redux/webSocketManager";

const Main = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    const timer = setInterval(() => {dispatch(addPointAsync(user.name))}, 10000);
    return () => clearInterval(timer);
  }, [])
  return (
    <Fragment>
      <h1>Name: {user.name}</h1>
      <h2>Points: {user.points}</h2>
      <WebSocketManager/>
      <Actions />
      <Events />
    </Fragment>
  );
}
export default Main;
