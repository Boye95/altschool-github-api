import { useQuery } from '@tanstack/react-query'

// fetch data from github api using react query
const fetchUser = async () => {
  const res = await fetch('https://api.github.com/users/Boye95')
  return res.json()
}

export default function RepoList () {
  const { data, status } = useQuery(['user'], fetchUser)

  console.log(data)
  return <div className=''>Repo List</div>
}
