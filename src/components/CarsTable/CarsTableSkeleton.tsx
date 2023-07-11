'use client';

import {
  Text,
  TableHead,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeaderCell,
} from '@tremor/react';

export default function CarsTableSkeleton() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">
              <Text>Auction ID</Text>
            </div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Title</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Make</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Model</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Color</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Price</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Pro Quote</div>
          </TableHeaderCell>
          <TableHeaderCell className="cursor-pointer group">
            <div className="flex gap-2">Status</div>
          </TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((item) => (
          <TableRow key={item}>
            <TableCell>
              <div className="w-20 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-[260px] animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-23 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
            <TableCell>
              <div className="w-6 animate-pulse h-4 rounded-tremor-default bg-gray-200"></div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
