import Footer from "@/routes/components/footer"
import Header from "@/routes/components/header"
import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
