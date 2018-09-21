import {withRouter} from 'next/router'
import Layout from '../components/Layout'

const Content = withRouter(props => {
  const {router} = props;
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content</p>
    </div>
  )
})

const Page = props => {
  return  (
    <Layout>
      <Content />
    </Layout>
  )
}

export default Page
