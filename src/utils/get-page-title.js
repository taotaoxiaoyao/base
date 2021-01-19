import defaultSettings from '@/config/settings'

const title = defaultSettings.title || '网上招投标平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
