export const revalidate = 120
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  const res = await fetch(`${API_URL}/product`)
  const data = await res.json()

  return Response.json(data)
}