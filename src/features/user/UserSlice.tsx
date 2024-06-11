import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface userState {
  accountID: string; // Adjust the type of accountID according to your needs
}

const initialState: userState = {
  accountID: 'LNFWLJ3JN',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserID: (state, action: PayloadAction<string>) => {
      state.accountID = action.payload;
    },
  },
});


export const { setUserID } = userSlice.actions;
export default userSlice.reducer;