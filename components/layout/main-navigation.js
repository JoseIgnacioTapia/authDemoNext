import Link from 'next/link';
import { useSession } from 'next-auth/react';
import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();

  console.log(status);
  console.log(session);

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {status !== 'authenticated' && status !== 'loading' ? (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          ) : null}

          {status === 'authenticated' ? (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          ) : null}

          {status === 'authenticated' ? (
            <li>
              <button>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
