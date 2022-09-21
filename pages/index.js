import Head from "next/head";
import Home from "../components/home";
import About from "../components/about";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Education from "../components/education";
import Experience from "../components/experience";

export default function Main() {
  return (
    <html className="scroll-smooth bg-dasar">
      <Head>
        <title> UI Developer - Ghani.Azh</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="md:p-0 md:pb-8 pt-10 pb-4 px-6 flex-col">
        <div className="md:p-0 py-2.5 px-2.5 w-100">
          <Home />
          <About />
          <Education />
          <Experience />
          <Footer />
        </div>
        <Sidebar />
      </div>
    </html>
  );
}
