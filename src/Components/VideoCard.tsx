import React from 'react'
import { VideoType } from './types'
import {Link} from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { demoChannelTitle, demoThumbnailUrl, demoVideoTitle, 
        demoChannelUrl, demoVideoUrl } from '../Utils/Constants'

const VideoCard: React.FC<VideoType>= ({videoDetails}) => {
    const {id, snippet} = videoDetails
    return (
        <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none' , borderRadius: 0}}>
            <Link to={id.videoId ? `/video/${id.videoId}`: demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    sx={{width: 358, height: 180}}
                    />
            </Link>
            <CardContent sx={{backgroundColor: '#1e1e1e',
                height: '106px'}}>
                <Link to={id?.videoId ? `/video/${id?.videoId}`: demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                       {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>  
               </Link>
               <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                       {snippet?.channelTitle.slice(0,50) || demoChannelTitle.slice(0,60)}
                       <CheckCircle sx={{fontSize:12, color: 'gray', ml: '5px'}}/>
                    </Typography>  
               </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard