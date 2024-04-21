import Footer from "./components/Shared/Footer/Footer"
import Navbar from "./components/Shared/Navbar/Navbar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </main>
    )
}