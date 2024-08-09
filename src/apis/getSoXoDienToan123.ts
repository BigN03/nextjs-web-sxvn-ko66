const getSXDienToan123 = async (time: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/crawls/get-so-xo-dien-toan-123?date=${time}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSXDienToan123;