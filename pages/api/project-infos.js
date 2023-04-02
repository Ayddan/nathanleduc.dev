export default async function handler(req, res) {
    // Retrieve projects data
    console.log('api request' + process.env.REACT_APP_NOTION_DATABASE_ID)
    await fetch(`https://api.notion.com/v1/databases/${process.env.REACT_APP_NOTION_DATABASE_ID}/query`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-02-22'
      },
      redirect: 'follow'
    })
    .then(resp=>resp.json())
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json({err}))
}
