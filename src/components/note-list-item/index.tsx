import { FC, Fragment, JSX } from 'react';
import { IoMdEye, IoMdTrash } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import { INote } from 'src/interfaces/note.interface';
import { PrimaryButton } from 'src/components/button';

interface Props extends INote {
  allowBorder: boolean;
  onShow: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const NoteListItem: FC<Props> = ({
  allowBorder,
  id,
  title,
  content,
  onShow,
  onEdit,
  onDelete,
}): JSX.Element => {
  return (
    <Fragment>
      <div
        className={`w-full p-2 ${allowBorder ? 'border-b border-primary' : ''}`}
      >
        <div className="flex justify-between items-center gap-2">
          <div className="grow">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs font-normal leading-relaxed">{content}</p>
          </div>
          <div className="flex gap-1 shrink-0">
            <PrimaryButton
              type="button"
              buttonType="primary"
              outline
              className="!rounded-full !p-1.5"
              onClick={() => onShow(id)}
            >
              <IoMdEye size={17} />
            </PrimaryButton>
            <PrimaryButton
              type="button"
              buttonType="primary"
              outline
              className="!rounded-full !p-1.5"
              onClick={() => onEdit(id)}
            >
              <MdModeEditOutline size={17} />
            </PrimaryButton>
            <PrimaryButton
              type="button"
              buttonType="primary"
              outline
              className="!rounded-full !p-1.5"
              onClick={() => onDelete(id)}
            >
              <IoMdTrash size={17} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Note list item preloader
export const NoteListItemPreloader: FC = (): JSX.Element => {
  return (
    <div className="w-full border-b p-2 space-y-2 border-primary">
      <div className="w-1/2 h-2 rounded-full bg-primary animate-pulse" />
      <div className="w-1/3 h-2 rounded-full bg-primary animate-pulse" />
    </div>
  );
};
