import React from 'react'

function NewWebPage() {
  return (
    <div>
<div class="offcanvas offcanvas-start" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">Website</h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <button class="btn btn-secondary" type="button">A Button</button>
  </div>
</div>

{/* <!-- Button to open the offcanvas sidebar --> */}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
<button type="button" class="btn btn-success">Success</button>
</button>
    </div>
  )
}

export default NewWebPage