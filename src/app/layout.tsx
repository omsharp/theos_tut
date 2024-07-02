import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Theo's Tutorial",
  description: "Followint Theo's 0 to production tutorial.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="item-center flex w-full justify-between border-b p-4 text-xl font-semibold">
      <div>Gallary</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
