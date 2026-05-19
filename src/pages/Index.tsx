import { useState } from "react";

const BATTLE_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/b99b9f7f-f3d0-459e-90ad-e32246c2eacb.jpg";
const MAP_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/779fcc74-f0d1-4b18-a883-448b28b220ac.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/5a7492df-c0d3-4041-8fca-235b92a11695/files/d88f306e-0cce-4ce5-bb71-299343823a89.jpg";

const SECTIONS = ["Главная", "Хронология", "Битвы", "Герои"] as const;
type Section = typeof SECTIONS[number];

const timeline = [
  { year: "862", event: "Призвание варягов", desc: "Рюрик с братьями приходит на Русь и основывает первую правящую династию." },
  { year: "988", event: "Крещение Руси", desc: "Князь Владимир принимает православие и крестит Русь." },
  { year: "1240", event: "Невская битва", desc: "Александр Невский разбивает шведов на реке Нева." },
  { year: "1380", event: "Куликовская битва", desc: "Дмитрий Донской победил войско Мамая и ослабил власть Орды." },
  { year: "1480", event: "Стояние на Угре", desc: "Иван III перестал платить дань — Русь стала независимой." },
  { year: "1612", event: "Освобождение Москвы", desc: "Ополчение Минина и Пожарского выгнало поляков из Москвы." },
  { year: "1709", event: "Полтавская битва", desc: "Пётр I победил шведского короля Карла XII." },
  { year: "1812", event: "Бородинская битва", desc: "Кутузов сражался с Наполеоном и в итоге прогнал его из России." },
];

const battles = [
  {
    name: "Невская битва (1240)",
    commander: "Александр Невский",
    enemy: "Шведы",
    result: "Победа",
    desc: "Молодой князь Александр внезапно напал на шведский лагерь и разгромил его. После этой победы его стали называть Невским.",
  },
  {
    name: "Куликовская битва (1380)",
    commander: "Дмитрий Донской",
    enemy: "Войско Мамая",
    result: "Победа",
    desc: "Самая знаменитая битва против монголо-татар. Засадный полк решил исход сражения. После этого Русь начала освобождаться от ига.",
  },
  {
    name: "Полтавская битва (1709)",
    commander: "Пётр I",
    enemy: "Шведы (Карл XII)",
    result: "Победа",
    desc: "Россия разгромила Швецию и стала великой державой. Карл XII бежал в Турцию.",
  },
  {
    name: "Бородинская битва (1812)",
    commander: "М.И. Кутузов",
    enemy: "Французы (Наполеон)",
    result: "Ничья",
    desc: "Самое кровопролитное сражение войны 1812 года. Обе стороны понесли огромные потери, но Наполеон так и не победил русскую армию.",
  },
];

const heroes = [
  {
    name: "Александр Невский",
    years: "1221–1263",
    desc: "Великий князь, который победил шведов на Неве и немцев на Чудском озере. Никогда не проигрывал битв. Православная церковь причислила его к святым.",
    emoji: "⚔️",
  },
  {
    name: "Дмитрий Донской",
    years: "1350–1389",
    desc: "Первым из русских князей открыто выступил против Орды. Одержал победу на Куликовом поле. Построил белокаменный Кремль в Москве.",
    emoji: "🛡️",
  },
  {
    name: "Пётр I Великий",
    years: "1672–1725",
    desc: "Превратил Россию в империю. Основал Санкт-Петербург, создал флот и армию. Победил Швецию и сделал Россию великой европейской державой.",
    emoji: "🚢",
  },
  {
    name: "Михаил Кутузов",
    years: "1745–1813",
    desc: "Великий полководец, ученик Суворова. Руководил армией в войне с Наполеоном. Его стратегия помогла уничтожить французскую армию.",
    emoji: "🎖️",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("Главная");

  return (
    <div style={{ fontFamily: "'Times New Roman', serif", maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>

      {/* Шапка */}
      <div style={{ borderBottom: "2px solid #333", paddingBottom: 8, marginTop: 20, marginBottom: 4 }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold", margin: 0, textAlign: "center" }}>
          История России
        </h1>
        <p style={{ textAlign: "center", color: "#555", fontSize: 14, margin: "4px 0 0" }}>
          Информационный сайт для школьников и всех интересующихся
        </p>
      </div>

      {/* Навигация */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", borderBottom: "1px solid #ccc", marginBottom: 24 }}>
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            style={{
              padding: "6px 16px",
              background: activeSection === s ? "#1a3a6b" : "transparent",
              color: activeSection === s ? "#fff" : "#1a3a6b",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              fontFamily: "'Times New Roman', serif",
              textDecoration: activeSection === s ? "none" : "underline",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Контент */}
      {activeSection === "Главная" && <PageHome setActiveSection={setActiveSection} />}
      {activeSection === "Хронология" && <PageTimeline />}
      {activeSection === "Битвы" && <PageBattles />}
      {activeSection === "Герои" && <PageHeroes />}

      {/* Подвал */}
      <div style={{ borderTop: "1px solid #ccc", marginTop: 40, paddingTop: 12, paddingBottom: 24, color: "#777", fontSize: 13, textAlign: "center" }}>
        Сайт создан как учебный проект. Все материалы взяты из открытых источников.
      </div>
    </div>
  );
}

function PageHome({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div>
      <img
        src={BATTLE_IMG}
        alt="Историческое сражение"
        style={{ width: "100%", height: 220, objectFit: "cover", marginBottom: 16 }}
      />

      <h2 style={{ fontSize: 22, borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Добро пожаловать!</h2>

      <p style={{ lineHeight: 1.7, fontSize: 16 }}>
        На этом сайте вы найдёте информацию об истории России: важные события, знаменитые битвы и великих людей, которые изменили ход истории нашей страны.
      </p>

      <p style={{ lineHeight: 1.7, fontSize: 16 }}>
        Сайт разделён на несколько разделов. Выберите нужный в меню вверху страницы.
      </p>

      <h3 style={{ fontSize: 18, marginTop: 24 }}>Что есть на сайте:</h3>
      <ul style={{ lineHeight: 2, fontSize: 16, paddingLeft: 24 }}>
        <li>
          <span
            onClick={() => setActiveSection("Хронология")}
            style={{ color: "#1a3a6b", textDecoration: "underline", cursor: "pointer" }}
          >
            Хронология
          </span>{" "}
          — главные события от 862 до 1812 года
        </li>
        <li>
          <span
            onClick={() => setActiveSection("Битвы")}
            style={{ color: "#1a3a6b", textDecoration: "underline", cursor: "pointer" }}
          >
            Битвы
          </span>{" "}
          — описание 4 знаменитых сражений
        </li>
        <li>
          <span
            onClick={() => setActiveSection("Герои")}
            style={{ color: "#1a3a6b", textDecoration: "underline", cursor: "pointer" }}
          >
            Герои
          </span>{" "}
          — великие полководцы и правители России
        </li>
      </ul>

      <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
        <img src={MAP_IMG} alt="Карта" style={{ width: 200, height: 140, objectFit: "cover", border: "1px solid #ccc" }} />
        <img src={HERO_IMG} alt="Герой" style={{ width: 200, height: 140, objectFit: "cover", border: "1px solid #ccc" }} />
      </div>
      <p style={{ fontSize: 12, color: "#777", marginTop: 4 }}>Иллюстрации к материалам сайта</p>
    </div>
  );
}

function PageTimeline() {
  return (
    <div>
      <h2 style={{ fontSize: 22, borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Хронология важных событий</h2>
      <p style={{ color: "#555", fontSize: 14, marginBottom: 20 }}>
        Ниже приведены самые важные события в истории России с IX по XIX век.
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ background: "#1a3a6b", color: "#fff" }}>
            <th style={{ padding: "8px 12px", textAlign: "left", width: 70 }}>Год</th>
            <th style={{ padding: "8px 12px", textAlign: "left", width: 180 }}>Событие</th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Описание</th>
          </tr>
        </thead>
        <tbody>
          {timeline.map((item, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f5f5f5" }}>
              <td style={{ padding: "8px 12px", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>{item.year}</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #ddd", fontWeight: 500 }}>{item.event}</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #ddd", color: "#333" }}>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PageBattles() {
  return (
    <div>
      <h2 style={{ fontSize: 22, borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Знаменитые битвы</h2>
      <p style={{ color: "#555", fontSize: 14, marginBottom: 20 }}>
        Описание четырёх самых важных сражений в истории России.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {battles.map((b, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 16 }}>
            <h3 style={{ fontSize: 18, margin: "0 0 10px", borderBottom: "1px dotted #ccc", paddingBottom: 6 }}>
              {b.name}
            </h3>
            <table style={{ fontSize: 14, marginBottom: 10 }}>
              <tbody>
                <tr>
                  <td style={{ color: "#555", paddingRight: 16, paddingBottom: 4 }}>Командующий:</td>
                  <td style={{ fontWeight: 500 }}>{b.commander}</td>
                </tr>
                <tr>
                  <td style={{ color: "#555", paddingRight: 16, paddingBottom: 4 }}>Противник:</td>
                  <td>{b.enemy}</td>
                </tr>
                <tr>
                  <td style={{ color: "#555", paddingRight: 16 }}>Результат:</td>
                  <td style={{ color: b.result === "Победа" ? "green" : "#888", fontWeight: 500 }}>{b.result}</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: "#222" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageHeroes() {
  return (
    <div>
      <h2 style={{ fontSize: 22, borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Великие люди России</h2>
      <p style={{ color: "#555", fontSize: 14, marginBottom: 20 }}>
        Полководцы и правители, которые прославили Россию.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {heroes.map((h, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 16, background: "#fafafa" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>{h.emoji}</div>
            <h3 style={{ fontSize: 18, margin: "0 0 2px" }}>{h.name}</h3>
            <p style={{ fontSize: 13, color: "#777", margin: "0 0 10px" }}>{h.years}</p>
            <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, color: "#333" }}>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
