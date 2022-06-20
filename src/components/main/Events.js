import {selectEvents} from "../../redux/eventsSlice";
import Action from "../Action";

const Events = () => {
  const events = useAppSelector(selectEvents);
  return (
    <div>
      <h1>Events</h1>
      {events.events.map((event,index) => <Action cost={event.cost} name={event.name} key={index} />)}
    </div>
  )
}

export default Events;
