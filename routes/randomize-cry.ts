import { db } from '../lib/db'
import getRandomIntInclusive from '../lib/getRandomIntInclusive'

import { Episode } from '../types'

const EPISODE_CODES = [
    'S06E25', // tow the proposal pt 2
    'S09E21', // tow the fertility test
    'S10E09', // tow the birth mother
    'S03E16', // tow the morning after
    'S10E17', // the last one
    'S05E03', // the one hundredth
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
