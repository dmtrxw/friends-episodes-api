import { Episode } from '../types'
import { db } from './db'
import getRandomIntInclusive from './getRandomIntInclusive'

const getRandomEpisodeFromDB = async (): Promise<Episode> => {
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

    const seasonNumber = getRandomIntInclusive(1, 10)
    const episodeNumber = getRandomIntInclusive(
        1,
        EPISODE_COUNT[`SEASON_${seasonNumber}`]
    )

    const episode = await db
        .collection<Episode>('episodes')
        .findOne(
            { season: seasonNumber, no_in_season: episodeNumber },
            { projection: { _id: 0 } }
        )

    return episode
}

export default getRandomEpisodeFromDB
