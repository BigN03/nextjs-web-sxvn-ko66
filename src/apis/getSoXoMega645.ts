const getSoXoMega645 = async (time: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/crawls/get-so-xo-mega-645?date=${time}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoMega645;