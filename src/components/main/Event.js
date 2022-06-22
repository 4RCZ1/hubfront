import {useDispatch} from "react-redux";
import {useAppSelector} from '../../redux/hooks';
import {selectUser} from '../../redux/userSlice';
import {removeEventAsync, selectEvents} from '../../redux/eventsSlice';

const Event = ({id,name,owner}) => {
  const username = useAppSelector(selectUser).name;
  const status = useAppSelector(selectEvents).status;
  const dispatch = useDispatch();
  const removeEvent = () => {
    dispatch(removeEventAsync(id));
  }
  return (
    <div className={'action'}>
      <div>
        <h1>{name}</h1>
        <h2>owner: {owner}</h2>
      </div>
      {owner === username ? <button onClick={removeEvent} disabled={status!=='idle'}>Remove</button> : null}
    </div>
  )
}

export default Event;
