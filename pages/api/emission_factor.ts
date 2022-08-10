// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  console.log('[EMISSION_FACTOR][Incoming Query] --', query.query);
  
  const data = await (await fetch(
    `https://beta3.api.climatiq.io/search?query=${query.query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CLIMATIQ_KEY}`,
        "Content-Type": "application/json",
        "content-encoding": "null"
      },
    }
  )).json();
  
  res.status(200).json({ data });
}
