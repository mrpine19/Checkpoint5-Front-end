import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./components/loading";
import { ErrorFallback } from "./components/error-fallback";

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
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/add" element={<AddStudySession />} />
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
