import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers.jsx";

export const metadata = {
  title: "Las Mamadas de Karen🥵🥵",
  description: "",
};

const rubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`h-5/6 border-l-orange-200 ${rubik.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
