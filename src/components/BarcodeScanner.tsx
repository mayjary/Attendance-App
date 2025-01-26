"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { markAttendance } from "@/lib/actions"

export default function BarcodeScanner() {
  const [rollNumber, setRollNumber] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rollNumber) {
      const result = await markAttendance(rollNumber)
      if (result.isLate) {
        toast({
          title: "Collect ID! Late comer..",
          description: `Student with roll number ${rollNumber} has been late more than 3 times.`,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Attendance marked",
          description: `Student with roll number ${rollNumber} has been marked late.`,
        })
      }
      setRollNumber("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <Button type="submit">Mark Attendance</Button>
    </form>
  )
}

