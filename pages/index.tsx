import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <p>This is Home</p>
      <div>
        <Link href='/about'>Go to about</Link>
      </div>
    </MainLayout>
  );
}
