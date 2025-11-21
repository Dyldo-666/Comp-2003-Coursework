export async function getBlogPosts() {
  const res = await fetch("/api/blog")
  return res.json()
}

export async function getHealth() {
  const res = await fetch("/api/health")
  return res.json()
}

