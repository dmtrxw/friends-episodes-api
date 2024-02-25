import { db } from '../../../../lib/db'

export default eventHandler(async event => {
    try {
        const season = getRouterParam(event, 'season')
        const noInSeason = getRouterParam(event, 'noInSeason')

        const episode = await db
            .collection('episodes')
            .findOne(
                { season: Number(season), no_in_season: Number(noInSeason) },
                { projection: { _id: 0 } }
            )

        if (!episode) {
            setResponseStatus(event, 404)
            return { message: 'Episode not found. Check your payload' }
        }

        return episode
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error, please try again later.' }
    }
})
