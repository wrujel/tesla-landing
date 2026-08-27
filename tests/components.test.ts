import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";

import ChargeSection from "../src/components/ChargeSection.astro";
import LandingHeader from "../src/components/LandingHeader.astro";
import Logo from "../src/components/Logo.astro";
import MainSection from "../src/components/MainSection.astro";
import ProductSection from "../src/components/ProductSection.astro";
import Layout from "../src/layouts/Layout.astro";
import Index from "../src/pages/index.astro";

describe("Logo", () => {
  it("renders the Tesla logo link", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Logo);

    expect(html).toContain("<a");
    expect(html).toContain('data-header-color="white"');
    expect(html).toContain("<svg");
  });
});

describe("MainSection", () => {
  it("renders the hero with its video background", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(MainSection);

    expect(html).toContain("Experience Tesla");
    expect(html).toContain("Schedule a Demo Drive Today");
    expect(html).toContain("<video");
    expect(html).toContain("Homepage-Test_Drive-NA-Desktop.mp4");
  });
});

describe("ChargeSection", () => {
  it("renders the accessories section", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ChargeSection);

    expect(html).toContain("Accessories");
    expect(html).toContain("Shop Now");
    expect(html).toContain("Desktop_Accessories");
  });
});

describe("ProductSection", () => {
  const props = {
    title: "Model 3",
    description: "Lease from $399/mo",
    src: "https://example.com/model-3.jpg",
  };

  it("underlines the description by default", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProductSection, { props });

    expect(html).toContain("Model 3");
    expect(html).toContain("Lease from $399/mo");
    expect(html).toContain('src="https://example.com/model-3.jpg"');
    expect(html).toContain("underline underline-offset-[3px]");
  });

  it("omits the underline when underline is false", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProductSection, {
      props: { ...props, underline: false },
    });

    expect(html).not.toContain("underline underline-offset-[3px]");
  });
});

describe("LandingHeader", () => {
  it("renders both navs and the menu backdrop", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(LandingHeader);

    for (const link of ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels", "Powerwall", "Shop", "Account", "Menu"]) {
      expect(html).toContain(link);
    }
    expect(html).toContain('id="landing-header"');
    expect(html).toContain('id="menu-backdrop"');
  });
});

describe("Layout", () => {
  it("renders the page title and slot content", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Layout, {
      props: { title: "Tesla Landing" },
      slots: { default: "<p>content</p>" },
    });

    expect(html).toContain("<title>Tesla Landing</title>");
    expect(html).toContain("<p>content</p>");
    expect(html).toContain('lang="en"');
  });
});

describe("index page", () => {
  it("renders every landing section", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Index);

    expect(html).toContain("<title>Tesla Landing</title>");
    expect(html.match(/landing-section/g)?.length).toBe(8);
    for (const title of ["Model 3", "Model Y", "Model S", "Model X", "Solar Panels", "Solar Roof", "Accessories"]) {
      expect(html).toContain(title);
    }
  });
});
