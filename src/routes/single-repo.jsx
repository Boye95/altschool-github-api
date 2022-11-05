import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { BiLinkExternal } from 'react-icons/bi'
import { Helmet } from 'react-helmet-async'
import moment from 'moment'
import star from '../assets/star.jpg'

const fetchSingleRepo = async repoId => {
  const res = await fetch(`https://api.github.com/repos/Boye95/${repoId}`)
  return res.json()
}

export default function SingleRepo () {
  const { repoId } = useParams()
  const navigate = useNavigate()
  const { data: singleRepo, status } = useQuery(['repo', repoId], () =>
    fetchSingleRepo(repoId)
  )

  // console.log(singleRepo)
  return (
    <>
      <Helmet>
        <title>{`Boye Github API | ${singleRepo?.name}`}</title>
        <meta name='description' content={`This is the detail page for ${singleRepo?.name} repository`} />
        <link rel='canonical' href={`/repo-list/${singleRepo?.name}`} />
      </Helmet>
    <motion.div
      className='absolute top-0 h-full w-full mx-auto my-auto p-6 rounded-lg shadow-md shadow-emerald-500 bg-white'
      initial={{ x: '50%' }}
      animate={{ x: 0 }}
    >
      <div
        className='font-urbanist border-2 w-fit border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 cursor-pointer transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1'
        onClick={() => navigate(-1)}
      >
        Close
      </div>

      <div className='mt-7'>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'success' ? (
          <div className=''>
            <div className='flex gap-4 sm:flex-col'>
              <div className='h-[12rem] w-[12rem] rounded-xl shadow-xl bg-slate-50 overflow-hidden border-2 border-gray-200 ring-offset-2 ring-emerald-300 transition-all hover:ring-2 sm:mx-auto'>
                <img src={star} alt='repoimg' className='w-full h-full' />
              </div>

              <div className='font-urbanist font-normal'>
                <h1 className='text-2xl xs:text-xl'>
                  <span className='text-lg font-light font-worksans'>Name</span>
                  : {singleRepo.name}
                </h1>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    fullName
                  </span>
                  : {singleRepo.full_name}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Description
                  </span>{' '}
                  {singleRepo.description !== null
                    ? singleRepo.description
                    : 'No description for this project'}
                </div>

                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Created at
                  </span>
                  : {moment(singleRepo.created_at).format('lll')}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Updated at
                  </span>
                  : {moment(singleRepo.updated_at).format('lll')}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Language
                  </span>
                  : {singleRepo.language}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Forks
                  </span>
                  : {singleRepo.forks_count}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Watchers
                  </span>
                  : {singleRepo.watchers_count}
                </div>
                <div className='text-xl xs:text-base'>
                  <span className='text-lg font-light font-worksans'>
                    Stars
                  </span>
                  : {singleRepo.stargazers_count}
                </div>
                <div className='text-sm border-2 border-gray-300 rounded-xl w-fit px-2.5 py-0.8'>
                  {singleRepo.visibility}
                </div>
                <div className='mt-2 text-sm flex items-center gap-1 border-2 border-gray-300 rounded-xl w-fit px-2.5 py-0.8 transition-all hover:border-emerald-300'>
                  <BiLinkExternal />{' '}
                  <a href={singleRepo.html_url} target='_blank'>
                    See the code
                  </a>
                </div>
              </div>
            </div>
            {/* Repo: {repoId} */}
          </div>
        ) : null}
      </div>
    </motion.div></>
  )
}
