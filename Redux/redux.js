
import { createSlice } from "@reduxjs/toolkit";
const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    filteredJobs: [],
  },
  reducers: {
    setJobs: (state, action) => {
      state.allJobs = action.payload;
      state.filteredJobs = action.payload;
    },
    filterJobs: (state, action) => {
      const { keyword, location, category, type } = action.payload;
      state.filteredJobs = state.allJobs.filter(job =>
        (!keyword || job.title.toLowerCase().includes(keyword.toLowerCase())) &&
        (!location || job.location.toLowerCase().includes(location.toLowerCase())) &&
        (!category || job.category === category) &&
        (!type || job.type === type)
      );
    },
  },
});

export const { setJobs, filterJobs } = jobsSlice.actions;
export default jobsSlice.reducer;


 
