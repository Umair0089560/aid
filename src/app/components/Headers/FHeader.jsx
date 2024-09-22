import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
const FHeader = () => {
  return (
    <div className='f_header'>
<div class="d-flex bd-highlight mb-3">
  <div class="me-auto p-2 bd-highlight">Zakat Calculator</div>
  <div class="flex p-2 bd-highlight"><LuPhoneCall className='me-2 mt-1'/> 03300579957</div>
  <hr className='p-1'/>
  <div class="p-2 bd-highlight">Contact Us</div>
</div>
    </div>
  )
}

export default FHeader