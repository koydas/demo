import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

export const LinkMobile: React.FC = () => <Link href='/mobile'>Mobile</Link>
export const LinkDesktop: React.FC = () => <Link href='/desktop'>Desktop</Link>

const List = styled.ul``
const Item = styled.li``

const Home: React.FC = () => (
  <List>
    <Item>
      <LinkMobile></LinkMobile>
    </Item>
    <Item>
      <LinkDesktop></LinkDesktop>
    </Item>
  </List>
)

export default Home