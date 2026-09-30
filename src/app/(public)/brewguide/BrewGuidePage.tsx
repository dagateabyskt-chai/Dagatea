import { Star } from "lucide-react";
import { collectionFont as guideFont } from "@/components/products/fonts";
import milkTea from "../../../../public/gif/milk-tea.gif";
import blackTea from "../../../../public/gif/black-tea.gif";
import greenTea from "../../../../public/gif/green-tea.gif";
import BrewingIllustration from "./BrewingIllustration";
import styles from "./brewguide.module.css";

const recipes = [
  {
    id: "milk-tea",
    title: "Milk Tea (Masala / Indian Style Tea)",
    imageLabel: "Milk Tea",
    image: milkTea,
    description: (
      <>
        Milk tea is the most popular way of drinking tea in India. It
        gives a <strong>strong, rich, and creamy flavor</strong> that refreshes the mind and body.
      </>
    ),
    ingredients: [
      "1/2 cup water",
      "1 cup milk",
      "1 teaspoon tea leaves",
      "Sugar as per taste",
      "Optional: ginger, cardamom, or masala",
    ],
    steps: [
      <>Add <strong>water to a pan</strong> and bring it to a boil.</>,
      <>Add <strong>daga tea leaves</strong> and let it boil for 1-2 minutes.</>,
      <>Add <strong>milk and sugar</strong>.</>,
      <>Let the tea <strong>boil for 4-5 minutes</strong>.</>,
      <>Strain the tea into a cup and serve hot.</>,
    ],
    recommendation: "✔ Best for strong taste lovers.",
  },
  {
    id: "black-tea",
    title: "Black Tea",
    imageLabel: "Black Tea",
    image: blackTea,
    description: (
      <>
        Black tea is a <strong>pure tea without milk</strong>, known for its
        bold taste and refreshing aroma. It is widely enjoyed around the world.
      </>
    ),
    ingredients: [
      "1 cup hot water",
      "1 teaspoon tea leaves",
      "Sugar or honey (optional)",
      "Lemon (optional)",
    ],
    steps: [
      <>Boil <strong>fresh water</strong>.</>,
      <>Add <strong>daga tea leaves</strong> to the hot water.</>,
      <>Let it <strong>steep for 2-3 minutes</strong>.</>,
      <>Strain into a cup.</>,
      <>Add <strong>lemon or honey</strong> if desired.</>,
    ],
    recommendation: "✔ Perfect for light and refreshing tea lovers.",
  },
  {
    id: "green-tea",
    title: "Green Tea",
    imageLabel: "Green Tea",
    image: greenTea,
    description: (
      <>
        Green tea is known for its <strong>natural antioxidants and health benefits</strong>.
        It has a light, fresh taste and is best enjoyed without milk.
      </>
    ),
    ingredients: [
      "1 cup hot water (not boiling)",
      "1 teaspoon green tea leaves or 1 green tea bag",
      "Honey or lemon (optional)",
    ],
    steps: [
      <>Heat water until it is <strong>hot but not boiling</strong>.</>,
      <>Add <strong>MTT green tea leaves or tea bag</strong> to the cup.</>,
      <>Pour the hot water over the tea.</>,
      <>Let it <strong>steep for 2–3 minutes</strong>.</>,
      <>Remove the tea leaves or bag and enjoy.</>,
    ],
    recommendation: "✔ Best for health-conscious tea drinkers.",
  },
];

const tips = [
  <>Always use <strong>fresh water</strong> for better taste.</>,
  <>Do not <strong>over-boil tea leaves</strong> as it can make the tea bitter.</>,
  <>Adjust <strong>tea strength and sugar</strong> according to your preference.</>,
  <>Use <strong>high-quality tea leaves</strong> for the best flavor and aroma.</>,
];

export default function BrewingGuidePage() {
  return (
    <main className={`${styles.page} ${guideFont.className}`}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="brewing-title">
          <span className={styles.eyebrow}>Artisanal steeping guide</span>
          <h1 id="brewing-title">How to Brew Perfect Tea</h1>
          <p>
            The perfect cup of tea depends not only on the quality of tea leaves
            but also on the <strong>right brewing method</strong>. Follow these
            simple steps to enjoy the <strong>best flavor, aroma, and strength</strong>{" "}
            from your tea.
          </p>
        </section>

        <section className={styles.recipes} aria-label="Tea brewing recipes">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              id={recipe.id}
              className={styles.recipe}
              data-tea={recipe.id}
              aria-labelledby={`${recipe.id}-title`}
            >
              <div className={styles.recipeCopy}>
                <h2 id={`${recipe.id}-title`}>{recipe.title}</h2>
                <p className={styles.description}>{recipe.description}</p>

                <div className={styles.recipeDetails}>
                  <section className={styles.ingredients} aria-labelledby={`${recipe.id}-ingredients`}>
                    <h3 id={`${recipe.id}-ingredients`} className={styles.detailHeading}>Ingredients</h3>
                    <ul>
                      {recipe.ingredients.map((ingredient) => (
                        <li key={ingredient}>
                          {ingredient.startsWith("Optional:") ? <em>{ingredient}</em> : ingredient}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className={styles.method} aria-labelledby={`${recipe.id}-method`}>
                    <h3 id={`${recipe.id}-method`} className={styles.detailHeading}>Brewing Method</h3>
                    <ol className={styles.steps} role="list">
                      {recipe.steps.map((step, index) => (
                        <li key={index}>
                          <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>

                <p className={styles.recommendation}>{recipe.recommendation}</p>
              </div>

              <BrewingIllustration
                id={`${recipe.id}-illustration`}
                image={recipe.image}
                alt={recipe.id}
                label={recipe.imageLabel}
              />
            </article>
          ))}
        </section>

        <section className={styles.tips} aria-labelledby="brewing-tips-title">
          <span className={styles.tipsIcon}><Star size={23} aria-hidden="true" /></span>
          <div>
            <h2 id="brewing-tips-title">Brewing Tips for the Perfect Cup</h2>
            <ol className={styles.tipsList} role="list">
              {tips.map((tip, index) => (
                <li key={index}>
                  <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
