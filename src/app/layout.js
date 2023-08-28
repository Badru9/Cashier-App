import "./globals.css";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cashier App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader showSpinner={false} color="#EAC696" />
        {children}
      </body>
    </html>
  );
}
