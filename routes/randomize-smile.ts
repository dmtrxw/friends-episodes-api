import { db } from '../lib/db'
import getRandomIntInclusive from '../lib/getRandomIntInclusive'

import { Episode } from '../types'

const EPISODE_CODES = [
    'S04E12', // tow the embryos
    'S05E14', // tow everybody finds out
    'S02E14', // tow the prom video
    'S02E07', // tow ross finds out
    'S07E22', // tow chandlers dad
]

export default eventHandler(async event => {
    try {
        const index = getRandomIntInclusive(0, EPISODE_CODES.length - 1)
        const code = EPISODE_CODES[index]

        const episode = await db
            .collection<Episode>('episodes')
            .findOne({ code }, { projection: { _id: 0 } })

        return episode
    } catch (err) {
        console.log(err)

        setResponseStatus(event, 500)
        return { message: 'Internal server error. Please try again later' }
    }
})
