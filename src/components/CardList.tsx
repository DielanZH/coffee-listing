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

            <div className='my-8 mx-40 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:mx-12 xl:mx-32'>
                {coffeeData.map(coffee => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>

        </div>
    )
}

export default CardList