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
            <div className="mx-auto my-auto max-h-fit max-w-fit bg-[#1B1D1F] text-[#FEF7EE]">

                <div className="mx-auto max-w-xl">
                    <h2 className="text-2xl font-bold mb-2">Our Collection</h2>

                    <p>Introducing our Coffee Collection,
                        a selection of unique coffees from different roast types and origins,
                        expertly roasted in small batches and shipped fresh weekly.</p>
                </div>

                <CardList coffeeData={coffeeData} />
            </div>
        </>
    )
}

export default Home