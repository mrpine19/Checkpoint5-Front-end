import type { StudySession } from "../types/study-session";

 interface Props {
    studySession: StudySession
}

export function StudySessionCard({ studySession }: Props){
    return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5 hover:p-5 transition delay-150">
      <h2 className="text-lg font-bold text-blue-600">{studySession.subject}</h2>
      <p className="text-gray-600">Minutos: {studySession.minutes}</p>
      <p className="text-gray-600">Data: {studySession.date}</p>
      <p className="text-gray-600">Notas: {studySession.notes}</p>
    </div>
  );
}