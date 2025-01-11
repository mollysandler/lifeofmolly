import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollSpy } from "@/components/scroll-spy"
import { Analytics } from "@/components/analytics"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Molly's World - Software Engineer",
  description: "Software engineer with a passion for building interactive and dynamic web experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollSpy />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}