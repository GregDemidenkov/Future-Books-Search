import { FullBook } from "@entities/book"


export default (json: any) => {
    return {
        id: json?.id || "",
        img: json?.volumeInfo?.imageLinks?.thumbnail || "",
        info: {
            title: json?.volumeInfo?.title || "",
            authors: json?.volumeInfo?.authors || [],
            categories: json?.volumeInfo?.categories || []
        },
        description: json?.volumeInfo?.description || ""

    } as FullBook
}