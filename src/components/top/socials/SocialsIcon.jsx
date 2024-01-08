export default function SocialsIcon({ icon, url, styling }){
  return(
    <a href={url} className={styling}>
      {icon}
    </a>
  )
}