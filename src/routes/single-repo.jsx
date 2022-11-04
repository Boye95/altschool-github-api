import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SingleRepo () {
  const { repoId } = useParams()
  const navigate = useNavigate()

  return (
    <motion.div 
    className='absolute top-0 h-full w-full mx-auto my-auto p-6 rounded-lg shadow-lg bg-white'
    initial={{ x: '50%' }}
    animate={{ x: 0 }}
    >
      <div
        className='font-urbanist border-2 w-fit border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 cursor-pointer transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1'
        onClick={() => navigate(-1)}
      >
        Close
      </div>
      Repo: {repoId}
    </motion.div>
  )
}
