import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import MainLayout from "./layouts/MainLayout";
import UnknownPage from "./pages/UnknownPage"
import HomePage from "./pages/HomePage";

import TVShowPage from "./pages/TVShowPage"
import MoviesPage from "./pages/MoviesPage"
import AnimePage from "./pages/AnimePage"
import BooksPage from "./pages/BooksPage"
import SingleMediaPage from "./pages/SingleMediaPage";

//pipenv shell -> cd backend  -> python manage.py runserver

function App() {
  const API_BASE_URL = 'http://127.0.0.1:8000/api/media/';

  const [allMedia, setAllMedia] = useState([]);

  const fetchAllMedia = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all media:', error);
        throw error;
    }
  };

  const fetchMediaByType = async (mediaType) => {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: { mediaType }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching media by type ${mediaType}:`, error);
        throw error;
    }
  };

  const createMedia = async (mediaData) => {
    try {
        const response = await axios.post(API_BASE_URL, mediaData);
        return response.data;
    } catch (error) {
        console.error('Error creating media:', error);
        throw error;
    }
  };

  const updateMedia = async (mediaId, mediaData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}${mediaId}/`, mediaData);
        return response.data;
    } catch (error) {
        console.error(`Error updating media with ID ${mediaId}:`, error);
        throw error;
    }
  };

  const deleteMedia = async (mediaId) => {
    try {
        await axios.delete(`${API_BASE_URL}${mediaId}/`);
    } catch (error) {
        console.error(`Error deleting media with ID ${mediaId}:`, error);
        throw error;
    }
  };

  useEffect(() => {
    fetchAllMedia()
        .then(data => {setAllMedia(data);})
        .catch(error => {console.log(error);});
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage p_allMedia={allMedia}/>} />
        <Route path='*' element={<UnknownPage/>} />

        <Route path="/tvshow" element={<TVShowPage p_fetchMediaMethod={fetchMediaByType} p_createMedia={createMedia} p_updateMedia={updateMedia} p_deleteMedia={deleteMedia} />} />
        <Route path="/tvshow/:id" element={<SingleMediaPage  />} />
       
        <Route path="/movie" element={<MoviesPage p_fetchMediaMethod={fetchMediaByType} p_createMedia={createMedia} p_updateMedia={updateMedia} p_deleteMedia={deleteMedia} />} />
        <Route path="/movie/:id" element={<SingleMediaPage />} />

        <Route path="/anime" element={<AnimePage p_fetchMediaMethod={fetchMediaByType} p_createMedia={createMedia} p_updateMedia={updateMedia} p_deleteMedia={deleteMedia} />} />
        <Route path="/anime/:id" element={<SingleMediaPage  />} />

        <Route path="/book" element={<BooksPage p_fetchMediaMethod={fetchMediaByType} p_createMedia={createMedia} p_updateMedia={updateMedia} p_deleteMedia={deleteMedia} />} />
        <Route path="/book/:id" element={<SingleMediaPage />} />
      </Route>
    )
  );

  return <RouterProvider router={(router)} />;
}

export default App
