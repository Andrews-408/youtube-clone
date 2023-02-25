export interface VideoType{
    videoDetails: { 
        id: {
        kind: string,
        videoId: string,
        channelId?: string
            },
         kind: string,
         snippet: {
            channelId: string,
            channelTitle: string,
            description: string,
            liveBroadcastContent: string,
            publishTime: string,
            publishAt: string,
            thumbnails : {
                default : {
                    height: number,
                    url: string,
                    width: number
                    },
                high: {
                    height: number,
                    url: string,
                    width: number
             },
             medium : {
                 height: number,
                 url: string,
                 width: number
             },
             standard : {
                 height: number,
                 url: string,
                 width: number
             },
             
         }
         title : string
     }
 
 }
 }

 export interface VideoInterface{
    videos: VideoType['videoDetails'][],
    direction: string
 }

 export interface ChannnelInterface {
    brandingSettings?: {
        channel: {
            title: string,
            description: string
        },
        image: {
            bannerExternalUrl: string,
        }
    },
    contentDetails?: {
        relatedPlaylists: {
            likes: string,
            uploads: string
        }
    },
    id: string,
    kind: string,
    snippet?: {
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string
            },
            high: {
                url: string
            },
            medium : {
                url: string
            }
        }
    },
    statistics?: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string
    }
 }

 export interface VideoInterface {
        snippet?: {
            channelId: string,
            channelTitle: string,
            description: string,
            title: string
        },
        statistics?: {
            commentCount: string,
            favoriteCout: string,
            likeCount: string,
            viewCount: string
        }
 }