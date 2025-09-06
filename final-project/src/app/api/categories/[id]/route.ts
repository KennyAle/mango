export const revalidate = 120
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const res = await fetch(`${API_URL}/product/category/${id}`)
    const data = await res.json()
    return Response.json(data)
}
