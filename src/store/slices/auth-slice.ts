
import { StateCreator } from "zustand";

import { UserType } from "@/types/user";

export interface AuthSlice {
  userInfo: undefined | UserType;
  setUserInfo: (userInfo: UserType ) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  userInfo: undefined,
  setUserInfo: ( userInfo: UserType ) => set({ userInfo })
})
