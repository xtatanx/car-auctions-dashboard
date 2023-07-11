import { TablePaginationActions as BaseTablePaginationActions } from '@mui/base';
import { PiCaretRight, PiCaretLeft } from 'react-icons/pi';

function ActionButton({ children, ...rest }) {
  return (
    <button
      className="border p-2  rounded-tremor-default hover:bg-tremor-background-subtle disabled:opacity-50 disabled:hover:bg-inherit"
      {...rest}
    >
      {children}
    </button>
  );
}

function NextPageIcon() {
  return (
    <span>
      <PiCaretRight size={22}></PiCaretRight>
    </span>
  );
}
function BackPageIcon() {
  return (
    <span>
      <PiCaretLeft size={22}></PiCaretLeft>
    </span>
  );
}

export default function TablePaginationActions(props) {
  return (
    <BaseTablePaginationActions
      {...props}
      slots={{
        nextButton: ActionButton,
        backButton: ActionButton,
        nextPageIcon: NextPageIcon,
        backPageIcon: BackPageIcon,
      }}
    ></BaseTablePaginationActions>
  );
}
