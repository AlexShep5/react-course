export function selectGists (state) {
    return state.gists.gistsList
}
export function selectGistsError (state) {
    return state.gists.error
}
export function selectGistsLoading (state) {
    return state.gists.loading
}
