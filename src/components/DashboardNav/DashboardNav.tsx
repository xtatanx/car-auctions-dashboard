'use client';

import Link from 'next/link';

export default function DashboardNav() {
  return (
    <nav className="flex flex-col gap-2">
      <Link
        className="text-tremor-content hover:text-tremor-brand"
        href="/dashboard"
      >
        Overview
      </Link>
      <Link
        className="text-tremor-content hover:text-tremor-brand"
        href="/dashboard/profits"
      >
        Profits
      </Link>
      <Link
        className="text-tremor-content hover:text-tremor-brand"
        href="/dashboard/csv"
      >
        Export CSV
      </Link>
    </nav>
  );
}
