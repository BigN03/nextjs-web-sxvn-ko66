const getSoDauDuoiMienbac = async (date: string) => {
  const staticData = await fetch(`https://api.sa88.art/api/web-sxvn/crawls/get-so-dau-duoi-mien-bac?date=${date}`);
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoDauDuoiMienbac;