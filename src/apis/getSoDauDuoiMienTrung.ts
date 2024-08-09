const getSoDauDuoiMienTrung = async (date: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/crawls/get-so-dau-duoi-mien-trung?date=${date}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoDauDuoiMienTrung;