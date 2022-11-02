import { useQuery } from '@tanstack/react-query'

// fetch data from github api using react query
const fetchUser = async () => {
  const res = await fetch('https://api.github.com/users/Boye95')
  return res.json()
}

export default function RepoList () {
  const { data, status } = useQuery(['user'], fetchUser)

  //   console.log(data)
  return (
    <div className='h-[90vh] w-[70%] mx-auto my-auto p-6 rounded-lg shadow-lg bg-white'>
      <div className=''>
        <h2 className='text-3xl font-urbanist underline decoration-wavy decoration-slate-500'>
          Repositories.
        </h2>

        <div className=""></div>
      </div>
    </div>
  )
}
