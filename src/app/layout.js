import "./globals.css";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
        <NextTopLoader showSpinner={false} color="#0F2C59" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
