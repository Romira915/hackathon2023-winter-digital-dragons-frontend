export const getSortPar = (value) => {
    if (value === "日付昇順") {
        return {
            key: "created_at",
            value: "DESC"
        }
    } else if (value === "日付降順") {
        return {
            key: "created_at",
            value: "ASC"
        }
    } else if (value === "いいね数") {
        return {
            key: "_like",
            value: "DESC"
        }
    }
}