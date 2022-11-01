import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from 'react-router-dom'
import SidebarCard from './sidebar-card'

const queryClient = new QueryClient()

export default function Root () {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-'>
        <SidebarCard />
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
