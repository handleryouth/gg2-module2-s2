function Layout({ component }) {
  return (
    <div className="prose !min-w-[320px] !max-w-none bg-[#1c1b22]">
      {component}
    </div>
  );
}

export default Layout;
