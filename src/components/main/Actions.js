import actions from "../actions";
import Action from "./Action";
import {useState} from "react";

const Actions = () => {
  const [filter, setFilter] = useState("");


  return (
    <div>
      <input className={"search"} placeholder="Search for Action"
             onChange={e => setFilter(e.currentTarget.value.toLowerCase())} type={"text"}/>
      <div className={'actions'}>
        {actions.map(action => {
          if (action.name.toLowerCase().includes(filter))
            return <Action key={action.name} name={action.name} cost={action.cost}/>
          return null;
        })}
      </div>
    </div>
  )
}
export default Actions;
