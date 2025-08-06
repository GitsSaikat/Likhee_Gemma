
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { UserProvider } from '@/hooks/use-user';
import { UserStatus } from '@/components/likhee/user-status';
import Link from 'next/link';
import { ApiKeyProvider } from '@/hooks/use-api-key';
import { SettingsDialog } from '@/components/common/settings-dialog';

export const metadata: Metadata = {
  title: 'Likhee',
  description: 'Improve your writing with AI-powered feedback.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col h-full" suppressHydrationWarning>
        <ApiKeyProvider>
          <UserProvider>
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
              <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <div />
                <div className="flex items-center gap-4">
                  <UserStatus showXp={false} />
                  <SettingsDialog />
                </div>
              </div>
            </header>
            <main className="pt-16 flex-grow">
              {children}
            </main>
            <footer className="py-4 border-t">
              <div className="container mx-auto text-center text-sm text-muted-foreground">
                <p>
                  Made by{' '}
                  <a
                    href="https://github.com/GitsSaikat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    GitsSaikat
                  </a>
                </p>
              </div>
            </footer>
            <Toaster />
          </UserProvider>
        </ApiKeyProvider>
      </body>
    </html>
  );
}
