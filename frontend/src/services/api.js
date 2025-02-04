const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const admin = {
    CREATE_GALLERY: BASE_URL + "/gallery/create",
    GET_ALL_GALLERY: BASE_URL + "/gallery/get",
    DELETE_GALLERY: BASE_URL + "/gallery/delete",
    IMAGE_UPLOAD: BASE_URL + "/image/multi",

}