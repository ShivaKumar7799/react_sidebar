import React from 'react'
import {useState} from 'react'
import ParentCheck from './ParentCheck';
export const localAccessList = [
  {
    'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
    'description': 'Admin user permission management',
    'menu_code': 'ADMINISTRATION',
    'status': true,
    'children': [{
      'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
      'description': 'Department Management',
      'menu_code': 'DEP_MNGT',
      'status': false,
      'children': [],
      'menu_id': '9',
    },
    {
      'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
      'description': 'User Management',
      'menu_code': 'USER_MNGT',
      'status': false,
      'children': [],
      'menu_id': '8',
    },],
    'menu_id': '6',
    'parent_menu_code': 'ADMIN',
  },
  {
    'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
    'description': 'CRN and related policy management',
    'menu_code': 'CUST_MNGT',
    'status': false,
    'children': [
      {
        'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
        'description': 'CRN Management',
        'menu_code': 'CRN_MNGT',
        'status': false,
        'children': [],
        'menu_id': '7',
      },],
    'menu_id': '2',
    'parent_menu_code': 'ADMIN',
  },
  {
    'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
    'description': 'View CRN informations',
    'menu_code': 'CUST_MNGT_LITE',
    'status': false,
    'children': [
      {
        'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
        'description': 'CRN Management Lite',
        'menu_code': 'CRN_LITE_MNGT',
        'status': false,
        'children': [],
        'menu_id': '10',
      }],
    'menu_id': '3',
    'parent_menu_code': 'ADMIN',
  },
 
];

function KotakCheckbox() {
 
  const [kotak,setKotak] = useState(localAccessList);

  const [accessList, setAccessList] = useState(localAccessList)
  
  return (
    <div>
      <h2>Kotak Checkbox</h2>
      {accessList.map((item,index) => <ParentCheck setKotak = {setKotak} accessList = {accessList} item={item} index={index} /> )}
      <button onClick = {() => console.log(localAccessList)} >Submit</button>
    </div>
  )
}

export default KotakCheckbox




// import React from 'react'
// import {useState} from 'react'
// import ParentCheck from './ParentCheck';
// export const localAccessList = [
//   {
//     'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//     'description': 'Admin user permission management',
//     'menu_code': 'ADMINISTRATION',
//     'status': true,
//     'children': [{
//       'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//       'description': 'Department Management',
//       'menu_code': 'DEP_MNGT',
//       'status': false,
//       'children': [],
//       'menu_id': '9',
//     },
//     {
//       'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//       'description': 'User Management',
//       'menu_code': 'USER_MNGT',
//       'status': false,
//       'children': [],
//       'menu_id': '8',
//     },],
//     'menu_id': '6',
//     'parent_menu_code': 'ADMIN',
//   },
//   {
//     'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//     'description': 'CRN and related policy management',
//     'menu_code': 'CUST_MNGT',
//     'status': false,
//     'children': [
//       {
//         'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//         'description': 'CRN Management',
//         'menu_code': 'CRN_MNGT',
//         'status': false,
//         'children': [],
//         'menu_id': '7',
//       },],
//     'menu_id': '2',
//     'parent_menu_code': 'ADMIN',
//   },
//   {
//     'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//     'description': 'View CRN informations',
//     'menu_code': 'CUST_MNGT_LITE',
//     'status': false,
//     'children': [
//       {
//         'dept_id': '8192b3ba-b9f0-4d4d-a078-a29456e7c96c',
//         'description': 'CRN Management Lite',
//         'menu_code': 'CRN_LITE_MNGT',
//         'status': false,
//         'children': [],
//         'menu_id': '10',
//       }],
//     'menu_id': '3',
//     'parent_menu_code': 'ADMIN',
//   },
 
// ];

// function KotakCheckbox() {

  

//   return (
//     <div>
//       <h2>Kotak Checkbox</h2>
//       {localAccessList.map((item,index) => <ParentCheck item={item} /> )}
//     </div>
//   )
// }

// export default KotakCheckbox

{/* <div>
      {localAccessList?.map((item: any, index: number) => (
        (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                // checked={item?.status}
                value={item?.description}
                // onChange={() => onClickListItem(index)}
                onChange={() => }
                className="check-box"
              />
              {item?.description}
            </label>
            {
            item?.children?.map((item:any, index: number) => (
              <div style={{
                marginLeft: '30px',
              }}
              >
                <label>
                  <input
                    type="checkbox"
                    // checked={item?.status}
                    value={item?.description}
                    // onChange={() => onClickListItem(index)}
                    className="check-box"
                  />
                  {item?.description}
                </label>
              </div>
            ))
          }
          </div>
        )
      ))}
    </div> */}