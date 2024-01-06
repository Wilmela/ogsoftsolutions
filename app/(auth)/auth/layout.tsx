import MaxWidthContainer from "@/components/MaxWidthContainer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MaxWidthContainer className="h-screen flex items-center justify-center">
      <div className="w-full flex-1">{children}</div>
    </MaxWidthContainer>
  );
}
