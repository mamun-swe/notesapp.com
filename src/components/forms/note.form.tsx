import { FC, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from 'src/components/button';
import { INote, INoteInput } from 'src/interfaces/note.interface';
import { HookFormTextareaInput } from '../input/textarea.input';
import { HookFormTextInput } from 'src/components/input/text.input';

interface Props {
  loading: boolean;
  data: INote | null;
  formType: 'create' | 'edit';
  onSubmit: (data: INoteInput) => void;
}

export const NoteForm: FC<Props> = ({
  loading,
  formType,
  data,
  onSubmit,
}): JSX.Element => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<INoteInput>();

  const handleFormSubmit = (data: INoteInput) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <HookFormTextInput
        name="title"
        label="Note Title"
        type="text"
        control={control}
        error={errors.title}
        defaultValue={data?.title || ''}
        placeholder="Enter title"
        rules={{ required: 'Title is required' }}
      />

      <HookFormTextareaInput
        name="content"
        label="Note Content"
        rows={6}
        control={control}
        error={errors.content}
        defaultValue={data?.content || ''}
        placeholder="Enter content"
        rules={{ required: 'Note content is required' }}
      />

      <div className="text-right">
        <PrimaryButton
          type="submit"
          buttonType="primary"
          className="text-sm !px-6 !py-3"
          disabled={loading}
        >
          {formType === 'create'
            ? loading
              ? 'Creating...'
              : 'Create'
            : loading
              ? 'Updating...'
              : 'Update'}
        </PrimaryButton>
      </div>
    </form>
  );
};

// Note form preloader
export const NoteFormPreloader: FC = (): JSX.Element => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full h-[50px] bg-primary animate-pulse" />
      <div className="w-full h-24 bg-primary animate-pulse" />
    </div>
  );
};
