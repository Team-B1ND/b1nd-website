import { useEffect, useState } from "react";
import { adjectives , nouns } from "../../../constants/Name/RandomName.consants";
import { RandomButton, RandomNameBox } from "./style";

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomName = () => {
  const adj = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  return `${adj}${noun}`;
};

interface RandomNameProps {
  onChange: (name: string) => void;
}

const RandomName = ({ onChange }: RandomNameProps) => {
  const [randomName, setRandomName] = useState(generateRandomName());

  const handleClick = () => {
    const newName = generateRandomName();
    setRandomName(newName);
    onChange?.(newName);
  };

  useEffect(() => {
    onChange?.(randomName);
  }, [onChange, randomName]);

  return (
    <RandomNameBox>
      <span>{randomName}</span>
      <RandomButton onClick={handleClick}>랜덤변경</RandomButton>
    </RandomNameBox>
  );
};

export default RandomName;
