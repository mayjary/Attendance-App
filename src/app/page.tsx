import BarcodeScanner from "@/components/BarcodeScanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Barcode Scanner</CardTitle>
        </CardHeader>
        <CardContent>
          <BarcodeScanner />
        </CardContent>
      </Card>
    </div>
  )
}

