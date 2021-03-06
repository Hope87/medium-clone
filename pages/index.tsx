import type { NextPage } from 'next'
import Head from 'next/head'
import { Posts } from '../components'
import {sanityClient} from '../sanity'
import { IPost } from '../typings'

interface HomeProps {
  posts: [IPost]
}

const Home: NextPage<HomeProps> = ({posts}) => {

  
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
         <h1 className="text-6xl max-w-xl font-serif">
           <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read and connect</h1>
         <h2>It is easy and free to post your thinking on any topic and connect with millions of readers</h2>
        </div>

          <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="medium logo"/>
      </div>

      {/* Posts */}
      <Posts posts={posts}/>
    </div>
  )
}

export default Home


export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts
    }
  }
}