import { useQuery } from '@tanstack/react-query'
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

  console.log(status)
  return (
    <aside className='w-[25%] flex flex-col gap-11 items-center p-2 py-3 bg-white shadow-lg'>
      <header className='text-4xl font-bold font-urbanist text-center underline decoration-wavy decoration-slate-500'>
        ALT-GITHUB-API
      </header>

      <div className='font-worksans flex flex-col items-center gap-2'>
        <div className='h-[12rem] w-[12rem] rounded-xl shadow-xl bg-slate-50 overflow-hidden'>
          <img
            src={status === 'success' ? data.avatar_url : avatar}
            alt='profileimg'
            className='w-full h-full'
          />
        </div>
        <h2 className='font-normal text-2xl text-center'>
          {status === 'success' ? data.name : 'Loading...'}
        </h2>
        <p className='text-center'>
          {status === 'success' ? data.bio : 'Loading...'}
        </p>
        <div className='flex flex-col items-center justify-start gap-2'>
          <GiShadowFollower size={30} />
          <p className='flex items-center'>
            <span className='flex flex-col items-center'>
              {status === 'success' ? (
                <span className='text-4xl'>{data.followers}</span>
              ) : (
                'Loading...'
              )}
              <span className='px-1'>followers</span>
            </span>
            <GoPrimitiveDot />
            <span className='flex flex-col items-center'>
              {status === 'success' ? (
                <span className='text-4xl'>{data.following}</span>
              ) : (
                ''
              )}
              <span className='px-1'>following</span>
            </span>
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <RiGitRepositoryFill size={30} />
          {status === 'success' ? <span className='text-4xl'>{data.public_repos}</span> : 'Loading...'}
          <p className=''>Repo Count</p>
        </div>

        <div className=''>
          <p className='flex items-center gap-1'>
            <FaGlobeAfrica />
            {status === 'success' ? data.location : 'Loading...'}
          </p>
          <p className='flex items-center gap-1'>
            <AiOutlineLink />
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

      <footer className=''>
        By{' '}
        <a
          href='https://boyei.tech'
          target='_blank'
          className='underline decoration-dotted'
        >
          Boye
        </a>{' '}
        for{' '}
        <a
          href='https://altschoolafrica.com'
          target='_blank'
          className='underline decoration-dotted'
        >
          AltSchoolAfrica
        </a>
      </footer>
    </aside>
  )
}
