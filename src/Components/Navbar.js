import React from 'react'
import { Toaster } from 'react-hot-toast';
function Navbar() {
  return (
    <>
<Toaster />
    <div class="bg-base-100  rounded-sm">
    <h1 className="text-blue-400 p-4 text-4xl items-center border-b-2 hover:text-red-600 duration-200">Text Analyzer</h1>
  </div>
    </>
  )
}

export default Navbar