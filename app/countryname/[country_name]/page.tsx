export default function CountryName({ params }: { params: { country_name: string } }) {
    const countries: { name: string; population: number; capital: string }[] = [
      {
        name: "Pakistan",
        population: 251269164,
        capital: "Islamabad",
      },
      {
        name: "India",
        population: 1450935791,
        capital: "Dehli",
      },
      {
        name: "Japan",
        population: 123753041,
        capital: "Tokyo",
      },
      {
        name: "Korea",
        population: 51717590,
        capital: "Seoul",
      },
      {
        name: "China",
        population: 1419321278,
        capital: "Beijing",
      },
    ];
  
    function findCountry(country_url: string) {
      return countries.find((country) => country.name.toLowerCase() === country_url.toLowerCase());
    }
  
    const result = findCountry(params.country_name);
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
          backgroundColor: "#f8f9fa", // Light grey background
          fontFamily: "Arial, sans-serif", // Font family for a clean look
        }}
      >
        {result ? (
          <div
            style={{
              border: "2px solid #0070f3",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a soft shadow
              color: "#333",
            }}
          >
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Country Name: {result.name}</h1>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Population: {result.population.toLocaleString()}</h2>
            <h2 style={{ fontSize: "24px" }}>Capital: {result.capital}</h2>
          </div>
        ) : (
          <h1 style={{ color: "red", fontSize: "28px", fontWeight: "bold" }}>Country not found</h1>
        )}
      </div>
    );
  }
  
