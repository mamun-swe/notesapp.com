import { FC, Fragment, JSX, useCallback, useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Card } from 'src/components/card';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'src/components/button';
import {
  NoteListItem,
  NoteListItemPreloader,
} from 'src/components/note-list-item';
import { NoContent } from 'src/components/204';
import { INote } from 'src/interfaces/note.interface';
import { SomethingWentWrong } from 'src/components/500';
import { NoteService } from 'src/services/note.service';
import { IWillDestroy } from 'src/interfaces/destroy.interface';
import { ConfirmationModal } from 'src/components/modals/confirmation.modal';
import { ToasterMessage } from 'src/components/toaster';

export const Notes: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [data, setData] = useState<INote[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [willDelete, setWillDelete] = useState<IWillDestroy>({
    id: null,
    loading: false,
    open: false,
  });

  // Retrieve all notes
  const retrieveData = useCallback(async () => {
    try {
      const response = await NoteService.index();
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
    retrieveData();
  }, [retrieveData]);

  // handle delete note
  const handleDelete = async (id: number) => {
    try {
      setWillDelete({ ...willDelete, loading: true });
      const response = await NoteService.destroy(id);
      if (response && response.status === 200) {
        ToasterMessage.Success({ message: response.data.message });
        retrieveData();
      }
      setWillDelete({ id: null, loading: false, open: false });
    } catch (error: any) {
      if (error) {
        setWillDelete({ id: null, loading: false, open: false });
      }
    }
  };

  return (
    <Fragment>
      <Card className="mx-auto">
        <Card.Header className="flex justify-between items-center">
          <p className="text-base font-medium">List of Notes</p>
          <Link to={'/notes/create'}>
            <PrimaryButton
              type="button"
              buttonType="primary"
              outline
              className="!rounded-full !p-1"
            >
              <BsPlus size={22} />
            </PrimaryButton>
          </Link>
        </Card.Header>
        <Card.Body>
          {/* Preloader preview */}
          {isLoading &&
            !isError &&
            !data.length &&
            [...Array(3)].map((_, i) => <NoteListItemPreloader key={i} />)}

          {/* No data preview */}
          {!isLoading && !isError && !data.length && (
            <NoContent message="No notes found" />
          )}

          {/* Server error preview */}
          {!isLoading && !data.length && isError && <SomethingWentWrong />}

          {/* Data preview */}
          {!isLoading &&
            !isError &&
            data.length > 0 &&
            data.map((note, index) => (
              <NoteListItem
                key={index}
                id={note.id}
                title={note.title}
                content={note.content}
                allowBorder={index !== data.length - 1}
                onShow={(id) => navigate(`/notes/show/${id}`)}
                onEdit={(id) => navigate(`/notes/update/${id}`)}
                onDelete={(id) =>
                  setWillDelete({ id, loading: false, open: true })
                }
              />
            ))}
        </Card.Body>
      </Card>

      {/* Delete confirmation modal */}
      <ConfirmationModal
        open={willDelete.open}
        loading={willDelete.loading}
        message="Are you sure you want to delete this note?"
        onClose={() => setWillDelete({ id: null, loading: false, open: false })}
        onConfirm={() => handleDelete(willDelete.id)}
      />
    </Fragment>
  );
};
