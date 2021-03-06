import {deductPointsAsync} from "../../redux/userSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/hooks";
import {selectUser} from "../../redux/userSlice";
import {addEventAsync} from "../../redux/eventsSlice";


const Action = ({name, cost, color}) => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const deductPoints = () => {
    dispatch(deductPointsAsync({name:user.name,points:cost}));
    dispatch(addEventAsync({name:name,owner:user.name}));
  }
  return (
    <div className={'action'} style={{backgroundColor:color}}>
      <div>
        <h1>{name}</h1>
        <h2>cost: {cost}</h2>
      </div>
      <button onClick={deductPoints}>Buy</button>
    </div>
  )
}
export default Action;
