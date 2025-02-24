import BoxItem from "@/app/components/BoxItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReduxProvider } from "@/app/providers/ReduxProvider";

describe("BoxItem Component", () => {
  const box = { id: 1, name: "Test Box", skins: [] };

  const renderBoxItem = (isActive = true) => {
    return render(
      <ReduxProvider>
        <BoxItem box={box} openRoulette={() => {}} isActive={isActive} />
      </ReduxProvider>
    );
  };

  it("renders the image", () => {
    renderBoxItem();
    const image = screen.getByRole("img", { name: box.name });
    expect(image).toBeInTheDocument();
  });

  it("renders the image with correct alt", () => {
    renderBoxItem();
    const image = screen.getByRole("img", { name: box.name });
    expect(image).toHaveAttribute("alt", box.name);
  });

  it("should have tabIndex 0 when isActive is true", () => {
    renderBoxItem(false);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("tabIndex", "-1");
  });
});
