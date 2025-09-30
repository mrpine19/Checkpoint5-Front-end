import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudySessionResumeProps{
    studySession: StudySession;
}

export function StudySessionResume({ studySession }: StudySessionResumeProps){
    return (
        <div
            style={{
                marginTop: "0.5rem",
                border: "1px solid #ccc",
                width: "80%",
            }}
            >
            <div
                style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                }}
            >
                <h2>{studySession.subject}</h2>
                <Link to={`/studySession/${studySession.id}`} state={{ studySession }}>
                Detalhes
                </Link>
            </div>

            <h3>Data: {studySession.date}</h3>
        </div>
    );
}