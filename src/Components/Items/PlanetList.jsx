import Card from "../UI/Card";
import styles from "./planetList.module.css";
import Item from "../Items/Item/Item";
import Description from "./Description";
import { useEffect, useState } from "react";

function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  async function getAllPlanets() {
    try {
      setLoading(true)
      const res = await fetch(
        "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true"
      );
      if (!res.ok) {
        throw new Error("Failed to get planets");
      }
      const data = await res.json();

      setPlanets(data.bodies);
  
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllPlanets();
  }, []);

  const planetList = planets.map((item) => {
    return (
      <Item
        name={item.englishName}
        description={item.discoveredBy || "an unknown astronomer"}
        bodyType={item.bodyType}
        key={item.id}
        id={item.id}
      />
    );
  });

  return (
    <section className={styles.planets}>
      <Card>
        <Description />
        <ul>{planetList}</ul>
      </Card>
    </section>
  );
}

export default PlanetList;

