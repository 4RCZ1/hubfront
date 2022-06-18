import './App.css';
import {getUsers} from "./components/userFetcher";
import {useEffect, useState} from "react";
import User from "./components/User";
import NewUser from "./components/NewUser";
import actions from "./components/actions";
import Action from "./components/Action";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(users => {
      setUsers(users.data);
      console.log(users.data);
    })
  }, []);
  return (
    <div className="App">
      <header>
        JD
      </header>
      <main>
        <div>
          <NewUser addUser={user => setUsers([...users, user])}/>
          {users.map(user => <User key={user.id} name={user.name} createdAt={user.createdAt}
                                   deductedPoints={user.deductedPoints}/>)}
          <button onClick={getUsers}>Get Users</button>
        </div>
        <div>
          {actions.map((action, index) => <Action key={index} name={action.name}
                                                  onClick={() => console.log(action.name)}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
