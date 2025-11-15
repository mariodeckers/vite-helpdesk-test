import { Route, Routes } from "react-router"
import {
  ChatPage,
  DashboardPage,
  HomePage,
  KnowledgeBasePage,
  NotFoundPage,
  RootLayout,
  TicketsPage,
} from "./index"

export function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kb" element={<KnowledgeBasePage />} />
        <Route path="tickets" element={<TicketsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
