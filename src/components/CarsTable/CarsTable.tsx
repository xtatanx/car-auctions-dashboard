'use client';

import { Suspense, useMemo, useState } from 'react';
import {
  Text,
  TableHead,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeaderCell,
  Badge,
} from '@tremor/react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import CarsTableActions from '@/components/CarsTableActions';
import TablePagination from '@/components/TablePagination';
import { useRouter, useSearchParams } from 'next/navigation';
import CarsTableSkeleton from './CarsTableSkeleton';

const status = ['n/a', 'in review', 'acquired', 'sold'];
const badgeColors = ['red', 'yellow', 'blue', 'green'] as const;

const getKey = (a, b, key) => {
  let derivedA;
  let derivedB;

  if (key == 'proquote') {
    derivedA = a.proQuote.avg;
    derivedB = b.proQuote.avg;
  } else {
    derivedA = a[key];
    derivedB = b[key];
  }

  return [derivedA, derivedB];
};

export default function CarsTable({ data, count, rowsPerPage }) {
  const [state, setState] = useState({
    direction: null,
    sortKey: null,
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const proccessedData = useMemo(() => {
    if (!state.direction || !state.sortKey) {
      return data;
    }

    return data.sort((a, b) => {
      const [derivedA, derivedB] = getKey(a, b, state.sortKey);

      switch (state.sortKey) {
        case 'title':
        case 'make':
        case 'model':
        case 'color':
          if (state.direction == 'asc') {
            return derivedA < derivedB ? -1 : derivedA > derivedB ? 1 : 0;
          } else {
            return derivedB < derivedA ? -1 : derivedB > derivedA ? 1 : 0;
          }

        case 'auctionId':
        case 'price':
        case 'proquote':
        case 'status':
          if (state.direction == 'asc') {
            return derivedA - derivedB;
          } else {
            return derivedB - derivedA;
          }
      }
    });
  }, [data, state.direction, state.sortKey]);

  const handleSort = (key) => {
    const newState = { ...state };

    if (
      !newState.direction ||
      (newState.direction && newState.sortKey != key) ||
      (newState.sortKey == key && newState.direction == 'desc')
    ) {
      newState.direction = 'asc';
    } else {
      newState.direction = 'desc';
    }

    newState.sortKey = key;

    setState(newState);
  };

  const renderChevron = (key) => {
    const classes =
      state.sortKey == key
        ? 'opacity-100 text-gray-400'
        : 'opacity-0 text-gray-400 group-hover:opacity-100 transition-opacity';

    if (
      !state.direction ||
      state.sortKey != key ||
      (state.direction == 'asc' && state.sortKey == key)
    ) {
      return <HiChevronUp className={classes} size={22}></HiChevronUp>;
    } else {
      return <HiChevronDown className={classes} size={22}></HiChevronDown>;
    }
  };

  const handlePageChange = (event, newPage) => {
    const url = new URL('/dashboard', window.location.origin);
    url.searchParams.set('page', newPage);
    router.push(url.toString());
  };

  const page = Number(searchParams.get('page'));
  const key = JSON.stringify(searchParams);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('auctionId')}
            >
              <div className="flex gap-2">
                <Text>Auction ID</Text>
                {renderChevron('auctionId')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('title')}
            >
              <div className="flex gap-2">
                Title
                {renderChevron('title')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('make')}
            >
              <div className="flex gap-2">
                Make
                {renderChevron('make')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('model')}
            >
              <div className="flex gap-2">
                Model
                {renderChevron('model')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('color')}
            >
              <div className="flex gap-2">
                Color
                {renderChevron('color')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('price')}
            >
              <div className="flex gap-2">
                Price
                {renderChevron('price')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('proquote')}
            >
              <div className="flex gap-2">
                Pro Quote
                {renderChevron('proquote')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell
              className="cursor-pointer group"
              onClick={() => handleSort('status')}
            >
              <div className="flex gap-2">
                Status
                {renderChevron('status')}
              </div>
            </TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proccessedData.map((item) => (
            <TableRow key={item.auctionId}>
              <TableCell>
                <a
                  href={`https://app.acvauctions.com/auction/${item.auctionId}`}
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  {item.auctionId}
                </a>
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.make}</TableCell>
              <TableCell>{item.model}</TableCell>
              <TableCell>{item.color}</TableCell>
              <TableCell>
                {new Intl.NumberFormat('us', {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'narrowSymbol',
                }).format(item.price)}
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat('us', {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'narrowSymbol',
                }).format(item.proQuote.avg)}
              </TableCell>
              <TableCell>
                <Badge color={badgeColors[item.status]}>
                  {status[item.status]}
                </Badge>
              </TableCell>
              <TableCell>
                <CarsTableActions></CarsTableActions>
              </TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPage={rowsPerPage}
        page={page}
        count={count}
        onPageChange={handlePageChange}
      ></TablePagination>
    </div>
  );
}
