import UserAvatar from '@/components/UserAvatar';
import { Title } from '@tremor/react';
import { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import DashboardNav from '@/components/DashboardNav';
import AuthProvider from '@/components/AuthProvider';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <AuthProvider session={session}>
      <div className="grid min-h-screen gap-4 grid-cols-[theme(spacing.60)_1fr]">
        <aside className="bg-white border-gray-200 border-r w-60">
          <div className="fixed top-0 bottom-0 left-0 right-0 overflow-hidden w-60 p-4 flex flex-col">
            <Title className="mb-8">Auto trader AG</Title>
            <DashboardNav></DashboardNav>
            <UserAvatar className="mt-auto"></UserAvatar>
          </div>
        </aside>
        <div className="overflow-y-auto w-full">{children}</div>
      </div>
    </AuthProvider>
  );
}
