import { useState } from "react";
import type { StudySession } from "../types/study-session";

interface StudySessionFormProps {
    onAdd: (studySession: StudySession) => void;
}

export function StudySessionForm({ onAdd }: StudySessionFormProps) {
    const [subject, setSubject] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");

    function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const studySession: StudySession = {
      id: crypto.randomUUID(),
      subject: subject,
      minutes: minutes,
      date: date,
      notes: notes,
    };

    onAdd(studySession);

    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "0.5rem",
      }}
    >
      <label htmlFor="subject-name">Nome da matéria</label>
      <input
        type="text"
        id="subject-name"
        placeholder="Nome da matéria"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />

      <label htmlFor="study-duration">Por quantos minutos você irá estudar?</label>
      <input
        type="number"
        id="study-duration"
        placeholder="Duração"
        onChange={(e) => setMinutes(Number(e.target.value))}
        value={minutes}
      />

      <label htmlFor="study-notes">Observações para esse estudo (exemplo: fazer revisão)</label>
      <input
        type="text"
        id="study-notes"
        placeholder="Notas"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />

      <label htmlFor="study-date">Que dia você vai estudar essa matéria?</label>
      <input
        type="date"
        id="study-date"
        placeholder="Dia do estudo"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button type="submit">Adicionar estudo</button>
    </form>
  );
}