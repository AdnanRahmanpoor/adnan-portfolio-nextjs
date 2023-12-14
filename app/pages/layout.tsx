import Link from 'next/link';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='w-full max-w-2xl'>
      <Link href='/'>Home</Link>
      {children}
    </section>
  );
}
