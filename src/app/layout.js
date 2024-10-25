import "./globals.css";

export const metadata = {
  title: "ConnectEd",
  description: "Educational app for children to improve their skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
