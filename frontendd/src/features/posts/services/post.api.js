import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function getFeed() {
  const res = await api.get("/posts/feed");

  return res.data;
}

export async function createPost(caption, imageFile) {
  const formData = new FormData();

  formData.append("img_url", imageFile);
  formData.append("caption", caption);

  const res = await api.post("/posts", formData);

  return res.data;
}

export async function likePost(postId) {
  const res = await api.post("/posts/like/" + postId);
  return res.data;
}
export async function unLikePost(postId) {
  const res = await api.post("/posts/unlike/" + postId);
  return res.data;
}
