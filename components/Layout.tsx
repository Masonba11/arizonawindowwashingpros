import Header from './Header'
import Footer from './Footer'
import CallSticker from './CallSticker'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28 lg:pt-32">{children}</main>
      <Footer />
      <CallSticker />
    </div>
  )
}

