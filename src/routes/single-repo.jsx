import { useParams } from 'react-router-dom'

export default function SingleRepo () {
  const { repoId } = useParams()
  return (
    <div className='h-[90%] w-[70%] mx-auto my-auto p-6 rounded-lg shadow-lg bg-white'>
     Repo: {repoId}
    </div>
  )
}
