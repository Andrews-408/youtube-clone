import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/system';
import {Feed, Navbar, VideoDetails, ChannelDetails, SearchFeed} from './Components'



export default function App() {
  return (
   <BrowserRouter>
       <Box sx={{background: '#000'}}>
        <Navbar />
        <Routes>
            <Route path='/' index element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
   </BrowserRouter>
  );
}
