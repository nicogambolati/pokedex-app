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


import blackWhiteVersion from "../images/Charizard_icon.png";
import xYVersion from "../images/Charizard_icon.png";
import sunMoonVersion from "../images/Charizard_icon.png";
import ultraSunUltraMoonVersion from "../images/Charizard_icon.png";
import letsgoPikachuEeveeVersion from "../images/Charizard_icon.png";
import swordShieldVersion from "../images/Charizard_icon.png";
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

        //TODO: ADD THE REST OF THE ICONS

      default:
        setFirstIconIcon(null);
        setsSecondIcon(null);
        break;
    }
  }, [gameName]);

  return (
    <>
      {firstIcon && <img src={firstIcon} alt="icon" />}
      {secondIcon && <img src={secondIcon} alt="icon" />}
    </>
  );
};
