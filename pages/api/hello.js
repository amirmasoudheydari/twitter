// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const API = axios

API.getNews = () => API.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')