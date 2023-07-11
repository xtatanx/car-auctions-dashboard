import { useEffect, useRef, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

import { Popper, FocusTrap, ClickAwayListener } from '@mui/base';

export default function CarsTableActions() {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={anchorEl}
        className="hover:text-blue-500 transition block h-full px-2"
        onClick={() => setOpen(!open)}
      >
        <HiDotsHorizontal size={24}></HiDotsHorizontal>
      </button>
      <Popper open={open} anchorEl={anchorEl.current} placement="bottom-end">
        <FocusTrap open={open}>
          <div tabIndex={-1}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div
                role="presentation"
                className="py-2 flex flex-col shadow-tremor-card border-tremor-brand rounded-tremor-default bg-tremor-background"
              >
                <button className="px-4 text-xs min-h-[32px] text-start hover:bg-gray-200">
                  Mark as sold
                </button>
                <button className="px-4 text-xs min-h-[32px] text-start hover:bg-gray-200">
                  Mark as acquired
                </button>
              </div>
            </ClickAwayListener>
          </div>
        </FocusTrap>
      </Popper>
    </>
  );
}
