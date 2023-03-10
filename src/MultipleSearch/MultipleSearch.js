import React, { useEffect, useState } from 'react'
import "./MultipleSearch.css"

function MultipleSearch() {
  const [tableData, setTableData] = useState([])
  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      setTableData(json)
      setItems(json)
    })
  }, [])

  useEffect(() => {
      const tableItems = items.map((item) => {
        return {...item, completed : item.completed == true ? "completed" : "pending"}
      } )

      const filteredData = tableItems.filter((item) => {
        return Object.keys(item).some( key => 
          item[key]?.toString()?.toLowerCase()?.includes(searchText))
      } )

      setTableData(filteredData)

  }, [searchText])

  return (
    <div className='container' >
      <h1>Multiple Search</h1>
      <div id='searchContainer' >
        <input autoComplete='off' type="text" value={searchText} placeholder = "search table columns data" name = "search" id="search" onChange={(event) => setSearchText(event.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
           {tableData.map((item, index) => <tr> 
              <td>{index + 1}</td>
              <td> {item.title} </td>
              <td> {item.completed == true  ? "completed" : item.completed == "completed" ? "completed" : "pending" } </td>
           </tr> )}
           {tableData.length === 0 && <tr> <td colSpan={3} >No Records Found</td> </tr>}
        </tbody>
      </table>
    </div>
  )
}

export default MultipleSearch