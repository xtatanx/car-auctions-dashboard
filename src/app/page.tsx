import SignIn from '@/components/SignIn';

export default function Home() {
  return (
    <main className="mx-auto container px-4">
      <div className="grid place-content-center h-screen">
        <SignIn></SignIn>
      </div>
    </main>
  );
}
