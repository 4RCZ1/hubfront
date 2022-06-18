import {insertUser} from "./userFetcher";

const NewUser = ({addUser}) => {

  const submitUser = () => {
    const user = {
      name: document.getElementById('name').value,
      points: document.getElementById('points').value
    }
    insertUser(user).then(res => console.log(res.data)).catch(err => console.log(err));
    addUser(user)
  }


  return (
    <div>
      <input id={'name'} type="text" placeholder="name" />
      <input id={'points'} type="text" placeholder="points" />
      <button onClick={submitUser}>submit</button>
    </div>
  )
}
export default NewUser;
