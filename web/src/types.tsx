import { IconType } from "react-icons";

export interface App {
  name: string;
  color: string;
  icon: IconType;
  iconColor?: string;
  app: React.ReactNode;
}