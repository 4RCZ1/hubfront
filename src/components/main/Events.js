import {getEventsAsync, selectEvents} from "../../redux/eventsSlice";
import {useAppSelector} from "../../redux/hooks";
import {useDispatch} from "react-redux";
import {Fragment, useEffect} from "react";
import Event from "./Event";

const Events = () => {
  const events = useAppSelector(selectEvents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAsync());
  }, [])
  return (
    <Fragment>
      <h1>Event Queue</h1>
      {events.events.map((event, index) => <Event key={index} id={event._id} name={event.name} owner={event.owner}/>)}
    </Fragment>
  )
}

export default Events;
