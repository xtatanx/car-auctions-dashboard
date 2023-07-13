'use client';

import { Text } from '@tremor/react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaCaretDown } from 'react-icons/fa';
import { PiSignOut } from 'react-icons/pi';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

type UserAvatarProps = {
  className?: string;
};

export default function UserAvatar({ className }: UserAvatarProps) {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
        <button className="p-4 rounded-tremor-default shadow-tremor-card ring-1 ring-tremor-ring flex flex-row gap-2 items-center focus-visible:ring-2 focus-visible:ring-tremor-brand focus-visible:outline-none">
          <div className="min-w-0">
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
          </div>
          <FaCaretDown className="flex-shrink-0"></FaCaretDown>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          <PiSignOut size={16} className="mr-2"></PiSignOut>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
