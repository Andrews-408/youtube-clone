import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import {useState, useEffect} from 'react'
import {Video, } from './'
import { options } from './Feed'
import { ChannnelInterface } from './types'
import { CheckCircle } from '@mui/icons-material'

const ChannelDetails = () => {
    const {id} = useParams()
    const [channelDetails, setChannelDetails] = useState<ChannnelInterface>()
    const [videos, setVideos] = useState([])
    
    console.log(channelDetails)
    

    useEffect(()=>{
        fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`, options)
            .then(response=> response.json())
            .then(data=> setChannelDetails(data?.items[0]))

        fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date&maxResults=50`, options)
            .then(response=> response.json())
            .then(data=> setVideos(data?.items))
        
    }, [id])

    const backgroundGradient = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(124,243,229,1) 19%, rgba(41,98,103,1) 34%, rgba(61,76,98,1) 73%, rgba(142,8,76,1) 79%, rgba(0,212,255,1) 100%)'

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background: backgroundGradient,
                    zIndex: 10,
                    height: '300px'
                }}/>
                <CardContent sx={{display:'flex', flexDirection: 'column',
                                    justifyContent: 'center', textAlign: 'center', 
                                    color: '#fff', alignItems: 'center', marginTop: '-93px', marginBottom: '30px'}}>
                    <CardMedia 
                        image={channelDetails?.snippet?.thumbnails?.high?.url}
                        sx={{borderRadius:'50%', height: '180px',
                            width: '180px', mb:2, border: '1px solid #e3e3e3'}}
                    />
                    <Typography variant='subtitle1' sx={{alignItems:'center', color:'gray'}}>
                        {channelDetails?.snippet?.title}
                        <CheckCircle sx={{fontSize: 14, color:'gray', ml:'5px'}}/>
                    </Typography>
                    <Typography variant='subtitle2'>
                        {channelDetails?.statistics?.subscriberCount} subscribers
                    </Typography>
                </CardContent>
        </Box>
        <Box display='flex' p='2'>
            <Box sx={{mr: {sm: '100px'}}} />
                <Video videos={videos} direction='row'/>   
        </Box>
    
        </Box>
    )
}

export default ChannelDetails