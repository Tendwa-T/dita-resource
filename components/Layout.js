import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative max-w-screen pb-4">
      <div className="sticky w-full top-0">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
