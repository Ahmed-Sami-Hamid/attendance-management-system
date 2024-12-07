// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { DashboardView } from "./views";
import { AttendanceView } from "./views";
import { NotFoundView } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/attendance" element={<AttendanceView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
