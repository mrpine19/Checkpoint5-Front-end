import type { StudySession } from "../types/study-session";

 interface StudySessionProps {
    studySession: StudySession
}

export function StudySessionCard({ studySession }: StudySessionProps){
    return (
    <div style={{ border: '1px solid #ccc', padding: "1rem" }}>
      <h2>{studySession.subject}</h2>
      <p>Minutos: {studySession.minutes}</p>
      <p>Data: {studySession.date}</p>
      <p>Notas: {studySession.notes}</p>
    </div>
  );
}