import {deductPointsAsync} from "../redux/userSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/hooks";
import {selectUser} from "../redux/userSlice";

const Action = ({name, cost}) => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const deductPoints = () => {
    dispatch(deductPointsAsync({name:user.name,points:cost}));
  }
  return (
    <div className={'action'}>
      <h1>{name}</h1>
      <h2>cost:{cost}</h2>
      <button onClick={deductPoints}>{name}</button>
    </div>
  )
}
export default Action;
