function MainLayout({ children }) {
  return (
    <>
      <header>
        Navbar
      </header>

      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
}

export default MainLayout;