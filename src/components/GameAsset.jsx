import redVersion from "../images/Charizard_icon.png";
import blueVersion from "../images/Blastoise_icon.png";
import yellowVersion from "../images/Pikachu_icon.png";
import goldVersion from "../images/Ho-Oh_icon.png";
import silverVersion from "../images/Lugia_icon.png";
import crystalVersion from "../images/Suicune_icon.png";
import rubyVersion from "../images/Groudon_icon.png";
import sapphireVersion from "../images/Kyogre_icon.png";
import emeraldVersion from "../images/Rayquaza_icon.png";
import leafGreen from "../images/Venusaur_icon.png";
import diamondVersion from "../images/Dialga_icon.png";
import pearlVersion from "../images/Palkia_icon.png";
import platinumVersion from "../images/Giratina_origen_icon.png";
import blackVersion from "../images/Reshiram_icon.png";
import whiteVersion from "../images/Zekrom_icon.png";
import white2Version from "../images/Kyurem_black_icon.png";
import black2Version from "../images/Kyurem_white_icon.png";
import xVersion from "../images/Xerneas_icon.png";
import yVersion from "../images/Yveltal_icon.png";
import omegaVersion from "../images/Groudon_primigenio_icon.png";
import alphaVersion from "../images/Kyogre_primigenio_icon.png";
import sunVersion from "../images/Solgaleo_icon.png";
import moonVersion from "../images/Lunala_icon.png";
import ultraSunVersion from "../images/Necrozma_melena_crepuscular_icon.png";
import ultraMoonVersion from "../images/Necrozma_alas_del_alba_icon.png";
import letsGoPikachuVersion from "../images/Pikachu_inicial_icon.png";
import letsGoEeveeVersion from "../images/Eevee_inicial_icon.png";
import swordVersion from "../images/Zacian_espada_suprema_icon.png";
import shieldVersion from "../images/Zamazenta_escudo_supremo_icon.png";
import xd from "../images/Dark_lugia_icon.png";
import gameCube from "../images/Gamecube_icon.png";

import { useState, useEffect } from "react";

export const GameAsset = ({ gameName }) => {
  const [firstIcon, setFirstIconIcon] = useState();
  const [secondIcon, setsSecondIcon] = useState();

  useEffect(() => {
    switch (gameName) {
      case "red-blue":
        setFirstIconIcon(redVersion);
        setsSecondIcon(blueVersion);
        break;
      case "blue":
        setFirstIconIcon(blueVersion);
        break;
      case "yellow":
        setFirstIconIcon(yellowVersion);
        break;
      case "gold-silver":
        setFirstIconIcon(goldVersion);
        setsSecondIcon(silverVersion);
        break;
      case "crystal":
        setFirstIconIcon(crystalVersion);
        break;
      case "ruby-sapphire":
        setFirstIconIcon(rubyVersion);
        setsSecondIcon(sapphireVersion);
        break;
      case "emerald":
        setFirstIconIcon(emeraldVersion);
        break;
      case "firered-leafgreen":
        setFirstIconIcon(redVersion);
        setsSecondIcon(leafGreen);
        break;
      case "diamond-pearl":
        setFirstIconIcon(diamondVersion);
        setsSecondIcon(pearlVersion);
        break;
      case "platinum":
        setFirstIconIcon(platinumVersion);
        break;
      case "heartgold-soulsilver":
        setFirstIconIcon(goldVersion);
        setsSecondIcon(silverVersion);
        break;
      case "black-white":
        setFirstIconIcon(blackVersion);
        setsSecondIcon(whiteVersion);
        break;
      case "black-2-white-2":
        setFirstIconIcon(black2Version);
        setsSecondIcon(white2Version);
        break;
      case "x-y":
        setFirstIconIcon(xVersion);
        setsSecondIcon(yVersion);
        break;
      case "omega-ruby-alpha-sapphire":
        setFirstIconIcon(omegaVersion);
        setsSecondIcon(alphaVersion);
        break;
      case "sun-moon":
        setFirstIconIcon(sunVersion);
        setsSecondIcon(moonVersion);
        break;
      case "ultra-sun-ultra-moon":
        setFirstIconIcon(ultraSunVersion);
        setsSecondIcon(ultraMoonVersion);
        break;
      case "lets-go-pikachu-lets-go-eevee":
        setFirstIconIcon(letsGoPikachuVersion);
        setsSecondIcon(letsGoEeveeVersion);
        break;
      case "sword-shield":
        setFirstIconIcon(swordVersion);
        setsSecondIcon(shieldVersion);
        break;
      case "xd":
        setFirstIconIcon(xd);
        break;
      case "colosseum":
        setFirstIconIcon(gameCube);
        break;
      default:
        setFirstIconIcon(null);
        setsSecondIcon(null);
        break;
    }
  }, [gameName]);

  return (
    <>
      {firstIcon && <img src={firstIcon} alt="icon" width={40} height={30} />}
      {secondIcon && <img src={secondIcon} alt="icon" width={40} height={30} />}
    </>
  );
};
