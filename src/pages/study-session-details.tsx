import { useLocation, useParams } from "react-router-dom";
import { StudySessionCard } from "../components/study-session-card";

export function StudySessionDetails() {
    const { id } = useParams();
    const { state } = useLocation();

    return (
        <>
            <h2 className="font-bold text-gray-600 text-xl mb-3">Detalhes da sessão de estudo</h2>
            <p className="font-bold text-gray-600 text-xl mb-3">ID da sessão: {id}</p>
            <StudySessionCard studySession={state.studySession} />
        </>
    );
}