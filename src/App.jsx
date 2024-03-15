import { useState } from 'react'

import { RouterProvider} from "react-router-dom";
import router from './Component/Router/Routes';

function App() {


  return (
    <div  className='max-w-screen-2xl px-24 mx-auto'>
          <RouterProvider router={router} />
   </div>
  )
}

export default App
