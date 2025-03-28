import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollSpy } from "@/components/scroll-spy";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Molly's World - Software Engineer",
  description:
    "Software engineer with a passion for building interactive and dynamic web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var storageKey = 'ui-theme';
                var defaultTheme = 'system';
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var storedTheme = localStorage.getItem(storageKey);
                var theme = storedTheme || defaultTheme;

                if (theme === 'system') {
                  theme = systemTheme;
                }

                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <ScrollSpy />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
