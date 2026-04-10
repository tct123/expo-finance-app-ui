import React from "react";
import { SvgXml } from "react-native-svg";


interface MyIconProps { width?: number, height?: number, color?: string }

const dollarIcon = require("../assets/icons/dollar-line.svg");
const walletAddMoneyIcon = require("../assets/icons/add-money-wallet-icon.svg")
const walletCardIcon = require("../assets/icons/wallet-credit-card.svg");
const amazonIcon = require("../assets/icons/amazon-outlined.svg");
const uberIcon = require("../assets/icons/brand-uber.svg");
const airbnbIcon = require("../assets/icons/bxl-airbnb.svg");
const dollarSignIcon = require("../assets/icons/dollar-sign.svg");
const figmaIcon = require("../assets/icons/logo-figma.svg");
const shoopingCartIcon = require("../assets/icons/shopping-cart-line.svg");
const spotifyIcon = require("../assets/icons/spotify-logo-light.svg");
const netflixIcon = require("../assets/icons/netflix.svg");

const createIcon = (svgContent: any, displayName: string) => {
  const IconComponent = ({ width = 24, height = 24, color = 'black' }: MyIconProps) => {
    // Extrahiere den SVG-Inhalt als String
    const svgString = typeof svgContent === 'string' ? svgContent : svgContent.default;
    const coloredSvgContent = svgString.replace(/fill="currentColor"/g, `fill="${color}"`);
    return <SvgXml xml={coloredSvgContent} width={width} height={height} />;
  };
  IconComponent.displayName = displayName;
  return IconComponent;
};

const DollarIcon = createIcon(dollarIcon, "DollarIcon")
const WalletAddMoneyIcon = createIcon(walletAddMoneyIcon, "WalletAddMoneyIcon")
const WalletCardIcon = createIcon(walletCardIcon, "WalletCardIcon")
const AmazonIcon = createIcon(amazonIcon, "AmazonIcon")
const UberIcon = createIcon(uberIcon, "UberIcon")
const AirbnbIcon = createIcon(airbnbIcon, "AirbnbIcon")
const DollarSignIcon = createIcon(dollarSignIcon, "DollarSignIcon")
const FigmaIcon = createIcon(figmaIcon, "FigmaIcon")
const ShoopingCartIcon = createIcon(shoopingCartIcon, "ShoopingCartIcon")
const SpotifyIcon = createIcon(spotifyIcon, "SpotifyIcon")
const NetflixIcon = createIcon(netflixIcon, "NetflixIcon")

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