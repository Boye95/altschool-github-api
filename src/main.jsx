import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Root, ErrorPage, RepoList, SingleRepo, ErrorBoundary } from './routes'
import { HelmetProvider } from 'react-helmet-async'
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
  },
  {
    path: 'error-boundary',
    element: <ErrorBoundary />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <QueryClientProvider client={client}>
      <React.StrictMode>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </React.StrictMode>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </ErrorBoundary>
)
