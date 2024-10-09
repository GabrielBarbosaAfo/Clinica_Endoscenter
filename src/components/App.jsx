import { useState } from 'react'
// Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// (Opcional) Importa o JavaScript do Bootstrap se você precisar dos componentes interativos
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default App
