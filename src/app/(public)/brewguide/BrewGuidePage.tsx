import Image from "next/image"

/* ----- IMAGES ----- */
import milkTea from "../../../../public/gif/milk-tea.gif"
import blackTea from "../../../../public/gif/black-tea.gif"
import greenTea from "../../../../public/gif/green-tea.gif"

const BrewingGuidePage = () => {
  return (
    <main
      className="
      max-w-480 mx-auto px-6 py-24
      bg-orange-100 text-stone-800
      dark:bg-amber-950 dark:text-stone-200
      transition-colors duration-300
      "
    >
      <div
        className="
        bg-transparent backdrop-hue-rotate-15
        border dark:border-[#f8eddb]/30 border-[#642d01]/30
        rounded-2xl p-8
        "
      >
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="py-2 text-4xl font-extrabold text-stone-900 dark:text-white">
            How to Brew Perfect Tea
          </h1>

          <p className="text-lg text-stone-700 dark:text-zinc-300 max-w-3xl mx-auto">
            The perfect cup of tea depends not only on the quality of tea leaves
            but also on the <strong>right brewing method</strong>. Follow these
            simple steps to enjoy the <strong>best flavor, aroma, and strength</strong>{" "}
            from your tea.
          </p>
        </header>

        {/* Articles */}
        <section className="text-base">

          {/* Milk Tea */}
          <article
            className="
            relative p-6 my-6 rounded-xl
            bg-amber-50 dark:bg-amber-900/20
            border border-amber-200 dark:border-amber-800
            backdrop-blur-md
            transition-all duration-300
            hover:shadow-lg hover:-translate-y-1
            "
          >
            <h2 className="font-bold text-2xl py-1 text-stone-900 dark:text-white">
              Milk Tea (Masala / Indian Style Tea)
            </h2>

            <p className="text-stone-700 dark:text-zinc-300">
              Milk tea is the most popular way of drinking tea in India. It
              gives a <strong className="text-amber-700 dark:text-amber-400">strong,
              rich, and creamy flavor</strong> that refreshes the mind and body.
            </p>

            <h4 className="font-bold text-xl py-2">Ingredients</h4>

            <ul className="list-disc px-8 marker:text-amber-600 dark:marker:text-amber-400 text-stone-700 dark:text-zinc-300">
              <li>1/2 cup water</li>
              <li>1 cup milk</li>
              <li>1 teaspoon tea leaves</li>
              <li>Sugar as per taste</li>
              <li>Optional: ginger, cardamom, or masala</li>
            </ul>

            <h4 className="font-bold text-xl py-2">Brewing Method</h4>

            <ol className="list-decimal px-8 text-stone-700 dark:text-zinc-300">
              <li>Add <strong>water to a pan</strong> and bring it to a boil.</li>
              <li>Add <strong>daga tea leaves</strong> and let it boil for 1-2 minutes.</li>
              <li>Add <strong>milk and sugar</strong>.</li>
              <li>Let the tea <strong>boil for 4-5 minutes</strong>.</li>
              <li>Strain the tea into a cup and serve hot.</li>
            </ol>

            <p className="text-lg font-medium py-2 text-amber-700 dark:text-amber-400">
              ✔ Best for strong taste lovers.
            </p>

            <div className="lg:absolute bottom-20 right-10 rounded-2xl overflow-hidden md:w-[400px] md:h-[224px] shadow-md ring-1 ring-stone-200 dark:ring-zinc-700">
              <Image
                src={milkTea}
                alt="milk-tea"
                className="object-cover w-full h-full"
              />
            </div>
          </article>

          {/* Black Tea */}
          <article
            className="
            relative p-6 my-6 rounded-xl
            bg-stone-100 dark:bg-zinc-800/50
            border border-stone-300 dark:border-zinc-700
            backdrop-blur-md
            transition-all duration-300
            hover:shadow-lg hover:-translate-y-1
            "
          >
            <h2 className="font-bold text-2xl py-1 text-stone-900 dark:text-white">
              Black Tea
            </h2>

            <p className="text-stone-700 dark:text-zinc-300">
              Black tea is a <strong>pure tea without milk</strong>, known for its
              bold taste and refreshing aroma. It is widely enjoyed around the
              world.
            </p>

            <h4 className="font-bold text-xl py-2">Ingredients</h4>

            <ul className="list-disc px-8 marker:text-stone-700 dark:marker:text-zinc-300 text-stone-700 dark:text-zinc-300">
              <li>1 cup hot water</li>
              <li>1 teaspoon tea leaves</li>
              <li>Sugar or honey (optional)</li>
              <li>Lemon (optional)</li>
            </ul>

            <h4 className="font-bold text-xl py-2">Brewing Method</h4>

            <ol className="list-decimal px-8 text-stone-700 dark:text-zinc-300">
              <li>Boil <strong>fresh water</strong>.</li>
              <li>Add <strong>daga tea leaves</strong> to the hot water.</li>
              <li>Let it <strong>steep for 2-3 minutes</strong>.</li>
              <li>Strain into a cup.</li>
              <li>Add <strong>lemon or honey</strong> if desired.</li>
            </ol>

            <p className="text-lg font-medium py-2 text-stone-800 dark:text-zinc-200">
              ✔ Perfect for light and refreshing tea lovers.
            </p>

            <div className="lg:absolute bottom-20 right-10 rounded-2xl overflow-hidden md:w-[400px] md:h-[224px] shadow-md ring-1 ring-stone-200 dark:ring-zinc-700">
              <Image
                src={blackTea}
                alt="black-tea"
                className="object-cover w-full h-full"
              />
            </div>
          </article>

          {/* Green Tea */}
          <article
            className="
            relative p-6 my-6 rounded-xl
            bg-green-50 dark:bg-green-900/20
            border border-green-200 dark:border-green-800
            transition-all duration-300
            hover:shadow-lg hover:-translate-y-1
            "
          >
            <h2 className="font-bold text-2xl py-1 text-stone-900 dark:text-white">
              Green Tea
            </h2>

            <p className="text-stone-700 dark:text-zinc-300">
              Green tea is known for its <strong>natural antioxidants and
              health benefits</strong>. It has a light, fresh taste and is best
              enjoyed without milk.
            </p>

            <h4 className="font-bold text-xl py-2">Ingredients</h4>

            <ul className="list-disc px-8 marker:text-green-600 dark:marker:text-green-400 text-stone-700 dark:text-zinc-300">
              <li>1 cup hot water (not boiling)</li>
              <li>1 teaspoon green tea leaves or 1 green tea bag</li>
              <li>Honey or lemon (optional)</li>
            </ul>

            <h4 className="font-bold text-xl py-2">Brewing Method</h4>

            <ol className="list-decimal px-8 text-stone-700 dark:text-zinc-300">
              <li>Heat water until it is <strong>hot but not boiling</strong>.</li>
              <li>Add <strong>MTT green tea leaves or tea bag</strong> to the cup.</li>
              <li>Pour the hot water over the tea.</li>
              <li>Let it <strong>steep for 2–3 minutes</strong>.</li>
              <li>Remove the tea leaves or bag and enjoy.</li>
            </ol>

            <p className="text-lg font-medium py-2 text-green-700 dark:text-green-400">
              ✔ Best for health-conscious tea drinkers.
            </p>

            <div className="lg:absolute bottom-20 right-10 rounded-2xl overflow-hidden md:w-[400px] md:h-[224px] shadow-md ring-1 ring-stone-200 dark:ring-zinc-700">
              <Image
                src={greenTea}
                alt="green-tea"
                className="object-cover w-full h-full"
              />
            </div>
          </article>
        </section>

        {/* Tips Section */}
        <section
          className="
          mt-10 p-6 rounded-xl
          bg-amber-100 dark:bg-amber-900/30
          border border-amber-300 dark:border-amber-700
          "
        >
          <h2 className="font-bold text-2xl mb-3 text-stone-900 dark:text-white">
            Brewing Tips for the Perfect Cup
          </h2>

          <ol className="list-decimal px-8 text-stone-700 dark:text-zinc-300">
            <li>Always use <strong>fresh water</strong> for better taste.</li>
            <li>Do not <strong>over-boil tea leaves</strong> as it can make the tea bitter.</li>
            <li>Adjust <strong>tea strength and sugar</strong> according to your preference.</li>
            <li>Use <strong>high-quality tea leaves</strong> for the best flavor and aroma.</li>
          </ol>
        </section>
      </div>
    </main>
  )
}

export default BrewingGuidePage