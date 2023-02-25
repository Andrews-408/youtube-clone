import React from 'react'
import { VideoType } from './types'
import { Link } from 'react-router-dom'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { demoProfilePicture } from '../Utils/Constants'

const ChannelCard: React.FC<VideoType> = ({videoDetails}) => {
    return (
        <Box
            sx={{boxShadow: 'none',
                borderRadius: '20px',
        }}
        >
            <Link to={`/channel/${videoDetails?.id?.channelId}`}>
                <CardContent sx={{display:'flex', flexDirection: 'column',
                                    justifyContent: 'center', textAlign: 'center', 
                                    color: '#fff', width: '358px'}}>

                    <CardMedia 
                        image={videoDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        sx={{borderRadius:'50%', height: '180px',
                            width: '180px', mb:2, border: '1px solid #e3e3e3',
                            marginLeft: 'auto', marginRight: 'auto'}}
                    />
                    <Typography variant='h6'>
                        {videoDetails?.snippet?.title}
                        <CheckCircle sx={{fontSize: 14, color:'gray', ml:'5px'}}/>
                    </Typography>
                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard