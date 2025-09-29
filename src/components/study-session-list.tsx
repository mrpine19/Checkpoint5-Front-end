import type { StudySession } from "../types/study-session";
import { StudySessionCard } from "./study-session-card";

interface StudySessionListProps{
    studySessionList: StudySession[];
}

export function StudySessionList({ studySessionList }: StudySessionListProps){
    return (
        <>
        <h2>Lista de assuntos para estudar</h2>
        {studySessionList.map((value) => {
            return <StudySessionCard studySession={value} />;
        })}
        </>
    );
}