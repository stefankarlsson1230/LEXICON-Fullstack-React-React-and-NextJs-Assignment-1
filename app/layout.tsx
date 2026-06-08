import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const notoSerif = Noto_Serif({subsets:['latin'],variable:'--font-serif'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", notoSerif.variable)}
    >
      <body>
        <header>
          <h1 className="text-center text-4xl my-4">Book Management System</h1>
          
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        
          <Button asChild>
            <Link href="/books">Books</Link>
          </Button>

          <Button asChild>
            <Link href="/seed">Seed database</Link>
          </Button> 

        </header>
        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}
