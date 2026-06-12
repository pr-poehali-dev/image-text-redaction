const Index = () => (
  <div className="min-h-screen flex items-center justify-center py-10 px-4" style={{ background: '#1a1a1a' }}>
    <div className="w-full max-w-[700px]">
      <Certificate />
    </div>
  </div>
);

/* ─── Герб РФ — официальное изображение ─── */
const CoatOfArms = () => (
  <div style={{ textAlign: 'center', margin: '0 auto' }}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Coat_of_Arms_of_the_Russian_Federation_%28black%29.svg/200px-Coat_of_Arms_of_the_Russian_Federation_%28black%29.svg.png"
      alt="Герб РФ"
      width={70}
      height={80}
      style={{ display: 'block', margin: '0 auto', filter: 'sepia(40%) hue-rotate(260deg) brightness(0.7)' }}
    />
  </div>
);

/* ─── Орнаментальная лента (бантик сверху) ─── */
const TopRibbon = () => (
  <svg viewBox="0 0 400 40" width="100%" height="40" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="ribGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e8c8f0" stopOpacity="0.3"/>
        <stop offset="50%" stopColor="#b070c8"/>
        <stop offset="100%" stopColor="#e8c8f0" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
    {/* Горизонтальная лента */}
    <rect x="0" y="14" width="400" height="12" fill="url(#ribGrad)" rx="2"/>
    {/* Бантик в центре */}
    <path d="M180,20 Q160,8 150,20 Q160,32 180,20 Z" fill="#b070c8" opacity="0.8"/>
    <path d="M220,20 Q240,8 250,20 Q240,32 220,20 Z" fill="#b070c8" opacity="0.8"/>
    <circle cx="200" cy="20" r="5" fill="#8a4fa8"/>
    <circle cx="200" cy="20" r="2" fill="#d4a0e8"/>
    {/* Узоры по краям ленты */}
    {[0,1,2,3,4,5,6,7,8,9].map(i => (
      <g key={i}>
        <circle cx={20 + i*36} cy="20" r="2.5" fill="#8a4fa8" opacity="0.5"/>
        <circle cx={20 + i*36} cy="20" r="1" fill="#d4a0e8"/>
      </g>
    ))}
  </svg>
);

/* ─── Гильошная сетка (фон документа) ─── */
const GuillochePattern = () => (
  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none', zIndex: 1 }}
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="gc" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="12" fill="none" stroke="#8a4fa8" strokeWidth="0.4"/>
        <circle cx="15" cy="15" r="7" fill="none" stroke="#8a4fa8" strokeWidth="0.3"/>
        <line x1="3" y1="15" x2="27" y2="15" stroke="#8a4fa8" strokeWidth="0.2"/>
        <line x1="15" y1="3" x2="15" y2="27" stroke="#8a4fa8" strokeWidth="0.2"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gc)"/>
  </svg>
);

/* ─── Угловые орнаменты ─── */
const CornerOrnament = ({ rotate }: { rotate: number }) => (
  <svg viewBox="0 0 50 50" width="40" height="40" style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M2,2 L20,2 Q2,2 2,20 Z" fill="none" stroke="#8a4fa8" strokeWidth="1.5"/>
    <path d="M2,2 L14,2 Q2,2 2,14 Z" fill="#8a4fa8" opacity="0.3"/>
    <circle cx="6" cy="6" r="2.5" fill="#8a4fa8" opacity="0.7"/>
    <path d="M10,2 Q18,10 18,18 Q10,10 2,10" fill="none" stroke="#8a4fa8" strokeWidth="0.8" opacity="0.6"/>
    <circle cx="20" cy="2" r="1.5" fill="#8a4fa8" opacity="0.5"/>
    <circle cx="2" cy="20" r="1.5" fill="#8a4fa8" opacity="0.5"/>
  </svg>
);

const Certificate = () => (
  <div style={{
    background: '#fce8f4',
    fontFamily: "'Cormorant Garamond', serif",
    position: 'relative',
    boxShadow: '0 12px 60px rgba(0,0,0,0.75)',
    overflow: 'hidden',
  }}>
    {/* Гильош фон */}
    <GuillochePattern />

    {/* Внешняя граница */}
    <div style={{ border: '7px solid #8a5fa0', position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20 }}/>
    {/* Внутренняя тонкая граница */}
    <div style={{ border: '1.5px solid #c090d8', position: 'absolute', inset: '13px', pointerEvents: 'none', zIndex: 20 }}/>

    {/* Левая полосатая колонка */}
    <div style={{
      position: 'absolute', left: 20, top: 13, bottom: 13, width: 12, zIndex: 5,
      background: 'repeating-linear-gradient(to bottom, #9060b0 0px, #9060b0 7px, #e8c0f0 7px, #e8c0f0 12px)',
    }}/>
    {/* Правая полосатая колонка */}
    <div style={{
      position: 'absolute', right: 20, top: 13, bottom: 13, width: 12, zIndex: 5,
      background: 'repeating-linear-gradient(to bottom, #9060b0 0px, #9060b0 7px, #e8c0f0 7px, #e8c0f0 12px)',
    }}/>

    {/* Угловые орнаменты */}
    <div style={{ position: 'absolute', top: 4, left: 4, zIndex: 21 }}><CornerOrnament rotate={0}/></div>
    <div style={{ position: 'absolute', top: 4, right: 4, zIndex: 21 }}><CornerOrnament rotate={90}/></div>
    <div style={{ position: 'absolute', bottom: 4, right: 4, zIndex: 21 }}><CornerOrnament rotate={180}/></div>
    <div style={{ position: 'absolute', bottom: 4, left: 4, zIndex: 21 }}><CornerOrnament rotate={270}/></div>

    {/* Контент */}
    <div style={{ padding: '0 58px 28px 58px', position: 'relative', zIndex: 10 }}>

      {/* Лента-бантик сверху */}
      <TopRibbon />

      {/* Герб РФ */}
      <div style={{ marginTop: 4, marginBottom: 6 }}>
        <CoatOfArms />
      </div>

      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <div style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 20, fontWeight: 600,
          letterSpacing: '0.14em',
          color: '#1a0030', lineHeight: 1.45,
        }}>
          СВИДЕТЕЛЬСТВО<br/>О СМЕРТИ
        </div>
      </div>

      {/* ФИО */}
      <CRow value="Скобелева" sub="фамилия" center/>
      <CRow value="Оксана Петровна" sub="имя, отчество" center/>
      <CRow value="гражданка России" sub="гражданство" center/>

      {/* Дата рождения */}
      <div style={{ display:'flex', alignItems:'flex-end', gap:4, marginTop:8 }}>
        <Lbl>«</Lbl>
        <CInline value="03" sub="число" w={36}/>
        <Lbl>»</Lbl>
        <CInline value="апреля" sub="месяц" w={90}/>
        <CInline value="1983" sub="год рождения" w={60}/>
        <Lbl>г.</Lbl>
      </div>

      {/* Место рождения */}
      <CRow value="г. Судак" sub="место рождения"/>
      <CRow value="Крымская область" sub=""/>
      <CDash/>

      {/* Умер(ла) */}
      <div style={{ display:'flex', alignItems:'flex-end', gap:8, marginTop:4 }}>
        <Lbl>умер(ла)</Lbl>
        <CInline value="14.05.2026" sub="число, месяц, год (цифрами и словами)" w={190}/>
      </div>
      <CRow value="четырнадцатого мая" sub="" italic center/>
      <CRow value="две тысячи двадцать шестого года" sub="" italic center/>

      {/* О чём */}
      <div style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:4, marginTop:8 }}>
        <Lbl>о чем</Lbl>
        <CInline value="2026" sub="" w={52}/>
        <Lbl>года</Lbl>
        <CInline value="мая" sub="" w={64}/>
        <Lbl>месяца</Lbl>
        <CInline value="14" sub="" w={36}/>
        <Lbl>числа</Lbl>
      </div>

      {/* Запись акта */}
      <div style={{ display:'flex', alignItems:'flex-end', gap:6, marginTop:5 }}>
        <Lbl>составлена запись акта о смерти №</Lbl>
        <CInline value="1397" sub="" w={60}/>
      </div>

      {/* Место смерти */}
      <div style={{ display:'flex', alignItems:'flex-end', gap:8, marginTop:8 }}>
        <Lbl style={{ whiteSpace:'nowrap' }}>Место смерти</Lbl>
        <CInline value="г. Ярославль" sub="" w={170}/>
      </div>
      <CDash/>
      <CRow value="Россия" sub="" center/>

      {/* Место регистрации */}
      <div style={{ marginTop:8 }}>
        <div style={{ fontSize:11, color:'#666', fontStyle:'italic' }}>Место государственной регистрации</div>
        <div style={{ textAlign:'center', fontWeight:700, fontSize:16, color:'#1a0030', marginTop:3 }}>
          Перовский отдел ЗАГС Управления ЗАГС Ярославля
        </div>
        <div style={{ textAlign:'center', fontSize:10, color:'#aaa', fontStyle:'italic' }}>
          наименование органа записи актов гражданского состояния
        </div>
      </div>

      <CDash/>

      {/* Печать + Подпись */}
      <div style={{ display:'flex', alignItems:'flex-end', gap:16, marginTop:10 }}>
        {/* Печать */}
        <div style={{ width:96, height:96, borderRadius:'50%', flexShrink:0, border:'2px solid #3a5caa', display:'flex', alignItems:'center', justifyContent:'center', opacity:0.5 }}>
          <div style={{ textAlign:'center', fontSize:7.5, color:'#3a5caa', lineHeight:1.6 }}>М.П.<br/>ЗАГС<br/>ЯРОСЛАВЛЬ</div>
        </div>

        {/* Дата выдачи + подпись */}
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'flex-end', gap:4, marginBottom:10 }}>
            <Lbl>Дата выдачи «</Lbl>
            <CInline value="15" sub="" w={30}/>
            <Lbl>»</Lbl>
            <CInline value="мая" sub="" w={60}/>
            <CInline value="2026" sub="" w={50}/>
            <Lbl>г.</Lbl>
          </div>
          <div style={{ fontSize:11, color:'#555', fontStyle:'italic', lineHeight:1.5 }}>
            Руководитель органа<br/>записи актов гражданского состояния
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:12, marginTop:8 }}>
            <div style={{ width:80, borderBottom:'1px solid #888' }}/>
            <span style={{ fontSize:15, color:'#1a0030' }}>И. А. Зайцева</span>
          </div>
        </div>
      </div>

      {/* Серийный номер */}
      <div style={{ textAlign:'center', marginTop:18, paddingTop:10, borderTop:'1px solid #c4a0d8' }}>
        <span style={{ fontFamily:"'Oswald', sans-serif", fontSize:15, letterSpacing:'0.22em', color:'#1a0030', fontWeight:500 }}>
          VII-МЮ &nbsp; № &nbsp; 619054
        </span>
      </div>

    </div>
  </div>
);

/* ── Вспомогательные компоненты ── */

const CRow = ({ value, sub, italic=false, center=false }: { value:string; sub:string; italic?:boolean; center?:boolean }) => (
  <div style={{ marginTop:4, textAlign: center ? 'center' : 'left' }}>
    <div style={{
      fontSize: italic ? 15 : 17, fontWeight:600,
      fontStyle: italic ? 'italic' : 'normal',
      color:'#180028',
      borderBottom:'1px solid #c4a0d8', paddingBottom:2,
      display: center ? 'inline-block' : 'block',
      minWidth: center ? '55%' : undefined,
    }}>{value}</div>
    {sub ? <div style={{ fontSize:10, color:'#aaa', fontStyle:'italic', marginTop:1 }}>{sub}</div> : null}
  </div>
);

const CInline = ({ value, sub, w }: { value:string; sub:string; w:number }) => (
  <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'center' }}>
    <span style={{ fontSize:15, fontWeight:600, color:'#180028', borderBottom:'1px solid #c4a0d8', minWidth:w, textAlign:'center', paddingBottom:1, display:'block' }}>
      {value}
    </span>
    {sub ? <span style={{ fontSize:8.5, color:'#bbb', fontStyle:'italic', whiteSpace:'nowrap' }}>{sub}</span> : null}
  </div>
);

const Lbl = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <span style={{ fontSize:13, color:'#333', marginBottom:4, ...style }}>{children}</span>
);

const CDash = () => (
  <div style={{ textAlign:'center', margin:'5px 0', color:'#b88fc8', letterSpacing:'0.5em', fontSize:11 }}>—</div>
);

export default Index;