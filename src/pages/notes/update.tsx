import { FC, JSX, useCallback, useEffect, useState } from 'react';
import { Card } from 'src/components/card';
import { NoContent } from 'src/components/204';
import { GoChevronLeft } from 'react-icons/go';
import { PrimaryButton } from 'src/components/button';
import { NoteService } from 'src/services/note.service';
import { SomethingWentWrong } from 'src/components/500';
import { NoteForm, NoteFormPreloader } from 'src/components/forms/note.form';
import { INote, INoteInput } from 'src/interfaces/note.interface';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToasterMessage } from 'src/components/toaster';
import { ExceptionHandeller } from 'src/utilities/exception.handeller';

export const Update: FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<INote | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [isUpdating, setUpdating] = useState<boolean>(false);

  // Retrieve a single note
  const retrieveData = useCallback(async ({ id }: { id: number }) => {
    try {
      const response = await NoteService.show(id);
      if (response && response.status === 200) {
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 500);
      }
    } catch (error: any) {
      if (error) {
        setLoading(false);
        setError(true);
      }
    }
  }, []);

  useEffect(() => {
    if (id) retrieveData({ id: Number(id) });
  }, [id, retrieveData]);

  // handle form submit
  const handleSubmit = async (data: INoteInput) => {
    try {
      setUpdating(true);
      const response = await NoteService.update(Number(id), data);
      if (response && response.status === 200) {
        ToasterMessage.Success({ message: response.data.message });
        navigate('/notes');
      }
      setUpdating(false);
    } catch (error: any) {
      if (error) {
        setUpdating(false);
        ExceptionHandeller(error);
      }
    }
  };

  return (
    <Card className="mx-auto">
      <Card.Header className="flex justify-between items-center">
        <p className="text-base font-medium">Update Note Details</p>
        <Link to={'/notes'}>
          <PrimaryButton
            outline
            type="button"
            buttonType="primary"
            className="!rounded-full !p-1"
          >
            <GoChevronLeft size={22} />
          </PrimaryButton>
        </Link>
      </Card.Header>
      <Card.Body>
        {/* Preloader preview */}
        {isLoading && !isError && !data && <NoteFormPreloader />}

        {/* No data preview */}
        {!isLoading && !isError && !data && (
          <NoContent message="Note not found" />
        )}

        {/* Server error preview */}
        {!isLoading && !data && isError && <SomethingWentWrong />}

        {/* Note form preview */}
        {!isLoading && !isError && data && (
          <NoteForm
            data={data}
            formType="edit"
            loading={isUpdating}
            onSubmit={handleSubmit}
          />
        )}
      </Card.Body>
    </Card>
  );
};
