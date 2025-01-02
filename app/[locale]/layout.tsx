import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/navbar';

export const metadata: Metadata = {
  title: "i18n - Next-intl",
  description: "i18n - Next-intl",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        <NextIntlClientProvider messages={messages}>
          <div className="container mx-auto px-4 py-8 bg-secondary text-primary">
          {children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
