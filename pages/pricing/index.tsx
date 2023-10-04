import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';

export default function pricing() {
  return (
    <MainLayout>
      <p>This is Pricing</p>

      <Link href='/'>Go to Home</Link>
    </MainLayout>
  );
}
