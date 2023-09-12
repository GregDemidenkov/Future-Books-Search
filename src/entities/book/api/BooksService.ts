import { axiosApi } from "@shared/api/axios"


class BooksService {
    

    getBooks(url: string) {
        return axiosApi.get(url)
    }

    getBookById(id: string) {
        return axiosApi.get(`/${id}`)
    }

}


export default new BooksService()