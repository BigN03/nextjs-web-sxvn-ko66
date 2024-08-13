const getSoXoTrucTiepTheoTinh = async (mien: string, locate: string, time: string) => {
  const staticData = await fetch(`https://api.sa88.art/api/web-sxvn/crawls/get-so-xo-theo-tinh?locate=${mien}&province=${locate}&date=${time}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoTrucTiepTheoTinh;
