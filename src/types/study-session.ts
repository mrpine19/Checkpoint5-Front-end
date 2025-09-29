 export interface StudySession {
    id: string;
    subject: string; // ex: "React", "Estruturas de Dados"
    minutes: number; // duração em minutos
    date: string; // ISO yyyy-mm-dd
    notes: string;
}