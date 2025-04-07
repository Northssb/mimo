import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        isCollapsed: false,
    },
    // 同步操作
    reducers: {
        collapseMenu: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
    },
});

export const { collapseMenu } = tabSlice.actions;
export default tabSlice.reducer;