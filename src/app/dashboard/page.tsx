import CarsTable, { CarsTableSkeleton } from '@/components/CarsTable';
import getCars from '@/lib/db/getCars';
import { Card, Title } from '@tremor/react';
import { Suspense } from 'react';

export default async function Dashboard({ searchParams }) {
  const rowsPerPage = 10;
  const page = Number(searchParams?.page ?? null);
  const { data, count } = await getCars(page, rowsPerPage);

  return (
    <main className="px-10 py-14 h-full">
      <Title>Overview</Title>
      <Card className="mt-6">
        <Suspense fallback={<CarsTableSkeleton></CarsTableSkeleton>}>
          <CarsTable
            data={data}
            count={count}
            rowsPerPage={rowsPerPage}
          ></CarsTable>
        </Suspense>
      </Card>
    </main>
  );
}
