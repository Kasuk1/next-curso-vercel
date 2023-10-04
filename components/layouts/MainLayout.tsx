import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';
import { FC, ReactNode } from 'react';

type MainLayout = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Igor</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.description}>{children}</div>
      </main>
    </>
  );
};
