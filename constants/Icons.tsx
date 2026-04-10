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


interface MyIconProps { width?: number, height?: number, color?: string }

const createIcon = (IconComponent: React.ComponentType<any>, displayName: string) => {
  const Icon = ({ width = 24, height = 24, color = "black" }: MyIconProps) => {
    return <IconComponent width={width} height={height} fill={color} />;
  };

  Icon.displayName = displayName;
  return Icon;
};

const DollarIcon = createIcon(DollarIconSVG, "DollarIcon")
const WalletAddMoneyIcon = createIcon(WalletAddMoneyIconSVG, "WalletAddMoneyIcon")
const WalletCardIcon = createIcon(WalletCardIconSVG, "WalletCardIcon")
const AmazonIcon = createIcon(AmazonIconSVG, "AmazonIcon")
const UberIcon = createIcon(UberIconSVG, "UberIcon")
const AirbnbIcon = createIcon(AirbnbIconSVG, "AirbnbIcon")
const DollarSignIcon = createIcon(DollarSignIconSVG, "DollarSignIcon")
const FigmaIcon = createIcon(FigmaIconSVG, "FigmaIcon")
const ShoopingCartIcon = createIcon(ShoopingCartIconSVG, "ShoopingCartIcon")
const SpotifyIcon = createIcon(SpotifyIconSVG, "SpotifyIcon")
const NetflixIcon = createIcon(NetflixIconSVG, "NetflixIcon")

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