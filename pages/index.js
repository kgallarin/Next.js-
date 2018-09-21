import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => {
  return (
    <Layout>
      <h1>Blog</h1>

      <PostLink title="Hello next.js" />
      <PostLink title="Learning next.js" />
      <PostLink title="Deploy Apps with Zeit" />
    </Layout>
  )
}
