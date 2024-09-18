import {asSitemapUrl, defineSitemapEventHandler} from '#imports'

export default defineSitemapEventHandler(async () => {
    const quests = await $fetch<{data: { id: string }[]}>('https://data.arendz.nl/items/quest?fields=id')
    const pages = await $fetch<{data: { slug: string, title: string }[]}>('https://data.arendz.nl/items/page?fields=slug,title&filter[status][_eq]=published')

    return [
        ...quests.data.map(q => asSitemapUrl({
            loc: '/steden/' + q.id,
        })),
        ...pages.data.map(p => asSitemapUrl({
            loc: p.slug,
        }))
    ]
})
