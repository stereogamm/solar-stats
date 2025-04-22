import styles from "./planetList.module.css";

const DUMMY_PLANETS = [
    {
      id: "p1",
      name: "Mercury",
      description: "The smallest planet in the Solar System and closest to the Sun.",
      distanceFromSun: "57.9 million km",
    },
    {
      id: "p2",
      name: "Venus",
      description: "A hot, rocky planet with a thick atmosphere and extreme temperatures.",
      distanceFromSun: "108.2 million km",
    },
    {
      id: "p3",
      name: "Earth",
      description: "Our home planet, the only one known to support life.",
      distanceFromSun: "149.6 million km",
    },
    {
      id: "p4",
      name: "Mars",
      description: "Known as the Red Planet due to its reddish appearance from iron oxide.",
      distanceFromSun: "227.9 million km",
    },
  ];
  

function PlanetList() {

const planetList = DUMMY_PLANETS.map((item, id) => {
    return <li>{item.name}</li>
})

    return(
        <section className={styles.planets}>
            <ul>
                {planetList}
            </ul>
        </section>
    )
}

export default PlanetList;