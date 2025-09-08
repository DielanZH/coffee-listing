import Card from './Card'

export interface Coffee {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;
}

interface CardListProps {
    coffeeData: Coffee[];
}


function CardList({ coffeeData }: CardListProps) {
    return (
        <div className='flex justify-center'>

            <div className='mx-32 my-8 grid grid-cols-3 bg-red-800 gap-8'>
                {coffeeData.map(coffee => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>

        </div>
    )
}

export default CardList