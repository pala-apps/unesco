export function getFocusedSite(sites, id){
  if(!id || !sites || sites.length === 0){return null}
  const site = sites.find((site)=>{
    return site.unique_number === Number(id)
  })
  return site
}
