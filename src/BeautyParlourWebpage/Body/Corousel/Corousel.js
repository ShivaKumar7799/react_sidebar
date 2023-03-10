import React from 'react'

function Corousel() {
  return (
    <div>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner" >
          <div class="carousel-item active">
            <img style={{height : "400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRtVMTp9qbtF_w9NvEOE4yeFEqH_r2-39Pg&usqp=CAU" alt="Los Angeles" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img style={{height : "400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC1uvXM_do_FqeQdRJvmJYMYQZ94IMDq78Q&usqp=CAU" alt="Chicago" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img style={{height : "400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4spdkIqOmzHdBNnP-53F3Rnb_tCRVgOiWw&usqp=CAU" alt="New York" class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default Corousel