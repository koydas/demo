import Link from 'next/link'
import styled from 'styled-components'

export const LinkMobile = () => <Link href='/mobile'>Mobile</Link>
export const LinkDesktop = () => <Link href='/desktop'>Desktop</Link>

const List = styled.ul``
const Item = styled.li``

const Home = ({}) =>
  <List>
    <Item>
      <LinkMobile />
    </Item>
    <Item>
      <LinkDesktop />
    </Item>
  </List>


export default Home