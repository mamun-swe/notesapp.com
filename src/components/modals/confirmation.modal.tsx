import { FC, JSX } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { PrimaryButton } from 'src/components/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  loading: boolean;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationModal: FC<Props> = ({
  open = false,
  loading = false,
  message = '',
  onClose = () => {},
  onConfirm = () => {},
}): JSX.Element => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-xl p-6 space-y-6 rounded-3xl bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-black">Are you sure?</p>
              <PrimaryButton
                outline
                type="button"
                buttonType="primary"
                className="!rounded-full"
                onClick={onClose}
                disabled={loading}
              >
                <MdOutlineClose size={20} />
              </PrimaryButton>
            </div>

            <div className="text-center">
              <p className="text-sm font-normal text-black">{message}</p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <PrimaryButton
                  type="button"
                  onClick={onConfirm}
                  disabled={loading}
                  buttonType="primary"
                  className="!px-4"
                >
                  {loading ? 'Deleting...' : 'Confirm'}
                </PrimaryButton>
                <PrimaryButton
                  outline
                  type="button"
                  buttonType="primary"
                  onClick={onClose}
                  disabled={loading}
                  className="!px-4"
                >
                  Cancel
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
