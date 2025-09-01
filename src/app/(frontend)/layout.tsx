const FrontendLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <body className="font-inter">{children}</body>;
};
export default FrontendLayout;
