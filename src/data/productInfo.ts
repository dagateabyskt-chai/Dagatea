/* ----- IMAGES ----- */
import dagaRed from "../../public/images/daga-tea-red.webp"
import dagaGreen from "../../public/images/daga-tea-green.webp"
import blackGold from "../../public/images/black-gold.webp"
import mttGreen from "../../public/images/mtt-green-tea.webp"
import dagatea from "../../public/images/daga-premium-tea.webp"

export const cardData = [
    {
        Product: "Daga Tea Premium",
        Price: ["1kg", "500g", "250g"],
        Size: ["₹400", "₹200", "₹100"],
        Category: "Assam CTC Tea",
        Description: "Daga Tea Premium is a high-quality blend offering a perfect balance of strength, aroma, and taste. Carefully curated for superior experience, it delivers a rich and satisfying cup every time.",
        Specification: {
            "Aroma": "Rich and inviting",
            "Taste": "Balanced, smooth yet strong",
            "Liquor": "Bright reddish-brown",
            "Leaf Grade": "Premium CTC blend",
            "Origin": "Assam",
            "Best Served": "With or without milk",
            "Caffeine": "Medium to High",
            "Ideal For": "Premium tea lovers"
        },
        img: dagatea
    },
    {
        Product: "Black Gold",
        Price: ["1kg", "500g", "250g"],
        Size: ["₹280", "₹140", "₹70"],
        Category: "Assam CTC Tea",
        Description: "Black Gold is a strong tea blend known for its intense flavor and superior color. Designed for tea lovers who enjoy a kadak chai experience, it stands out with its richness and long-lasting taste.",
        Specification: {
            "Aroma": "Rich and intense",
            "Taste": "Strong, bold, slightly astringent",
            "Liquor": "Dark blackish-red",
            "Leaf Grade": "Premium CTC",
            "Origin": "Assam",
            "Best Served": "With milk for strong chai",
            "Caffeine": "High",
            "Ideal For": "Kadak chai lovers"
        },
        img: blackGold
    },
    {
        Product: "Daga Tea Red",
        Price: ["1kg", "500g", "250g"],
        Size: ["₹360", "₹180", "₹90"],
        Category: "Assam CTC Tea",
        Description: "Daga Tea Red is a premium strong and refreshing Assam CTC tea crafted for everyday enjoyment. It delivers a bold taste with a rich color, making it perfect for traditional Indian milk tea (chai). Ideal for households and retailers looking for consistent quality at an affordable price.",
        Specification: {
            "Aroma": "Strong and malty",
            "Taste": "Bold, full-bodied with slight bitterness",
            "Liquor": "Deep reddish-brown",
            "Leaf Grade": "CTC (Crush-Tear-Curl)",
            "Origin": "Assam",
            "Best Served": "With milk and sugar",
            "Caffeine": "Medium to High",
            "Ideal For": "Daily consumption"
        },
        img: dagaRed
    },
    {
        Product: "Daga Tea Blue",
        Price: ["1kg", "500g", "250g"],
        Size: ["₹340", "₹170", "₹85"],
        Category: "Assam CTC Tea",
        Description: "Daga Tea Green offers a balanced blend with a smoother and lighter taste compared to strong CTC teas. It is perfect for those who prefer a mild yet refreshing cup with a pleasant aroma.",
        Specification: {
            "Aroma": "Fresh and grassy",
            "Taste": "Smooth, mild, slightly sweet",
            "Liquor": "Golden",
            "Leaf Grade": "Fine CTC blend",
            "Origin": "Assam",
            "Best Served": "Light milk or without milk",
            "Caffeine": "Medium",
            "Ideal For": "Light tea drinkers"
        },
        img: dagaGreen
    },
    {
        Product: "MTT Green Tea",
        Price: ["250g", "100g", "50g"],
        Size: ["₹250", "₹100", "₹50"],
        Category: "Green Tea",
        Description: "MTT Green Tea is a refreshing and health-focused tea crafted from carefully selected leaves. Known for its light taste and wellness benefits, it is ideal for a healthy lifestyle.",
        Specification: {
            "Aroma": "Light, herbal and fresh",
            "Taste": "Delicate, slightly grassy",
            "Liquor": "Pale green",
            "Leaf Grade": "Whole/Green leaves",
            "Origin": "Assam",
            "Best Served": "Without milk",
            "Caffeine": "Low",
            "Ideal For": "Health-conscious consumers"
        },
        img: mttGreen
    },
];
