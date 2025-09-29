import { useState } from "react";
import { Header } from "./components/header"
import type { StudySession } from "./types/study-session";
import { StudySessionList } from "./components/study-session-list";

function App() {
  const [listStudySession, setListSessionStudy] = useState<StudySession[]>([
    {
      id: "1",
      subject: "Matemática",
      minutes: 60,
      date: "29/09/2025",
      notes: "Estudar estatística",
    },
    {
      id: "2",
      subject: "História",
      minutes: 45,
      date: "30/09/2025",
      notes: "Revisar Revolução Francesa",
    },
    {
      id: "3",
      subject: "Biologia",
      minutes: 90,
      date: "01/10/2025",
      notes: "Estudar sistema respiratório",
    },
    {
      id: "4",
      subject: "Química",
      minutes: 30,
      date: "02/10/2025",
      notes: "Fazer exercícios sobre ligações químicas",
    },
    {
      id: "5",
      subject: "Inglês",
      minutes: 75,
      date: "03/10/2025",
      notes: "Praticar leitura e vocabulário",
    },
  ]);

  return (
    <>
      <Header/>
        <main>
          <button
            onClick={() =>
              setListSessionStudy([
                ...listStudySession,
                {
                  id: "3",
                  subject: "Biologia",
                  minutes: 90,
                  date: "01/10/2025",
                  notes: "Estudar sistema respiratório",
                },
              ])
            }
          >
          Adicionar estudo
        </button>

        <StudySessionList studySessionList={listStudySession} />
      </main>
    </>
    
  );
}

export default App
