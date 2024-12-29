"use client";

import { useReplaceToLocale } from "@/lib/hooks/useReplaceToLocale";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function NorwegianButton() {
  const t = useTranslations("Navbar");
  const replaceToLocale = useReplaceToLocale();

  return (
    <DropdownMenuItem
      onClick={() => replaceToLocale("no")}
      className="hover:bg-accent p-2 flex justify-between w-full font-normal hover:cursor-pointer"
    >
      <div className="justify-between flex items-center w-full">
        <p>{t("norwegian")}</p>
        <ReactCountryFlag
          countryCode="NO"
          svg
          style={{
            width: "18px",
            height: "18px",
          }}
          title="NO"
        />
      </div>
    </DropdownMenuItem>
  );
}