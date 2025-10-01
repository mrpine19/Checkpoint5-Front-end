import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { lazy, Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./components/loading";
import { ErrorFallback } from "./components/error-fallback";
import type { StudySession } from "./types/study-session";

const Home = lazy(() =>
  import("./pages/home").then((module) => ({ default: module.Home }))
);

const AddStudySession = lazy(() =>
  import("./pages/add-study-session").then((module) => ({
    default: module.AddStudySession,
  }))
);

const StudySessionDetails = lazy(() =>
  import("./pages/study-session-details").then((module) => ({
    default: module.StudySessionDetails,
  }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((module) => ({
    default: module.NotFound,
  }))
);

function App() {
  const [studySessions, setStudySession] = useState<StudySession[]>([]);

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudySession((prev) => [...prev, studySession]);
  }, []);

  const removeStudySession = useCallback((id: string) => {
    setStudySession((prev) => {
      // procura se o item existe na lista
      const studyToDelete = prev.some((studySession) => studySession.id === id);

      if (studyToDelete) {
        // filtra todos os itens diferentes do que existe na lista
        const newStudies = prev.filter((studySession) => studySession.id !== id);

        return newStudies;
      }

      // se não existir, retorna a lista sem alterações
      return prev;
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <Home removeStudySession={removeStudySession} studySessions={studySessions} />
                  }
                />
                <Route
                  path="/add"
                  element={<AddStudySession onAdd={addStudySession} studySessions={studySessions} />}
                />
                <Route path="/studySession/:id" element={<StudySessionDetails />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
    
  );
}

export default App
