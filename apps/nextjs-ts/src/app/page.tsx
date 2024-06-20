import Link from 'next/link'
import styled from 'styled-components'

export const LinkMobile = (): JSX.Element => <Link href='/mobile'>Mobile</Link>
export const LinkDesktop = (): JSX.Element => <Link href='/desktop'>Desktop</Link>

const List = styled.ul``
const Item = styled.li``

const Home = (): JSX.Element =>
  <List>
    <Item>
      <LinkMobile />
    </Item>
    <Item>
      <LinkDesktop />
    </Item>
  </List>


export default Home