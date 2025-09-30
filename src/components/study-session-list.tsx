import type { StudySession } from "../types/study-session";
import { StudySessionResume } from "./study-session-resume";

interface StudySessionListProps{
    studySessionList: StudySession[];
}

export function StudySessionList({ studySessionList }: StudySessionListProps){
    return (
        <>
        <h2 className="font-bold text-gray-600 text-xl mb-3">Lista de assuntos para estudar</h2>
        {studySessionList.map((value) => {
            return <StudySessionResume studySession={value} />;
        })}
        </>
    );
}