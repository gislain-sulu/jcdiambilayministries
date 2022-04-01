export async function loadPosts() {
  const res = await fetch(
    "./home/gislain/Bureau/Qualis/projets/jddiambilayministries_2/nextjs-blog/models/MOCK_DATA_GISLAIN.json"
  );
  return res;
}
