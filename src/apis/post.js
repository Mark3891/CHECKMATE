import axios from "axios";

export const readPostsByTime = async () => {
  // 최신순으로 게시글 가져오기
  // const TOKEN = localStorage.getItem("accessToken");
  const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNDkuNTAuMTY3LjE4OSIsInN1YiI6ImRkZzAzMDhAbmF2ZXIuY29tIiwibmFtZSI6IuydtOyduO2YgSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2OTIwMjQzMDMsImV4cCI6MTY5MjI0MDQwMn0.zTpKk3rl85uTvS8iFWWYVA_x7sKvtFalckTimC_MxPM";

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post/time`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const readPostsByGet = async () => {
  // 가져오기순으로 게시글 가져오기
  // const TOKEN = localStorage.getItem("accessToken");
  const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNDkuNTAuMTY3LjE4OSIsInN1YiI6ImRkZzAzMDhAbmF2ZXIuY29tIiwibmFtZSI6IuydtOyduO2YgSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2OTIwMjQzMDMsImV4cCI6MTY5MjI0MDQwMn0.zTpKk3rl85uTvS8iFWWYVA_x7sKvtFalckTimC_MxPM";

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post/get`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      // withCredentials: true,
    }
  );
  return response.data;
};

export const readPostsByTogether = async () => {
  // 함께하기순으로 게시글 가져오기
  // const TOKEN = localStorage.getItem("accessToken");
  const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNDkuNTAuMTY3LjE4OSIsInN1YiI6ImRkZzAzMDhAbmF2ZXIuY29tIiwibmFtZSI6IuydtOyduO2YgSIsInJvbCI6IlVTRVIiLCJpYXQiOjE2OTIwMjQzMDMsImV4cCI6MTY5MjI0MDQwMn0.zTpKk3rl85uTvS8iFWWYVA_x7sKvtFalckTimC_MxPM";

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post/together`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const search = async (keyword) => {
  // 검색 기능
  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post/search`,
    {
      params: { keyword },
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const readPostDetail = async (postId) => {
  // 게시글 상세 조회

  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post`,
    {
      params: { postId },
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const reportPost = async (postId, content) => {
  // 신고하기

  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/report`,
    {
      postId: postId,
      content: content,
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const savePost = async (data) => {
  // 게시글 삭제

  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.delete(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post`,
    data,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const addPost = async (data) => {
  // 체크리스트 작성

  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post`,
    data,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};

export const editPost = async (data) => {
  // 체크리스트 수정

  const TOKEN = localStorage.getItem("accessToken");

  const response = await axios.patch(
    `${process.env.REACT_APP_BACK_BASE_URL}/api/post`,
    data,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      withCredentials: true,
    }
  );
  return response;
};