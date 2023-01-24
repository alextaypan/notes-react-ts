import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "../App";

interface NoteLayoutProps {
  notes: Note[];
}

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export const useNote = function useNote() {
  return useOutletContext<Note>();
};
