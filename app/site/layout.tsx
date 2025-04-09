export const metadata = {
  title: 'ZenTrust – Healing Earth, Healing Ourselves',
  description: 'A sanctuary for regeneration, BPSS healing, and DAO-ready community living.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
