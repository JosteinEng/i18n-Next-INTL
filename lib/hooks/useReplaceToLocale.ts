import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";

// Custom hook to replace to a specified locale
export const useReplaceToLocale = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // Function to replace to a specified locale
  const replaceToLocale = (locale: string) => {
    router.replace({ pathname, params }, { locale });
  };

  return replaceToLocale;
};