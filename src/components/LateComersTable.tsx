"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { updatePaymentStatus } from "@/lib/actions"

type LateComer = {
  id: string
  rollNumber: string
  name: string
  lateCount: number
  isPaid: boolean
}

export default function LateComersTable({ lateComers: initialLateComers }: { lateComers: LateComer[] }) {
  const [lateComers, setLateComers] = useState(initialLateComers)

  const handlePaymentUpdate = async (id: string) => {
    const updatedLateComer = await updatePaymentStatus(id)
    setLateComers(lateComers.map((lc) => (lc.id === id ? updatedLateComer : lc)))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Roll Number</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Late Count</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lateComers.map((lateComer) => (
          <TableRow key={lateComer.id}>
            <TableCell>{lateComer.rollNumber}</TableCell>
            <TableCell>{lateComer.name}</TableCell>
            <TableCell>{lateComer.lateCount}</TableCell>
            <TableCell>{lateComer.isPaid ? "Paid" : "Unpaid"}</TableCell>
            <TableCell>
              {!lateComer.isPaid && <Button onClick={() => handlePaymentUpdate(lateComer.id)}>Mark as Paid</Button>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

