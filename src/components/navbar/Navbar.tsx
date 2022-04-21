import { useRef } from 'react';
import { Button } from 'components/button';
import { Twirl as Hamburger } from 'hamburger-react';
import { activateSidebar, addToken, RootState } from 'library';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PAGE_LINKS } from 'utils';

function Navbar() {
  const reduxState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const panelRef = useRef<OverlayPanel>(null);

  return (
    <nav
      className="z-10 sticky top-0 bg-black  border-b-2 w-full  px-4 text-white mb-8"
      data-testid="navbar">
      <OverlayPanel ref={panelRef}>
        <Button toggleFunction={() => dispatch(addToken(''))}>Logout</Button>
      </OverlayPanel>
      <div className="max-w-[68rem] flex items-center justify-between mx-auto">
        <div className="flex flex-col font-bold">
          <span>{reduxState.user.display_name || 'Unknown'}</span>
          <span>{reduxState.user.followers.total || 0} followers</span>
        </div>

        <Button className="px-0 lg:hidden my-5" toggleFunction={() => dispatch(activateSidebar())}>
          <Hamburger toggled={reduxState.sidebar.isOpen} size={25} />
        </Button>

        <div className=" items-center gap-4 hidden lg:flex">
          <ul className="flex items-center gap-2">
            {PAGE_LINKS.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} className="custom-link">
                    {item.text}{' '}
                  </Link>
                </li>
              );
            })}
          </ul>

          <img
            className="w-12 h-12 rounded-full"
            onClick={(e) => panelRef.current!.toggle(e)}
            src={
              reduxState.user.images.length
                ? reduxState.user.images[0].url
                : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }
            alt="User Profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
