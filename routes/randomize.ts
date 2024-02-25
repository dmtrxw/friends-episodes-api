import getRandomEpisodeFromDB from '~/lib/getRandomEpisodeFromDB'

export default eventHandler(async event => {
    try {
        const episode = await getRandomEpisodeFromDB()
        return episode
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error. Please try again later' }
    }
})
