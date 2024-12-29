import {
    createLocalizedPathnamesNavigation,
    Pathnames,
  } from "next-intl/navigation";
  
  export const locales = ["de", "en", "no"] as const;
  export const localePrefix = "always"; // Default
  
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    "/": "/",
    // "/chat": "/chat",
  
    // // If locales use different paths, you can
    // // specify each external path per locale.
    // "/user_guide": {
    //   en: "/user_guide",
    //   no: "/brukerguide",
    // },

  } satisfies Pathnames<typeof locales>;
  
  export const {
    Link,
    redirect,
    usePathname,
    useRouter,
    getPathname,
  }: {
    Link: any;
    redirect: any;
    usePathname: any;
    useRouter: any;
    getPathname: any;
  } = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });