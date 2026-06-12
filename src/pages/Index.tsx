const Index = () => {
  return (
    <div className="min-h-screen bg-[#c8b89a] flex items-center justify-center py-10 px-4"
      style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}>
      <div className="w-full max-w-[720px]">
        {/* Certificate */}
        <div
          className="relative bg-[#fdf6ee] shadow-2xl"
          style={{
            border: '3px solid #9b7bb5',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {/* Outer ornamental border */}
          <div className="absolute inset-[6px] pointer-events-none"
            style={{ border: '1.5px solid #c4a0d8' }} />
          <div className="absolute inset-[10px] pointer-events-none"
            style={{ border: '1px solid #d8b4f0', opacity: 0.5 }} />

          {/* Corner ornaments */}
          {['top-[14px] left-[14px]', 'top-[14px] right-[14px]', 'bottom-[14px] left-[14px]', 'bottom-[14px] right-[14px]'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 flex items-center justify-center`}
              style={{ color: '#9b7bb5', fontSize: 22 }}>✦</div>
          ))}

          {/* Side ornaments */}
          <div className="absolute left-[14px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ color: '#b89dcc', fontSize: 10 }}>◆</div>
            ))}
          </div>
          <div className="absolute right-[14px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ color: '#b89dcc', fontSize: 10 }}>◆</div>
            ))}
          </div>

          {/* Content */}
          <div className="px-16 py-10">

            {/* Header emblem area */}
            <div className="flex flex-col items-center mb-4">
              {/* Герб-заглушка */}
              <div className="mb-2" style={{ color: '#9b7bb5', fontSize: 36 }}>⚜</div>
              <div className="text-center" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.15em', fontSize: 22, fontWeight: 600, color: '#2d1a4a', lineHeight: 1.3 }}>
                СВИДЕТЕЛЬСТВО<br />О СМЕРТИ
              </div>
              <div className="mt-3 w-32 border-t" style={{ borderColor: '#9b7bb5', borderWidth: '1.5px' }} />
            </div>

            {/* Watermark pattern */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.035]"
              style={{ zIndex: 0 }}>
              <div style={{ fontSize: 120, color: '#6b21a8', transform: 'rotate(-30deg)', whiteSpace: 'nowrap', userSelect: 'none', fontFamily: 'serif' }}>
                ЗАГС
              </div>
            </div>

            {/* Fields */}
            <div className="relative z-10 mt-2 space-y-0">

              {/* ФИО */}
              <FieldBlock label="фамилия" value="Скобелева" center />
              <FieldBlock label="имя, отчество" value="Оксана Петровна" center />
              <FieldBlock label="гражданство" value="гражданка России" center />

              {/* Дата рождения */}
              <div className="flex items-end gap-2 mt-2">
                <span style={{ fontSize: 14, color: '#555' }}>«</span>
                <FieldInline value="03" label="число" />
                <span style={{ fontSize: 14, color: '#555' }}>»</span>
                <FieldInline value="апреля" label="месяц" />
                <FieldInline value="1983" label="год рождения" />
                <span style={{ fontSize: 14, color: '#555' }}>г.</span>
              </div>

              {/* Место рождения */}
              <FieldBlock label="место рождения" value="г. Судак" />
              <FieldBlock label="" value="Крымская область" />

              <div className="text-center my-1" style={{ color: '#9b7bb5', letterSpacing: '0.3em', fontSize: 12 }}>—</div>

              {/* Дата смерти */}
              <div className="flex items-end gap-2">
                <span style={{ fontSize: 13, color: '#333' }}>умер(ла)</span>
                <FieldInline value="14.05.2026" label="число, месяц, год (цифрами и словами)" wide />
              </div>
              <FieldBlock label="" value="четырнадцатого мая" italic center />
              <FieldBlock label="" value="две тысячи двадцать шестого года" italic center />

              {/* Акт */}
              <div className="flex items-end flex-wrap gap-1 mt-2">
                <span style={{ fontSize: 13, color: '#333' }}>о чем</span>
                <FieldInline value="2026" label="" />
                <span style={{ fontSize: 13, color: '#333' }}>года</span>
                <FieldInline value="мая" label="" />
                <span style={{ fontSize: 13, color: '#333' }}>месяца</span>
                <FieldInline value="14" label="" />
                <span style={{ fontSize: 13, color: '#333' }}>числа</span>
              </div>
              <div className="flex items-end gap-2 mt-1">
                <span style={{ fontSize: 13, color: '#333' }}>составлена запись акта о смерти №</span>
                <FieldInline value="1397" label="" wide />
              </div>

              {/* Место смерти */}
              <div className="flex items-end gap-2 mt-2">
                <span style={{ fontSize: 13, color: '#333', whiteSpace: 'nowrap' }}>Место смерти</span>
                <FieldInline value="г. Ярославль" label="" wide />
              </div>
              <div className="text-center my-1" style={{ color: '#9b7bb5', letterSpacing: '0.3em', fontSize: 12 }}>—</div>
              <FieldBlock label="" value="Россия" center />

              {/* Место регистрации */}
              <div className="mt-2">
                <p style={{ fontSize: 11, color: '#666', fontStyle: 'italic' }}>Место государственной регистрации</p>
                <p className="text-center mt-0.5" style={{ fontSize: 16, fontWeight: 700, color: '#2d1a4a', fontFamily: "'Cormorant Garamond', serif" }}>
                  Перовский отдел ЗАГС Управления ЗАГС Ярославля
                </p>
                <p className="text-center" style={{ fontSize: 10, color: '#888', fontStyle: 'italic' }}>наименование органа записи актов гражданского состояния</p>
              </div>

              {/* Bottom area — stamp + signature */}
              <div className="flex items-end justify-between mt-6 pt-4" style={{ borderTop: '1px dashed #c4a0d8' }}>
                {/* Stamp placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{ border: '2px solid #4a6fba', opacity: 0.45 }}>
                    <div className="text-center" style={{ fontSize: 8, color: '#4a6fba', lineHeight: 1.4, padding: 8 }}>
                      М.П.<br />ЗАГС<br />г. Ярославль
                    </div>
                  </div>
                </div>

                {/* Date and signature */}
                <div className="flex-1 ml-8">
                  <div className="flex items-end gap-2 mb-4">
                    <span style={{ fontSize: 13, color: '#333' }}>Дата выдачи «</span>
                    <FieldInline value="15" label="" />
                    <span style={{ fontSize: 13, color: '#333' }}>»</span>
                    <FieldInline value="мая" label="" />
                    <FieldInline value="2026" label="" />
                    <span style={{ fontSize: 13, color: '#333' }}>г.</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#555', fontStyle: 'italic' }}>Руководитель органа</div>
                  <div style={{ fontSize: 12, color: '#555', fontStyle: 'italic' }}>записи актов гражданского состояния</div>
                  <div className="mt-3 flex items-end gap-4">
                    <div className="w-24 border-b" style={{ borderColor: '#999' }} />
                    <span style={{ fontSize: 14, color: '#2d1a4a', fontFamily: "'Cormorant Garamond', serif" }}>И. А. Зайцева</span>
                  </div>
                </div>
              </div>

              {/* Serial number */}
              <div className="text-center mt-6">
                <span style={{ fontSize: 15, fontFamily: "'Oswald', sans-serif", letterSpacing: '0.2em', color: '#2d1a4a', fontWeight: 500 }}>
                  VII-МЮ № 619054
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldBlock = ({
  label,
  value,
  center = false,
  italic = false,
}: {
  label: string;
  value: string;
  center?: boolean;
  italic?: boolean;
}) => (
  <div className={`mt-1 ${center ? 'text-center' : ''}`}>
    <div
      style={{
        fontSize: italic ? 16 : 18,
        fontWeight: italic ? 400 : 600,
        color: '#1a0a2e',
        fontStyle: italic ? 'italic' : 'normal',
        fontFamily: "'Cormorant Garamond', serif",
        borderBottom: '1px solid #c4a0d8',
        display: 'inline-block',
        minWidth: '60%',
        paddingBottom: 1,
      }}
    >
      {value}
    </div>
    {label && (
      <div style={{ fontSize: 10, color: '#888', fontStyle: 'italic', marginTop: 1 }}>
        {label}
      </div>
    )}
  </div>
);

const FieldInline = ({
  value,
  label,
  wide = false,
}: {
  value: string;
  label: string;
  wide?: boolean;
}) => (
  <div className="inline-flex flex-col items-center">
    <span
      style={{
        fontSize: 16,
        fontWeight: 600,
        color: '#1a0a2e',
        fontFamily: "'Cormorant Garamond', serif",
        borderBottom: '1px solid #c4a0d8',
        minWidth: wide ? 80 : 40,
        textAlign: 'center',
        paddingBottom: 1,
        display: 'block',
      }}
    >
      {value}
    </span>
    {label && (
      <span style={{ fontSize: 9, color: '#999', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
        {label}
      </span>
    )}
  </div>
);

export default Index;
