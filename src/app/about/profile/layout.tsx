export default function ProfileAbout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
}
