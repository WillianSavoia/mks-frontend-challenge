"use client"
import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProductContextProvider } from "./Providers/productsContext";
//import { Cards } from "@/components/Content/Cards";
//import { useContext } from "react";
//import { IProductsContext } from "./Providers/productsContext";


export default function Home() {

  


  return (
  
      
    <>
          <Footer />
          <Header />
          <Content />
        
    </>
    
    
  );
}
