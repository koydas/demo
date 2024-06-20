import Link from 'next/link'

export const LinkMobile = () => <Link href='/mobile'>Mobile</Link>
export const LinkDesktop = () => <a href='/desktop'>Desktop</a>

export default function Home() {
  return <>
    <LinkMobile />
    <LinkDesktop />
  </>
}
