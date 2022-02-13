const Layout = ({ children }) => {
  return (
    <>
      <div className="h-1/2 bg-gray-500"></div>
      {children}
    </>
  );
};

export default Layout;
