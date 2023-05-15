import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

import { Inter } from "next/font/google";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { getCategories, getFooterSitemap } from "./actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Extremely Advanced Ecommerce (Maybe)",
  description: "Generated by create next app",
};

export const revalidate = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoriesPromise = getCategories();
  const sitemapPromise = getFooterSitemap();
  const [categories, sitemap] = await Promise.all([
    categoriesPromise,
    sitemapPromise,
  ]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header categories={categories} />
        {children}
        <Footer sitemap={sitemap} />
      </body>
    </html>
  );
}
