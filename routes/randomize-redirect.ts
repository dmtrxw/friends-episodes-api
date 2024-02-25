import getRandomEpisodeFromDB from '../lib/getRandomEpisodeFromDB'
import mobile from 'is-mobile'

export default eventHandler(async event => {
    try {
        const episode = await getRandomEpisodeFromDB()
        let destination = episode.netflix_url

        const userAgent = getRequestHeader(event, 'user-agent')

        if (mobile({ ua: userAgent })) {
            destination = destination.replace('https://', 'nflx://')
        }

        sendRedirect(event, destination)
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error. Please try again later' }
    }
})
