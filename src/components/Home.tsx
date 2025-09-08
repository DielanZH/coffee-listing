import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

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

                    <h2 className="mx-auto text-[2rem] font-bold mb-2 w-fit">Our Collection</h2>

                    <p className="w-md text-center">
                        Introducing our Coffee Collection,
                        a selection of unique coffees from different roast types and origins,
                        expertly roasted in small batches and shipped fresh weekly.
                    </p>

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