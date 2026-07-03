import './globals.css';

export const metadata = {
  title: 'Logeshwaran Inbaraj | Strategy × Operations × Data × AI',
  description: 'AI-era portfolio for Strategy, Business Operations, Data Analytics and AI workflow automation roles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
