import { IconType } from "react-icons";

export interface App {
  id: string;
  name: string;
  color: string;
  icon: IconType;
  iconColor?: string;
  app: React.ReactNode;
}