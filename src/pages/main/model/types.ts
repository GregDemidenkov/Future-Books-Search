export type getBooksProps = {
    searchContent: string,
    sort: string,
    category: string,
    paginationIndex: number
}

export type SortEnum = 'relevance' | 'newest'

export type CategoryEnum = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'