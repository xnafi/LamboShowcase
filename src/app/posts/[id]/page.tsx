async function getCarsById(postId: string) {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "GET",
  });
  return res.json();
}

export default async function getCarByID({ params }: any) {
  return <div>{params.id}</div>;
}
