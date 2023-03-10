import React,{useState} from 'react'

const userData = [
  {name : "shiva"}, 
  {name : "kumar"},
  {name : "rajesh"},
  {name : "manoj"}
]

function Checkbox() {
  const [users,setUsers] = useState(userData);
  console.log(users, "users data")
  const toggleCheckbox = (event) => {
    const {name,checked} = event.target;
    if(name == "allSelect"){
      let tempUser = users.map((user) =>( {...user, isChecked : checked}))
      setUsers(tempUser)
    } else {
    let tempUser = users.map((user) => user.name === name ? {...user, isChecked : checked} : user )
    console.log(tempUser, "tempuser")
    setUsers(tempUser)
    }
  }
  return (
    <div>
      <h1>Checkbox selelction</h1>
      <input type="checkbox" checked = {users.filter((user) => user?.isChecked == true).length > 0}  name = "allSelect" onChange={toggleCheckbox} />
      <label>All Select</label>
      {users.map((user,index) => (
        <div style={{marginLeft : "30px"}} key = {index} > 
          <input type="checkbox" checked = {user.isChecked} value = {user.isChecked} name = {user.name} onChange = {toggleCheckbox} />
          <label>{user.name}</label>
        </div>
      ))}                                                
    </div>
  )
}

export default Checkbox