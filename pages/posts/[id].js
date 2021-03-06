import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }){
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-extrabold my-4 underline">{postData.title}</h1>
        <div className="text-rose-400">
          <Date dateString={postData.date} />
        </div>
        <div className="customText" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
