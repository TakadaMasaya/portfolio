import { createClient } from 'microcms-js-sdk'

const serviceDomain = process.env.MICRO_CMS_SERVICE_DOMAIN || ''
const apiKey = process.env.MICRO_CMS_API_KEY || ''

export const microCmsClient = createClient({ serviceDomain, apiKey })
