import { Button, TablePagination as BasePagination } from '@mui/base';
import TablePaginationActions from '@/components/TablePagination/TablePaginationActions';

function labelDisplayedRows({ from, to, count }) {
  return (
    <>
      <span className="font-bold">{from}</span>-
      <span className="font-bold">{to}</span> of{' '}
      {count !== -1 ? (
        <span className="font-bold">{count}</span>
      ) : (
        `more than ${to}`
      )}
    </>
  );
}

export default function TablePagination({
  page,
  count,
  onPageChange,
  rowsPerPage,
}) {
  return (
    <BasePagination
      labelDisplayedRows={labelDisplayedRows}
      className="shadow-tremor-card"
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[-1]}
      count={count}
      onPageChange={onPageChange}
      page={page}
      slots={{
        actions: TablePaginationActions,
      }}
      slotProps={{
        root: {
          className: 'p-4',
        },
        actions: {
          className: 'flex gap-2',
        },
        select: {
          className: '',
        },
        selectLabel: {
          className: '',
        },
        menuItem: {
          className: '',
        },
        displayedRows: {
          className: 'ml-auto',
        },
        toolbar: {
          className: 'flex gap-4 items-center',
        },
        spacer: {
          className: '',
        },
      }}
    ></BasePagination>
  );
}
