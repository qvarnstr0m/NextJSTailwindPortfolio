import NavBar from '/components/NavBar';
import Me from '/components/Me';
import Footer from '/components/Footer';

export default function Home() {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:px-60 py-8 min-h-screen">
    <div>
      <NavBar />
    </div>
    <div className="flex-grow mt-10">
      <Me />
    </div>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
  )
}
