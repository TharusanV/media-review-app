import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';

import TVShowPage from "./pages/TVShowPage";
import MoviesPage from "./pages/MoviesPage";
import BooksPage from "./pages/BooksPage";
import AnimePage from "./pages/AnimePage";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<UnknownPage/>} />
        
        <Route path="/tvshows" element={<TVShowPage />} />
        <Route path="/tvshows:id" element={<TVShowPage />} />
       
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies:id" element={<MoviesPage />} />

        <Route path="/anime" element={<AnimePage />} />
        <Route path="/anime:id" element={<AnimePage />} />

        <Route path="/books" element={<BooksPage />} />
        <Route path="/books:id" element={<BooksPage />} />

      </Route>
    )
  );

  return <RouterProvider router={(router)} />;
}

export default App
