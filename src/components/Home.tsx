import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";
import vector from '../assets/vector.svg';

const apiUrl = import.meta.env.VITE_API_URL;

function Home() {

    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setCoffeeData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="mx-auto my-40 py-16 max-h-fit max-w-fit bg-[#1B1D1F] text-[#FEF7EE] rounded-2xl font-dm-sans">

                <div className="mx-auto w-fit">

                    <div>
                        <img src={vector} className="absolute z-0 mx-auto ml-60 -mt-10" alt="Coffee Collection" />

                        <div className="relative z-10">
                            <h2 className="mx-auto text-[2rem] font-semibold mb-2 w-fit">Our Collection</h2>

                            <p className="text-center text-[14px] text-[#6F757C] font-semibold w-xl p-2 lg:w-lg lg:p-0">
                                Introducing our Coffee Collection,
                                a selection of unique coffees from different roast types and origins,
                                expertly roasted in small batches and shipped fresh weekly.
                            </p>
                        </div>

                    </div>


                    <div className="flex justify-center gap-15 my-5">

                        <button className="focus:bg-[#6F757C] rounded-lg p-2 px-4 font-bold">
                            All products
                        </button>

                        <button className="focus:bg-[#6F757C] rounded-lg p-2 px-4 font-bold">
                            Available Now
                        </button>

                    </div>

                </div>

                <CardList coffeeData={coffeeData} />
            </div>
        </>
    )
}

export default Home