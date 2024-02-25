import getRandomEpisodeFromDB from '../lib/getRandomEpisodeFromDB'

export default eventHandler(async event => {
    try {
        const episode = await getRandomEpisodeFromDB()
        let destination = episode.netflix_url

        const userAgent = getRequestHeader(event, 'user-agent')

        if (/iPad|iPhone|iPod/.test(userAgent)) {
            destination = destination.replace('https://', 'nflx://')
        }

        sendRedirect(event, destination)
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error. Please try again later' }
    }
})
