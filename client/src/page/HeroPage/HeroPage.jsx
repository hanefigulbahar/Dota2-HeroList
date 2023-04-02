import { useQuery, gql } from "@apollo/client";
import HeroCard from "../../components/HeroCard/HeroCard";

const DATA = gql`
  query HeroData {
    heroes {
      id
      localized_name
      primary_attr
      attack_type
      icon
      img
      base_health
      base_mana
      base_mr
      attack_range
    }
  }
`;

export default function HeroPage() {
  const { loading, error, data } = useQuery(DATA);
  console.log(data);
  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        loading
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <div className="grid grid-cols-3 m-10 gap-10">
        {data.heroes.map((datas) => (
          <HeroCard
            key={datas.id}
            id={datas.id}
            img={datas.img}
            icon={datas.icon}
            heroesName={datas.localized_name}
            atackType={datas.attack_type}
            primary_attr={datas.primary_attr}
            base_health={datas.base_health}
            base_mana={datas.base_mana}
            base_mr={datas.base_mr}
            attack_range={datas.attack_range}
          />
        ))}
      </div>
    </div>
  );
}
