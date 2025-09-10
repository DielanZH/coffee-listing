import type { Coffee } from './CardList';
import StarFill from '../assets/Star_fill.svg';
import Star from '../assets/Star.svg';

interface CardProps {
    coffee: Coffee;
}

function Card({ coffee }: CardProps) {
    return (
        <div>
            <div>
                <div>
                    {coffee.popular ?
                        <span className='font-semibold text-[#111315] absolute rounded-2xl text-[12px] bg-[#F6C768] p-1 px-3 m-2'>Popular</span>
                        : ""
                    }
                </div>

                <img className='rounded-2xl max-w-64' src={coffee.image} alt={coffee.name} />
                <div className='flex justify-between my-3'>
                    <h2 className='font-semibold'>{coffee.name}</h2>
                    <p className='flex justify-center items-center rounded font-bold px-2 bg-[#BEE3CC] text-[#111315] text-[12px]'>{coffee.price}</p>
                </div>
                <div>
                    {coffee.rating && coffee.votes ?

                        <div className='ml-1 flex justify-between font-semibold'>
                            <div>
                                <img src={StarFill} alt="Star Fill" className='inline-block pb-1' />
                                {coffee.rating} <p className='inline-block font-bold text-[#4D5562]'>({coffee.votes} votes)</p>
                            </div>

                            <div>{coffee.available ? "" : <span className='inline-block font-semibold text-[#ED735D]'>Sold out</span>}</div>
                        </div>

                        :
                        <div>
                            <img src={Star} alt="Star" className='inline-block pb-1' />
                            <span className='ml-1 font-semibold text-[#4D5562]'>No rating</span>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}

export default Card;