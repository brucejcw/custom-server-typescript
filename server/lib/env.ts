import logger from './logger'

export const isDev = () => {
    return process.env.NODE_ENV === 'development'
}

export const isProd = () => {
    return process.env.NODE_ENV === 'production'
}

export const printSystemInfo = () => {
    logger.info(`process.env: ${JSON.stringify(process.env, null, 2)}`)
    logger.info(`process.version: ${process.version}`)
}
