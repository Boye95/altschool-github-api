import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2 font-urbanist'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <span className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] font-urbanist text-[10rem] text-emerald-700 '>{error.status}</span>
        <p>
          <i className='text-xl'>{error.statusText || error.message}</i>
        </p>
        {error.status === 404 && (
          <Link
            to='/'
            className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm'
          >
            Go Back Home
          </Link>
        )}
      </div>
    </div>
  )
}
