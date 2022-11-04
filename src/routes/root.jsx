
import { Outlet } from 'react-router-dom'
import SidebarCard from './sidebar-card'


export default function Root () {
  return (
      <div className='w-full h-screen flex justify-center items-center bg-emerald-100'>
        <SidebarCard />
      </div>
  )
}
