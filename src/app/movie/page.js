import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));





    const url = process.env.RAPID_KEY;

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b5277fbb83msh01a1677b82fbefcp12f5d5jsnc8804164fff7',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
};



    // const url = process.env.RAPID_KEY;

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
    //         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    //     }
    // };

    const res = await fetch(url, options);
    const data = await res.json(); // es tarah se data ko json me convert karte hai
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;