import { ProtectedRoute } from "@/routes/components/protected-route"
import { Route, Routes } from "react-router"
import {
  ChatPage,
  DashboardPage,
  HomePage,
  KnowledgeBasePage,
  LoginPage,
  NotFoundPage,
  RootLayout,
  TicketsPage,
  UnauthorizedPage,
} from "./index"

export function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kb" element={<KnowledgeBasePage />} />
        <Route path="tickets" element={<TicketsPage />} />
        <Route
          path="chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute requiredRole="agent">
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
