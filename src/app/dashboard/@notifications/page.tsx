import Card from "@/components/Card/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications </div>
      <Link href={"/dashboard/archived"}>Archived</Link>
    </Card>
  );
}
