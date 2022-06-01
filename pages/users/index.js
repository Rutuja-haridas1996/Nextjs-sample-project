import styles from '../../styles/list.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
 

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {
 
  return (
    <div>
      <h1>All Users list</h1>
      {users.map(user => (
        <Link href={'/users/' + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{ user.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Users;