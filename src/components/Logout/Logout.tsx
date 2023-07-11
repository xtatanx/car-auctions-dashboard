'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button
      className="font-bold text-sm px-4 py-2"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Logout
    </button>
  );
}
