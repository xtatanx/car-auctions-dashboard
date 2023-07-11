import Logout from '@/components/Logout';
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
      <div>
        <aside className="bg-white border-gray-200 border-r p-4 flex flex-col h-screen fixed left-0 top-0 w-64">
          <Title className="mb-7">Auto trader AG</Title>
          <div className="mb-8">
            <UserAvatar></UserAvatar>
          </div>
          <DashboardNav></DashboardNav>
          <div className="mt-auto text-right">
            <Logout></Logout>
          </div>
        </aside>
        <div className="pl-64">{children}</div>
      </div>
    </AuthProvider>
  );
}
