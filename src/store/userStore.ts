// store.js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface AuthState {
    token: string | null;
    username: string | null;
    setAuth: ({ token, username }: { token: string; username: string }) => void;
    logout: () => void;
}
const useAuthStore = create(
    persist(
        (set) => ({
            token: null, // 초기 상태에서 토큰은 null
            username: null,

            // 토큰과 사용자 이름을 설정하는 액션
            setAuth: ({
                token,
                username,
            }: {
                token: string;
                username: string;
            }) => set({ token, username }),

            // 로그아웃 액션
            logout: () => {
                set({ token: null, username: null });
            },
        }),
        {
            name: "auth-storage", // 로컬 스토리지에 저장될 키 이름
            storage: createJSONStorage(() => localStorage), // 기본적으로 'localStorage'를 사용
        }
    )
);

export default useAuthStore;
