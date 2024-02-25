import { db } from '../../lib/db'

export default eventHandler(async event => {
    try {
        const season = getRouterParam(event, 'season')

        const episodes = await db
            .collection('episodes')
            .find(
                { season: Number(season) },
                { projection: { _id: 0 }, sort: { no_in_season: 1 } }
            )
            .toArray()

        if (episodes.length === 0) {
            return createError({
                statusCode: 404,
            })
        }

        return episodes
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 500,
        })
    }
})
