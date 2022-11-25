import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewUser from './newUser'

export default function Home() {
  return (
    <div>
      <NewUser />
    </div>
  )
}
