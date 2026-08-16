import "./globals.css";

export const metadata = {
  title: "Autism Video Assessment Platform",
  description: "Clinical decision support for behavioral video review",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
