"use client";

import { useReplaceToLocale } from "@/lib/hooks/useReplaceToLocale";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function GermanButton() {
  const t = useTranslations("Navbar");
  const replaceToLocale = useReplaceToLocale();

  return (
    <DropdownMenuItem
      onClick={() => replaceToLocale("de")}
      className="hover:bg-accent p-2 flex justify-between w-full font-normal hover:cursor-pointer"
    >
      <div className="justify-between flex items-center w-full">
        <p>{t("german")}</p>
        <ReactCountryFlag
          countryCode="DE"
          svg
          style={{
            width: "18px",
            height: "18px",
          }}
          title="DE"
        />
      </div>
    </DropdownMenuItem>
  );
}