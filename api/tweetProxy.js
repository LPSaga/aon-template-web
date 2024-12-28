// tweetProxy.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // 这里需要填入你申请到的真实的Bearer Token等认证信息
            const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAGtMxgEAAAAAYzWFrhAznfvBjHjHdyaV%2B60aNMw%3DliBPtuHTyOHLr7ztekswr5F7GlVE6Hxp62oVU0ckB0nCrcERt6';
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            };
            const response = await axios.post('https://api.twitter.com/2/tweets', req.body, { headers });
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}