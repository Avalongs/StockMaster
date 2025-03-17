import { cookies } from "next/headers";
const COOKIE_NAME = "NEXT_LOCALE";
export const setUserLolcal = async (local: string) => {
  (await cookies()).set(COOKIE_NAME, local);
};

export const getUserLocal = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value;
};
