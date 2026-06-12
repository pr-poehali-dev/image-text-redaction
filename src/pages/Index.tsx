const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4"
      style={{ background: '#1e1e1e' }}
    >
      <div className="w-full max-w-[680px]">
        <Certificate />
      </div>
    </div>
  );
};

const Certificate = () => {
  return (
    <div style={{
      background: '#fce8f3',
      fontFamily: "'Cormorant Garamond', serif",
      position: 'relative',
      boxShadow: '0 10px 50px rgba(0,0,0,0.7)',
    }}>
      {/* Thick purple outer border */}
      <div style={{ border: '7px solid #8a5fa0', position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }} />
      {/* Thin inner border */}
      <div style={{ border: '1.5px solid #b88fc8', position: 'absolute', inset: '12px', pointerEvents: 'none', zIndex: 10 }} />

      {/* Left stripe column */}
      <div style={{
        position: 'absolute', left: 20, top: 12, bottom: 12, width: 10, zIndex: 5,
        background: 'repeating-linear-gradient(to bottom, #8a5fa0 0px, #8a5fa0 8px, transparent 8px, transparent 13px)',
      }} />
      {/* Right stripe column */}
      <div style={{
        position: 'absolute', right: 20, top: 12, bottom: 12, width: 10, zIndex: 5,
        background: 'repeating-linear-gradient(to bottom, #8a5fa0 0px, #8a5fa0 8px, transparent 8px, transparent 13px)',
      }} />

      {/* Corner diamonds */}
      {[
        { top: 4, left: 4 }, { top: 4, right: 4 },
        { bottom: 4, left: 4 }, { bottom: 4, right: 4 },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', ...s,
          color: '#8a5fa0', fontSize: 16, lineHeight: 1, zIndex: 12,
          width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✦</div>
      ))}

      {/* Watermark */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', pointerEvents: 'none', zIndex: 1, overflow: 'hidden',
      }}>
        <div style={{
          fontSize: 140, color: '#8a5fa0', opacity: 0.04,
          transform: 'rotate(-25deg)', fontFamily: 'serif',
          whiteSpace: 'nowrap', userSelect: 'none',
        }}>ЗАГС</div>
      </div>

      {/* === INNER CONTENT === */}
      <div style={{ padding: '16px 56px 28px 56px', position: 'relative', zIndex: 2 }}>

        {/* Top bow / ribbon decoration */}
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <div style={{ fontSize: 20, color: '#b88fc8', letterSpacing: 8, lineHeight: 1 }}>~ ~ ~</div>
        </div>

        {/* TITLE */}
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 21, fontWeight: 600,
            letterSpacing: '0.13em',
            color: '#1a0030', lineHeight: 1.4,
          }}>
            СВИДЕТЕЛЬСТВО<br />О СМЕРТИ
          </div>
        </div>

        {/* ФИО */}
        <CRow value="Скобелева" sub="фамилия" center />
        <CRow value="Оксана Петровна" sub="имя, отчество" center />
        <CRow value="гражданка России" sub="гражданство" center />

        {/* Дата рождения */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginTop: 7 }}>
          <Label>«</Label>
          <CInline value="03" sub="число" w={36} />
          <Label>»</Label>
          <CInline value="апреля" sub="месяц" w={90} />
          <CInline value="1983" sub="год рождения" w={60} />
          <Label>г.</Label>
        </div>

        {/* Место рождения */}
        <CRow value="г. Судак" sub="место рождения" />
        <CRow value="Крымская область" sub="" />

        <CDash />

        {/* Умер(ла) */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 4 }}>
          <Label>умер(ла)</Label>
          <CInline value="14.05.2026" sub="число, месяц, год (цифрами и словами)" w={180} />
        </div>

        <CRow value="четырнадцатого мая" sub="" italic center />
        <CRow value="две тысячи двадцать шестого года" sub="" italic center />

        {/* О чём */}
        <div style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap', gap: 4, marginTop: 7 }}>
          <Label>о чем</Label>
          <CInline value="2026" sub="" w={52} />
          <Label>года</Label>
          <CInline value="мая" sub="" w={64} />
          <Label>месяца</Label>
          <CInline value="14" sub="" w={36} />
          <Label>числа</Label>
        </div>

        {/* Запись акта */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 5 }}>
          <Label>составлена запись акта о смерти №</Label>
          <CInline value="1397" sub="" w={60} />
        </div>

        {/* Место смерти */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 7 }}>
          <Label style={{ whiteSpace: 'nowrap' }}>Место смерти</Label>
          <CInline value="г. Ярославль" sub="" w={160} />
        </div>

        <CDash />

        <CRow value="Россия" sub="" center />

        {/* Место регистрации */}
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 11, color: '#666', fontStyle: 'italic' }}>Место государственной регистрации</div>
          <div style={{
            textAlign: 'center', fontWeight: 700, fontSize: 16,
            color: '#1a0030', marginTop: 3,
          }}>
            Перовский отдел ЗАГС Управления ЗАГС Ярославля
          </div>
          <div style={{ textAlign: 'center', fontSize: 10, color: '#aaa', fontStyle: 'italic' }}>
            наименование органа записи актов гражданского состояния
          </div>
        </div>

        <CDash />

        {/* Stamp + Date + Signature */}
        <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, gap: 16 }}>

          {/* Stamp circle */}
          <div style={{
            width: 96, height: 96, borderRadius: '50%', flexShrink: 0,
            border: '2px solid #3a5caa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0.5,
          }}>
            <div style={{ textAlign: 'center', fontSize: 7.5, color: '#3a5caa', lineHeight: 1.6 }}>
              М.П.<br />ЗАГС<br />ЯРОСЛАВЛЬ
            </div>
          </div>

          {/* Signature block */}
          <div style={{ flex: 1 }}>
            {/* Дата выдачи */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 10 }}>
              <Label>Дата выдачи «</Label>
              <CInline value="15" sub="" w={30} />
              <Label>»</Label>
              <CInline value="мая" sub="" w={60} />
              <CInline value="2026" sub="" w={50} />
              <Label>г.</Label>
            </div>

            <div style={{ fontSize: 11, color: '#555', fontStyle: 'italic', lineHeight: 1.5 }}>
              Руководитель органа<br />записи актов гражданского состояния
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginTop: 8 }}>
              <div style={{ width: 80, borderBottom: '1px solid #888' }} />
              <span style={{ fontSize: 15, color: '#1a0030' }}>И. А. Зайцева</span>
            </div>
          </div>
        </div>

        {/* Serial number */}
        <div style={{
          textAlign: 'center', marginTop: 18, paddingTop: 10,
          borderTop: '1px solid #c4a0d8',
        }}>
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 15, letterSpacing: '0.22em',
            color: '#1a0030', fontWeight: 500,
          }}>
            VII-МЮ &nbsp; № &nbsp; 619054
          </span>
        </div>

      </div>
    </div>
  );
};

/* ---- sub-components ---- */

const CRow = ({
  value, sub, italic = false, center = false,
}: {
  value: string; sub: string; italic?: boolean; center?: boolean;
}) => (
  <div style={{ marginTop: 4, textAlign: center ? 'center' : 'left' }}>
    <div style={{
      fontSize: italic ? 15 : 17,
      fontWeight: 600,
      fontStyle: italic ? 'italic' : 'normal',
      color: '#180028',
      borderBottom: '1px solid #c4a0d8',
      paddingBottom: 2,
      display: center ? 'inline-block' : 'block',
      minWidth: center ? '55%' : undefined,
    }}>
      {value}
    </div>
    {sub ? (
      <div style={{ fontSize: 10, color: '#aaa', fontStyle: 'italic', marginTop: 1 }}>{sub}</div>
    ) : null}
  </div>
);

const CInline = ({
  value, sub, w,
}: {
  value: string; sub: string; w: number;
}) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
    <span style={{
      fontSize: 15, fontWeight: 600, color: '#180028',
      borderBottom: '1px solid #c4a0d8',
      minWidth: w, textAlign: 'center',
      paddingBottom: 1, display: 'block',
    }}>
      {value}
    </span>
    {sub ? (
      <span style={{ fontSize: 8.5, color: '#bbb', fontStyle: 'italic', whiteSpace: 'nowrap' }}>{sub}</span>
    ) : null}
  </div>
);

const Label = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span style={{ fontSize: 13, color: '#333', marginBottom: 4, ...style }}>{children}</span>
);

const CDash = () => (
  <div style={{ textAlign: 'center', margin: '5px 0', color: '#b88fc8', letterSpacing: '0.5em', fontSize: 11 }}>—</div>
);

export default Index;
