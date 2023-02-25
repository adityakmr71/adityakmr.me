import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const isCountDown = true;

const MainContainer = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Kumar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="container mx-auto pt-10 flex gap-4 justify-center items-center h-screen">
          <h1>Hello world</h1>
        </div>
      </main>
    </>
  );
}
