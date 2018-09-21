import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => {
  return (
    <Layout>
      <h1>Blog</h1>

      <PostLink id="hello-next.js" title="Hello next.js" />
      <PostLink id="learning-next.js" title="Learning next.js" />
      <PostLink id="deployment" title="Deploy Apps with Zeit" />
    </Layout>
  )
}
