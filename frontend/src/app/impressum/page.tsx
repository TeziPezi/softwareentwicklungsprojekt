export default function Impressum() {
  return (
    <>
      <head>
        <title>Impressum</title>
        <meta name="description" content="Impressum der Nawarat Thaimassage in Lippstadt." />
      </head>

      <main className="container mx-auto py-6 px-50" style={{ fontFamily: '"tahoma", "Times New Roman", verdana, helvetica, arial, sans-serif', fontSize: '14px', color: '#743a1a',}}>
        
        <div className="text-2xl font-bold mb-4">Impressum</div>

        <div className="space-y-4">
          <span>
            <strong>Angaben gemäß § 5 TMG:</strong><br />
            Phatchadaporn Sallach<br />
            Nawarat Traditionelle Thaimassage<br />
            Woldemei 34<br />
            59555 Lippstadt
          </span><br /><br />

          <span>
            <strong>Kontakt:</strong><br />
            Telefon: 02941 9256129<br />
            Telefax: 02941 9247549<br />
            E-Mail: <a className="text-blue-600" href="mailto:Thaimassage-Lippstadt@t-online.de">Thaimassage-Lippstadt@t-online.de</a>
          </span><br /><br />

          <span>
            <strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <strong>DE296617111</strong>
          </span>

          <div className="line_bottom mt-5"></div>
        </div>
      </main>
    </>
  );
}
