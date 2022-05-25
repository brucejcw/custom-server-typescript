import Link from 'next/link'
import styled from 'styled-components'
import { useStores } from '@client/hooks/useStores'
import { observer } from 'mobx-react'
import { GetServerSidePropsContext } from 'next'
import Todo from '@client/components/Todo'

const StyledDiv = styled.div`
    background: yellow;
`

const Home = () => {
    console.log('render home page')
    const { shopping } = useStores()
    return (
        <StyledDiv>
            <ul>
                <li>
                    <Link href="/a" as="/a">
                        <a>a</a>
                    </Link>
                </li>
                <li>
                    <Link href="/b" as="/b">
                        <a>b</a>
                    </Link>
                </li>
                <button onClick={() => shopping.add()}>add shopping</button>
                <ul>
                    {shopping.list.map((item: any) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </ul>
            <Todo />
        </StyledDiv>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    console.log(context)
    return {
        props: {
            token: 123,
        }, // will be passed to the page component as props
    }
}

export default observer(Home)
