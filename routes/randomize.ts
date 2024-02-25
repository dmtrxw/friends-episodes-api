import { db } from '../lib/db'
import getRandomIntInclusive from '../lib/getRandomIntInclusive'

const EPISODE_COUNT = {
    SEASON_1: 24,
    SEASON_2: 24,
    SEASON_3: 25,
    SEASON_4: 24,
    SEASON_5: 24,
    SEASON_6: 25,
    SEASON_7: 24,
    SEASON_8: 24,
    SEASON_9: 23,
    SEASON_10: 17,
}

export default eventHandler(async event => {
    const seasonNumber = getRandomIntInclusive(1, 10)
    const episodeNumber = getRandomIntInclusive(
        1,
        EPISODE_COUNT[`SEASON_${seasonNumber}`]
    )

    try {
        const episode = await db
            .collection('episodes')
            .findOne(
                { season: seasonNumber, no_in_season: episodeNumber },
                { projection: { _id: 0 } }
            )

        return episode
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error. Please try again later' }
    }
})
