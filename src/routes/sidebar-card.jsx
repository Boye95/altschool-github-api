import { useQuery } from '@tanstack/react-query'
import avatar from '../assets/avatar.jpg'
import { GiShadowFollower } from 'react-icons/gi'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaGlobeAfrica, FaTwitter } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'

// fetch data from github api using react query
const fetchProfile = async () => {
  const res = await fetch('https://api.github.com/users/Boye95')
  return res.json()
}

export default function SidebarCard () {
  const { data, status } = useQuery(['profile'], fetchProfile)

  console.log(status)
  return (
    <aside className='w-[25%] flex flex-col gap-11 items-center p-2 bg-slate-300'>
      <header className='text-4xl font-bold font-urbanist text-center underline decoration-wavy decoration-slate-500'>
        ALT-GITHUB-API
      </header>

      <div className='flex flex-col items-center gap-4'>
        <div className='h-[15rem] w-[15rem] rounded-xl shadow-xl bg-slate-50 overflow-hidden'>
          <img
            src={status === 'success' ? data.avatar_url : avatar}
            alt='profileimg'
            className='w-full h-full'
          />
        </div>
        <h2 className='font-worksans font-normal text-2xl text-center'>
          {status === 'success' ? data.name : 'Loading...'}
        </h2>
        <p className='text-center'>
          {status === 'success' ? data.bio : 'Loading...'}
        </p>
        <p className='flex items-center justify-start gap-2'>
          <GiShadowFollower />
          <span className=''>
            {status === 'success' ? data.followers : 'Loading...'}
            <span className='px-1'>followers</span>
          </span>
          <GoPrimitiveDot />
          <span className=''>
            {status === 'success' ? data.following : ''}
            <span className='px-1'>following</span>
          </span>
        </p>

        <div className=''>
          <p className=''>Repo Count</p>
          {status === 'success' ? data.public_repos : 'Loading...'}
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
