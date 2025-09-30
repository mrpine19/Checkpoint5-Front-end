import { useLocation, useParams } from "react-router-dom";
import { StudySessionCard } from "../components/study-session-card";

export function StudySessionDetails() {
    const { id } = useParams();
    const { state } = useLocation();

    return (
        <>
            <h2>Detalhes da sessão de estudo</h2>
            <p>ID da sessão: {id}</p>
            <StudySessionCard studySession={state.studySession} />
        </>
    );
}