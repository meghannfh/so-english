import SocialsIcon from "./SocialsIcon";
import { BsSpotify, BsInstagram } from "react-icons/bs/index.esm";
import {FaPodcast} from "react-icons/fa/index.esm";
import {SiLinktree} from "react-icons/si/index.esm";
import {Fragment} from "react";

export default function SocialsBar({ location }){

  const socials = [
    {
      "number": "one",
      "icon": <BsInstagram />,
      "url": "https://www.instagram.com/so_english_gay/"
    },
    {
      "number": "two",
      "icon": <FaPodcast />,
      "url": "https://podcasts.apple.com/jp/podcast/so-caros-thats-so-carrot-%E8%8B%B1%E8%AA%9E%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E7%B5%90%E5%B1%80%E3%83%9D%E3%82%B8%E3%83%86%E3%82%A3%E3%83%96life/id1553711559"
    },
    {
      "number": "three",
      "icon": <BsSpotify />,
      "url": "https://open.spotify.com/show/6Ryzytf0Kf2jq4Vpz9RPWL?si=17762e1704264f76"
    },
    {
      "number": "four",
      "icon": <SiLinktree />,
      "url": "https://linktr.ee/Mr_SoEnglish"
    }
  ]

  return(
    <div className={location === "nav" ? "w-full flex flex-row items-center justify-center gap-2" : "w-full flex flex-row items-center justify-center gap-6"}>
      {socials.map((social) => {
        let styling = location === "top" ? `${social.number} animate fadeInUp p-2 rounded-full bg-white/25 transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800/50 hover:-translate-y-6` : `${social.number} animate fadeInUp`;

        return (
          <Fragment key={social.number}>
            <SocialsIcon icon={social.icon} url={social.url} styling={styling}/>
          </Fragment>
        )
      })}
    </div>
  )
}