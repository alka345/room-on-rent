import React from 'react'

function A() {
  return (
    <>
    <div>
<div className='flex justify-around'><h2>Ground Floor</h2><h3 className='mr-11'>Availability</h3></div>
<div className='flex justify-around'><p>Right wing:Two rooms + kitchen + Toilet + bathroom </p><div> Available</div></div>
{/* Use toggle to show availability */}
<div className='flex justify-around'><p>Left wing:one rooms + kitchen + Toilet + bathroom</p><div>Not Available</div></div>
    </div>
    <div>
<div className='flex justify-around'><h2>First Floor</h2><h3 className='mr-11'>Availability</h3></div>
<div className='flex justify-around'><p>Right wing :Two rooms + kitchen+Toilet +bathroom </p><div>Not Available</div></div>
<div className='flex justify-around'><p>Left wing  :Two rooms + kitchen+Toilet +bathroom </p><div>Not Available</div></div>
    </div>
    </>
  )
}

export default A
