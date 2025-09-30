import { useState } from "react"
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";
import { StudySessionList } from "../components/study-session-list";

export function AddStudySession() {
  const [studySession, setStudySession] = useState<StudySession[]>([]);

  function addStudySession(studySession: StudySession): void {
    setStudySession((previous) => [...previous, studySession]);
  }

  return (
    <>
        <h2 className="font-bold text-blue-800 text-xl mb-3">Adicioar novo estudo</h2>

        <StudySessionForm onAdd={addStudySession} />
        <StudySessionList studySessionList={studySession} />
    </>
  );
}