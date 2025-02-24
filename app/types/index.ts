export type Box = {
  name: string;
  id: number;
  skins: Skin[];
};
export type Skin = {
  id: number;
  src: string;
  name: string;
};

export enum SkinState {
  None,
  Selected,
  Unselected,
}

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";
