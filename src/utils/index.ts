"use server";
import { Language } from "@/types/language";
import { cookies } from "next/headers";
const COOKIE_NAME = "NEXT_LOCALE";
export const setUserLocal = async (local: Language) => {
  (await cookies()).set(COOKIE_NAME, local);
};

export const getUserLocal = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value;
};
