import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Root, ErrorPage, RepoList, SidebarCard, SingleRepo } from './routes'
import './index.css'

const client = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'repo-list',
    element: <RepoList />,
    children: [
      {
        path: ':repoId',
        element: <SingleRepo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <ReactQueryDevtools />
  </QueryClientProvider>
)
