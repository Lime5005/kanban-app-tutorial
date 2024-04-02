import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from "next/font/google";
import './globals.css'
import { Providers } from "@/components/redux/provider";
   
//font we'll use throughout the project
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
// Metadata definition
export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
  }

// RootLayout component
export default function RootLayout({
   children,
   }: {
   children: React.ReactNode
 }) {
   return (
      <html lang="en" className={pjs.className}>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
