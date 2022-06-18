import {deductPointsAsync} from "../redux/userSlice";
import {useDispatch} from "react-redux";

const Action = ({name, cost}) => {
  const dispatch = useDispatch();
  const deductPoints = () => {
    dispatch(deductPointsAsync(cost));
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
