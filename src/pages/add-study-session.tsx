import { useCallback, useMemo, useState } from "react"
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";
import { StudySessionList } from "../components/study-session-list";

export function AddStudySession() {
  const [studySession, setStudySession] = useState<StudySession[]>([]);

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudySession((previous) => [...previous, studySession]);
  }, []);

  const studySessionMinutes = useMemo(() => {
    let studyMinutesRealized: number = 0;

    studySession.forEach((value) => {
      studyMinutesRealized += value.minutes;
    });

    const hours = Math.floor(studyMinutesRealized / 60);
    const minutes = studyMinutesRealized % 60;

    return `${hours}:${minutes}`;
  }, [studySession]);

  const removeStudySession = useCallback((id: string) => {
    setStudySession((prev) => {
      // procura se o item existe na lista
      const studyToDelete = prev.some((studySession) => studySession.id === id);

      if (studyToDelete) {
        // filtra todos os itens diferentes do que existe na lista
        const newStudies = prev.filter((studySession) => studySession.id !== id);

        return newStudies;
      }

      // se não existir, retorna a lista sem alterações
      return prev;
    });
  }, []);

  return (
    <>
        <h2>Adicioar novo estudo</h2>
        <h3>Total de horas estudadas: {studySessionMinutes}</h3>

        <StudySessionForm onAdd={addStudySession} />
        <StudySessionList removeStudySession={removeStudySession} studySessionList={studySession} />
    </>
  );
}