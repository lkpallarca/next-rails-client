import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <br />
            <Link href="/jobs">
              Jobs
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
