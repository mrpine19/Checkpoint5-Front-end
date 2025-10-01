import { useMemo } from "react"
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";

interface AddStudySessionProps {
  studySessions: StudySession[];
  onAdd: (studySession: StudySession) => void;
}

export function AddStudySession({ studySessions, onAdd }: AddStudySessionProps) {

  const studySessionMinutes = useMemo(() => {
    let studyMinutesRealized: number = 0;

    studySessions.forEach((value) => {
      studyMinutesRealized += value.minutes;
    });

    const hours = Math.floor(studyMinutesRealized / 60);
    const minutes = studyMinutesRealized % 60;

    return `${hours}:${minutes}`;
  }, [studySessions]);

  return (
    <>
        <h2>Adicioar novo estudo</h2>
        <h3>Total de horas estudadas: {studySessionMinutes}</h3>

        <StudySessionForm onAdd={onAdd} />
    </>
  );
}