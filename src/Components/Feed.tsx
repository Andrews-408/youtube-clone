import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Video} from './'


export interface CategoryInterface {
     selectedCategory: string,
     setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32fb853c65msh375f8d3305198f6p13834fjsn3790c20fc275',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


const Feed = () => {

    const [selectedCategory , setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    
    
    useEffect(()=>{
        fetch(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}&maxResults=50`, 
                options)
        .then(response => response.json())
        .then(data => setVideos(data.items))
        .catch(err => console.error(err));
    },[selectedCategory])

    return (
        <Stack sx={{flexDirection: {sx: 'column', md:'row'}}}>
            <Box sx={{height: {sx: 'auto', md: '92vh'}, 
                borderRight: '1px solid #3d3d3d',
                px: {sx: 0, md:2}}}>

                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{mt: 1.5, color:"#fff"}}>
                    Copyright 2022 Zuba Media
                </Typography>
            </Box>

            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                     {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
                </Typography>

                <Video videos={videos} direction='row'/>
            </Box>
        </Stack>
    )
}

export default Feed