import React from 'react'
import SubSideBar from './SubSideBar'

function SideBar2() {
  const data = [
    { name: 'item 1', label: 'Home'
    },
    {
      name: 'item 2',
      label: 'Billing',
      items: [
        { name: 'item 2-1', label: 'Statements'
        },
        {
          name: 'item 2-2',
          label: 'Settings',
          items: [
            { name: 'item 2-2-1', label: 'Profile'
            },
            {
              name: 'item 2-2-2',
              label: 'Settings',
              items: [
                { name: 'item 2-2-2-1', label: 'Profile'
                },
                { name: 'item 2-2-2-2', label: 'Profile'
                },
                {
                  name: 'item 2-2-2-3',
                  label: 'Settings',
                  items: [
                    { name: 'item 2-2-2-3-1', label: 'Profile'
                    },
                    { name: 'item 2-2-2-3-2', label: 'Profile'
                    },
                    { name: 'item 2-2-2-3-3', label: 'Profile'
                    }
                  ],
                },
                {
                  name: 'item 2-2-2-4',
                  label: 'Settings',
                  items: [
                    { name: 'item 2-2-2-4-1', label: 'Profile'
                    },
                    { name: 'item 2-2-2-4-2', label: 'Profile'
                    },
                    { name: 'item 2-2-2-4-3', label: 'Profile'
                    }
                  ],
                },
                { name: 'item 2-2-2-5', label: 'Profile'
                }
              ],
            },
            { name: 'item 2-2-3', label: 'Profile'
            },
            { name: 'item 2-2-4', label: 'Profile'
            }
          ],
        },
        { name: 'item 2-3', label: 'Reports'
        },
        {
          name: 'item 2-4',
          label: 'Settings',
          items: [
            { name: 'item 2-4-1', label: 'Profile'
            },
            { name: 'item 2-4-2', label: 'Profile'
            },
            {
              name: 'item 2-4-3',
              label: 'Settings',
              items: [
                { name: 'item 2-4-3-1', label: 'Profile'
                },
                { name: 'item 2-4-3-2', label: 'Profile'
                },
                { name: 'item 2-4-3-3', label: 'Profile'
                }
              ],
            },
            { name: 'item 2-4-4', label: 'Profile'
            }
          ],
        },
      ],
    },
    {
      name: 'item 3',
      label: 'Settings',
      items: [
        { name: 'item 3-1', label: 'Profile'
        },
        { name: 'item 3-2', label: 'Profile'
        },
        { name: 'item 3-3', label: 'Profile'
        },
        {
          name: 'item 3-4',
          label: 'Settings',
          items: [
            { name: 'item 3-4-1', label: 'Profile'
            },
            { name: 'item 3-4-2', label: 'Profile'
            },
            { name: 'item 3-4-3', label: 'Profile'
            }
          ],
        },
      ],
    },
  ]
  
  return (
    <div>
        { data.map((item, index) => <SubSideBar data = {item} />)}
    </div>
  )
}

export default SideBar2