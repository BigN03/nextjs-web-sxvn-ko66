const getSoXoMega645 = async (time: string) => {
  const staticData = await fetch(`https://api.sa88.art/api/web-sxvn/crawls/get-so-xo-power-655?date=${time}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoMega645;