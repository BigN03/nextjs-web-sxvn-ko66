const getSoXoTrucTiepTheoMien = async (locate: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/crawls/get-so-xo-truc-tiep?locate=${locate}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoTrucTiepTheoMien;