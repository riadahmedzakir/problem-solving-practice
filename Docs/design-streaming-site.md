You plan to set up a video on demand platform where registered users will be able to upload videos and view them. Here are some functional and non-functional requirements for this system:

Functional Requirements:

    I. Upload Videos
    II. View Videos
    III. Search Videos
    IV. User Registration

Non-Functional Requirements:

    I. Performance (View/Search videos)
    II. Availability
    III. Scalability ( 1,000,000 daily active users)
    
## Capacity Estimation

Of 1,000,000 daily active users, If, on average, a user views five videos per day then the total video-views per second would be:

    1M * 5 / 86400 sec => 58 videos/sec

Let’s assume our upload:view ratio is 1:200

    57/200 * 60 => 12 video/min

Storage Estimates:

Let’s assume that every minute 100 hours worth of videos are uploaded. If on average, one minute of video needs 50MB of storage (videos need to be stored in multiple formats), the total storage needed for videos uploaded in a minute would be:

    100 hours * 60 min * 50MB => 300 GB/min (25 GB/sec)

Bandwidth estimates: With 100 hours of video uploads per minute, assuming uploading each minute of the video takes 10MB of the bandwidth, we would be getting 300GB of uploads every minute.

    100 hours * 60 mins * 10MB => 59GB/min (1GB/sec)

## System APIs

 - uploadVideo(
    video_title, 
    video_description,
    category_id, 
    video_contents
)

Parameters:

video_title (string): Title of the video.

video_description (string): Optional description of the video.

category_id (string): Category of the video, e.g., Film, Song, People, etc.

video_contents (stream): Video to be uploaded.

Returns: (string)

A successful upload will return HTTP 202 (request accepted) and once the video encoding is completed the user is notified through email/notification with a link to access the video. 

- searchVideo(
    search_query, 
    maximum_videos_to_return
)

Parameters:

search_query (string): A string containing the search terms.

maximum_videos_to_return (number): Maximum number of results returned in one request.

Returns: (JSON)

A JSON containing information about the list of video resources matching the search query. Each video resource will have a video title, a thumbnail, a video creation date, and a view count.

- getVideo(
    video_id, 
    offset, 
    codec, 
    resolution
)

Parameters:

video_id (string): A string to identify the video.

offset (number): We should be able to stream video from any offset; this offset would be a time in seconds from the beginning of the video. 

codec (string) & resolution(string): We should send the codec and resolution info in the API from the client to support play/pause from multiple devices.

Returns: (STREAM)
A media stream (a video chunk) from the given offset.

- RegisterUser(
    Name,
    Email,
    Address,
    Age,
    ...Registration_Details
)

Returns: (string)
Returns 200 Ok if successful registration

## Database Design

Videos :

- VideoID
- Title
- Description
- Size
- Thumbnail Url
- Uploader/User

User: 

- UserID 
- Name 
- Email
- Address 
- Age 
- ...Registration details


## Detailed Component Design

Read-heavy service. read-write ration 200:1

Where would videos be stored? -> HDFS or GlusterFS

How should we efficiently manage read traffic? ->

Where would thumbnails be stored? ->

Metadata Sharding? ->

Load Balancing ? ->

Cache? -> LRU / If we go with the 80-20 rule, i.e., 20% of daily read volume for videos is generating 80% of traffic, meaning that certain videos are so popular that the majority of people view them; it follows that we can try caching 20% of daily read volume of videos and metadata.