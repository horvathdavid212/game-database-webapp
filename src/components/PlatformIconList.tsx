import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Text, Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const colorMap: { [key: string]: string } = {
    pc: "blue.300",
    playstation: "blue.600",
    xbox: "green.600",
    nintendo: "red.600",
    mac: "gray.400",
    linux: "blackAlpha.900",
    android: "green.300",
    ios: "grey.300",
    web: "cyan.300",
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color={colorMap[platform.slug]}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
