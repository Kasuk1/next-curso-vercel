import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function contact() {
  return (
    <MainLayout>
      <p>This is Contact</p>

      <Link href='/'>Go to Home</Link>
    </MainLayout>
  );
}
