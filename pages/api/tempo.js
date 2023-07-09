function tempo(request, reponse) {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toUTCString(),
  });
}

export default tempo;
