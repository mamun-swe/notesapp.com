import { FC, JSX } from 'react';
import { RiSignalWifiErrorLine } from 'react-icons/ri';

export const SomethingWentWrong: FC = (): JSX.Element => {
  return (
    <div className="w-full text-center space-y-1 p-4">
      <RiSignalWifiErrorLine size={40} className="mx-auto text-gray-500" />
      <p className="text-sm font-normal text-gray-500">Something went wrong!</p>
    </div>
  );
};
