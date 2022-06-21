import {getEventsAsync, selectEvents} from "../../redux/eventsSlice";
import {useAppSelector} from "../../redux/hooks";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Event from "./Event";

const Events = () => {
  const events = useAppSelector(selectEvents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAsync());
  }, [])
  console.log(events.events)
  return (
    <div>
      <h1>Events</h1>
      {events.events.map((event, index) => <Event key={index} id={event._id} name={event.name} owner={event.owner}/>)}
    </div>
  )
}

export default Events;
