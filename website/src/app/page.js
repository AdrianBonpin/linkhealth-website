import Image from 'next/image'
import Nav from './components/nav'
import Foot from './components/foot'

export default function Home() {
  return (
    <body>
      <Nav />
      <div className='content'>

      </div>
      <Foot />
    </body>
  )
}