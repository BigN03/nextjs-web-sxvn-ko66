const getDienToan6X36 = async (time: string) => {
  const staticData = await fetch(`https://api.sa88.art/api/web-sxvn/crawls/get-so-xo-dien-toan-6x36?date=${time}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getDienToan6X36;
