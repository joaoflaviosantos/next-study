import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const Member: NextPage = ({ user }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return (
            <p>Loading data...</p>
        )
    }

    return (
        <div>
            <img src={ user.avatar_url } alt={ user.name } width="80" style={{ borderRadius: 40 }} />
            <h1>{ user.name }</h1>
            <p>{ user.bio }</p>
        </div>
    )
}

export default Member

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api.github.com/orgs/rocketseat/members`)
    const data = await response.json()

    const paths = data.length > 0 ? data.map(member => {
        return {
            params: {
                login: member.login
            }
        }
    }) : []

    return {
        paths,
        fallback: true // false --> without new incremental values/routes/paths
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { login } = context.params;

    const response = await fetch(`https://api.github.com/users/${login}`)
    const data = await response.json()

    return {
        props: {
            user: data,
        },
        revalidate: 3600 * 24 * 31
    }
}