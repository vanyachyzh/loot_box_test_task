import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkinItem from "@/app/components/SkinItem";
import { SkinState } from "@/app/types";

describe("SkinItem Component", () => {
  const skin = { src: "/images/skin.png", name: "Test Skin", id: 2 };

  const renderSkinItem = (state: SkinState | null = null) => {
    return render(<SkinItem skin={skin} state={state} />);
  };

  it("renders the skin image", () => {
    renderSkinItem();
    const image = screen.getByRole("img", { name: skin.name });
    expect(image).toBeInTheDocument();
  });

  it("renders the skin image with correct alt", () => {
    renderSkinItem();
    const image = screen.getByRole("img", { name: skin.name });
    expect(image).toHaveAttribute("alt", skin.name);
  });
});
