import NavBar from '/components/NavBar';
import Me from '/components/Me';
import Footer from '/components/Footer';
import Github from '/components/Github';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:px-60 py-10 min-h-screen">
    <div>
      <NavBar />
    </div>
    <div className="flex-grow mt-16">
      <Me />
    </div>
    <div className="flex-grow mt-16">
      <Github />
    </div>
    <div className="flex-grow mt-16">
      <Projects />
    </div>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
  )
}
