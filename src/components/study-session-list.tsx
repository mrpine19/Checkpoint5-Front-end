import { useMemo } from "react";
import type { StudySession } from "../types/study-session";
import { StudySessionResume } from "./study-session-resume";

interface StudySessionListProps{
    studySessionList: StudySession[];
    removeStudySession: (id: string) => void;
}

export function StudySessionList({ studySessionList, removeStudySession }: StudySessionListProps){
    const studySessionTotal = useMemo(() => {
        return studySessionList.length;
    }, [studySessionList]);

    return (
        <>
            <h3 className="font-bold text-gray-600 text-xl mb-3">Total de matérias: {studySessionTotal}</h3>
            <h2 className="font-bold text-green-600 text-xl mb-3">Lista de assuntos para estudar</h2>
            {studySessionList.map((value) => {
                return <StudySessionResume removeStudySession={removeStudySession} studySession={value} />;
            })}
        </>
    );
}