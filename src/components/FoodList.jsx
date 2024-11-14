import FoodCard from "./FoodCard";

let foods = [
    "KFC",
    "Steak & Salad",
    "Pizza",
    "Dumplings",
    "Lamb curry",
    "Laksa",
    "Lasagna"
];

export default function FoodList(){
    return (
        <section>
                {
                    foods.map((food, index) => {
                        return <p><FoodCard key={index} foodName={food}/></p>
                    })
                }
        </section>
    )
}