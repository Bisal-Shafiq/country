import Link from "next/link";

export default function Page() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/pakistan" style={{ textDecoration: "none", color: "white" }}>
                    Pakistan
                </Link>
            </button>

            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/korea" style={{ textDecoration: "none", color: "white" }}>
                    Korea
                </Link>
            </button>

            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/japan" style={{ textDecoration: "none", color: "white" }}>
                    Japan
                </Link>
            </button>

            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/india" style={{ textDecoration: "none", color: "white" }}>
                    India
                </Link>
            </button>

            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/iran" style={{ textDecoration: "none", color: "white" }}>
                    Iran
                </Link>
            </button>

            <button
                style={{
                    margin: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "10px 20px",
                    backgroundColor: "#f79eb3",
                    cursor: "pointer",
                    fontSize: "16px",
                    textAlign: "center",
                    width: "150px"
                }}
            >
                <Link href="/countryname/iraq" style={{ textDecoration: "none", color: "white" }}>
                    Iraq
                </Link>
            </button>
        </div>
    );
}
