import type { Coffee } from './CardList';

interface CardProps {
    coffee: Coffee;
}

function Card({ coffee }: CardProps) {
    return (
        <div>
            <div>
                <img className='rounded-2xl max-w-64' src={coffee.image} alt={coffee.name} />
                <div className='flex justify-between my-2'>
                    <h2>{coffee.name}</h2>
                    <p className='rounded px-2 bg-[#BEE3CC] text-[#111315]'>{coffee.price}</p>
                </div>
                <p>Rating: {coffee.rating && coffee.votes ? `${coffee.rating} (${coffee.votes} votos)` : "No rating"}</p>
                <p>{coffee.popular ? "Popular" : ""}</p>
                <p>{coffee.available ? "" : "Sold out"}</p>
            </div>
        </div>
    );
}

export default Card;