export default function FoodCard(props){
    const {foodName} = props;
    return (
        <div>
            <h3>{foodName}</h3>
            <p>Description of the food</p>
        </div>
    )
}