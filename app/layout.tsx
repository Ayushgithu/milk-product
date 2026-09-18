import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(landing-page)/footer/page";
import Navbar from "./(landing-page)/navbar/page";
import WhatsAppButton from "./components/WhatsAppButton";
import TopAnnouncementBar from "./components/TopAnnouncementBar";
import StickyMobileBar from "./components/StickyMobileBar";
import CursorMilkTrail from "./components/CursorMilkTrail";
import JsonLd from "./components/JsonLd";
import SplashScreen from "./components/SplashScreen";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gangaamrit.in"),
  title: {
    default: "Ganga Amrit | शुद्धता का वादा - Fresh Milk from Chhatarpur, MP",
    template: "%s | Ganga Amrit",
  },
  description:
    "Ganga Amrit (Ganga Ice Factory and Dairy Products), Chhatarpur, Madhya Pradesh - fresh pasteurized milk. Gold Full Cream, Double Toned, and Chai Special variants for retail and B2B distribution. FSSAI licensed & GST registered.",
  keywords: [
    "Ganga Amrit",
    "milk Chhatarpur",
    "dairy Madhya Pradesh",
    "full cream milk",
    "double toned milk",
    "chai special milk",
    "milk distributor Chhatarpur",
    "गंगा अमृत",
  ],
  authors: [{ name: "Ganga Ice Factory and Dairy Products" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ganga Amrit | शुद्धता का वादा",
    description:
      "Fresh pasteurized milk from Chhatarpur, Madhya Pradesh - Gold Full Cream, Double Toned, and Chai Special.",
    url: "https://gangaamrit.in",
    siteName: "Ganga Amrit",
    images: ["/opengraph-image.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Amrit | शुद्धता का वादा",
    description: "Fresh pasteurized milk from Chhatarpur, Madhya Pradesh.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <SplashScreen />
        <CursorMilkTrail />
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth pb-16 md:pb-0">
          <NextTopLoader color="#EA580C" showSpinner={false} />
          <TopAnnouncementBar />
          {/* Navigation */}
          <Navbar />
          {children}
          {/* footer */}
          <Footer />
          <WhatsAppButton />
          <StickyMobileBar />
        </div>
     
      </body>
    </html>
  );
}