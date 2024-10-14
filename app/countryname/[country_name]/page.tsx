

export default function  CountryName( {params} : {params:{country_name:string}}){

    const countries: {
        name : string,
        population : number,
        capital : string,
    }[] = [
        {
            name : "Pakistan",
            population : 251269164,
            capital : "Islamabad",
        },{
            name : "India",
            population : 1450935791,
            capital : "Dehli"
        },{
            name : "Japan",
            population : 123753041,
            capital : "Tokyo"
        },{
            name : "Korea",
            population : 51717590,
            capital : "Seoul"
        },{
            name : "China",
            population : 1419321278,
            capital : "Beijing"
        },

    ]
    
    function findCountry(country_url : string){
        return countries.find(country => country.name.toLowerCase() == country_url.toLowerCase())
    }

    const result = findCountry(params.country_name)

    return(
        <div>
            {
                result ? (
                    <>
                        <h1>Country Name : {result.name}</h1>
                        <h1>Population : {result.population}</h1>
                        <h1>Capital : {result.capital}</h1>
                    </>
                
                ): (
                        <h1>Country not found</h1>
                    )
            }
        </div>
    )
}
