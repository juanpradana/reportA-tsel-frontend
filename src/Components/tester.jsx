import React from 'react'

const Tester = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col">
      <div className="row-span-3 ...">01</div>
      <div className="col-span-2 ...">02</div>
      <div className="row-span-2 col-span-2 ...">03</div>
    </div>
  )
}

export default Tester