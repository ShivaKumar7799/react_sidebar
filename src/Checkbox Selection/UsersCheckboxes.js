import React, {useState} from 'react'
import './User.css'

const userData = [
  {name : "shiva"}, 
  {name : "kumar"},
  {name : "rajesh"},
  {name : "manoj"}
]
function UsersCheckboxes() {
  const [query,setQuery] = useState("")
  const [filteredData, setFilteredData] = useState(userData)
  const [filterArray, setFilterArray] = useState([])
  const searchHandler = (event) => {
    setQuery(event.target.value)
    setFilteredData(userData.filter((item) => item.name.includes(event.target.value) ))
  }
  const userCheckboxHandle = (event) => {
    const {name,checked} = event.target;
    let tempUser = filteredData.map((item) => item.name === name ? {...item, isChecked : checked } : item )
    setFilteredData(tempUser);
    console.log(tempUser, 'tempuser');
    let newFilterArray = tempUser.map((item,index) => item.isChecked === true ? item.name : "" ).filter((item) => item !== "")
    setFilterArray(newFilterArray)
  }  
   return (
    <div className='container' >
      <h1>Search Users</h1>
      <h2>Filtered Names : {filterArray.join(", ")} </h2>
      <div>
        <input onChange={searchHandler} value = {query} type="text" className="form-control" id="userSearch" placeholder="Enter email" name="email" />
        <div className='filterForm'  >
          {filteredData.map((item,index) => <div key={index} > 
            <input checked = {item.isChecked} name = {item.name} id={item.name} onChange={userCheckboxHandle} className ="form-check-input userCheckbox" type="checkbox" /> 
             <h2> {item.name} : - {item.isChecked === true ? "checked" : ""} </h2>
            <label htmlFor={item.name} >{item.name} </label>                  
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default UsersCheckboxes