import { Navigate } from 'react-router-dom';
import { IRoute } from 'src/interfaces/route.interface';
import { Notes } from 'src/pages/notes/index';
import { Store as NoteStore } from 'src/pages/notes/store';
import { Show as NoteShow } from 'src/pages/notes/show';
import { Update as NoteUpdate } from 'src/pages/notes/update';
import { NotFound } from 'src/pages/404';
import { MainLayout } from 'src/layouts/main.layout';

export const appRoutes: IRoute[] = [
  {
    path: '',
    title: '',
    element: <MainLayout />,
    children: [
      { path: '/', title: 'Home', element: <Navigate to="/notes" /> },
      { path: '/notes', title: 'Notes', element: <Notes /> },
      { path: '/notes/create', title: 'Create', element: <NoteStore /> },
      { path: '/notes/show/:id', title: 'Show', element: <NoteShow /> },
      { path: '/notes/update/:id', title: 'Update', element: <NoteUpdate /> },
      { path: '*', title: '404', element: <NotFound /> },
    ],
  },
];
