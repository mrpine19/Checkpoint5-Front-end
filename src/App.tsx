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

  function cleanStudySessionsList() {
    setListSessionStudy([]);
  }

  return (
    <>
      <Header/>
        <main>
          <button onClick={cleanStudySessionsList}>Limpar sessões de estudo</button>
        <StudySessionForm onAdd={addStudySession} />
        <StudySessionList studySessionList={listStudySession} />
      </main>
    </>
    
  );
}

export default App
