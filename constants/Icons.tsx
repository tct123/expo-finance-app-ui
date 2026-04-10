import React from "react";
import DollarIconSVG from "../assets/icons/dollar-line.svg";
import WalletAddMoneyIconSVG from "../assets/icons/add-money-wallet-icon.svg";
import WalletCardIconSVG from "../assets/icons/wallet-credit-card.svg";
import AmazonIconSVG from "../assets/icons/amazon-outlined.svg";
import UberIconSVG from "../assets/icons/brand-uber.svg";
import AirbnbIconSVG from "../assets/icons/bxl-airbnb.svg";
import DollarSignIconSVG from "../assets/icons/dollar-sign.svg";
import FigmaIconSVG from "../assets/icons/logo-figma.svg";
import ShoopingCartIconSVG from "../assets/icons/shopping-cart-line.svg";
import SpotifyIconSVG from "../assets/icons/spotify-logo-light.svg";
import NetflixIconSVG from "../assets/icons/netflix.svg";
import { SvgXml } from "react-native-svg";


interface MyIconProps { width?: number, height?: number, color?: string }

const createIcon = (svgPath: string, displayName: string) => {
  const IconComponent = ({ width = 24, height = 24, color = 'black' }: MyIconProps) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const svgContent = require(svgPath);
    const coloredSvgContent = typeof svgContent === 'string'
      ? svgContent.replace(/fill="currentColor"/g, `fill="${color}"`)
      : svgContent.default.replace(/fill="currentColor"/g, `fill="${color}"`);
    return <SvgXml xml={coloredSvgContent} width={width} height={height} />;
  };
  IconComponent.displayName = displayName;
  return IconComponent;
};

const DollarIcon = createIcon("../assets/icons/dollar-line.svg", "DollarIcon")
const WalletAddMoneyIcon = createIcon("../assets/icons/add-money-wallet-icon.svg", "WalletAddMoneyIcon")
const WalletCardIcon = createIcon("../assets/icons/wallet-credit-card.svg", "WalletCardIcon")
const AmazonIcon = createIcon("../assets/icons/amazon-outlined.svg", "AmazonIcon")
const UberIcon = createIcon("../assets/icons/brand-uber.svg", "UberIcon")
const AirbnbIcon = createIcon("../assets/icons/bxl-airbnb.svg", "AirbnbIcon")
const DollarSignIcon = createIcon("../assets/icons/dollar-sign.svg", "DollarSignIcon")
const FigmaIcon = createIcon("../assets/icons/logo-figma.svg", "FigmaIcon")
const ShoopingCartIcon = createIcon("../assets/icons/shopping-cart-line.svg", "ShoopingCartIcon")
const SpotifyIcon = createIcon("../assets/icons/spotify-logo-light.svg", "SpotifyIcon")
const NetflixIcon = createIcon("../assets/icons/netflix.svg", "NetflixIcon")

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