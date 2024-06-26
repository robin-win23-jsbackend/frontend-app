import type { Metadata } from "next";
import "../app/globals.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



export const metadata: Metadata = {
  title: "Silicon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Rendering RootLayout");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <script defer src="https://kit.fontawesome.com/d90f651b7d.js" crossOrigin="anonymous" ></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" ></script>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body>
        <div className="wrapper">
        <Header />
        {children}
        <Footer />
        </div>

        </body>
    </html>
  );
}
