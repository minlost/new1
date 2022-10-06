import React from 'react'

const Customers = ({excrecise}) =>{
    return (
      <tr>
         <th>{excrecise.name}</th>
          <th>{excrecise.date}</th>
          <th>{excrecise.time}</th>
          <th>{excrecise.number}</th>
          <th>{excrecise.tel}</th>
          <th>{excrecise._id}</th>
          <td>
          </td>
      </tr>
  )
  }
export default Customers