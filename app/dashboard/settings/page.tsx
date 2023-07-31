import Link from "next/link";

export default function Page() {
  return (
  <>  
    <div className={"text-4xl text-red-950"}>
    settings page
    </div>
    <Link href={"/dashboard"} className={"underline"}> link to dashboard </Link>
  </>
)
}