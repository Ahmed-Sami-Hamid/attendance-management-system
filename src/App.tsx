import { useRef } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Components
import { DashboardView } from "./views";
import { AttendanceView } from "./views";
import { NotFoundView } from "./views";
import { MagicModal, Navbar, Sidebar } from "./components";

// Types
import { ModalHandle } from "./components/ui/MagicModal/MagicModal.type";

// Layout Component
const Layout = ({
  generalModalRef,
}: {
  generalModalRef: React.RefObject<ModalHandle>;
}) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet context={{ generalModalRef }} />
    </>
  );
};

function App() {
  // Refs
  const generalModalRef = useRef<ModalHandle>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout generalModalRef={generalModalRef} />}>
          <Route path="/" element={<DashboardView />} />
          <Route path="/attendance" element={<AttendanceView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>

      {/* Global MagicModal */}
      <MagicModal
        body={<></>}
        overlayStyle={{ animation: "var(--fadeIn)" }}
        ref={generalModalRef}
        contentStyle={{ padding: "0" }}
      />
    </BrowserRouter>
  );
}

export default App;
