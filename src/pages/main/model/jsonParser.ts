import { Book } from "@entities/book"


export default (json: any) => {
    const items: [] = json.items
    const result: Book[] = []

    items.forEach((item: any) => {
        console.log(1)
        result.push({
            id: item?.id || "",
            img: item?.volumeInfo?.imageLinks?.thumbnail || "",
            info: {
                title: item?.volumeInfo?.title || "",
                authors: item?.volumeInfo?.authors || [],
                categories: item?.volumeInfo?.categories || []
            }
        })
    })
    console.log({
        totalCount: json.totalItems,
        books: result
    })
    return {
        totalCount: json.totalItems,
        books: result
    }
}