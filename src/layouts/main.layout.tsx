import { FC, JSX } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: FC = (): JSX.Element => {
  return (
    <div className="container space-y-4">
      <div className="text-center">
        <p className="text-2xl font-semibold">Notes App</p>
      </div>
      <Outlet />
    </div>
  );
};
