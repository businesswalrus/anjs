export async function getWebflowCMSData(collectionId) {
    const res = await fetch(
      `https://api.webflow.com/collections/${collectionId}/items?access_token=${process.env.NEXT_PUBLIC_WEBFLOW_API_KEY}`,
      { headers: { 'accept-version': '1.0.0' } }
    );
  
    if (!res.ok) {
      throw new Error(`Failed to fetch Webflow data: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.items;
  }
  