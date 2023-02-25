import React from 'react'
import { VideoInterface } from './types'
import {Stack, Box} from '@mui/material'
import {VideoCard, ChannelCard} from './'



const Video : React.FC<VideoInterface> = ({videos, direction}) => {
    console.log(videos)
    return (
        <Stack direction={direction==='column'? 'column': 'row'} flexWrap='wrap' justifyContent='start'
         gap={1}>
            {videos.map((item, idx)=>(
                <Box key={idx}>
                    {item.id.videoId && <VideoCard videoDetails={item}/>}
                    {item.id.channelId && <ChannelCard videoDetails={item}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Video