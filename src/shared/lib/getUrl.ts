export default (
    searchString: string,
    sort: string,
    category: string, 
    paginationIndex: number
    ) => {
    const url = `?q=${searchString}`

    if(category === "all") {
        return `${url}&orderBy=${sort}&startIndex=${paginationIndex}&maxResults=30`
    }

    return `${url}+subject:${category}&orderBy=${sort}&startIndex=${paginationIndex}&maxResults=30`
}