import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import {Video} from './'
import { useParams } from 'react-router-dom'


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


const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams()
    
    
    useEffect(()=>{
        fetch(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}&maxResults=50`, 
                options)
        .then(response => response.json())
        .then(data => setVideos(data.items))
        .catch(err => console.error(err));
    },[searchTerm])

    return (
        
           
            <Box  sx={{overflowY: 'auto', height: '90vh', width: '100vw',
                            textAlign: 'center',
                             }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                     Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span>
                </Typography>
                <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Video videos={videos} direction='row'/>
                </div>
            </Box>
       
    )
}

export default SearchFeed