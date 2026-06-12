const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeEs221FRqorhFlhqv85AmmA_Byb_nq8VTv3q63_noPwFfuDg/viewform?usp=header";

const services = [
  {
    title: "3D-printing op maat",
    text: "Laat onderdelen, prototypes of gepersonaliseerde objecten printen op basis van jouw bestand, schets of idee.",
  },
  {
    title: "Prototypeontwikkeling",
    text: "Test snel een vorm, passing of productidee voordat je grotere stappen zet.",
  },
  {
    title: "CAD en ontwerpaanpassingen",
    text: "Hulp nodig om je idee printbaar te maken? We helpen met eenvoudige CAD-aanpassingen en technische voorbereiding.",
  },
  {
    title: "Kleine series",
    text: "Voor beperkte aantallen of herhaalbare onderdelen bekijken we de beste printinstellingen en prijs per stuk.",
  },
];

const steps = [
  {
    title: "Stuur je idee of bestand door",
    text: "Upload of beschrijf wat je nodig hebt: STL, STEP, foto, schets of afmetingen.",
  },
  {
    title: "We bekijken de haalbaarheid",
    text: "We controleren materiaal, printbaarheid, sterkte, afwerking en timing.",
  },
  {
    title: "Je krijgt een duidelijke offerte",
    text: "Je ontvangt een voorstel met prijs, aanpak en levertermijn.",
  },
  {
    title: "Productie en basiscontrole",
    text: "Na akkoord printen we het onderdeel en controleren we de afwerking.",
  },
];

const projects = [
  "Technisch prototype",
  "Functioneel onderdeel",
  "Gepersonaliseerd object",
  "Productaccessoire",
  "Behuizing",
  "Display of houder",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-bold tracking-widest">
          MODRO DESIGN
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <a href="#diensten" className="hover:text-white">
            Diensten
          </a>
          <a href="#werkwijze" className="hover:text-white">
            Werkwijze
          </a>
          <a href="#projecten" className="hover:text-white">
            Projecten
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href={googleFormUrl}
          target="_blank"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
        >
          Offerte aanvragen
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            3D-printing • Prototypes • Maatwerk
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Custom 3D-printing en productdesign op maat.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Van idee, schets of 3D-bestand naar een fysiek prototype of
            functioneel onderdeel. Modro Design helpt particulieren, studenten
            en kleine bedrijven met 3D-printing, CAD-ondersteuning en
            maatwerkoplossingen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={googleFormUrl}
              target="_blank"
              className="rounded-full bg-white px-7 py-3 text-center font-semibold text-neutral-950 hover:bg-neutral-200"
            >
              Vraag vrijblijvend een offerte aan
            </a>
            <a
              href="#diensten"
              className="rounded-full border border-neutral-700 px-7 py-3 text-center font-semibold text-white hover:bg-neutral-900"
            >
              Bekijk wat we doen
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl sm:p-6">
          <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-800 to-neutral-950 p-6 sm:p-8 md:aspect-square">
            <div className="flex min-h-[360px] flex-col justify-between gap-8 md:h-full md:min-h-0">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
                  Modro Design
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Van concept naar tastbaar onderdeel.
                </h2>
              </div>

              <div className="grid gap-3 text-sm text-neutral-300 sm:text-base">
                <div className="rounded-xl bg-neutral-900/80 p-4">
                  Functionele onderdelen
                </div>
                <div className="rounded-xl bg-neutral-900/80 p-4">
                  Prototypes en testprints
                </div>
                <div className="rounded-xl bg-neutral-900/80 p-4">
                  Kleine series en maatwerk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diensten" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Diensten
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Wat Modro Design voor je kan maken.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Voor wie
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Voor studenten, makers, zelfstandigen en kleine bedrijven.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Modro Design is ideaal voor wie een prototype, vervangstuk,
            technische houder, behuizing, productaccessoire of gepersonaliseerd
            object nodig heeft zonder meteen naar grote productiebedrijven te
            stappen.
          </p>
        </div>
      </section>

      <section id="werkwijze" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Werkwijze
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Van aanvraag naar afgewerkt prototype.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-neutral-950">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projecten" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Projecten
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Voorbeelden van mogelijke toepassingen.
            </h2>
          </div>
          <p className="max-w-xl text-neutral-400">
            Binnenkort worden hier echte Modro-projecten toegevoegd. Voorlopig
            tonen we de types opdrachten waarvoor je een aanvraag kunt doen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project}
              className="flex aspect-[4/3] items-end rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <h3 className="text-xl font-semibold">{project}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-white p-8 text-neutral-950 md:p-14">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Heb je een idee, bestand of onderdeel dat je wil laten maken?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            Stuur je aanvraag door en ontvang een vrijblijvende inschatting van
            de technische haalbaarheid, prijs en timing.
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-neutral-950 px-7 py-3 font-semibold text-white hover:bg-neutral-800"
          >
            Offerte aanvragen
          </a>
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-neutral-800 px-6 py-10 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="font-bold tracking-widest">MODRO DESIGN</p>
          <p className="mt-2 text-neutral-400">
            3D-printing | Custom design | Prototypes | Functionele onderdelen
          </p>
        </div>

        <div className="text-sm leading-7 text-neutral-400">
          <p>Regio Antwerpen / Hove</p>
          <p>ferre.vanbaelen@gmail.com</p>
          <p>+32 471 05 71 01</p>
        </div>
      </footer>
    </main>
  );
}