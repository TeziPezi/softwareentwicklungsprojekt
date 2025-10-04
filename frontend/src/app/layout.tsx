import './styles/globals.css';
import Header from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <>
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
   </> 
  )
}
