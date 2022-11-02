import { useQuery } from '@tanstack/react-query'

// fetch data from github api using react query
const fetchRepos = async () => {
  const res = await fetch('https://api.github.com/users/Boye95/repos')
  return res.json()
}

export default function RepoList () {
  const { data: repo, status } = useQuery(['repos'], fetchRepos)

    console.log(repo)
  return (
    <div className='h-[90vh] w-[70%] mx-auto my-auto p-6 rounded-lg shadow-lg bg-white'>
      <div className='h-full'>
        <h2 className='text-3xl font-urbanist underline decoration-wavy decoration-slate-500'>
          Repositories.
        </h2>

        <div className='mt-[3rem] p-2 font-worksans h-[80%] flex flex-col gap-3 overflow-y-scroll'>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <p>Error Loading</p>
          ) : status === 'success' ? (
            repo.map(repo => {
              return (
                <div className='flex justify-between w-[80%] border-2 rounded-lg p-4 shadow-md cursor-pointer hover:ring-2 ring-offset-2'>
                  <p className=''>{repo.name}</p>
                  <p className=''>{repo.language}</p>
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
