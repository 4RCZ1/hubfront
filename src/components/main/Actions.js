import actions from "../actions";
import Action from "../Action";
import {useState} from "react";

const Actions = () => {
    const [filter, setFilter] = useState("");


    return(
        <div>
        <input className={"search"} placeholder="Search for Action" onChange={e => setFilter(e.currentTarget.value.toLowerCase())} type={"text"}/>

            {actions.map(action => {
                console.log(action.name);
                if(action.name.toLowerCase().includes(filter))
                return <Action key={action.name} name={action.name} cost={action.cost} />
            })}
        </div>
  )
}
export default Actions;
