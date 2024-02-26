import { db } from '../lib/db'
import getRandomIntInclusive from '../lib/getRandomIntInclusive'

import { Episode } from '../types'

const EPISODE_CODES = [
    'S01E07', // tow the blackout
    'S10E02', // tow ross is fine
    'S03E02', // tow no ones ready
    'S06E09', // tow ross got high
    'S06E17', // tow unagi
    'S07E10', // tow the holiday armadillo
    'S04E10', // tow the girl from poughkeepsie
    'S10E03', // tow ross' tan
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
