export async function GET() {
  return Response.json({ status: "ok", updated: Date.now() })
}
