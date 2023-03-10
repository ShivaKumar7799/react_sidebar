import React from 'react'
import Chat1, { LoginPage } from './Chat1'
import SearchFilter from './SearchFilter'

function Chat() {
const items = [
  "apple",
  "banana",
  "orange",
  "mango",
  "grape"
];
  return (
    <div>
      {/* <LoginPage /> */}
      <SearchFilter items={items} />
    </div>
  )
}

export default Chat