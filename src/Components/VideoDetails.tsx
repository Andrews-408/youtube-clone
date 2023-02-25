import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography, Box, Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Video} from './'
import { options } from './Feed'
import { VideoInterface } from './types'


const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState<VideoInterface>()
    const [videos, setVideos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`, 
                options)
        .then(response => response.json())
        .then(data => setVideoDetail(data.items[0]))
        .catch(err => console.error(err));

        fetch(`https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&maxResults=50`, 
                options)
        .then(response => response.json())
        .then(data => setVideos(data.items))
        .catch(err => console.error(err));
    }, [id])
    
    console.log(videoDetail)
    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
               <Box flex={1}>
                  <Box sx={{width: '100%' ,
                             top: '86px', marginBottom: '20px', overflow:'auto'}}>
                        <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}
                         className='react-player' controls={true}/>
                          <Typography color='#fff' variant='body1' fontWeight='bold' p={2}>
                            {videoDetail?.snippet?.title} 
                         </Typography>
                         <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                            color: '#fff'}} py={1} px={2}>
                              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <Typography sx={{variant: {sm: 'h6', md: 'subtitle1'}}} color='#fff' 
                                            marginTop='-10px' alignItems='center'>
                                    <span>{videoDetail?.snippet?.channelTitle}</span>
                                    <CheckCircle sx={{fontSize:'15px', color: 'gray' , ml: '5px'}}/>
                                </Typography>
                              </Link>
                              <Stack direction='row' alignItems='center' gap='20px'>
                                <Typography variant='body1' sx={{opacity: 0.7}}>
                                    {videoDetail?.statistics?.viewCount} views
                                </Typography>
                                <Typography variant='body1' sx={{opacity: 0.7}}>
                                    {videoDetail?.statistics?.likeCount} likes
                                </Typography>
                              </Stack>
                         </Stack>
                  </Box>
               </Box> 
               <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' 
                 alignItems='center' height='500px' overflow='scroll'>
                    <Video videos={videos} direction = 'column'/>
               </Box>
            </Stack>
             
           

        </Box>
    )
}

export default VideoDetails