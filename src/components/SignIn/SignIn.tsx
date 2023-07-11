'use client';

import { Card, Title, Text, Button } from '@tremor/react';
import { signIn } from 'next-auth/react';
import { BiLogoGoogle } from 'react-icons/bi';

export default function SignIn() {
  return (
    <main className="mx-auto container px-4">
      <div className="grid place-content-center h-screen">
        <Card className="max-w-2xl">
          <Title className="mb-2">Welcome to Auto Trader AG</Title>
          <Text className="mb-4">
            Please use your Google account to connect to the dashboard.
          </Text>
          <Button
            size="lg"
            icon={BiLogoGoogle}
            iconPosition="right"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          >
            Sign in
          </Button>
        </Card>
      </div>
    </main>
  );
}
