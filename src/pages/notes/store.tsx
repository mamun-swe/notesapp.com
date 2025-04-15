import { FC, JSX, useState } from 'react';
import { Card } from 'src/components/card';
import { GoChevronLeft } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'src/components/button';
import { NoteService } from 'src/services/note.service';
import { NoteForm } from 'src/components/forms/note.form';
import { INoteInput } from 'src/interfaces/note.interface';
import { ToasterMessage } from 'src/components/toaster';
import { ExceptionHandeller } from 'src/utilities/exception.handeller';

export const Store: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);

  // handle form submit
  const handleSubmit = async (data: INoteInput) => {
    try {
      setLoading(true);
      const response = await NoteService.create(data);
      if (response && response.status === 201) {
        ToasterMessage.Success({ message: response.data.message });
        navigate('/notes');
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        ExceptionHandeller(error);
      }
    }
  };

  return (
    <Card className="mx-auto">
      <Card.Header className="flex justify-between items-center">
        <p className="text-base font-medium">Create New Note</p>
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
        <NoteForm
          data={null}
          loading={isLoading}
          formType="create"
          onSubmit={handleSubmit}
        />
      </Card.Body>
    </Card>
  );
};
