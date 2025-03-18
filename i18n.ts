import { getRequestConfig } from "next-intl/server";
import { getUserLocal } from "@/utils";
export const defaultLocale = "zh";
export default getRequestConfig(async () => {
  const locale = await getUserLocal();
  return {
    locale: locale || defaultLocale,
    messages: (await import(`@/messages/${locale || defaultLocale}.json`))
      .default,
    timeZone: "Asia/Shanghai",
  };
});
