import { ReactNode } from 'react';

export interface IRoute {
  path: string;
  title: string;
  element: ReactNode | null;
  children?: IRoute[];
}
