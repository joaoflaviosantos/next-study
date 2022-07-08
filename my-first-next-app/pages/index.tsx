import type { GetStaticProps, NextPage } from 'next'

interface OrgData {
  login: string;
  description: string;
  blog: string;
}

const Home: NextPage = ({ org }) => {
  return (
  <div>
    <h1>{ org.login }</h1>
    <h3>{ org.description }</h3>

    <p><b>Site:</b> <a href={ org.blog }>{ org.name }</a></p>
  </div>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.github.com/orgs/rocketseat`)
  const data = await response.json()

  return {
    props: {
      org: data,
    },
    revalidate: 3600 * 24 * 31
  }
}