const PAGES = [
    // Strana 1: Úvod
    {
        content: `
            <h2>Vítej v pracovním listu o tiskárnách! 🖨️</h2>
            <p>Tohle nebude nuda jako ty učebnice z 90. let. Tady se naučíš fakt zajímavý věci.</p>
            
            <div class="meme">67 způsobů jak umí tiskárna pokazit tvůj den 😂</div>
            
            <div class="task">
                <div class="task-title">Co už víš o tiskárnách?</div>
                <p>Než začneme, napiš co ti přijde na mysl když řeknu "tiskárna":</p>
                <textarea placeholder="Napiš sem svoje myšlenky (kámo, buď upřímný)"></textarea>
            </div>
            
            <p><em>Fun fact: Průměrná tiskárna dokáže vypít víc inkoustu než student piva. A to je co říct.</em></p>
        `
    },
    
    // Strana 2: Historie
    {
        content: `
            <h2>Historie tiskáren (speed run)</h2>
            <p>Kdysi dávno, když tvoji rodiče byli mladí a internet byl pomalý...</p>
            
            <div class="task">
                <div class="task-title">Seřaď události od nejstarší:</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> První mechanická tiskárna (1950s)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Inkoustové tiskárny pro domácnosti (1980s)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Laserové tiskárny (1970s)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> 3D tiskárny (2000s)
                    </label>
                </div>
            </div>
            
            <div class="meme">Plot twist: První tiskárna vážila víc než tvoje babička 👵</div>
        `
    },
    
    // Strana 3: Typy tiskáren - úvod
    {
        content: `
            <h2>Základní typy tiskáren</h2>
            <p>Existuje několik typů tiskáren a každá umí pokazit tvůj projekt jiným způsobem:</p>
            
            <h3>1. Inkoustové (Inkjet)</h3>
            <p>Ty co vysávaj tvoje kapesný rychleji než McDonald's.</p>
            
            <h3>2. Laserové</h3>
            <p>Rychlý jako blesk, drahý jako Lamborghini.</p>
            
            <h3>3. Jehličkové (Dot Matrix)</h3>
            <p>Vintage vibes, hlučný jako tryskový motor.</p>
            
            <h3>4. Termální</h3>
            <p>Pro účtenky a lístky, který vyblednou rychleji než tvoje motivace.</p>
            
            <div class="hint">💡 Tip: Každý typ má svý pro a proti. Jako vztahy.</div>
        `
    },
    
    // Strana 4: Inkjet deep dive
    {
        content: `
            <h2>Inkoustové tiskárny 💧</h2>
            
            <div class="task">
                <div class="task-title">Doplň fakta o inkoustových tiskárnách:</div>
                <p>Inkoustové tiskárny fungují tak, že <input type="text" placeholder="co?"> kapičky inkoustu na papír.</p>
                <p>Výhoda: <input type="text" placeholder="např. cena, kvalita..."></p>
                <p>Nevýhoda: <input type="text" placeholder="co tě nejvíc štve?"></p>
            </div>
            
            <div class="meme">Koupíš inkoustovou tiskárnu za 2000 Kč.<br>Nový inkoust? 1800 Kč. 💀</div>
            
            <div class="hint">Real talk: Inkousty jsou dražší než zlato. Seriously, přepočítej si to na litry.</div>
        `
    },
    
    // Strana 5: Laser printer magic
    {
        content: `
            <h2>Laserové tiskárny ⚡</h2>
            <p>Welcome to the fast lane!</p>
            
            <div class="task">
                <div class="task-title">Jak funguje laser? Spoj správně:</div>
                <div class="match-container">
                    <div class="match-item" data-id="laser" onclick="selectMatch(this)">Laser</div>
                    <div class="match-item" data-pair="laser" onclick="selectMatch(this)">Nabíjí válec</div>
                    
                    <div class="match-item" data-id="toner" onclick="selectMatch(this)">Toner</div>
                    <div class="match-item" data-pair="toner" onclick="selectMatch(this)">Práškový inkoust</div>
                    
                    <div class="match-item" data-id="fuser" onclick="selectMatch(this)">Fuser</div>
                    <div class="match-item" data-pair="fuser" onclick="selectMatch(this)">Zapeče toner teplem</div>
                </div>
            </div>
            
            <p><em>BTW: Fuser je tak horký, že by na něm šel smažit vajíčka. Don't try at home.</em></p>
        `
    },
    
    // Strana 6: DPI explained
    {
        content: `
            <h2>DPI - Dots Per Inch 📐</h2>
            <p>Čím víc bodů, tím lepší kvalita. Easy peasy.</p>
            
            <div class="task">
                <div class="task-title">Test tvých znalostí:</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> 300 DPI je dobrý pro fotky
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> 72 DPI stačí pro web
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Víc DPI = větší soubor
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> DPI a PPI je totéž
                    </label>
                </div>
            </div>
            
            <div class="meme">Když ti někdo řekne že 72 DPI stačí na tisk plakátu 📉😂</div>
        `
    },
    
    // Strana 7: Barevné modely
    {
        content: `
            <h2>RGB vs CMYK 🎨</h2>
            
            <div class="task">
                <div class="task-title">Doplň:</div>
                <p>RGB znamená: <input type="text" placeholder="R_____, G_____, B_____"></p>
                <p>CMYK znamená: <input type="text" placeholder="C_____, M_____, Y_____, K_____"></p>
                <p>Pro tisk používáme: <input type="text" placeholder="RGB nebo CMYK?"></p>
                <p>Pro obrazovky používáme: <input type="text" placeholder="RGB nebo CMYK?"></p>
            </div>
            
            <div class="hint">💡 K v CMYK je "blacK" protože B už bylo obsazený. Smart, right?</div>
            
            <div class="meme">Designer: "Ale na monitoru to vypadalo jinak!" 🤡</div>
        `
    },
    
    // Strana 8: Print queue drama
    {
        content: `
            <h2>Tisková fronta (Print Queue) 📋</h2>
            <p>Místo kde dokumenty čekají na smrt... ehm, na vytisknutí.</p>
            
            <div class="task">
                <div class="task-title">Co můžeš dělat s frontou?</div>
                <textarea placeholder="Napiš aspoň 3 akce (pause, cancel, ...)"></textarea>
            </div>
            
            <p><strong>Real scenario:</strong> Poslal jsi 50 stránkový dokument a uvědomil sis že máš v názvu překlep.</p>
            <p>Co uděláš? <input type="text" placeholder="tvoje řešení"></p>
            
            <div class="meme">Watching 100 pages print when you need just page 67 💀</div>
        `
    },
    
    // Strana 9: Připojení tiskárny
    {
        content: `
            <h2>Jak připojit tiskárnu? 🔌</h2>
            
            <div class="task">
                <div class="task-title">Spoj typ připojení s jeho vlastností:</div>
                <div class="match-container">
                    <div class="match-item" data-id="usb" onclick="selectMatch(this)">USB</div>
                    <div class="match-item" data-pair="usb" onclick="selectMatch(this)">Kabelem, rychlý</div>
                    
                    <div class="match-item" data-id="wifi" onclick="selectMatch(this)">WiFi</div>
                    <div class="match-item" data-pair="wifi" onclick="selectMatch(this)">Bez kabelu, praktický</div>
                    
                    <div class="match-item" data-id="ethernet" onclick="selectMatch(this)">Ethernet</div>
                    <div class="match-item" data-pair="ethernet" onclick="selectMatch(this)">Síťový kabel, stabilní</div>
                    
                    <div class="match-item" data-id="bluetooth" onclick="selectMatch(this)">Bluetooth</div>
                    <div class="match-item" data-pair="bluetooth" onclick="selectMatch(this)">Krátká vzdálenost</div>
                </div>
            </div>
        `
    },
    
    // Strana 10: Drivers
    {
        content: `
            <h2>Ovladače (Drivers) 💿</h2>
            <p>Software co učí tvůj počítač mluvit s tiskárnou.</p>
            
            <div class="task">
                <div class="task-title">True or False?</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Bez driveru tiskárna nefunguje
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Windows mají univerzální driver
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Lepší stáhnout driver z oficiálního webu
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Driver stačí nainstalovat jednou navždy
                    </label>
                </div>
            </div>
            
            <div class="meme">"PC LOAD LETTER" - nejhorší error message ever 🤬</div>
        `
    },
    
    // Strana 11: Paper types
    {
        content: `
            <h2>Typy papíru 📄</h2>
            
            <div class="task">
                <div class="task-title">Vyplň gramy papíru:</div>
                <p>Běžný kancelářský papír: <input type="text" placeholder="__ g/m²"> g/m²</p>
                <p>Fotopapír: <input type="text" placeholder="__ g/m²"> g/m²</p>
                <p>Kartón na vizitky: <input type="text" placeholder="__ g/m²"> g/m²</p>
            </div>
            
            <div class="hint">💡 Hint: 80, 200, 300 - ale v jakým pořadí?</div>
            
            <p><strong>Formáty papíru:</strong> A4, A3, A5... Víš proč se jmenujou takhle?</p>
            <textarea placeholder="Zkus vysvětlit logiku formátů A"></textarea>
        `
    },
    
    // Strana 12: Maintenance
    {
        content: `
            <h2>Údržba tiskárny 🔧</h2>
            <p>Nebo proč tvoje tiskárna vypadá jak by měla penze.</p>
            
            <div class="task">
                <div class="task-title">Co patří k údržbě?</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Čištění tiskových hlav
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Kalibrace
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Výměna válce (laserové)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Namazání olejem (lol ne)
                    </label>
                </div>
            </div>
            
            <div class="meme">Tiskárna: *hasn't been used for 2 weeks*<br>Also tiskárna: "Inkousty are dry now lmao" 😈</div>
        `
    },
    
    // Strana 13: Common problems
    {
        content: `
            <h2>Časté problémy 🔥</h2>
            
            <div class="task">
                <div class="task-title">Spoj problém s řešením:</div>
                <div class="match-container">
                    <div class="match-item" data-id="jam" onclick="selectMatch(this)">Paper jam</div>
                    <div class="match-item" data-pair="jam" onclick="selectMatch(this)">Opatrně vytáhnout papír</div>
                    
                    <div class="match-item" data-id="smudge" onclick="selectMatch(this)">Rozmazaný tisk</div>
                    <div class="match-item" data-pair="smudge" onclick="selectMatch(this)">Vyčistit hlavy</div>
                    
                    <div class="match-item" data-id="offline" onclick="selectMatch(this)">Tiskárna offline</div>
                    <div class="match-item" data-pair="offline" onclick="selectMatch(this)">Zkontrolovat připojení</div>
                    
                    <div class="match-item" data-id="slow" onclick="selectMatch(this)">Pomalý tisk</div>
                    <div class="match-item" data-pair="slow" onclick="selectMatch(this)">Snížit kvalitu/DPI</div>
                </div>
            </div>
            
            <p><em>Universal solution: Vypnout a zapnout. Works 67% of the time.</em></p>
        `
    },
    
    // Strana 14: Print server
    {
        content: `
            <h2>Print Server 🖥️</h2>
            <p>Centrální mozek pro sdílené tiskárny v síti.</p>
            
            <div class="task">
                <div class="task-title">Odpověz:</div>
                <p>Co je to print server? <input type="text" placeholder="tvoje definice"></p>
                <p>Proč ho používat? <textarea placeholder="napiš aspoň 2 důvody"></textarea></p>
            </div>
            
            <div class="hint">💡 Print server = jedna tiskárna pro celou třídu/kancelář</div>
            
            <div class="meme">IT admin když někdo pošle 500 stránek na sdílenou tiskárnu: 😡</div>
        `
    },
    
    // Strana 15: Wireless printing
    {
        content: `
            <h2>Bezdrátový tisk 📱</h2>
            <p>Tiskni z mobilu, tabletu, nebo mikrovlnky (ok maybe not).</p>
            
            <div class="task">
                <div class="task-title">Technologie pro wireless tisk:</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> AirPrint (Apple)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Google Cloud Print (RIP 💀)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> WiFi Direct
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> NFC
                    </label>
                </div>
            </div>
            
            <p>Zkušenost s wireless tiskem: <textarea placeholder="Fungovalo to hned nebo jsi rage quitual?"></textarea></p>
        `
    },
    
    // Strana 16: Scan to print
    {
        content: `
            <h2>Multifunkční zařízení 🔄</h2>
            <p>All-in-one: Tiskárna + Skener + Kopírka (+ sometimes Fax, lol)</p>
            
            <div class="task">
                <div class="task-title">Doplň:</div>
                <p>Výhoda MFP: <input type="text" placeholder="proč kupovat všechno zvlášť?"></p>
                <p>Nevýhoda MFP: <input type="text" placeholder="když se pokazí..."></p>
            </div>
            
            <div class="meme">MFP: Master of none, ok at everything 🤷</div>
            
            <p><strong>Scan formáty:</strong> PDF, JPG, PNG, TIFF</p>
            <p>Který formát pro dokumenty? <input type="text"></p>
            <p>Který formát pro fotky? <input type="text"></p>
        `
    },
    
    // Strana 17: Eco printing
    {
        content: `
            <h2>Ekologický tisk 🌱</h2>
            <p>Save the planet, save your money. Win-win.</p>
            
            <div class="task">
                <div class="task-title">Jak tisknout ekologicky?</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Duplex (oboustranný tisk)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Draft mode
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Recyklovaný papír
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Tisknout jen když fakt musíš
                    </label>
                </div>
            </div>
            
            <div class="hint">💡 Duplex mode ušetří 50% papíru. Quick maths.</div>
            
            <div class="meme">Učitel: "Vytiskni si materiály"<br>Stromy: 😰</div>
        `
    },
    
    // Strana 18: Security
    {
        content: `
            <h2>Bezpečnost tisku 🔐</h2>
            <p>Jo, i tiskárny můžou bejt hacknutý. Welcome to 2026.</p>
            
            <div class="task">
                <div class="task-title">Security features:</div>
                <p>Pull printing je: <input type="text" placeholder="co to je?"></p>
                <p>Proč dávat heslo na tiskárnu? <textarea placeholder="tvoje názor"></textarea></p>
            </div>
            
            <p><strong>Scary fact:</strong> Síťová tiskárna bez zabezpečení = open door pro hackery</p>
            
            <div class="meme">Hacker: "I'm in" *hacks printer to print memes* 🖨️😂</div>
        `
    },
    
    // Strana 19: 3D printing teaser
    {
        content: `
            <h2>3D tisk (bonus level) 🎲</h2>
            <p>Protože 2D je pro weaklings.</p>
            
            <div class="task">
                <div class="task-title">Co víš o 3D tisku?</div>
                <p>Základní princip: <textarea placeholder="jak to funguje?"></textarea></p>
                <p>Materiály: <input type="text" placeholder="PLA, ABS, ...?"></p>
                <p>Použití: <input type="text" placeholder="na co se to hodí?"></p>
            </div>
            
            <div class="hint">💡 3D tiskárna ≠ normal tiskárna. Jiná liga.</div>
            
            <div class="meme">3D printer: *prints for 12 hours*<br>Result: Malý plastový krakatit 🦕</div>
        `
    },
    
    // Strana 20: Print costs
    {
        content: `
            <h2>Náklady na tisk 💰</h2>
            <p>Follow the money...</p>
            
            <div class="task">
                <div class="task-title">Spočítej cost per page:</div>
                <p>Inkjet: cca <input type="text" placeholder="__ Kč"> za stránku</p>
                <p>Laser: cca <input type="text" placeholder="__ Kč"> za stránku</p>
                <p>Která je levnější long-term? <input type="text"></p>
            </div>
            
            <p><strong>Real talk:</strong> Inkoustová tiskárna je jako dealer.</p>
            <p>První dávka (tiskárna) levná, pak jsi hooked na drahý inkousty 💉</p>
            
            <div class="meme">Printer ink: Dražší než krev, parfém a champagne 🍾</div>
        `
    },
    
    // Strana 21: PostScript & PDF
    {
        content: `
            <h2>PostScript & PDF 📜</h2>
            
            <div class="task">
                <div class="task-title">Doplň znalosti:</div>
                <p>PostScript je: <input type="text" placeholder="programovací jazyk / formát / ...?"></p>
                <p>PDF znamená: <input type="text" placeholder="P_____ D_____ F_____"></p>
                <p>Proč je PDF dobrý na tisk? <textarea></textarea></p>
            </div>
            
            <div class="hint">💡 PDF = portable. Vypadá stejně všude.</div>
            
            <p><em>Fun fact: PDF byl vynalezen v Adobe v roce 1993. Staré jak tvoji rodiče maybe?</em></p>
        `
    },
    
    // Strana 22: Print preview
    {
        content: `
            <h2>Náhled před tiskem 👀</h2>
            <p>Measure twice, print once.</p>
            
            <div class="task">
                <div class="task-title">Co checkovat v preview?</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Orientace (portrait/landscape)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Margins (okraje)
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Počet stránek
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Barva vs černobílá
                    </label>
                </div>
            </div>
            
            <div class="meme">Když skipneš preview a vytiskneš 100 stránek špatně 💀</div>
            
            <p>Kolikrát ses musel vrátit pro vytištěný papír? <input type="text" placeholder="honestly"></p>
        `
    },
    
    // Strana 23: Printer languages
    {
        content: `
            <h2>Tiskové jazyky 💬</h2>
            <p>Ne, tiskárna neumí česky. Ale má svoje jazyky.</p>
            
            <div class="task">
                <div class="task-title">Matching game:</div>
                <div class="match-container">
                    <div class="match-item" data-id="pcl" onclick="selectMatch(this)">PCL</div>
                    <div class="match-item" data-pair="pcl" onclick="selectMatch(this)">HP jazyk</div>
                    
                    <div class="match-item" data-id="ps" onclick="selectMatch(this)">PostScript</div>
                    <div class="match-item" data-pair="ps" onclick="selectMatch(this)">Adobe standard</div>
                    
                    <div class="match-item" data-id="esc" onclick="selectMatch(this)">ESC/P</div>
                    <div class="match-item" data-pair="esc" onclick="selectMatch(this)">Epson jazyk</div>
                </div>
            </div>
            
            <p>Proč to existuje? <textarea placeholder="tvůj názor"></textarea></p>
        `
    },
    
    // Strana 24: Cloud printing future
    {
        content: `
            <h2>Cloud Printing ☁️</h2>
            <p>Print from anywhere. Literally.</p>
            
            <div class="task">
                <div class="task-title">Vyplň:</div>
                <p>Výhody cloud printingu:</p>
                <textarea placeholder="napiš aspoň 3 výhody"></textarea>
                
                <p>Nevýhody/rizika:</p>
                <textarea placeholder="co by mohlo být problém?"></textarea>
            </div>
            
            <div class="hint">💡 Představ si: jsi na dovolené, potřebuješ vytisknout lístek. Cloud print to vyřeší.</div>
            
            <div class="meme">Future: "Alexa, print my homework"<br>"Sorry, your printer is on fire" 🔥</div>
        `
    },
    
    // Strana 25: Print quality settings
    {
        content: `
            <h2>Nastavení kvality 🎚️</h2>
            
            <div class="task">
                <div class="task-title">Kdy použít jakou kvalitu?</div>
                <p>Draft mode: <input type="text" placeholder="kdy?"></p>
                <p>Normal mode: <input type="text" placeholder="kdy?"></p>
                <p>Best/Photo mode: <input type="text" placeholder="kdy?"></p>
            </div>
            
            <p><strong>Trade-off:</strong></p>
            <p>Vyšší kvalita = <input type="text" placeholder="co se stane?"></p>
            <p>Nižší kvalita = <input type="text" placeholder="a tady?"></p>
            
            <div class="meme">Printing photo in draft mode be like: 🥔📸</div>
        `
    },
    
    // Strana 26: Color management
    {
        content: `
            <h2>Color Management 🌈</h2>
            
            <div class="task">
                <div class="task-title">True or False?</div>
                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Kalibrace monitoru ovlivní jak vypadá tisk
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> ICC profily pomáhají s barvami
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Co vidíš na monitoru = co dostaneš z tiskárny
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox"> Teplé světlo ovlivní jak vnímáš barvy tisku
                    </label>
                </div>
            </div>
            
            <div class="hint">💡 Monitor = RGB, tiskárna = CMYK. That's why colors differ.</div>
            
            <p>Největší color fail co jsi zažil: <textarea placeholder="story time"></textarea></p>
        `
    },
    
    // Strana 27: Network printing
    {
        content: `
            <h2>Síťový tisk 🌐</h2>
            
            <div class="task">
                <div class="task-title">Doplň pojmy:</div>
                <p>IP adresa tiskárny je: <input type="text" placeholder="např. 192.168.___.___ "></p>
                <p>Port pro tisk je typicky: <input type="text" placeholder="číslo"></p>
                <p>Protokol pro tisk: <input type="text" placeholder="LPD? IPP? SMB?"></p>
            </div>
            
            <p><strong>Troubleshooting:</strong> Když tiskárna "zmizí" ze sítě, co zkontrolovat?</p>
            <textarea placeholder="tvůj postup"></textarea>
            
            <div class="meme">Network printer be like: "Connection lost"<br>Me: *literally standing next to it* 🤦</div>
        `
    },
    
    // Strana 28: Professional printing
    {
        content: `
            <h2>Profesionální tisk 🏢</h2>
            <p>Velkoplošný tisk, ofsetový tisk, atd.</p>
            
            <div class="task">
                <div class="task-title">Co víš o velkoplošném tisku?</div>
                <p>Použití: <input type="text" placeholder="billboardy, ...?"></p>
                <p>Technologie: <input type="text" placeholder="inkjet? latex?"></p>
                <p>Materiály: <textarea placeholder="vinyl, canvas, ...?"></textarea></p>
            </div>
            
            <p><em>Fun fact: Některý billboardy se tisknou na kusy a pak lepí. Mind = blown 🤯</em></p>
            
            <div class="hint">💡 Offset tisk = pro miliony kopií. Domácí tiskárna = lol no.</div>
        `
    },
    
    // Strana 29: Future of printing
    {
        content: `
            <h2>Budoucnost tisku 🚀</h2>
            
            <div class="task">
                <div class="task-title">Tvoje predikce:</div>
                <p>Za 10 let budeme tisknout: <textarea placeholder="co myslíš?"></textarea></p>
                <p>Technologie která změní tisk: <input type="text" placeholder="AI? Nano? Bio?"></p>
                <p>Vymřou klasický tiskárny? <input type="text" placeholder="ano/ne/maybe?"></p>
            </div>
            
            <div class="meme">2036: "Dad what's a printer?"<br>"It's complicated, son" 👴</div>
            
            <p><strong>Hot take:</strong> Paperless office is a myth. Change my mind.</p>
            <textarea placeholder="tvůj názor"></textarea>
        `
    },
    
    // Strana 30: Závěr + memes
    {
        content: `
            <h2>Congrats! 🎉</h2>
            <p>Udělal jsi to! 30 stránek o tiskárnách a nepřestal jsi číst. Respekt.</p>
            
            <div class="task">
                <div class="task-title">Poslední úkol - reflection:</div>
                <p>Tři nejdůležitější věci cos se naučil:</p>
                <textarea placeholder="1. ...\n2. ...\n3. ..."></textarea>
                
                <p>Co tě nejvíc překvapilo:</p>
                <textarea placeholder="honestly"></textarea>
                
                <p>Rating tohoto pracovního listu (1-67):</p>
                <input type="text" placeholder="tvoje číslo">
            </div>
            
            <div class="meme">You: *finishes 30 pages*<br>Also you: "When's lunch?" 😎</div>
            
            <div class="hint">💡 P.S.: Teď už víš o tiskárnách víc než 90% lidí. Use this power wisely.</div>
            
            <p style="text-align: center; margin-top: 40px;"><strong>Made with ❤️ and lots of printer memes</strong></p>
        `
    }
];
