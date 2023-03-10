import React from 'react'

function ProfileCard() {
  return (
    <div>
      <div class="card" style={{width : "400px"}}>
        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fArpf3Pj_m_4-NoQPb85Uq7orkaMu6uacg&usqp=CAU" alt="Card" />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">Some example text.</p>
          <a href="www.google.com" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard