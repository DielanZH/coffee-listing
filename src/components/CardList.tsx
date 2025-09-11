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
    filterAvailable: boolean;
}


function CardList({ coffeeData, filterAvailable }: CardListProps) {

    const filteredData = coffeeData.filter(coffee => coffee.available);

    return (
        <div className='flex justify-center'>

            <div className='my-8 mx-40 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:mx-12 xl:mx-32'>
                {
                    filterAvailable ?
                        filteredData.map(coffee => (
                            <Card key={coffee.id} coffee={coffee} />
                        )) :
                        coffeeData.map(coffee => (
                            <Card key={coffee.id} coffee={coffee} />
                        ))
                }
            </div>

        </div>
    )
}

export default CardList