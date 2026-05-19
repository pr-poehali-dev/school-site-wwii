import { useState } from "react";
import Icon from "@/components/ui/icon";

const BATTLE_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/b99b9f7f-f3d0-459e-90ad-e32246c2eacb.jpg";
const MAP_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/779fcc74-f0d1-4b18-a883-448b28b220ac.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/d88f306e-0cce-4ce5-bb71-299343823a89.jpg";

const SECTIONS = ["Главная", "Хронология", "Битвы", "Герои"] as const;
type Section = typeof SECTIONS[number];

const timeline = [
  { year: "862", event: "Призвание варягов", desc: "Рюрик с братьями приходит на Русь и основывает первую правящую династию." },
  { year: "988", event: "Крещение Руси", desc: "Князь Владимир Великий принимает православие и крестит киевлян в водах Днепра." },
  { year: "1240", event: "Невская битва", desc: "Александр Невский разбивает шведское войско на берегах Невы, защитив северные рубежи." },
  { year: "1380", event: "Куликовская битва", desc: "Дмитрий Донской одержал победу над ордами Мамая, положив начало освобождению Руси." },
  { year: "1480", event: "Стояние на Угре", desc: "Иван III прекращает выплату ордынской дали — Русь обретает независимость." },
  { year: "1612", event: "Смутное время", desc: "Народное ополчение Минина и Пожарского освобождает Москву от польских интервентов." },
  { year: "1709", event: "Полтавская битва", desc: "Пётр I наносит сокрушительное поражение шведской армии Карла XII." },
  { year: "1812", event: "Бородинская битва", desc: "Русская армия под командованием Кутузова остановила наполеоновское нашествие." },
];

const battles = [
  {
    name: "Невская битва",
    year: "1240",
    place: "Река Нева",
    commander: "Александр Невский",
    outcome: "Победа Руси",
    desc: "15 июля 1240 года новгородская дружина под командованием юного князя Александра атаковала шведский лагерь. Стремительным ударом шведы были разбиты, за что Александр получил прозвание Невский.",
  },
  {
    name: "Куликовская битва",
    year: "1380",
    place: "Куликово поле",
    commander: "Дмитрий Донской",
    outcome: "Победа Руси",
    desc: "8 сентября 1380 года русские полки сошлись с войском темника Мамая. После тяжёлого сражения засадный полк решил исход битвы в пользу Руси.",
  },
  {
    name: "Полтавская битва",
    year: "1709",
    place: "Под Полтавой",
    commander: "Пётр I",
    outcome: "Победа России",
    desc: "27 июня 1709 года русская армия разгромила шведов Карла XII. Эта победа закрепила за Россией статус великой европейской державы.",
  },
  {
    name: "Бородинская битва",
    year: "1812",
    place: "Близ Можайска",
    commander: "М.И. Кутузов",
    outcome: "Неопределённый исход",
    desc: "7 сентября 1812 года — крупнейшее сражение Отечественной войны. Русская армия сохранила боеспособность и в итоге уничтожила армию Наполеона.",
  },
];

const heroes = [
  {
    name: "Александр Невский",
    years: "1221 — 1263",
    title: "Великий князь Владимирский",
    desc: "Полководец, государственный деятель и дипломат. Разгромил шведов на Неве и рыцарей Ливонского ордена на льду Чудского озера.",
    feats: ["Невская битва", "Ледовое побоище", "Дипломатия с Ордой"],
  },
  {
    name: "Дмитрий Донской",
    years: "1350 — 1389",
    title: "Великий князь Московский",
    desc: "Первый русский правитель, открыто выступивший против монгольского владычества. Объединил князей для совместного отпора Орде.",
    feats: ["Куликовская битва", "Объединение князей", "Строительство Кремля"],
  },
  {
    name: "Пётр I Великий",
    years: "1672 — 1725",
    title: "Первый Император России",
    desc: "Реформатор, превративший Россию в мощную европейскую державу. Основал Санкт-Петербург, создал регулярные армию и флот.",
    feats: ["Полтавская победа", "Создание флота", "Основание Петербурга"],
  },
  {
    name: "Михаил Кутузов",
    years: "1745 — 1813",
    title: "Фельдмаршал, Светлейший князь",
    desc: "Ученик Суворова, герой многих войн. Руководил армией в 1812 году. Его стратегия позволила уничтожить «Великую армию» Наполеона.",
    feats: ["Бородинская битва", "Изгнание Наполеона", "Заграничный поход"],
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("Главная");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setActiveSection("Главная")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 border border-border flex items-center justify-center">
                <span className="font-display text-sm font-bold" style={{ color: 'hsl(var(--gold))' }}>Р</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-wide hidden sm:block" style={{ color: 'hsl(var(--ink))' }}>
                Летопись
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {SECTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  className={`px-4 py-2 text-sm font-body tracking-wider transition-all ${
                    activeSection === s
                      ? "text-foreground border-b-2"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeSection === s ? { borderColor: 'hsl(var(--gold))' } : {}}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </nav>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-border pb-3 pt-2 animate-fade-in">
              {SECTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => { setActiveSection(s); setMenuOpen(false); }}
                  className={`block w-full text-left px-2 py-2.5 text-sm tracking-wider transition-colors ${
                    activeSection === s ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        {activeSection === "Главная" && <SectionHome setActiveSection={setActiveSection} />}
        {activeSection === "Хронология" && <SectionTimeline />}
        {activeSection === "Битвы" && <SectionBattles />}
        {activeSection === "Герои" && <SectionHeroes />}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-display italic text-muted-foreground text-sm">
            «Дела давно минувших дней, преданья старины глубокой»
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-body tracking-widest">
            — А.С. ПУШКИН
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHome({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div>
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center img-sepia"
          style={{ backgroundImage: `url(${BATTLE_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,12,6,0.92) 0%, rgba(20,12,6,0.4) 50%, rgba(20,12,6,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <div className="opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <p className="font-body text-xs tracking-[0.3em] mb-4" style={{ color: 'hsl(var(--sepia-light))' }}>
              АРХИВ РОССИЙСКОЙ ИСТОРИИ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light leading-none mb-6" style={{ color: 'hsl(36, 35%, 92%)' }}>
              Летопись<br />
              <em className="italic font-light">Великих Эпох</em>
            </h1>
            <p className="font-body text-base sm:text-lg max-w-xl leading-relaxed mb-10" style={{ color: 'hsl(36, 25%, 80%)' }}>
              Хроники сражений, портреты полководцев и события, определившие судьбу государства Российского.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
            {(["Хронология", "Битвы", "Герои"] as Section[]).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className="px-6 py-2.5 border font-body text-sm tracking-widest transition-all hover:opacity-80"
                style={{ borderColor: 'hsl(var(--gold))', color: 'hsl(36, 35%, 88%)' }}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="divider-ornate mb-16">
          <span className="font-display text-xl italic px-4" style={{ color: 'hsl(var(--gold))' }}>✦</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.25em] mb-4 text-muted-foreground">О ПРОЕКТЕ</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight mb-6">
              Страницы<br /><em className="italic">живой истории</em>
            </h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-4">
              Этот архив хранит память о ключевых событиях, великих битвах и легендарных людях, чьи деяния навсегда вписаны в историю России.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              От призвания варягов до великих войн XIX века — здесь собраны хроники эпох, изменивших облик государства и судьбы народов.
            </p>
          </div>
          <div className="relative">
            <div className="border-ornate overflow-hidden">
              <img src={MAP_IMG} alt="Историческая карта" className="w-full h-72 object-cover img-sepia" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-border items-center justify-center bg-background hidden sm:flex">
              <div className="text-center">
                <p className="font-display text-3xl font-bold" style={{ color: 'hsl(var(--gold))' }}>XII</p>
                <p className="font-body text-[9px] tracking-widest text-muted-foreground">ВЕК</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-ornate my-16">
          <span className="font-display text-xl italic px-4" style={{ color: 'hsl(var(--gold))' }}>✦</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "8", label: "Эпох в хронике" },
            { num: "4", label: "Великих битвы" },
            { num: "4", label: "Легендарных героя" },
            { num: "X–XIX", label: "Века истории" },
          ].map((item, i) => (
            <div key={i} className="text-center border-b border-border pb-6">
              <p className="font-display text-4xl sm:text-5xl font-light mb-2" style={{ color: 'hsl(var(--gold))' }}>
                {item.num}
              </p>
              <p className="font-body text-xs tracking-widest text-muted-foreground uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <p className="font-body text-xs tracking-[0.25em] mb-3 text-muted-foreground">АРХИВ СОБЫТИЙ</p>
        <h2 className="font-display text-5xl sm:text-6xl font-light">Хронология</h2>
        <div className="h-px w-24 mt-4" style={{ background: 'hsl(var(--gold))' }} />
      </div>

      <div className="relative">
        <div className="absolute left-[5.5rem] top-0 bottom-0 w-px" style={{ background: 'hsl(var(--border))' }} />
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="relative flex gap-8 pb-12 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-20 shrink-0 text-right">
                <span className="font-display text-2xl font-light" style={{ color: 'hsl(var(--gold))' }}>{item.year}</span>
              </div>
              <div className="relative pl-8">
                <div
                  className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 bg-background"
                  style={{ borderColor: 'hsl(var(--gold))', transform: 'translateX(calc(-50% + 0.5px))' }}
                />
                <h3 className="font-display text-2xl font-medium mb-2">{item.event}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionBattles() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <p className="font-body text-xs tracking-[0.25em] mb-3 text-muted-foreground">ЛЕТОПИСЬ СРАЖЕНИЙ</p>
        <h2 className="font-display text-5xl sm:text-6xl font-light">Битвы</h2>
        <div className="h-px w-24 mt-4" style={{ background: 'hsl(var(--gold))' }} />
      </div>

      <div className="mb-10 relative overflow-hidden border-ornate">
        <img src={BATTLE_IMG} alt="Сражение" className="w-full h-48 sm:h-64 object-cover img-sepia" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(20,12,6,0.7), transparent)' }} />
        <div className="absolute inset-0 flex items-center px-8">
          <p className="font-display text-2xl sm:text-3xl italic font-light" style={{ color: 'hsl(36, 35%, 90%)' }}>
            «Велики дела ваши, сыны Отечества»
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {battles.map((battle, i) => (
          <div
            key={i}
            className="border border-border p-6 cursor-pointer transition-all hover:shadow-md opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationFillMode: 'forwards',
              background: selected === i ? 'hsl(var(--card))' : 'transparent',
            }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="font-display text-3xl font-light block" style={{ color: 'hsl(var(--gold))' }}>
                  {battle.year}
                </span>
                <h3 className="font-display text-xl font-medium mt-1">{battle.name}</h3>
              </div>
              <span className="text-xs font-body tracking-wider px-2 py-1 border mt-1" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
                {battle.outcome}
              </span>
            </div>

            <div className="flex gap-4 text-xs text-muted-foreground font-body mb-3">
              <span className="flex items-center gap-1.5">
                <Icon name="MapPin" size={12} />
                {battle.place}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="User" size={12} />
                {battle.commander}
              </span>
            </div>

            {selected === i && (
              <p className="font-body text-sm leading-relaxed text-muted-foreground border-t border-border pt-3 mt-3 animate-fade-in">
                {battle.desc}
              </p>
            )}

            <div className="flex items-center gap-1 text-xs mt-2" style={{ color: 'hsl(var(--gold))' }}>
              <span className="font-body">{selected === i ? "Свернуть" : "Подробнее"}</span>
              <Icon name={selected === i ? "ChevronUp" : "ChevronDown"} size={12} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeroes() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <p className="font-body text-xs tracking-[0.25em] mb-3 text-muted-foreground">ГАЛЕРЕЯ ПОЛКОВОДЦЕВ</p>
        <h2 className="font-display text-5xl sm:text-6xl font-light">Герои</h2>
        <div className="h-px w-24 mt-4" style={{ background: 'hsl(var(--gold))' }} />
      </div>

      <div className="grid md:grid-cols-5 gap-0 mb-12 border-ornate overflow-hidden">
        <div className="md:col-span-2 h-64 md:h-auto">
          <img src={HERO_IMG} alt="Герой" className="w-full h-full object-cover img-sepia" />
        </div>
        <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center" style={{ background: 'hsl(var(--card))' }}>
          <p className="font-body text-xs tracking-[0.25em] mb-3 text-muted-foreground">ОБРАЗ ЭПОХИ</p>
          <h3 className="font-display text-4xl font-light mb-2">Александр Невский</h3>
          <p className="font-display italic text-xl mb-4" style={{ color: 'hsl(var(--gold))' }}>1221 — 1263</p>
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            Князь, причисленный к лику святых, полководец, ни разу не проигравший ни одного сражения. Его дипломатический гений и военная доблесть спасли Русь в самый тяжёлый час.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {heroes.map((hero, i) => (
          <div
            key={i}
            className="border border-border p-6 sm:p-8 opacity-0 animate-fade-in-up texture-paper"
            style={{ animationDelay: `${i * 0.12}s`, animationFillMode: 'forwards' }}
          >
            <div className="mb-4 pb-4 border-b border-border">
              <h3 className="font-display text-2xl font-medium mb-0.5">{hero.name}</h3>
              <p className="font-display italic text-base" style={{ color: 'hsl(var(--gold))' }}>{hero.years}</p>
              <p className="font-body text-xs tracking-wide text-muted-foreground mt-1 uppercase">{hero.title}</p>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5">{hero.desc}</p>
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mb-2 uppercase">Ключевые свершения</p>
              <div className="flex flex-wrap gap-2">
                {hero.feats.map((feat, j) => (
                  <span key={j} className="font-body text-xs px-3 py-1 border" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
