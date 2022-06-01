import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Users List | Home</title>
        <meta name="keywords" content="users"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
        <p className={styles.text}> User Details means in respect of each User, that User's full name, number, email address and any specific billing requirements.   </p>
        <Link href="/users/">
          <a className={styles.btn}>See Users Listing</a>
        </Link>
      </div>
    </>
  )
}
