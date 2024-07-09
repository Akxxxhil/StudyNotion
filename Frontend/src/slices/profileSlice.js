import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
};

try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        initialState.user = JSON.parse(storedUser);
    }
} catch (error) {
    console.error("Failed to parse user from localStorage:", error);
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
