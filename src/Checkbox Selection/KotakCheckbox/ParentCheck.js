import React from 'react'

function ParentCheck({item, accessList, setKotak, index}) {

  const childToggle = (event) =>  {
    const {name,checked} = event.target;

    if(name === item.description){
        let tempSubModules = accessList[index].children.map((user) =>( {...user, status : checked}))
        let tempModule = {...accessList[index], children : tempSubModules, status : checked}
        accessList.splice(index,1,tempModule);
        setKotak(new Date())
    } else {
        let tempSubModules = accessList[index].children.map((user) => user.description === name ? {...user, status : checked} : user )
        let tempModule = {...accessList[index], children : tempSubModules, status : tempSubModules.filter((module) => module.status === true ).length > 0 }
        accessList.splice(index,1,tempModule);
        setKotak(new Date())
    }

  }

  return (
    <div>
       <label>
              <input
                type="checkbox"
                checked = {accessList[index].status}
                value={accessList[index]?.status}
                onChange={ (event) => {
                  childToggle(event);
                } }
                className="check-box"
                name={accessList[index]?.description}
              />
              {accessList[index]?.description}
              {
                accessList[index]?.children?.map((childItem, index) => (
                  <div style={{
                    marginLeft: '30px',
                  }}
                  >
                    <label>
                      <input
                        type="checkbox"
                        checked={childItem?.status}
                        value={childItem?.status}
                        onChange={childToggle}
                        className="check-box"
                        name={childItem.description}
                      />
                      {childItem?.description}
                    </label>
                  </div>
                ))
              }
        </label>
    </div>
  )
}

export default ParentCheck


// import React ,{useState} from 'react'

// function ParentCheck({item}) {
//   const [subModules,setSubModules] = useState(item.children);

//   const childToggle = (event) =>  {
//     const {name,checked} = event.target;

//     if(name === item.description){
//       let tempSubModules = subModules.map((user) =>( {...user, status : checked}))
//       setSubModules(tempSubModules)
//     } else {
//     let tempSubModules = subModules.map((user) => user.description === name ? {...user, status : checked} : user )
//     setSubModules(tempSubModules)
//     }

//   }

//   return (
//     <div>
//        <label>
//               <input
//                 type="checkbox"
//                 checked = {subModules.filter((user) => user?.status === true).length > 0}
//                 value={item?.status}
//                 onChange={childToggle }
//                 className="check-box"
//                 name={item.description}
//               />
//               {item?.description}
//               {
//                 subModules?.map((item, index) => (
//                   <div style={{
//                     marginLeft: '30px',
//                   }}
//                   >
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={item?.status}
//                         value={item?.status}
//                         onChange={childToggle}
//                         className="check-box"
//                         name={item.description}
//                       />
//                       {item?.description}
//                     </label>
//                   </div>
//                 ))
//               }


//         </label>
//     </div>
//   )
// }

// export default ParentCheck