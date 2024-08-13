const getSoXoThanTai = async (time: string) => {
  const staticData = await fetch(`https://api.sa88.art/api/web-sxvn/crawls/get-so-xo-than-tai?date=${time}`, { cache: 'force-cache' });
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoThanTai;