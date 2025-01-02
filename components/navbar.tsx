import { useTranslations } from "next-intl";
import EnglishButton from "@/components/localization/english-button";
import NorwegianButton from "@/components/localization/norwegian-button";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { pick } from "lodash";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GermanButton from "@/components/localization/german-button";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const message = useMessages();

  return (
    <main className="bg-primary text-accent">
      <div className="flex justify-between gap-8 container mx-auto px-4 py-8 ">
        <h1 className="font-bold text-2xl">i18n - Next-intl</h1>
        <div className="justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>{t("language")}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{t("pickLanguage")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Language button for swapping to Norwegian */}
              <NextIntlClientProvider messages={pick(message, "Navbar")}>
                <NorwegianButton />
              </NextIntlClientProvider>
              {/* Language button for swapping to English */}
              <NextIntlClientProvider messages={pick(message, "Navbar")}>
                <EnglishButton />
              </NextIntlClientProvider>
              {/* Language button for swapping to German */}
              <NextIntlClientProvider messages={pick(message, "Navbar")}>
                <GermanButton />
              </NextIntlClientProvider>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
};

export { Navbar };
