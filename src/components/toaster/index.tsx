import React from 'react';
import toast, { Toaster, ToastPosition } from 'react-hot-toast';

interface ToasterProps {
  position?: ToastPosition;
  duration?: number;
}

export const ToasterNotification: React.FC<ToasterProps> = ({
  position = 'top-center',
  duration = 3000,
}) => {
  return <Toaster position={position} toastOptions={{ duration }} />;
};

interface MessageProps {
  message: string;
}

// success toast notification
const Success = ({ message }: MessageProps): void => {
  toast.success(message, {
    style: {
      background: '#4caf50',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#4caf50',
    },
  });
};

// error toast notification
const Error = ({ message }: MessageProps): void => {
  toast.error(message, {
    style: {
      background: '#f44336',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#f44336',
    },
  });
};

// info toast notification
const Info = ({ message }: MessageProps): void => {
  toast(message, {
    style: {
      background: '#2196f3',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#2196f3',
    },
  });
};

export const ToasterMessage = { Success, Error, Info };
