import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudySessionResumeProps{
    studySession: StudySession;
}

export function StudySessionResume({ studySession }: StudySessionResumeProps){
    return (
        <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
            <div className="flex justify-between">
                <h2 className="font-bold text-gray-600">{studySession.subject}</h2>
                <Link to={`/studySession/${studySession.id}`} state={{ studySession }} className="btn">
                    Detalhes
                </Link>
            </div>

            <h3>Data: {studySession.date}</h3>
        </div>
    );
}