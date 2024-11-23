import AuthProvider from "../context/Provider";
import "@/app/global.css";

export const metadata = {
  title: "Dezavu",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body style={{ backgroundColor: "black" }}>{children}</body>
      </html>
    </AuthProvider>
  );
}
