import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { LightLayout } from '@/components/layouts/LightLayout';
import { ReactNode } from 'react';

export default function about() {
  return (
    <>
      <p>This is About</p>

      <Link href='/'>Go to Home</Link>
    </>
  );
}

about.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
