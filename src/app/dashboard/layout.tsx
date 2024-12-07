import DashboardNavbar from "./_components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
}
