import type { StudySession } from "../types/study-session";
import { StudySessionResume } from "./study-session-resume";

interface StudySessionListProps{
    studySessionList: StudySession[];
}

export function StudySessionList({ studySessionList }: StudySessionListProps){
    return (
        <>
        <h2>Lista de assuntos para estudar</h2>
        {studySessionList.map((value) => {
            return <StudySessionResume studySession={value} />;
        })}
        </>
    );
}