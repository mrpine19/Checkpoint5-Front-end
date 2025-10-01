import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudySessionResumeProps{
    studySession: StudySession;
    removeStudySession: (id: string) => void;
}

export function StudySessionResume({ studySession, removeStudySession }: StudySessionResumeProps){
    return (
        <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
            <div className="flex justify-between">
                <h2 className="font-bold text-gray-600">{studySession.subject}</h2>
                <div className="flex flex-col gap-2">
                    <Link
                        to={`/studySession/${studySession.id}`}
                        state={{ studySession }}
                        className="btn"
                    >
                        Acessar detalhes da matéria
                    </Link>

                    <button
                        className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded"
                        onClick={() => removeStudySession(studySession.id)}
                    >
                        Remover matéria
                    </button>
                    </div>
            </div>
            <h3>Data: {studySession.date}</h3>
            <h3>Hora de início: {studySession.startTime}</h3>
        </div>
    );
}