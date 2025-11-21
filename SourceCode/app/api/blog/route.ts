export async function GET() {
  const posts = [
    { id: 1, title: "Welcome to the Blog", content: "First post..." },
    { id: 2, title: "Prototype Systems", content: "Article content..." }
  ]
  return Response.json(posts)
}

