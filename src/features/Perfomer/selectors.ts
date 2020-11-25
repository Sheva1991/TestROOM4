import { RootState } from 'app/store';

export const selectPerfomerName = (state: RootState) => state.perfomer.name
export const selectPerfomerStats = (state: RootState) => state.perfomer.stats
export const selectPerfomerImage = (state: RootState) => state.perfomer.image
export const selectPerfomerTags = (state: RootState) => state.perfomer.tags
export const selectPerfomerSummary = (state: RootState) => state.perfomer.summary
