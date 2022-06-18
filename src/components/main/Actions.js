import actions from "../actions";
import Action from "../Action";

const Actions = () => {
  return(
    <div>
      {actions.map(action => <Action key={action.name} name={action.name} cost={action.cost} />)}
    </div>
  )
}
export default Actions;
