import { MainPage } from "@pages/main"
import { BookPage } from "@pages/book"

import config from "@shared/routes/config"


export default [
    {path: config.main, element: <MainPage />},
    {path: config.book, element: <BookPage />},
    {path: config.missing, element: <MainPage/>},
]