import { db } from '../../../../lib/db'
import { Episode } from '../../../../types'

export default eventHandler(async event => {
    try {
        const season = getRouterParam(event, 'season')

        const episodes = await db
            .collection<Episode>('episodes')
            .find(
                { season: Number(season) },
                { projection: { _id: 0 }, sort: { no_in_season: 1 } }
            )
            .toArray()

        if (episodes.length === 0) {
            setResponseStatus(event, 404)
            return { message: 'Season not found. Check your payload' }
        }

        return episodes
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error, please try again later.' }
    }
})
