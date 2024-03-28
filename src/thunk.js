import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetch",
  async (url, { method = "GET" }) => {
    const response = await fetch(url, { method });
    const data = await response.json();
    return data;
  }
);