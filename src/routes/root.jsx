import { Helmet } from 'react-helmet-async'
import SidebarCard from './sidebar-card'

export default function Root () {
  return (
    <>
      <Helmet>
        <title>{`Boye Github API | Home`}</title>
        <meta
          name='description'
          content={`This is the homepage that contains author's Github information like name, bio, location, followers, following, public repos, public gists, and more.`}
        />
        <link rel='canonical' href={`/`} />
      </Helmet>

      <main className='w-full h-screen flex justify-center items-center bg-emerald-100'>
        <SidebarCard />
      </main>
    </>
  )
}
