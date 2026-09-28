"use client";

const leaders = [
  {
    name: "Rev. Ezekiel Mkamba",
    role: "Senior Pastor",
    image: "",
    bio: "Rev. Ezekiel Mkamba alianza huduma mwaka 2014 huko Sumbawanga, Tanzania. Katika safari yake ya huduma, alihudumu katika nafasi mbalimbali za uongozi na huduma ya Injili, na baadaye akahudumu katika nafasi ya Uaskofu wa Jimbo la Sumbawanga kwa kipindi cha miaka 9. Tarehe 22 Desemba 2024, baada ya kumaliza kipindi chake cha kuhudumu kama Askofu wa Jimbo, alihamishiwa Magomeni All Nations Christian Centre (MANCC) na kuanza huduma kama Mchungaji Kiongozi. Pia anahudumu kama Makamu Mkurugenzi Mkuu wa Idara ya Uinjilisti Taifa. Katika kipindi chote cha huduma yake, amehudumu katika mikutano ya Injili, makongamano na semina, akiwafikia watu kwa ujumbe wa Yesu Kristo.",
  },
  {
    name: "Mrs. Zawadi Mwakibuti",
    role: "Elder in Charge",
    image: "",
    bio: "Mrs. Zawadi Mwakibuti amejiunga na Magomeni All Nations Christian Centre tangu mwaka 1999. Katika safari yake ya huduma ndani ya kanisa, amekuwa akichaguliwa kushika nafasi mbalimbali za uongozi katika Idara ya Wanawake, akihudumu kuanzia ngazi ya kanisa hadi ngazi ya jimbo. Mwaka 2025, alichaguliwa kuwa Mzee Kiongozi wa Magomeni All Nations Christian Centre, nafasi ambayo anaendelea kuhudumu katika uongozi wa kanisa.",
  },
  {
    name: "Evangelist Eneck Kipwate",
    role: "Church Secretary",
    image: "",
    bio: "Evangelist Eneck Kipwate amehudumu katika kazi ya Injili kama mwinjilisti, akishiriki katika kuandaa na kuhudumu katika mikutano mbalimbali ya Injili pamoja na mafundisho ya Neno la Mungu. Amehusika pia katika kufundisha timu za media katika makanisa mbalimbali nchini Tanzania, akiwasaidia kukuza uwezo wao katika matumizi ya media kwa ajili ya huduma ya Injili. Pia ametoa vifaa vya media bure kwa baadhi ya huduma na makanisa ili kusaidia ujumbe wa Injili kufikia watu wengi zaidi. Kupitia huduma yake ya media, amekuwa akihusika katika mahubiri yanayorushwa mubashara mtandaoni, yakifikia watu katika maeneo mbalimbali nchini Tanzania. Evangelist Eneck Kipwate pia amehudumu kama Katibu wa Kanisa kwa kipindi cha miaka 7.",
  },
];

export default function Leadership() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Church Leadership
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Serving the Church and God&apos;s People
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
            Meet the leaders serving Magomeni All Nations Christian Centre
            and helping guide the church in its mission and ministry.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1600px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative flex aspect-[2.4/1] w-full items-center justify-center bg-slate-950">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white">
                        {leader.name
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </div>

                      <p className="mt-3 text-sm text-slate-400">
                        Leadership Photo
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  {leader.role}
                </p>

                <h3 className="mt-2 text-center text-2xl font-bold leading-tight text-slate-950">
                  {leader.name}
                </h3>

                <p className="mt-5 text-center text-sm leading-7 text-slate-600">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
