import { axiosRequest } from 'src/config/axios.config';
import { INoteInput } from 'src/interfaces/note.interface';

// Retrieve list of resources
const index = async () => {
  return await axiosRequest.get('/notes');
};

// Create a new resource
const create = async (data: INoteInput) => {
  return await axiosRequest.post('/notes', data);
};

// Retrieve a single resource
const show = async (id: number) => {
  return await axiosRequest.get(`/notes/${id}`);
};

// Update a single resource
const update = async (id: number, data: INoteInput) => {
  return await axiosRequest.put(`/notes/${id}`, data);
};

// Delete a single resource
const destroy = async (id: number) => {
  return await axiosRequest.delete(`/notes/${id}`);
};

export const NoteService = {
  index,
  create,
  show,
  update,
  destroy,
};
