import { FC, JSX, useCallback, useEffect, useState } from 'react';
import { Card } from 'src/components/card';
import { NoContent } from 'src/components/204';
import { GoChevronLeft } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import { INote } from 'src/interfaces/note.interface';
import { PrimaryButton } from 'src/components/button';
import { NoteService } from 'src/services/note.service';
import { SomethingWentWrong } from 'src/components/500';
import { NoteListItemPreloader } from 'src/components/note-list-item';

export const Show: FC = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<INote | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

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

  return (
    <Card className="mx-auto">
      <Card.Header className="flex justify-between items-center">
        <p className="text-base font-medium">Note Details</p>
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
        {isLoading && !isError && !data && <NoteListItemPreloader />}

        {/* No data preview */}
        {!isLoading && !isError && !data && (
          <NoContent message="Note not found" />
        )}

        {/* Server error preview */}
        {!isLoading && !data && isError && <SomethingWentWrong />}

        {/* Data preview */}
        {!isLoading && !isError && data && (
          <div>
            <p className="text-sm font-medium">{data.title}</p>
            <p className="text-xs font-normal leading-relaxed">
              {data.content}
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
