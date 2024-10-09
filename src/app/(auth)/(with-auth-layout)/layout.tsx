export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Layout inter</p>
      {children}
    </div>
  );
}
