const HeroCard = ({
  heroesName,
  primary_attr,
  atackType,
  icon,
  img,
  base_health,
  base_mana,
  base_mr,
  attack_range,
}) => {
  const baseUrl = "https://api.opendota.com";
  return (
    <>
      <div className="group h-60 w-96 [perspective=1000px]">
        <div className="relative h-full w-full rounded-lg shadow-xl duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0">
            <img
              className="h-full w-full  rounded-xl object-containe shadow-xl shadow-black/50"
              src={`${baseUrl}${img}`}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-red-900 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 pt-3 justify-center items-center">
                <img src={`${baseUrl}${icon}`} alt="" />
                <div className="text-xl">{heroesName}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Atack Type:</div>
                <div>{atackType}</div>
              </div>
              <div className="flex justify-between items-center text-center">
                <div>Primary Attribute:</div>
                <div>{primary_attr.toUpperCase()}</div>
              </div>
              <div className="flex justify-between items-center text-center">
                <div>Base Health:</div>
                <div>{base_health}</div>
              </div>
              <div className="flex justify-between items-center text-center">
                <div>Base Mana:</div>
                <div>{base_mana}</div>
              </div>
              <div className="flex justify-between items-center text-center">
                <div>Base Mr:</div>
                <div>{base_mr}</div>
              </div>
              <div className="flex justify-between items-center text-center">
                <div>Attack Range :</div>
                <div>{attack_range}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
