import Image from "next/image";

import BadDream from "../../../public/meme/baddream.jpeg";
import Battle from "../../../public/meme/battle.jpeg";
import Blue from "../../../public/meme/blue.jpeg";
import Born from "../../../public/meme/born-without-hearth.jpeg";
import DontCall from "../../../public/meme/dont-call-me.jpeg";
import Exothermic from "../../../public/meme/exothermic.jpeg";
import FurElise from "../../../public/meme/fur-elise.jpeg";
import Habibi from "../../../public/meme/habibi.jpeg";
import Hero from "../../../public/meme/hero.jpeg";
import HowItAllWorkout from "../../../public/meme/howitallworkout.jpeg";
import Ifly from "../../../public/meme/ifly.jpeg";
import ILoveU from "../../../public/meme/iloveu.jpeg";
import Lalala from "../../../public/meme/lalala.jpeg";
import Minefield from "../../../public/meme/minefield.jpeg";
import Money from "../../../public/meme/money.jpeg";
import Puppet from "../../../public/meme/puppet.jpeg";
import Rip from "../../../public/meme/rip.jpeg";
import Secret from "../../../public/meme/secret.jpeg";
import TearsOfGold from "../../../public/meme/tearsofgold.jpeg";
import TheRoad from "../../../public/meme/theroad.jpeg";
import ThisMountain from "../../../public/meme/thismountain.jpeg";
import Wakeme from "../../../public/meme/wakeme.jpeg";
import YouDontEvenKnowMe from "../../../public/meme/youdontevenknowme.jpeg";

import Screen from "../layout/Screen";

const faouzias = [
  FurElise,
  ILoveU,
  Lalala,
  DontCall,
  Habibi,
  Rip,
  Born,
  BadDream,
  Battle,
  TearsOfGold,
  Blue,
  Exothermic,
  HowItAllWorkout,
  Hero,
  TheRoad,
  Ifly,
  Minefield,
  Money,
  Secret,
  Puppet,
  ThisMountain,
  Wakeme,
  YouDontEvenKnowMe,
];

const SecondSection = () => {
  return (
    <Screen color="black">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 py-8 gap-1">
        {faouzias.map((a, i) => {
          return (
            <div
              key={i}
              className="aspect-square w-full h-full relative hover:scale-105 duration-200"
            >
              <Image alt="Hmm" src={a} fill className="object-cover" />
            </div>
          );
        })}
      </div>
    </Screen>
  );
};

export default SecondSection;
