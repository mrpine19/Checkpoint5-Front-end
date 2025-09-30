import { useState } from "react";
import { Header } from "./components/header"
import type { StudySession } from "./types/study-session";
import { StudySessionList } from "./components/study-session-list";
import { StudySessionForm } from "./components/study-session-form";

function App() {
  const [listStudySession, setListSessionStudy] = useState<StudySession[]>([]);

  function addStudySession(studySession: StudySession) {
    setListSessionStudy((previous) => [...previous, studySession]);
  }

  return (
    <>
      <Header/>
        <main>
        <StudySessionForm onAdd={addStudySession} />
        <StudySessionList studySessionList={listStudySession} />
      </main>
    </>
    
  );
}

export default App
