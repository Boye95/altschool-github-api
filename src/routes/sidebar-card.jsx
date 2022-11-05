import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import { GiShadowFollower } from 'react-icons/gi'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaGlobeAfrica, FaTwitter } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import { RiGitRepositoryFill } from 'react-icons/ri'

// fetch data from github api using react query
const fetchProfile = async () => {
  const res = await fetch('https://api.github.com/users/Boye95')
  return res.json()
}

export default function SidebarCard () {
  const { data, status } = useQuery(['profile'], fetchProfile)

  // console.log(status)
  return (
    <section className='w-[80%] h-[95%] flex flex-col gap-11 p-6 bg-white shadow-lg md:w-[90%] sm:w-[95%] sm:p-3 xs:h-auto'>
      <header className='flex justify-between items-center w-full mx-auto font-urbanist'>
        <h1 className='text-3xl font-bold text-center underline decoration-wavy decoration-slate-500 cursor-pointer transition-all hover:decoration-emerald-400 sm:text-xl'>
          ALT-GITHUB-API
        </h1>
        <Link
          to='/repo-list'
          className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs'
        >
          Open Repository List
        </Link>
        {/* <Link
          to='error-boundary-test'
          className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-400 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs'
        >
          See ErrorBoundary
        </Link> */}
      </header>

      <div className='font-worksans flex flex-col items-center gap-2'>
        <div className='h-[12rem] w-[12rem] rounded-xl shadow-xl bg-slate-50 overflow-hidden border-2 border-gray-200 ring-offset-2 ring-emerald-300 transition-all hover:ring-2'>
          <img
            src={status === 'success' ? data.avatar_url : avatar}
            alt='profileimg'
            className='w-full h-full'
          />
        </div>
        <h2 className='font-normal text-2xl text-center'>
          {status === 'success' ? data.name : 'Loading...'}
        </h2>
        <p className='text-center text-[0.9rem] px-2'>
          {status === 'success' ? data.bio : 'Loading...'}
        </p>
        <div className='flex flex-col items-center justify-start gap-2 mt-2'>
          <GiShadowFollower size={25} />
          <p className='flex items-center'>
            <span className='flex flex-col items-center'>
              {status === 'success' ? (
                <span className='text-3xl'>{data.followers}</span>
              ) : (
                'Loading...'
              )}
              <span className='px-1'>followers</span>
            </span>
            <GoPrimitiveDot />
            <span className='flex flex-col items-center'>
              {status === 'success' ? (
                <span className='text-3xl'>{data.following}</span>
              ) : (
                'Loading...'
              )}
              <span className='px-1'>following</span>
            </span>
          </p>
        </div>

        <div className='flex flex-col items-center mt-2'>
          <RiGitRepositoryFill size={30} />
          {status === 'success' ? (
            <span className='text-4xl'>{data.public_repos}</span>
          ) : (
            'Loading...'
          )}
          <p className=''>Repo Count</p>
        </div>

        <div className='flex gap-3 justify-center xs:flex-wrap'>
          <p className='flex items-center gap-1'>
            <FaGlobeAfrica />
            {status === 'success' ? data.location : 'Loading...'}
          </p>
          <p className='flex items-center gap-1'>
            <AiOutlineLink size={20} />
            {status === 'success' ? (
              <a href={data.blog} target='_blank' rel='noopener noreferrer'>
                {data.blog}
              </a>
            ) : (
              'Loading...'
            )}
          </p>
          <p className='flex items-center gap-1'>
            <FaTwitter />
            {status === 'success' ? (
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.twitter_username}
              </a>
            ) : (
              'Loading...'
            )}
          </p>
        </div>
      </div>

      <footer className='text-center'>
        By{' '}
        <a
          href='https://boyei.tech'
          target='_blank'
          className='underline decoration-dotted transition-all hover:decoration-red-800'
        >
          Boye
        </a>{' '}
        for{' '}
        <a
          href='https://altschoolafrica.com'
          target='_blank'
          className='underline decoration-dotted transition-all hover:decoration-red-800'
        >
          AltSchoolAfrica
        </a>
      </footer>
    </section>
  )
}
