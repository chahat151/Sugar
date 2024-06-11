import {
  asset5,
  asset9,
  asset21,
  asset22,
  asset23,
  asset24,
  asset25,
  asset67,
} from "assets/images";
import { CiDeliveryTruck } from "react-icons/ci";

export interface Product {
  [x: string]: any;
  image: string;
  title: string;
  description: string;
  price: string;
  productsID: string;
  productInfo?: any;
  tag?: string; // Optional property
}
export const defaultProduct: Product = {
  image: "",
  title: "",
  description: "",
  price: "",
  productsID: "",
  productInfo: {},
};
export const products: Product[] = [
  {
    image: asset5,
    title: "The Ultimate Box - Exclusive gift box with 80 bites",
    description: "Mix chocolate bites",
    price: "95,95",
    productsID: "47cc01df-8d0c-4224-a2f0-f033ab4b0dce",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
  },
  {
    image: asset67,
    title: "Solid Mix - Box with 75 pcs. Bites",
    description: "Crispy Carrie, Salty Fred og Persian Perry",
    price: "75,95",
    productsID: "5ba88336-7bfe-44aa-aca5-31d59d58911b",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
    tag: "Popular",
  },
  {
    image: asset9,
    title: "Grainy Mix - Box with 75 pcs. bites",
    description: "Mix of Bites with chocolate coating",
    price: "75,95",
    productsID: "7a3be120-06ff-437d-92d1-5e0241b97221",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
  },
  {
    image: asset22,
    title: "Premium Box - Exclusive gift box with 50 bites",
    description: "Mix chocolate bites",
    price: "61,95",
    productsID: "1acdc3d4-2982-4ddf-8835-30a3b077246b",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
  },
  {
    image: asset21,
    title: "True Love - Box with 75 pcs. Crispy Carrie Bites",
    description: "These bites are made with love to celebrate love",
    price: "61,95",
    productsID: "c3bfaf16-0ff7-405e-83e8-22526e508953",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
    tag: "New",
  },
  {
    image: asset23,
    title: "Confirmation - Box with 75 pcs. Mix Bites",
    description: "God bless chocolate!",
    price: "61,95",
    productsID: "9e699c92-47e7-4e75-af02-19bd4edb15b7",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
    tag: "Sold Out",
  },
  {
    image: asset24,
    title: "Minty Cindy - Box with 75 pcs. bites",
    description: "Mint, matcha tea, crisp and premium dark chocolate",
    price: "71,95",
    productsID: "51ec20a1-195b-4740-8a08-f6f7b752db6a",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
  },
  {
    image: asset25,
    title: "Creamy Carol - Box with 75 pcs. bites",
    description: "Soft caramel and premium dark chocolate",
    price: "71,95",
    productsID: "2cb0f044-bf1f-42d6-bb14-e04e70705ab4",
    productInfo: {
      title: "Creamy Carol - Box with 75 pcs. bites",
      subtitle: "Soft caramel and premium dark chocolate",
      subscription: [
        {
          off: "0%",
          duration: "0 days",
        },
        {
          off: "10%",
          duration: "30 days",
        },
        {
          off: "5%",
          duration: "60 days",
        },
      ],
      discount: [
        ["1", "10%"],
        ["2", "5%"],
      ],
      info: {
        title: "The softest soul",
        desc: "For fans of soft caramel, there is none better than Carol. Surrounded by premium dark chocolate, you encounter the creamiest caramel.",
        bullets: [
          "Filled with natural ingredients",
          "Handmade in Denmark",
          "Award-winning chocolate",
        ],
        weight: "750g",
        html: function () {
          return `<h1 class='infoTitle' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem; line-height: 2.2;'>
          ${this.title}
            </h1>
        <p class='infoDesc' style='  font-size: 1.4rem; line-height: 2.2; font-weight: 400; margin-bottom: 2rem;'>
        ${this.desc}
        </p>
          <ul class='infoList' style='list-style-position: inside; margin-bottom: 3rem;'>
            ${this.bullets
              .map(
                (bullet) =>
                  `<li style='  font-size: 1.3rem; line-height: 1.7; font-weight: 400; margin-bottom: 1.3rem;'>${bullet}</li>`
              )
              .join("\n")}
          </ul>
        <p class='infoWeight' style='font-size: 1.5rem; font-weight: 900; margin-bottom: 0.7rem;'>${
          this.weight
        }</p>
        `;
        },
      },
      nutritionalContent: {
        EnergykJ: "2235.0 kJ",
        EnergyKcal: "532.0 kcal",
        Fat: "35.0 g",
        ofWhichSaturatedDFat: "21.0 g",
        Carbohydrate: "45.0 g",
        ofWhichSugar: "42.0 g",
        Protein: "4.0 g",
        Salt: "0.04 g",
      },
      ingredient: `DA/SE/NO Chokolade m/ 66% mørk chokolade og 26% flødekaramel. Ingredienser: Kakaomasse, sukker/socker, fløde/grädde/krem-karamel/kola (FLØDE/GRÄDDE/KREM, sukker/socker, glukosesirup), kakaosmør, sødMÆLKS/helMJÖLKS/helMELKS-pulver, emulgator: SOJAlecithin, citron-saft/juice, vaniljeblanding, naturlig vaniljearoma. Mørk chokolade: Mindst 60% kakaotørstof. Kan indeholde/innehålla spor/spår af/av sesam, nødder/nötter/nøtter, jordnødder/jordnötter/peanøtter og/och hvede/vete/hvete.

      GB Chocolate with 66% dark chocolate and 26% cream caramel. Ingredients: Cocoa mass, sugar, cream caramel (CREAM, sugar, glucose syrup), cocoa butter, whole MILK powder, emulsifier: SOY lecithin, lemon juice, vanilla mixture, natural vanilla flavouring. Dark chocolate: Min. 60% dry cocoa solids. May contain traces of sesame, nuts, peanuts and wheat.

      DE Schokolade mit 66% dunkler Schokolade und 26% Sahnekaramell. Zutaten: Kakaomasse, Zucker, Sahnekaramell (SAHNE, Zucker, Glukosesirup), Kakaobutter, vollMILCHpulver, Emulgator: SOJAlecithin, Zitronensaft, Vanillemischung, natürliches Vanillearoma. Dunkle Schokolade: Mindestens 60% Kakaotrockenmasse. Kann Spuren von Sesam, Nüssen, Erdnüssen und Weizen enthalten.`,
    },
  },
];

export const DeliveryInfo = [
  {
    title: "Expected Delivery",
    icon: CiDeliveryTruck,
    content: `<p style="font-size: 1.4rem; line-height: 2.2;">
        We process all packages through our subcontractor, Homerunner, which
        allows you as a customer to choose from a variety of different shipping
        companies.
        <br />
        <b style="font-size: 2rem;">International deliveries: 3-14 days.</b>
        <br />
        There will be a shipping fee for all orders shipped outside of Denmark
        (the price is specified when you choose the shipping option). The amount
        is visible before you place your order. Delivery time outside of Denmark
        is typically 3-14 business days.
        <br />
        All our packages are insured and come with a track & trace number. Once
        your package is dispatched, you will receive an email with tracking
        information, allowing you to trace your package.
        <br />
        <b style="font-size: 2rem; line-height: normal; margin-top: 1.7rem; display: inline-block;">
          For deliveries within Denmark, the typical delivery time is 1-3
          business days (free on all orders above 499 DKK)
        </b>
      </p>`,
  },
];

export const productInformation = [
  {
    title: "Nutritional content per 100 g",
    // icon: CiDeliveryTruck,
    content: `<p><span style="font-size: 1.5rem;  line-height:1.4; line-height:1.4; ">Energy: <em><strong>2168.0</strong></em>&nbsp;kJ</span><br><span style="font-size: 1.5rem;  line-height:1.4;">Energy:&nbsp;<em><strong>516.0</strong></em>&nbsp;kcal</span><br><span style="font-size: 1.5rem;  line-height:1.4;">Fat:&nbsp;<em><strong>33.0</strong></em>&nbsp;g</span><br><span style="font-size: 1.5rem;  line-height:1.4;">- of which saturated fat:&nbsp;<em><strong>11.0</strong></em>&nbsp;g</span><br><span style="font-size: 1.5rem;  line-height:1.4;">Carbohydrate:&nbsp;<em><strong>44.0</strong></em>&nbsp;g</span><br><span style="font-size: 1.5rem;  line-height:1.4;">- of which sugar :&nbsp;<em><strong>40.0</strong></em>&nbsp;g</span><br><span style="font-size: 1.5rem;  line-height:1.4;">Protein:&nbsp;<em><strong>10.0</strong></em>&nbsp;g</span><br><span style="font-size: 1.5rem;  line-height:1.4;">Salt:&nbsp;<em><strong>0.08</strong></em> g</span></p>
    <p style='margin-top: 1.3rem;'><span style="font-size: 1.5rem;  line-height:1.4;"><em>We continuously update our product information on the website, but updates may be delayed. Therefore, we always recommend checking the information on the packaging.</em></span></p>`,
  },
  {
    title: "Ingredient list",
    // icon: CiDeliveryTruck,
    content: `
<p><span style="font-size: 1.5rem;"><em>Marzipan w/ chocolate coating. DA/SE/NO Ingredients: 60% marzipan (Valencia ALMONDS/ALMONDS, sugar/sugar, water/water/water, glucose syrup, rowan berry/rönnbär/rown berry extract), 40% dark chocolate (cocoa mass, sugar/sugar, cocoa butter, emulsifier: SOY lecithin). Dark chocolate: at least 60% cocoa solids. May contain traces of peanuts, milk, sesame, wheat and/or other nuts.<br/><br/>

GB Ingredients: 60% marzipan (Valencian ALMONDS, sugar, water, glucose syrup, rowanberry extract), 40% dark chocolate (cocoa mass, sugar, cocoa butter, emulsifier: SOY lecithin). Dark chocolate: Min. 60% dry cocoa solids. May contain traces of peanuts, milk, sesame, wheat and other nuts.<br/><br/>

DE Marzipan mit Schokoladenüberzug. Ingredients: 60% Marzipan (Valencia ALMOND, Zucker, Wasser, Glucose syrup, Vogelbeerenextract), 40% Dark chocolate (Cocoa mass, Zucker, Cocoa butter, Emulsifier: SOYA lecithin). Dark chocolate: at least 60% cocoa solids. May contain traces of peanuts, milk, sesame, wheat and other nuts.</em></span></p>`,
  },
];
