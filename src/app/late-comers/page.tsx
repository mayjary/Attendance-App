import { getLateComers } from "@/lib/actions"
import LateComersTable from "@/components/LateComersTable"

export default async function LateComersPage() {
  const lateComers = await getLateComers()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Late Comers</h1>
      <LateComersTable lateComers={lateComers} />
    </div>
  )
}

