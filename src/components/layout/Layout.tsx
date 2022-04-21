import { ReactNode, useEffect } from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import SidebarComponent from 'components/sidebar/Sidebar';
import { ScrollTop } from 'primereact/scrolltop';
import { useLocation } from 'react-router-dom';

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <SidebarComponent />
      <ScrollTop threshold={250} className="left-2 !bg-white" />
      <div
        data-testid="layout"
        className="prose !min-w-[320px] !max-w-none bg-[#1c1b22]  prose-ul:list-none prose-a:no-underline">
        <Navbar />
        <div className="max-w-[68rem] mx-auto px-4 xl:px-0 min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
