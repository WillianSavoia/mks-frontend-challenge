
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import { ProductContextProvider } from "./Providers/productsContext";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas | Dashboard",
  description: "Teste Prático de Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    
    <html lang="en">
      <ProductContextProvider>
        <body className={inter.className}>{children}</body>
      </ProductContextProvider>
      </html>
  
      
  );
}
