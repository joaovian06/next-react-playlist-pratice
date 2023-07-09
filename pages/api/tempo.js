async function tempo(request, response) {
  //   const apiSecret = process.env.API_SECRET;
  const dynamicDate = new Date();

  //   const subscribersResponse = await fetch(`api-endpoint-with=${apiSecret}`);
  //   const subscribersResponseJson = await subscribersResponse.json();
  //   const subscribers = subscribersResponseJson;

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    date: dynamicDate.toUTCString(),
    // subscribers: subscribers,
  });
}

export default tempo;
