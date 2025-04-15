import { FC, JSX } from 'react';
import { IoDocumentOutline } from 'react-icons/io5';

interface Props {
  message: string;
}

export const NoContent: FC<Props> = ({ message }): JSX.Element => {
  return (
    <div className="w-full text-center space-y-1 p-4">
      <IoDocumentOutline size={40} className="mx-auto text-gray-500" />
      <p className="text-sm font-normal text-gray-500">{message}</p>
    </div>
  );
};
