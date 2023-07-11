'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export default function AuthProvider({ children, session }: PropsWithChildren) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
