import {addEvent, removeEventById} from "./eventsSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

// const baseUrl = process.env.BASE_WEBSOCKET || 'ws://localhost:3001/'
const baseUrl = 'wss://hubeventsapp.herokuapp.com/'

const WebSocketManager = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const ws = new WebSocket(baseUrl);
    ws.onopen = () => {
      console.log("connected");
    }
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case "addEvent":
          dispatch(addEvent({owner:data.owner, name:data.name, _id:data._id}));
          break;
        case "removeEvent":
          dispatch(removeEventById(data.id));
          break;
        default:
          console.log("unknown message type");
      }
    }
  },[])
  return null;
}

export default WebSocketManager;
