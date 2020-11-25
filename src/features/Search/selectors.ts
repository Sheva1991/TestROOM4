import { RootState } from 'app/store';
import { createSelector } from 'reselect'

export const selectData = (state: RootState) => state.search.data
export const selectSearching = (state: RootState) => state.search.searching
export const selectTotal = (state: RootState) => state.search.pagination.total
export const selectPerPage = (state: RootState) => state.search.pagination.per_page
export const selectCurrentPage = (state: RootState) => state.search.pagination.currentPage
export const selectTotalPages = createSelector(
    selectTotal,
    selectPerPage,
    (total: number, perPage: number) => {
        const totalSize = total ? total : 1
        const perPageSize = perPage ? perPage : 1
        return Math.ceil(totalSize / perPageSize)
    }
)
