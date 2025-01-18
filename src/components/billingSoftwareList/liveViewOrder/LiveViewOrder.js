import React from 'react'
import LiveViewHeader from './LiveViewHeader'
import LiveViewOrderTab from './liveViewOrderTab/LiveViewOrderTab'

const LiveViewOrder = () => {
  return (
    <div className='card m-2'>
        <h3 className='bg-black p-2 text-white fs-5'>Live View Order</h3>
        <LiveViewHeader />
        <LiveViewOrderTab />
    </div>
  )
}

export default LiveViewOrder