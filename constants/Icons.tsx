import React from "react";
import { SvgXml } from "react-native-svg";
const DollarIcon = createIcon("../assets/icons/dollar-line.svg");
const WalletAddMoneyIcon = "../assets/icons/add-money-wallet-icon.svg";
const WalletCardIcon = "../assets/icons/wallet-credit-card.svg";
const AmazonIcon = "../assets/icons/amazon-outlined.svg";
const UberIcon = "../assets/icons/brand-uber.svg";
const AirbnbIcon = "../assets/icons/bxl-airbnb.svg";
const DollarSignIcon = "../assets/icons/dollar-sign.svg";
const FigmaIcon = "../assets/icons/logo-figma.svg";
const ShoopingCartIcon = "../assets/icons/shopping-cart-line.svg";
const SpotifyIcon = "../assets/icons/spotify-logo-light.svg";
const NetflixIcon = "../assets/icons/netflix.svg";

export {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
  AmazonIcon,
  UberIcon,
  AirbnbIcon,
  DollarSignIcon,
  FigmaIcon,
  ShoopingCartIcon,
  SpotifyIcon,
  NetflixIcon,
};
interface MyIconProps { width?: number, height?: number, color?: string }

const createIcon = (path: string, displayName) => {
  const IconComponent = ({ width = 24, height = 24, color = "black" }: MyIconProps) => {
    const svgContent = require(path).default;
    return <SvgXml xml={svgContent} width={width} height={height} color={color} />;
  };
  IconComponent.displayName = displayName;
};