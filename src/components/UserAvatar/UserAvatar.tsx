'use client';

import { Text } from '@tremor/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function UserAvatar() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-3">
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt=""
          width={32}
          height={32}
          className="w-11 aspect-square overflow-hidden rounded-full flex-shrink-0 w-8"
        ></Image>
      ) : null}

      <div className="min-w-0">
        {session?.user?.name ? (
          <Text className="font-bold text-tremor-content-strong truncate">
            {session?.user?.name}
          </Text>
        ) : null}
        {session?.user?.email ? (
          <Text className="text-xs text-tremor-content-subtle truncate">
            {session.user.email}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
