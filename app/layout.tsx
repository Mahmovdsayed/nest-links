import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { Analytics } from "@vercel/analytics/react";
import Headers from "@/components/layout/Header";

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], });
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000"
}
export const metadata: Metadata = {
  title: "NEST",
  description: "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  keywords: ['nest.dev', 'nest', 'nest-links', 'nest-instagram'],
  icons: {
    icon: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    apple:
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
  },
  creator: "Mahmoud Sayed",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    ],
    title: "NEST Links",
    description:
      "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
    countryName: "Egypt",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEST Links",
    description:
      "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Providers>
          {/* <Headers /> */}
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
