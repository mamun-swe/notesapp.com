import { FC, JSX } from 'react';
import { appRoutes } from 'src/routes';
import { useRoutes } from 'react-router-dom';
import { ToasterNotification } from 'src/components/toaster';

export const App: FC = (): JSX.Element => {
  const routes = useRoutes([...appRoutes]);
  return (
    <>
      <ToasterNotification />
      {routes}
    </>
  );
};

export default App;
