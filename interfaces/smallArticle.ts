export interface smallArticle {
    title: string,
    metaTitle: string,
    metaDesc: string,
    socialImage: string,
    date: string,
    tags: string[]
}

export interface article {
    title: string,
    content: smallArticle
}