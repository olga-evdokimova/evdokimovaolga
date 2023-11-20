import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'posts')


export type Post = {
    title: string
    text?: string,
    date: string,
    slug: string,
    content: string,
    image: string
}

const getMetadata = (html: string, key: string) => {
    const regex = `<p hidden id="${key}">(.+?)<\/p>`
    const match = html.match(regex)

    if (!match) return undefined
    return match[1]
}

export const getPostById = (slug: string): Post => {
    const fullPath = join(postsDirectory, slug,)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const title = getMetadata(fileContent, 'title') || "Untitled"
    const text = getMetadata(fileContent, 'text')
    const date = getMetadata(fileContent, 'date') || "Unknown"
    const image = getMetadata(fileContent, 'image') || 'https://i.ibb.co/kQ4T5tX/logo.png'

    return {
        title,
        text,
        date,
        slug: slug.replace(/\.html$/, ''),
        content: fileContent,
        image
    }
}

export const posts = fs.readdirSync(postsDirectory).map(x => getPostById(x))






