export type TAction = {
    type: string,
    payload: object,
}

export type TState = {
    id: number,
    title: string,
    description: string,
    year: number,
    image: string,
    video: string,
    rating: number,
}

export type TMSelector = {
    movieReducer: {
        movies: TState[]
    }
}
