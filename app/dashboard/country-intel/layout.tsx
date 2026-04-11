import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Intelligence',
};

export default function CountryIntelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
