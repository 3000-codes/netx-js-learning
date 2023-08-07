export default function Dashboard({ children }: { children: React.ReactNode }) {
  setTimeout(() => {
    console.log("Dashboard layout loaded");
  }, 5000);
  return <section>
    Dashboard Layout:
    {children}
  </section>
}