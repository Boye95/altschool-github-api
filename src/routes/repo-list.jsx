import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

// fetch data from github api using react query
const fetchRepos = async page => {
  const res = await fetch(
    `https://api.github.com/users/Boye95/repos?page=${page}&per_page=6`
  )
  return res.json()
}

export default function RepoList () {
  const [page, setPage] = useState(1)
  // useQuery hook to fetch data from github api
  const { data: repo, status } = useQuery(
    ['repos', page],
    () => fetchRepos(page),
    { keepPreviousData: true }
  )

  console.log(repo)
  return (
    <div className='h-[90%] w-[70%] mx-auto my-auto p-6 rounded-lg shadow-lg bg-white'>
      <div className='h-full'>
        <h2 className='text-3xl font-urbanist underline decoration-wavy decoration-slate-500'>
          Repositories.
        </h2>

        <div className='mt-[3rem] p-2 font-worksans h-[80%] flex flex-col gap-3 overflow-y-scroll'>
          <div className='flex justify-between w-[80%] mb-4'>
            <button
              onClick={() => setPage(old => Math.max(old - 1, 1))}
              disabled={page === 1}
              className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-emerald-100 disabled:text-gray-700'
            >
              PREV
            </button>
            <button
              onClick={() =>
                setPage(old => (!repo || !repo.length ? old : old + 1))
              }
              disabled={!repo || !repo.length}
              className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-emerald-100 disabled:text-gray-700'
            >
              NEXT
            </button>
          </div>

          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <p>Error Loading</p>
          ) : status === 'success' ? (
            repo.map(singlerepo => {
              return (
                <div className='flex justify-between w-[80%] border-2 rounded-lg p-4 shadow-md cursor-pointer ring-emerald-300 ring-offset-2 transition-all hover:ring-2 hover:text-gray-100 hover:bg-emerald-500'>
                  <p className=''>{singlerepo.name}</p>
                  <p className=''>{singlerepo.language}</p>
                </div>
              )
            })
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
