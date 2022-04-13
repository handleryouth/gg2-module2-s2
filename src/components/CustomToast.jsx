import React from 'react'
import { Toast } from 'primereact/toast'

function CustomToast({ customRef }) {
  return <Toast className="w-[280px] prose sm:w-auto" ref={customRef} />
}

export default CustomToast
