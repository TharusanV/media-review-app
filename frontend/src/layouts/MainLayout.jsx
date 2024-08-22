import { Outlet } from 'react-router-dom'

import Navbar from "../components/Navbar";


const MainLayout = ({p_createMedia, p_updateMedia, p_deleteMedia}) => {
  return (
    <>
      <Navbar p_createMedia={p_createMedia} p_updateMedia={p_updateMedia} p_deleteMedia={p_deleteMedia}/>
      <Outlet/>
    </>
  )
}

export default MainLayout