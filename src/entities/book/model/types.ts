export type Book = {
    id: string,
    img: string,
    info: {
        title: string,
        authors: string[],
        categories: string[]
    }
}

export interface FullBook extends Book {
    description: string
}

export type getBooksDto = {
    totalCount: number,
    books: Book[]
}

export type BookCardProps = {
    book: Book
}