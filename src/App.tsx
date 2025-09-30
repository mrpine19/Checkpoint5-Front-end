import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { AddStudySession } from "./pages/add-study-session";
import { StudySessionDetails } from "./pages/study-session-details";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddStudySession />} />
          <Route path="/studySession/:id" element={<StudySessionDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App
