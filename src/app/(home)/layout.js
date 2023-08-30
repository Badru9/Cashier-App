import "@/app/globals.css";
import { Provider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
