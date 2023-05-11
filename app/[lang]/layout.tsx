import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { lang: string };
}) {
  return (
    <html lang={params?.lang ? params.lang : "tr"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
