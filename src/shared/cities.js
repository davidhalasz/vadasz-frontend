const jsoncities = [
    {
      "nev": "Aba",
      "megye": "Fejér"
    },
    {
      "nev": "Abádszalók",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Abaliget",
      "megye": "Baranya"
    },
    {
      "nev": "Abasár",
      "megye": "Heves"
    },
    {
      "nev": "Abaújalpár",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abaújkér",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abaújlak",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abaújszántó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abaújszolnok",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abaújvár",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abda",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Abod",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Abony",
      "megye": "Pest"
    },
    {
      "nev": "Ábrahámhegy",
      "megye": "Veszprém"
    },
    {
      "nev": "Ács",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Acsa",
      "megye": "Pest"
    },
    {
      "nev": "Acsád",
      "megye": "Vas"
    },
    {
      "nev": "Acsalag",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ácsteszér",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Adács",
      "megye": "Heves"
    },
    {
      "nev": "Ádánd",
      "megye": "Somogy"
    },
    {
      "nev": "Adásztevel",
      "megye": "Veszprém"
    },
    {
      "nev": "Adony",
      "megye": "Fejér"
    },
    {
      "nev": "Adorjánháza",
      "megye": "Veszprém"
    },
    {
      "nev": "Adorjás",
      "megye": "Baranya"
    },
    {
      "nev": "Ág",
      "megye": "Baranya"
    },
    {
      "nev": "Ágasegyháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Ágfalva",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Aggtelek",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Agyagosszergény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ajak",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Ajka",
      "megye": "Veszprém"
    },
    {
      "nev": "Aka",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Akasztó",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Alacska",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alap",
      "megye": "Fejér"
    },
    {
      "nev": "Alattyán",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Albertirsa",
      "megye": "Pest"
    },
    {
      "nev": "Alcsútdoboz",
      "megye": "Fejér"
    },
    {
      "nev": "Aldebrő",
      "megye": "Heves"
    },
    {
      "nev": "Algyő",
      "megye": "Csongrád"
    },
    {
      "nev": "Alibánfa",
      "megye": "Zala"
    },
    {
      "nev": "Almamellék",
      "megye": "Baranya"
    },
    {
      "nev": "Almásfüzitő",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Almásháza",
      "megye": "Zala"
    },
    {
      "nev": "Almáskamarás",
      "megye": "Békés"
    },
    {
      "nev": "Almáskeresztúr",
      "megye": "Baranya"
    },
    {
      "nev": "Álmosd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Alsóberecki",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsóbogát",
      "megye": "Somogy"
    },
    {
      "nev": "Alsódobsza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsógagy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsómocsolád",
      "megye": "Baranya"
    },
    {
      "nev": "Alsónána",
      "megye": "Tolna"
    },
    {
      "nev": "Alsónémedi",
      "megye": "Pest"
    },
    {
      "nev": "Alsónemesapáti",
      "megye": "Zala"
    },
    {
      "nev": "Alsónyék",
      "megye": "Tolna"
    },
    {
      "nev": "Alsóörs",
      "megye": "Veszprém"
    },
    {
      "nev": "Alsópáhok",
      "megye": "Zala"
    },
    {
      "nev": "Alsópetény",
      "megye": "Nógrád"
    },
    {
      "nev": "Alsórajk",
      "megye": "Zala"
    },
    {
      "nev": "Alsóregmec",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsószenterzsébet",
      "megye": "Zala"
    },
    {
      "nev": "Alsószentiván",
      "megye": "Fejér"
    },
    {
      "nev": "Alsószentmárton",
      "megye": "Baranya"
    },
    {
      "nev": "Alsószölnök",
      "megye": "Vas"
    },
    {
      "nev": "Alsószuha",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsótelekes",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsótold",
      "megye": "Nógrád"
    },
    {
      "nev": "Alsóújlak",
      "megye": "Vas"
    },
    {
      "nev": "Alsóvadász",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Alsózsolca",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ambrózfalva",
      "megye": "Csongrád"
    },
    {
      "nev": "Anarcs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Andocs",
      "megye": "Somogy"
    },
    {
      "nev": "Andornaktálya",
      "megye": "Heves"
    },
    {
      "nev": "Andrásfa",
      "megye": "Vas"
    },
    {
      "nev": "Annavölgy",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Apácatorna",
      "megye": "Veszprém"
    },
    {
      "nev": "Apagy",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Apaj",
      "megye": "Pest"
    },
    {
      "nev": "Aparhant",
      "megye": "Tolna"
    },
    {
      "nev": "Apátfalva",
      "megye": "Csongrád"
    },
    {
      "nev": "Apátistvánfalva",
      "megye": "Vas"
    },
    {
      "nev": "Apátvarasd",
      "megye": "Baranya"
    },
    {
      "nev": "Apc",
      "megye": "Heves"
    },
    {
      "nev": "Áporka",
      "megye": "Pest"
    },
    {
      "nev": "Apostag",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Aranyosapáti",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Aranyosgadány",
      "megye": "Baranya"
    },
    {
      "nev": "Arka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Arló",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Arnót",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ároktő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Árpádhalom",
      "megye": "Csongrád"
    },
    {
      "nev": "Árpás",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ártánd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Ásotthalom",
      "megye": "Csongrád"
    },
    {
      "nev": "Ásványráró",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Aszaló",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ászár",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Aszód",
      "megye": "Pest"
    },
    {
      "nev": "Aszófő",
      "megye": "Veszprém"
    },
    {
      "nev": "Áta",
      "megye": "Baranya"
    },
    {
      "nev": "Átány",
      "megye": "Heves"
    },
    {
      "nev": "Atkár",
      "megye": "Heves"
    },
    {
      "nev": "Attala",
      "megye": "Tolna"
    },
    {
      "nev": "Babarc",
      "megye": "Baranya"
    },
    {
      "nev": "Babarcszőlős",
      "megye": "Baranya"
    },
    {
      "nev": "Babócsa",
      "megye": "Somogy"
    },
    {
      "nev": "Bábolna",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bábonymegyer",
      "megye": "Somogy"
    },
    {
      "nev": "Babosdöbréte",
      "megye": "Zala"
    },
    {
      "nev": "Babót",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bácsalmás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bácsbokod",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bácsborsód",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bácsszentgyörgy",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bácsszőlős",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Badacsonytomaj",
      "megye": "Veszprém"
    },
    {
      "nev": "Badacsonytördemic",
      "megye": "Veszprém"
    },
    {
      "nev": "Bag",
      "megye": "Pest"
    },
    {
      "nev": "Bagamér",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Baglad",
      "megye": "Zala"
    },
    {
      "nev": "Bagod",
      "megye": "Zala"
    },
    {
      "nev": "Bágyogszovát",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Baj",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Baja",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bajánsenye",
      "megye": "Vas"
    },
    {
      "nev": "Bajna",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bajót",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bak",
      "megye": "Zala"
    },
    {
      "nev": "Bakháza",
      "megye": "Somogy"
    },
    {
      "nev": "Bakóca",
      "megye": "Baranya"
    },
    {
      "nev": "Bakonszeg",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Bakonya",
      "megye": "Baranya"
    },
    {
      "nev": "Bakonybánk",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bakonybél",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonycsernye",
      "megye": "Fejér"
    },
    {
      "nev": "Bakonygyirót",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bakonyjákó",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonykoppány",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonykúti",
      "megye": "Fejér"
    },
    {
      "nev": "Bakonynána",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonyoszlop",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonypéterd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bakonypölöske",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonyság",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonysárkány",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bakonyszentiván",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonyszentkirály",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonyszentlászló",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bakonyszombathely",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bakonyszücs",
      "megye": "Veszprém"
    },
    {
      "nev": "Bakonytamási",
      "megye": "Veszprém"
    },
    {
      "nev": "Baks",
      "megye": "Csongrád"
    },
    {
      "nev": "Baksa",
      "megye": "Baranya"
    },
    {
      "nev": "Baktakék",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Baktalórántháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Baktüttös",
      "megye": "Zala"
    },
    {
      "nev": "Balajt",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Balassagyarmat",
      "megye": "Nógrád"
    },
    {
      "nev": "Balástya",
      "megye": "Csongrád"
    },
    {
      "nev": "Balaton",
      "megye": "Heves"
    },
    {
      "nev": "Balatonakali",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonakarattya",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonalmádi",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonberény",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonboglár",
      "megye": "Somogy"
    },
    {
      "nev": "Balatoncsicsó",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonederics",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonendréd",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonfenyves",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonfőkajár",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonföldvár",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonfüred",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonfűzfő",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatongyörök",
      "megye": "Zala"
    },
    {
      "nev": "Balatonhenye",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonkenese",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonkeresztúr",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonlelle",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonmagyaród",
      "megye": "Zala"
    },
    {
      "nev": "Balatonmáriafürdő",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonőszöd",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonrendes",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonszabadi",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonszárszó",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonszemes",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonszentgyörgy",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonszepezd",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonszőlős",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonudvari",
      "megye": "Veszprém"
    },
    {
      "nev": "Balatonújlak",
      "megye": "Somogy"
    },
    {
      "nev": "Balatonvilágos",
      "megye": "Somogy"
    },
    {
      "nev": "Balinka",
      "megye": "Fejér"
    },
    {
      "nev": "Balkány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Ballószög",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Balmazújváros",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Balogunyom",
      "megye": "Vas"
    },
    {
      "nev": "Balotaszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Balsa",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Bálványos",
      "megye": "Somogy"
    },
    {
      "nev": "Bana",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bánd",
      "megye": "Veszprém"
    },
    {
      "nev": "Bánfa",
      "megye": "Baranya"
    },
    {
      "nev": "Bánhorváti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bánk",
      "megye": "Nógrád"
    },
    {
      "nev": "Bánokszentgyörgy",
      "megye": "Zala"
    },
    {
      "nev": "Bánréve",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bár",
      "megye": "Baranya"
    },
    {
      "nev": "Barabás",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Baracs",
      "megye": "Fejér"
    },
    {
      "nev": "Baracska",
      "megye": "Fejér"
    },
    {
      "nev": "Báránd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Baranyahídvég",
      "megye": "Baranya"
    },
    {
      "nev": "Baranyajenő",
      "megye": "Baranya"
    },
    {
      "nev": "Baranyaszentgyörgy",
      "megye": "Baranya"
    },
    {
      "nev": "Barbacs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Barcs",
      "megye": "Somogy"
    },
    {
      "nev": "Bárdudvarnok",
      "megye": "Somogy"
    },
    {
      "nev": "Barlahida",
      "megye": "Zala"
    },
    {
      "nev": "Bárna",
      "megye": "Nógrád"
    },
    {
      "nev": "Barnag",
      "megye": "Veszprém"
    },
    {
      "nev": "Bársonyos",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Basal",
      "megye": "Baranya"
    },
    {
      "nev": "Baskó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Báta",
      "megye": "Tolna"
    },
    {
      "nev": "Bátaapáti",
      "megye": "Tolna"
    },
    {
      "nev": "Bátaszék",
      "megye": "Tolna"
    },
    {
      "nev": "Baté",
      "megye": "Somogy"
    },
    {
      "nev": "Bátmonostor",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bátonyterenye",
      "megye": "Nógrád"
    },
    {
      "nev": "Bátor",
      "megye": "Heves"
    },
    {
      "nev": "Bátorliget",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Battonya",
      "megye": "Békés"
    },
    {
      "nev": "Bátya",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Batyk",
      "megye": "Zala"
    },
    {
      "nev": "Bázakerettye",
      "megye": "Zala"
    },
    {
      "nev": "Bazsi",
      "megye": "Veszprém"
    },
    {
      "nev": "Béb",
      "megye": "Veszprém"
    },
    {
      "nev": "Becsehely",
      "megye": "Zala"
    },
    {
      "nev": "Becske",
      "megye": "Nógrád"
    },
    {
      "nev": "Becskeháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Becsvölgye",
      "megye": "Zala"
    },
    {
      "nev": "Bedegkér",
      "megye": "Somogy"
    },
    {
      "nev": "Bedő",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Bejcgyertyános",
      "megye": "Vas"
    },
    {
      "nev": "Békás",
      "megye": "Veszprém"
    },
    {
      "nev": "Bekecs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Békés",
      "megye": "Békés"
    },
    {
      "nev": "Békéscsaba",
      "megye": "Békés"
    },
    {
      "nev": "Békéssámson",
      "megye": "Békés"
    },
    {
      "nev": "Békésszentandrás",
      "megye": "Békés"
    },
    {
      "nev": "Bekölce",
      "megye": "Heves"
    },
    {
      "nev": "Bélapátfalva",
      "megye": "Heves"
    },
    {
      "nev": "Bélavár",
      "megye": "Somogy"
    },
    {
      "nev": "Belecska",
      "megye": "Tolna"
    },
    {
      "nev": "Beled",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Beleg",
      "megye": "Somogy"
    },
    {
      "nev": "Belezna",
      "megye": "Zala"
    },
    {
      "nev": "Bélmegyer",
      "megye": "Békés"
    },
    {
      "nev": "Beloiannisz",
      "megye": "Fejér"
    },
    {
      "nev": "Belsősárd",
      "megye": "Zala"
    },
    {
      "nev": "Belvárdgyula",
      "megye": "Baranya"
    },
    {
      "nev": "Benk",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Bénye",
      "megye": "Pest"
    },
    {
      "nev": "Bér",
      "megye": "Nógrád"
    },
    {
      "nev": "Bérbaltavár",
      "megye": "Vas"
    },
    {
      "nev": "Bercel",
      "megye": "Nógrád"
    },
    {
      "nev": "Beregdaróc",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Beregsurány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Berekböszörmény",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Berekfürdő",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Beremend",
      "megye": "Baranya"
    },
    {
      "nev": "Berente",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Beret",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Berettyóújfalu",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Berhida",
      "megye": "Veszprém"
    },
    {
      "nev": "Berkenye",
      "megye": "Nógrád"
    },
    {
      "nev": "Berkesd",
      "megye": "Baranya"
    },
    {
      "nev": "Berkesz",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Bernecebaráti",
      "megye": "Pest"
    },
    {
      "nev": "Berzék",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Berzence",
      "megye": "Somogy"
    },
    {
      "nev": "Besence",
      "megye": "Baranya"
    },
    {
      "nev": "Besenyőd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Besenyőtelek",
      "megye": "Heves"
    },
    {
      "nev": "Besenyszög",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Besnyő",
      "megye": "Fejér"
    },
    {
      "nev": "Beszterec",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Bezedek",
      "megye": "Baranya"
    },
    {
      "nev": "Bezenye",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bezeréd",
      "megye": "Zala"
    },
    {
      "nev": "Bezi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Biatorbágy",
      "megye": "Pest"
    },
    {
      "nev": "Bicsérd",
      "megye": "Baranya"
    },
    {
      "nev": "Bicske",
      "megye": "Fejér"
    },
    {
      "nev": "Bihardancsháza",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Biharkeresztes",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Biharnagybajom",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Bihartorda",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Biharugra",
      "megye": "Békés"
    },
    {
      "nev": "Bikács",
      "megye": "Tolna"
    },
    {
      "nev": "Bikal",
      "megye": "Baranya"
    },
    {
      "nev": "Biri",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Birján",
      "megye": "Baranya"
    },
    {
      "nev": "Bisse",
      "megye": "Baranya"
    },
    {
      "nev": "Boba",
      "megye": "Vas"
    },
    {
      "nev": "Bocfölde",
      "megye": "Zala"
    },
    {
      "nev": "Boconád",
      "megye": "Heves"
    },
    {
      "nev": "Bócsa",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bocska",
      "megye": "Zala"
    },
    {
      "nev": "Bocskaikert",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Boda",
      "megye": "Baranya"
    },
    {
      "nev": "Bodajk",
      "megye": "Fejér"
    },
    {
      "nev": "Bodmér",
      "megye": "Fejér"
    },
    {
      "nev": "Bodolyabér",
      "megye": "Baranya"
    },
    {
      "nev": "Bodonhely",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bodony",
      "megye": "Heves"
    },
    {
      "nev": "Bodorfa",
      "megye": "Veszprém"
    },
    {
      "nev": "Bodrog",
      "megye": "Somogy"
    },
    {
      "nev": "Bodroghalom",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bodrogkeresztúr",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bodrogkisfalud",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bodrogolaszi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bódvalenke",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bódvarákó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bódvaszilas",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bogács",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bogád",
      "megye": "Baranya"
    },
    {
      "nev": "Bogádmindszent",
      "megye": "Baranya"
    },
    {
      "nev": "Bogdása",
      "megye": "Baranya"
    },
    {
      "nev": "Bogyiszló",
      "megye": "Tolna"
    },
    {
      "nev": "Bogyoszló",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bojt",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Bókaháza",
      "megye": "Zala"
    },
    {
      "nev": "Bokod",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Bokor",
      "megye": "Nógrád"
    },
    {
      "nev": "Boldog",
      "megye": "Heves"
    },
    {
      "nev": "Boldogasszonyfa",
      "megye": "Baranya"
    },
    {
      "nev": "Boldogkőújfalu",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Boldogkőváralja",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Boldva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bolhás",
      "megye": "Somogy"
    },
    {
      "nev": "Bolhó",
      "megye": "Somogy"
    },
    {
      "nev": "Bóly",
      "megye": "Baranya"
    },
    {
      "nev": "Boncodfölde",
      "megye": "Zala"
    },
    {
      "nev": "Bonyhád",
      "megye": "Tolna"
    },
    {
      "nev": "Bonyhádvarasd",
      "megye": "Tolna"
    },
    {
      "nev": "Bonnya",
      "megye": "Somogy"
    },
    {
      "nev": "Bordány",
      "megye": "Csongrád"
    },
    {
      "nev": "Borgáta",
      "megye": "Vas"
    },
    {
      "nev": "Borjád",
      "megye": "Baranya"
    },
    {
      "nev": "Borota",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Borsfa",
      "megye": "Zala"
    },
    {
      "nev": "Borsodbóta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsodgeszt",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsodivánka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsodnádasd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsodszentgyörgy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsodszirák",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Borsosberény",
      "megye": "Nógrád"
    },
    {
      "nev": "Borszörcsök",
      "megye": "Veszprém"
    },
    {
      "nev": "Borzavár",
      "megye": "Veszprém"
    },
    {
      "nev": "Bosta",
      "megye": "Baranya"
    },
    {
      "nev": "Botpalád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Botykapeterd",
      "megye": "Baranya"
    },
    {
      "nev": "Bozzai",
      "megye": "Vas"
    },
    {
      "nev": "Bozsok",
      "megye": "Vas"
    },
    {
      "nev": "Bózsva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bő",
      "megye": "Vas"
    },
    {
      "nev": "Bőcs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Böde",
      "megye": "Zala"
    },
    {
      "nev": "Bödeháza",
      "megye": "Zala"
    },
    {
      "nev": "Bögöt",
      "megye": "Vas"
    },
    {
      "nev": "Bögöte",
      "megye": "Vas"
    },
    {
      "nev": "Böhönye",
      "megye": "Somogy"
    },
    {
      "nev": "Bököny",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Bölcske",
      "megye": "Tolna"
    },
    {
      "nev": "Bőny",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Börcs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Börzönce",
      "megye": "Zala"
    },
    {
      "nev": "Bősárkány",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Bőszénfa",
      "megye": "Somogy"
    },
    {
      "nev": "Bucsa",
      "megye": "Békés"
    },
    {
      "nev": "Bucsu",
      "megye": "Vas"
    },
    {
      "nev": "Búcsúszentlászló",
      "megye": "Zala"
    },
    {
      "nev": "Bucsuta",
      "megye": "Zala"
    },
    {
      "nev": "Budajenő",
      "megye": "Pest"
    },
    {
      "nev": "Budakalász",
      "megye": "Pest"
    },
    {
      "nev": "Budakeszi",
      "megye": "Pest"
    },
    {
      "nev": "Budaörs",
      "megye": "Pest"
    },
    {
      "nev": "Budapest",
      "megye": "Pest"
    },
    {
      "nev": "Budapest 01. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 02. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 03. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 04. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 05. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 06. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 07. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 08. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 09. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 10. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 11. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 12. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 13. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 14. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 15. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 16. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 17. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 18. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 19. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 20. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 21. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 22. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Budapest 23. ker.",
      "megye": "főváros"
    },
    {
      "nev": "Bugac",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bugacpusztaháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Bugyi",
      "megye": "Pest"
    },
    {
      "nev": "Buj",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Buják",
      "megye": "Nógrád"
    },
    {
      "nev": "Buzsák",
      "megye": "Somogy"
    },
    {
      "nev": "Bük",
      "megye": "Vas"
    },
    {
      "nev": "Bükkábrány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bükkaranyos",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bükkmogyorósd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bükkösd",
      "megye": "Baranya"
    },
    {
      "nev": "Bükkszék",
      "megye": "Heves"
    },
    {
      "nev": "Bükkszenterzsébet",
      "megye": "Heves"
    },
    {
      "nev": "Bükkszentkereszt",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bükkszentmárton",
      "megye": "Heves"
    },
    {
      "nev": "Bükkzsérc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Bürüs",
      "megye": "Baranya"
    },
    {
      "nev": "Büssü",
      "megye": "Somogy"
    },
    {
      "nev": "Büttös",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Cák",
      "megye": "Vas"
    },
    {
      "nev": "Cakóháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Cece",
      "megye": "Fejér"
    },
    {
      "nev": "Cégénydányád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Cegléd",
      "megye": "Pest"
    },
    {
      "nev": "Ceglédbercel",
      "megye": "Pest"
    },
    {
      "nev": "Celldömölk",
      "megye": "Vas"
    },
    {
      "nev": "Cered",
      "megye": "Nógrád"
    },
    {
      "nev": "Chernelházadamonya",
      "megye": "Vas"
    },
    {
      "nev": "Cibakháza",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Cigánd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Cikó",
      "megye": "Tolna"
    },
    {
      "nev": "Cirák",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Cún",
      "megye": "Baranya"
    },
    {
      "nev": "Csabacsűd",
      "megye": "Békés"
    },
    {
      "nev": "Csabaszabadi",
      "megye": "Békés"
    },
    {
      "nev": "Csabdi",
      "megye": "Fejér"
    },
    {
      "nev": "Csabrendek",
      "megye": "Veszprém"
    },
    {
      "nev": "Csáfordjánosfa",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Csaholc",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csajág",
      "megye": "Veszprém"
    },
    {
      "nev": "Csákány",
      "megye": "Somogy"
    },
    {
      "nev": "Csákánydoroszló",
      "megye": "Vas"
    },
    {
      "nev": "Csákberény",
      "megye": "Fejér"
    },
    {
      "nev": "Csákvár",
      "megye": "Fejér"
    },
    {
      "nev": "Csanádalberti",
      "megye": "Csongrád"
    },
    {
      "nev": "Csanádapáca",
      "megye": "Békés"
    },
    {
      "nev": "Csanádpalota",
      "megye": "Csongrád"
    },
    {
      "nev": "Csánig",
      "megye": "Vas"
    },
    {
      "nev": "Csány",
      "megye": "Heves"
    },
    {
      "nev": "Csányoszró",
      "megye": "Baranya"
    },
    {
      "nev": "Csanytelek",
      "megye": "Csongrád"
    },
    {
      "nev": "Csapi",
      "megye": "Zala"
    },
    {
      "nev": "Csapod",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Csárdaszállás",
      "megye": "Békés"
    },
    {
      "nev": "Csarnóta",
      "megye": "Baranya"
    },
    {
      "nev": "Csaroda",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Császár",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Császártöltés",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Császló",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csátalja",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Csatár",
      "megye": "Zala"
    },
    {
      "nev": "Csataszög",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Csatka",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Csávoly",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Csebény",
      "megye": "Baranya"
    },
    {
      "nev": "Csécse",
      "megye": "Nógrád"
    },
    {
      "nev": "Csegöld",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csehbánya",
      "megye": "Veszprém"
    },
    {
      "nev": "Csehi",
      "megye": "Vas"
    },
    {
      "nev": "Csehimindszent",
      "megye": "Vas"
    },
    {
      "nev": "Csém",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Csemő",
      "megye": "Pest"
    },
    {
      "nev": "Csempeszkopács",
      "megye": "Vas"
    },
    {
      "nev": "Csengele",
      "megye": "Csongrád"
    },
    {
      "nev": "Csenger",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csengersima",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csengerújfalu",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Csengőd",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Csénye",
      "megye": "Vas"
    },
    {
      "nev": "Csenyéte",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Csép",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Csépa",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Csepreg",
      "megye": "Vas"
    },
    {
      "nev": "Csér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Cserdi",
      "megye": "Baranya"
    },
    {
      "nev": "Cserénfa",
      "megye": "Somogy"
    },
    {
      "nev": "Cserépfalu",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Cserépváralja",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Cserháthaláp",
      "megye": "Nógrád"
    },
    {
      "nev": "Cserhátsurány",
      "megye": "Nógrád"
    },
    {
      "nev": "Cserhátszentiván",
      "megye": "Nógrád"
    },
    {
      "nev": "Cserkeszőlő",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Cserkút",
      "megye": "Baranya"
    },
    {
      "nev": "Csernely",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Cserszegtomaj",
      "megye": "Zala"
    },
    {
      "nev": "Csertalakos",
      "megye": "Zala"
    },
    {
      "nev": "Csertő",
      "megye": "Baranya"
    },
    {
      "nev": "Csesznek",
      "megye": "Veszprém"
    },
    {
      "nev": "Csesztreg",
      "megye": "Zala"
    },
    {
      "nev": "Csesztve",
      "megye": "Nógrád"
    },
    {
      "nev": "Csetény",
      "megye": "Veszprém"
    },
    {
      "nev": "Csévharaszt",
      "megye": "Pest"
    },
    {
      "nev": "Csibrák",
      "megye": "Tolna"
    },
    {
      "nev": "Csikéria",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Csikóstőttős",
      "megye": "Tolna"
    },
    {
      "nev": "Csikvánd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Csincse",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Csipkerek",
      "megye": "Vas"
    },
    {
      "nev": "Csitár",
      "megye": "Nógrád"
    },
    {
      "nev": "Csobád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Csobaj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Csobánka",
      "megye": "Pest"
    },
    {
      "nev": "Csókakő",
      "megye": "Fejér"
    },
    {
      "nev": "Csokonyavisonta",
      "megye": "Somogy"
    },
    {
      "nev": "Csokvaomány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Csolnok",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Csólyospálos",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Csoma",
      "megye": "Somogy"
    },
    {
      "nev": "Csomád",
      "megye": "Pest"
    },
    {
      "nev": "Csombárd",
      "megye": "Somogy"
    },
    {
      "nev": "Csongrád",
      "megye": "Csongrád"
    },
    {
      "nev": "Csonkahegyhát",
      "megye": "Zala"
    },
    {
      "nev": "Csonkamindszent",
      "megye": "Baranya"
    },
    {
      "nev": "Csopak",
      "megye": "Veszprém"
    },
    {
      "nev": "Csór",
      "megye": "Fejér"
    },
    {
      "nev": "Csorna",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Csorvás",
      "megye": "Békés"
    },
    {
      "nev": "Csót",
      "megye": "Veszprém"
    },
    {
      "nev": "Csöde",
      "megye": "Zala"
    },
    {
      "nev": "Csögle",
      "megye": "Veszprém"
    },
    {
      "nev": "Csökmő",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Csököly",
      "megye": "Somogy"
    },
    {
      "nev": "Csömend",
      "megye": "Somogy"
    },
    {
      "nev": "Csömödér",
      "megye": "Zala"
    },
    {
      "nev": "Csömör",
      "megye": "Pest"
    },
    {
      "nev": "Csönge",
      "megye": "Vas"
    },
    {
      "nev": "Csörnyeföld",
      "megye": "Zala"
    },
    {
      "nev": "Csörög",
      "megye": "Pest"
    },
    {
      "nev": "Csörötnek",
      "megye": "Vas"
    },
    {
      "nev": "Csősz",
      "megye": "Fejér"
    },
    {
      "nev": "Csővár",
      "megye": "Pest"
    },
    {
      "nev": "Csurgó",
      "megye": "Somogy"
    },
    {
      "nev": "Csurgónagymarton",
      "megye": "Somogy"
    },
    {
      "nev": "Dabas",
      "megye": "Pest"
    },
    {
      "nev": "Dabronc",
      "megye": "Veszprém"
    },
    {
      "nev": "Dabrony",
      "megye": "Veszprém"
    },
    {
      "nev": "Dad",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dág",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dáka",
      "megye": "Veszprém"
    },
    {
      "nev": "Dalmand",
      "megye": "Tolna"
    },
    {
      "nev": "Damak",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Dámóc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Dánszentmiklós",
      "megye": "Pest"
    },
    {
      "nev": "Dány",
      "megye": "Pest"
    },
    {
      "nev": "Daraboshegy",
      "megye": "Vas"
    },
    {
      "nev": "Darány",
      "megye": "Somogy"
    },
    {
      "nev": "Darnó",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Darnózseli",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Daruszentmiklós",
      "megye": "Fejér"
    },
    {
      "nev": "Darvas",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Dávod",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Debercsény",
      "megye": "Nógrád"
    },
    {
      "nev": "Debrecen",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Debréte",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Decs",
      "megye": "Tolna"
    },
    {
      "nev": "Dédestapolcsány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Dég",
      "megye": "Fejér"
    },
    {
      "nev": "Dejtár",
      "megye": "Nógrád"
    },
    {
      "nev": "Délegyháza",
      "megye": "Pest"
    },
    {
      "nev": "Demecser",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Demjén",
      "megye": "Heves"
    },
    {
      "nev": "Dencsháza",
      "megye": "Baranya"
    },
    {
      "nev": "Dénesfa",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Derecske",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Derekegyház",
      "megye": "Csongrád"
    },
    {
      "nev": "Deszk",
      "megye": "Csongrád"
    },
    {
      "nev": "Detek",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Detk",
      "megye": "Heves"
    },
    {
      "nev": "Dévaványa",
      "megye": "Békés"
    },
    {
      "nev": "Devecser",
      "megye": "Veszprém"
    },
    {
      "nev": "Dinnyeberki",
      "megye": "Baranya"
    },
    {
      "nev": "Diósberény",
      "megye": "Tolna"
    },
    {
      "nev": "Diósd",
      "megye": "Pest"
    },
    {
      "nev": "Diósjenő",
      "megye": "Nógrád"
    },
    {
      "nev": "Dióskál",
      "megye": "Zala"
    },
    {
      "nev": "Diósviszló",
      "megye": "Baranya"
    },
    {
      "nev": "Doba",
      "megye": "Veszprém"
    },
    {
      "nev": "Doboz",
      "megye": "Békés"
    },
    {
      "nev": "Dobri",
      "megye": "Zala"
    },
    {
      "nev": "Dobronhegy",
      "megye": "Zala"
    },
    {
      "nev": "Dóc",
      "megye": "Csongrád"
    },
    {
      "nev": "Domaháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Domaszék",
      "megye": "Csongrád"
    },
    {
      "nev": "Dombegyház",
      "megye": "Békés"
    },
    {
      "nev": "Dombiratos",
      "megye": "Békés"
    },
    {
      "nev": "Dombóvár",
      "megye": "Tolna"
    },
    {
      "nev": "Dombrád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Domony",
      "megye": "Pest"
    },
    {
      "nev": "Domoszló",
      "megye": "Heves"
    },
    {
      "nev": "Dormánd",
      "megye": "Heves"
    },
    {
      "nev": "Dorog",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dorogháza",
      "megye": "Nógrád"
    },
    {
      "nev": "Dozmat",
      "megye": "Vas"
    },
    {
      "nev": "Döbörhegy",
      "megye": "Vas"
    },
    {
      "nev": "Döbröce",
      "megye": "Zala"
    },
    {
      "nev": "Döbrököz",
      "megye": "Tolna"
    },
    {
      "nev": "Döbrönte",
      "megye": "Veszprém"
    },
    {
      "nev": "Döge",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Dömös",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dömsöd",
      "megye": "Pest"
    },
    {
      "nev": "Dör",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dörgicse",
      "megye": "Veszprém"
    },
    {
      "nev": "Döröske",
      "megye": "Vas"
    },
    {
      "nev": "Dötk",
      "megye": "Zala"
    },
    {
      "nev": "Dövény",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Drágszél",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Drávacsehi",
      "megye": "Baranya"
    },
    {
      "nev": "Drávacsepely",
      "megye": "Baranya"
    },
    {
      "nev": "Drávafok",
      "megye": "Baranya"
    },
    {
      "nev": "Drávagárdony",
      "megye": "Somogy"
    },
    {
      "nev": "Drávaiványi",
      "megye": "Baranya"
    },
    {
      "nev": "Drávakeresztúr",
      "megye": "Baranya"
    },
    {
      "nev": "Drávapalkonya",
      "megye": "Baranya"
    },
    {
      "nev": "Drávapiski",
      "megye": "Baranya"
    },
    {
      "nev": "Drávaszabolcs",
      "megye": "Baranya"
    },
    {
      "nev": "Drávaszerdahely",
      "megye": "Baranya"
    },
    {
      "nev": "Drávasztára",
      "megye": "Baranya"
    },
    {
      "nev": "Drávatamási",
      "megye": "Somogy"
    },
    {
      "nev": "Drégelypalánk",
      "megye": "Nógrád"
    },
    {
      "nev": "Dubicsány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Dudar",
      "megye": "Veszprém"
    },
    {
      "nev": "Duka",
      "megye": "Vas"
    },
    {
      "nev": "Dunaalmás",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dunabogdány",
      "megye": "Pest"
    },
    {
      "nev": "Dunaegyháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dunafalva",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dunaföldvár",
      "megye": "Tolna"
    },
    {
      "nev": "Dunaharaszti",
      "megye": "Pest"
    },
    {
      "nev": "Dunakeszi",
      "megye": "Pest"
    },
    {
      "nev": "Dunakiliti",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dunapataj",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dunaremete",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dunaszeg",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dunaszekcső",
      "megye": "Baranya"
    },
    {
      "nev": "Dunaszentbenedek",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dunaszentgyörgy",
      "megye": "Tolna"
    },
    {
      "nev": "Dunaszentmiklós",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Dunaszentpál",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dunasziget",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Dunatetétlen",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dunaújváros",
      "megye": "Fejér"
    },
    {
      "nev": "Dunavarsány",
      "megye": "Pest"
    },
    {
      "nev": "Dunavecse",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dusnok",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Dúzs",
      "megye": "Tolna"
    },
    {
      "nev": "Ebergőc",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ebes",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Écs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ecséd",
      "megye": "Heves"
    },
    {
      "nev": "Ecseg",
      "megye": "Nógrád"
    },
    {
      "nev": "Ecsegfalva",
      "megye": "Békés"
    },
    {
      "nev": "Ecseny",
      "megye": "Somogy"
    },
    {
      "nev": "Ecser",
      "megye": "Pest"
    },
    {
      "nev": "Edde",
      "megye": "Somogy"
    },
    {
      "nev": "Edelény",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Edve",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Eger",
      "megye": "Heves"
    },
    {
      "nev": "Egerág",
      "megye": "Baranya"
    },
    {
      "nev": "Egeralja",
      "megye": "Veszprém"
    },
    {
      "nev": "Egeraracsa",
      "megye": "Zala"
    },
    {
      "nev": "Egerbakta",
      "megye": "Heves"
    },
    {
      "nev": "Egerbocs",
      "megye": "Heves"
    },
    {
      "nev": "Egercsehi",
      "megye": "Heves"
    },
    {
      "nev": "Egerfarmos",
      "megye": "Heves"
    },
    {
      "nev": "Egerlövő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Egerszalók",
      "megye": "Heves"
    },
    {
      "nev": "Egerszólát",
      "megye": "Heves"
    },
    {
      "nev": "Égerszög",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Egervár",
      "megye": "Zala"
    },
    {
      "nev": "Egervölgy",
      "megye": "Vas"
    },
    {
      "nev": "Egyed",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Egyek",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Egyházasdengeleg",
      "megye": "Nógrád"
    },
    {
      "nev": "Egyházasfalu",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Egyházasgerge",
      "megye": "Nógrád"
    },
    {
      "nev": "Egyházasharaszti",
      "megye": "Baranya"
    },
    {
      "nev": "Egyházashetye",
      "megye": "Vas"
    },
    {
      "nev": "Egyházashollós",
      "megye": "Vas"
    },
    {
      "nev": "Egyházaskesző",
      "megye": "Veszprém"
    },
    {
      "nev": "Egyházaskozár",
      "megye": "Baranya"
    },
    {
      "nev": "Egyházasrádóc",
      "megye": "Vas"
    },
    {
      "nev": "Elek",
      "megye": "Békés"
    },
    {
      "nev": "Ellend",
      "megye": "Baranya"
    },
    {
      "nev": "Előszállás",
      "megye": "Fejér"
    },
    {
      "nev": "Emőd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Encs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Encsencs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Endrefalva",
      "megye": "Nógrád"
    },
    {
      "nev": "Endrőc",
      "megye": "Baranya"
    },
    {
      "nev": "Enese",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Enying",
      "megye": "Fejér"
    },
    {
      "nev": "Eperjes",
      "megye": "Csongrád"
    },
    {
      "nev": "Eperjeske",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Eplény",
      "megye": "Veszprém"
    },
    {
      "nev": "Epöl",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Ercsi",
      "megye": "Fejér"
    },
    {
      "nev": "Érd",
      "megye": "Pest"
    },
    {
      "nev": "Erdőbénye",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Erdőhorváti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Erdőkertes",
      "megye": "Pest"
    },
    {
      "nev": "Erdőkövesd",
      "megye": "Heves"
    },
    {
      "nev": "Erdőkürt",
      "megye": "Nógrád"
    },
    {
      "nev": "Erdősmárok",
      "megye": "Baranya"
    },
    {
      "nev": "Erdősmecske",
      "megye": "Baranya"
    },
    {
      "nev": "Erdőtarcsa",
      "megye": "Nógrád"
    },
    {
      "nev": "Erdőtelek",
      "megye": "Heves"
    },
    {
      "nev": "Erk",
      "megye": "Heves"
    },
    {
      "nev": "Érpatak",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Érsekcsanád",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Érsekhalma",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Érsekvadkert",
      "megye": "Nógrád"
    },
    {
      "nev": "Értény",
      "megye": "Tolna"
    },
    {
      "nev": "Erzsébet",
      "megye": "Baranya"
    },
    {
      "nev": "Esztár",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Eszteregnye",
      "megye": "Zala"
    },
    {
      "nev": "Esztergályhorváti",
      "megye": "Zala"
    },
    {
      "nev": "Esztergom",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Ete",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Etes",
      "megye": "Nógrád"
    },
    {
      "nev": "Etyek",
      "megye": "Fejér"
    },
    {
      "nev": "Fábiánháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Fábiánsebestyén",
      "megye": "Csongrád"
    },
    {
      "nev": "Fácánkert",
      "megye": "Tolna"
    },
    {
      "nev": "Fadd",
      "megye": "Tolna"
    },
    {
      "nev": "Fáj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Fajsz",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Fancsal",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Farád",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Farkasgyepű",
      "megye": "Veszprém"
    },
    {
      "nev": "Farkaslyuk",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Farmos",
      "megye": "Pest"
    },
    {
      "nev": "Fazekasboda",
      "megye": "Baranya"
    },
    {
      "nev": "Fedémes",
      "megye": "Heves"
    },
    {
      "nev": "Fegyvernek",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Fehérgyarmat",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Fehértó",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fehérvárcsurgó",
      "megye": "Fejér"
    },
    {
      "nev": "Feked",
      "megye": "Baranya"
    },
    {
      "nev": "Feketeerdő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Felcsút",
      "megye": "Fejér"
    },
    {
      "nev": "Feldebrő",
      "megye": "Heves"
    },
    {
      "nev": "Felgyő",
      "megye": "Csongrád"
    },
    {
      "nev": "Felpéc",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Felsőberecki",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőcsatár",
      "megye": "Vas"
    },
    {
      "nev": "Felsődobsza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőegerszeg",
      "megye": "Baranya"
    },
    {
      "nev": "Felsőgagy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőjánosfa",
      "megye": "Vas"
    },
    {
      "nev": "Felsőkelecsény",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőlajos",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Felsőmarác",
      "megye": "Vas"
    },
    {
      "nev": "Felsőmocsolád",
      "megye": "Somogy"
    },
    {
      "nev": "Felsőnána",
      "megye": "Tolna"
    },
    {
      "nev": "Felsőnyárád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőnyék",
      "megye": "Tolna"
    },
    {
      "nev": "Felsőörs",
      "megye": "Veszprém"
    },
    {
      "nev": "Felsőpáhok",
      "megye": "Zala"
    },
    {
      "nev": "Felsőpakony",
      "megye": "Pest"
    },
    {
      "nev": "Felsőpetény",
      "megye": "Nógrád"
    },
    {
      "nev": "Felsőrajk",
      "megye": "Zala"
    },
    {
      "nev": "Felsőregmec",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőszenterzsébet",
      "megye": "Zala"
    },
    {
      "nev": "Felsőszentiván",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Felsőszentmárton",
      "megye": "Baranya"
    },
    {
      "nev": "Felsőszölnök",
      "megye": "Vas"
    },
    {
      "nev": "Felsőtárkány",
      "megye": "Heves"
    },
    {
      "nev": "Felsőtelekes",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőtold",
      "megye": "Nógrád"
    },
    {
      "nev": "Felsővadász",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Felsőzsolca",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Fényeslitke",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Fenyőfő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ferencszállás",
      "megye": "Csongrád"
    },
    {
      "nev": "Fertőboz",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőendréd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőhomok",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőrákos",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőszentmiklós",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fertőszéplak",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Fiad",
      "megye": "Somogy"
    },
    {
      "nev": "Filkeháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Fityeház",
      "megye": "Zala"
    },
    {
      "nev": "Foktő",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Folyás",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Fonó",
      "megye": "Somogy"
    },
    {
      "nev": "Fony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Fonyód",
      "megye": "Somogy"
    },
    {
      "nev": "Forráskút",
      "megye": "Csongrád"
    },
    {
      "nev": "Forró",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Fót",
      "megye": "Pest"
    },
    {
      "nev": "Földeák",
      "megye": "Csongrád"
    },
    {
      "nev": "Földes",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Főnyed",
      "megye": "Somogy"
    },
    {
      "nev": "Fulókércs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Furta",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Füle",
      "megye": "Fejér"
    },
    {
      "nev": "Fülesd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Fülöp",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Fülöpháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Fülöpjakab",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Fülöpszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Fülpösdaróc",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Fürged",
      "megye": "Tolna"
    },
    {
      "nev": "Füzér",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Füzérkajata",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Füzérkomlós",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Füzérradvány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Füzesabony",
      "megye": "Heves"
    },
    {
      "nev": "Füzesgyarmat",
      "megye": "Békés"
    },
    {
      "nev": "Fűzvölgy",
      "megye": "Zala"
    },
    {
      "nev": "Gáborján",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Gáborjánháza",
      "megye": "Zala"
    },
    {
      "nev": "Gacsály",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gadács",
      "megye": "Somogy"
    },
    {
      "nev": "Gadány",
      "megye": "Somogy"
    },
    {
      "nev": "Gadna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gádoros",
      "megye": "Békés"
    },
    {
      "nev": "Gagyapáti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gagybátor",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gagyvendégi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Galambok",
      "megye": "Zala"
    },
    {
      "nev": "Galgaguta",
      "megye": "Nógrád"
    },
    {
      "nev": "Galgagyörk",
      "megye": "Pest"
    },
    {
      "nev": "Galgahévíz",
      "megye": "Pest"
    },
    {
      "nev": "Galgamácsa",
      "megye": "Pest"
    },
    {
      "nev": "Gálosfa",
      "megye": "Somogy"
    },
    {
      "nev": "Galvács",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gamás",
      "megye": "Somogy"
    },
    {
      "nev": "Ganna",
      "megye": "Veszprém"
    },
    {
      "nev": "Gánt",
      "megye": "Fejér"
    },
    {
      "nev": "Gara",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Garáb",
      "megye": "Nógrád"
    },
    {
      "nev": "Garabonc",
      "megye": "Zala"
    },
    {
      "nev": "Garadna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Garbolc",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gárdony",
      "megye": "Fejér"
    },
    {
      "nev": "Garé",
      "megye": "Baranya"
    },
    {
      "nev": "Gasztony",
      "megye": "Vas"
    },
    {
      "nev": "Gátér",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Gávavencsellő",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Géberjén",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gecse",
      "megye": "Veszprém"
    },
    {
      "nev": "Géderlak",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Gégény",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gelej",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gelénes",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gellénháza",
      "megye": "Zala"
    },
    {
      "nev": "Gelse",
      "megye": "Zala"
    },
    {
      "nev": "Gelsesziget",
      "megye": "Zala"
    },
    {
      "nev": "Gemzse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gencsapáti",
      "megye": "Vas"
    },
    {
      "nev": "Gérce",
      "megye": "Vas"
    },
    {
      "nev": "Gerde",
      "megye": "Baranya"
    },
    {
      "nev": "Gerendás",
      "megye": "Békés"
    },
    {
      "nev": "Gerényes",
      "megye": "Baranya"
    },
    {
      "nev": "Geresdlak",
      "megye": "Baranya"
    },
    {
      "nev": "Gerjen",
      "megye": "Tolna"
    },
    {
      "nev": "Gersekarát",
      "megye": "Vas"
    },
    {
      "nev": "Geszt",
      "megye": "Békés"
    },
    {
      "nev": "Gesztely",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Geszteréd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gétye",
      "megye": "Zala"
    },
    {
      "nev": "Gibárt",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gic",
      "megye": "Veszprém"
    },
    {
      "nev": "Gige",
      "megye": "Somogy"
    },
    {
      "nev": "Gilvánfa",
      "megye": "Baranya"
    },
    {
      "nev": "Girincs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gógánfa",
      "megye": "Veszprém"
    },
    {
      "nev": "Golop",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gomba",
      "megye": "Pest"
    },
    {
      "nev": "Gombosszeg",
      "megye": "Zala"
    },
    {
      "nev": "Gór",
      "megye": "Vas"
    },
    {
      "nev": "Gordisa",
      "megye": "Baranya"
    },
    {
      "nev": "Gosztola",
      "megye": "Zala"
    },
    {
      "nev": "Göd",
      "megye": "Pest"
    },
    {
      "nev": "Gödöllő",
      "megye": "Pest"
    },
    {
      "nev": "Gödre",
      "megye": "Baranya"
    },
    {
      "nev": "Gölle",
      "megye": "Somogy"
    },
    {
      "nev": "Gömörszőlős",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gönc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Göncruszka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Gönyű",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Görbeháza",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Görcsöny",
      "megye": "Baranya"
    },
    {
      "nev": "Görcsönydoboka",
      "megye": "Baranya"
    },
    {
      "nev": "Görgeteg",
      "megye": "Somogy"
    },
    {
      "nev": "Gősfa",
      "megye": "Zala"
    },
    {
      "nev": "Grábóc",
      "megye": "Tolna"
    },
    {
      "nev": "Gulács",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gutorfölde",
      "megye": "Zala"
    },
    {
      "nev": "Gyál",
      "megye": "Pest"
    },
    {
      "nev": "Gyalóka",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Gyanógeregye",
      "megye": "Vas"
    },
    {
      "nev": "Gyarmat",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Gyékényes",
      "megye": "Somogy"
    },
    {
      "nev": "Gyenesdiás",
      "megye": "Zala"
    },
    {
      "nev": "Gyepükaján",
      "megye": "Veszprém"
    },
    {
      "nev": "Gyermely",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Gyód",
      "megye": "Baranya"
    },
    {
      "nev": "Gyomaendrőd",
      "megye": "Békés"
    },
    {
      "nev": "Gyóró",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Gyömöre",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Gyömrő",
      "megye": "Pest"
    },
    {
      "nev": "Gyöngyfa",
      "megye": "Baranya"
    },
    {
      "nev": "Gyöngyös",
      "megye": "Heves"
    },
    {
      "nev": "Gyöngyösfalu",
      "megye": "Vas"
    },
    {
      "nev": "Gyöngyöshalász",
      "megye": "Heves"
    },
    {
      "nev": "Gyöngyösmellék",
      "megye": "Baranya"
    },
    {
      "nev": "Gyöngyösoroszi",
      "megye": "Heves"
    },
    {
      "nev": "Gyöngyöspata",
      "megye": "Heves"
    },
    {
      "nev": "Gyöngyössolymos",
      "megye": "Heves"
    },
    {
      "nev": "Gyöngyöstarján",
      "megye": "Heves"
    },
    {
      "nev": "Gyönk",
      "megye": "Tolna"
    },
    {
      "nev": "Győr",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrasszonyfa",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Györe",
      "megye": "Tolna"
    },
    {
      "nev": "Györgytarló",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Györköny",
      "megye": "Tolna"
    },
    {
      "nev": "Győrladamér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győröcske",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Győrság",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrsövényház",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrszemere",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrtelek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Győrújbarát",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrújfalu",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Győrvár",
      "megye": "Vas"
    },
    {
      "nev": "Győrzámoly",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Gyugy",
      "megye": "Somogy"
    },
    {
      "nev": "Gyula",
      "megye": "Békés"
    },
    {
      "nev": "Gyulaháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gyulaj",
      "megye": "Tolna"
    },
    {
      "nev": "Gyulakeszi",
      "megye": "Veszprém"
    },
    {
      "nev": "Gyúró",
      "megye": "Fejér"
    },
    {
      "nev": "Gyügye",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gyüre",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Gyűrűs",
      "megye": "Zala"
    },
    {
      "nev": "Hács",
      "megye": "Somogy"
    },
    {
      "nev": "Hagyárosbörönd",
      "megye": "Zala"
    },
    {
      "nev": "Hahót",
      "megye": "Zala"
    },
    {
      "nev": "Hajdúbagos",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúböszörmény",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúdorog",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúhadház",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúnánás",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúsámson",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúszoboszló",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajdúszovát",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hajmás",
      "megye": "Somogy"
    },
    {
      "nev": "Hajmáskér",
      "megye": "Veszprém"
    },
    {
      "nev": "Hajós",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Halastó",
      "megye": "Vas"
    },
    {
      "nev": "Halászi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Halásztelek",
      "megye": "Pest"
    },
    {
      "nev": "Halimba",
      "megye": "Veszprém"
    },
    {
      "nev": "Halmaj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Halmajugra",
      "megye": "Heves"
    },
    {
      "nev": "Halogy",
      "megye": "Vas"
    },
    {
      "nev": "Hangács",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hangony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hantos",
      "megye": "Fejér"
    },
    {
      "nev": "Harasztifalu",
      "megye": "Vas"
    },
    {
      "nev": "Harc",
      "megye": "Tolna"
    },
    {
      "nev": "Harka",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Harkakötöny",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Harkány",
      "megye": "Baranya"
    },
    {
      "nev": "Háromfa",
      "megye": "Somogy"
    },
    {
      "nev": "Háromhuta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Harsány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hárskút",
      "megye": "Veszprém"
    },
    {
      "nev": "Harta",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Hásságy",
      "megye": "Baranya"
    },
    {
      "nev": "Hatvan",
      "megye": "Heves"
    },
    {
      "nev": "Hédervár",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hedrehely",
      "megye": "Somogy"
    },
    {
      "nev": "Hegyesd",
      "megye": "Veszprém"
    },
    {
      "nev": "Hegyeshalom",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hegyfalu",
      "megye": "Vas"
    },
    {
      "nev": "Hegyháthodász",
      "megye": "Vas"
    },
    {
      "nev": "Hegyhátmaróc",
      "megye": "Baranya"
    },
    {
      "nev": "Hegyhátsál",
      "megye": "Vas"
    },
    {
      "nev": "Hegyhátszentjakab",
      "megye": "Vas"
    },
    {
      "nev": "Hegyhátszentmárton",
      "megye": "Vas"
    },
    {
      "nev": "Hegyhátszentpéter",
      "megye": "Vas"
    },
    {
      "nev": "Hegykő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hegymagas",
      "megye": "Veszprém"
    },
    {
      "nev": "Hegymeg",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hegyszentmárton",
      "megye": "Baranya"
    },
    {
      "nev": "Héhalom",
      "megye": "Nógrád"
    },
    {
      "nev": "Hejce",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hejőbába",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hejőkeresztúr",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hejőkürt",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hejőpapi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hejőszalonta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Helesfa",
      "megye": "Baranya"
    },
    {
      "nev": "Helvécia",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Hencida",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hencse",
      "megye": "Somogy"
    },
    {
      "nev": "Herceghalom",
      "megye": "Pest"
    },
    {
      "nev": "Hercegkút",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hercegszántó",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Heréd",
      "megye": "Heves"
    },
    {
      "nev": "Héreg",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Herencsény",
      "megye": "Nógrád"
    },
    {
      "nev": "Herend",
      "megye": "Veszprém"
    },
    {
      "nev": "Heresznye",
      "megye": "Somogy"
    },
    {
      "nev": "Hermánszeg",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Hernád",
      "megye": "Pest"
    },
    {
      "nev": "Hernádbűd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádcéce",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádkak",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádkércs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádnémeti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádpetri",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádszentandrás",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádszurdok",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernádvécse",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hernyék",
      "megye": "Zala"
    },
    {
      "nev": "Hét",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hetefejércse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Hetes",
      "megye": "Somogy"
    },
    {
      "nev": "Hetvehely",
      "megye": "Baranya"
    },
    {
      "nev": "Hetyefő",
      "megye": "Veszprém"
    },
    {
      "nev": "Heves",
      "megye": "Heves"
    },
    {
      "nev": "Hevesaranyos",
      "megye": "Heves"
    },
    {
      "nev": "Hevesvezekény",
      "megye": "Heves"
    },
    {
      "nev": "Hévíz",
      "megye": "Zala"
    },
    {
      "nev": "Hévízgyörk",
      "megye": "Pest"
    },
    {
      "nev": "Hidas",
      "megye": "Baranya"
    },
    {
      "nev": "Hidasnémeti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hidegkút",
      "megye": "Veszprém"
    },
    {
      "nev": "Hidegség",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hidvégardó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Himesháza",
      "megye": "Baranya"
    },
    {
      "nev": "Himod",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hirics",
      "megye": "Baranya"
    },
    {
      "nev": "Hobol",
      "megye": "Baranya"
    },
    {
      "nev": "Hodász",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Hódmezővásárhely",
      "megye": "Csongrád"
    },
    {
      "nev": "Hollád",
      "megye": "Somogy"
    },
    {
      "nev": "Hollóháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hollókő",
      "megye": "Nógrád"
    },
    {
      "nev": "Homokbödöge",
      "megye": "Veszprém"
    },
    {
      "nev": "Homokkomárom",
      "megye": "Zala"
    },
    {
      "nev": "Homokmégy",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Homokszentgyörgy",
      "megye": "Somogy"
    },
    {
      "nev": "Homorúd",
      "megye": "Baranya"
    },
    {
      "nev": "Homrogd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Hont",
      "megye": "Nógrád"
    },
    {
      "nev": "Horpács",
      "megye": "Nógrád"
    },
    {
      "nev": "Hort",
      "megye": "Heves"
    },
    {
      "nev": "Hortobágy",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Horváthertelend",
      "megye": "Baranya"
    },
    {
      "nev": "Horvátlövő",
      "megye": "Vas"
    },
    {
      "nev": "Horvátzsidány",
      "megye": "Vas"
    },
    {
      "nev": "Hosszúhetény",
      "megye": "Baranya"
    },
    {
      "nev": "Hosszúpályi",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Hosszúpereszteg",
      "megye": "Vas"
    },
    {
      "nev": "Hosszúvíz",
      "megye": "Somogy"
    },
    {
      "nev": "Hosszúvölgy",
      "megye": "Zala"
    },
    {
      "nev": "Hosztót",
      "megye": "Veszprém"
    },
    {
      "nev": "Hottó",
      "megye": "Zala"
    },
    {
      "nev": "Hőgyész",
      "megye": "Tolna"
    },
    {
      "nev": "Hövej",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Hugyag",
      "megye": "Nógrád"
    },
    {
      "nev": "Hunya",
      "megye": "Békés"
    },
    {
      "nev": "Hunyadfalva",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Husztót",
      "megye": "Baranya"
    },
    {
      "nev": "Ibafa",
      "megye": "Baranya"
    },
    {
      "nev": "Iborfia",
      "megye": "Zala"
    },
    {
      "nev": "Ibrány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Igal",
      "megye": "Somogy"
    },
    {
      "nev": "Igar",
      "megye": "Fejér"
    },
    {
      "nev": "Igrici",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Iharos",
      "megye": "Somogy"
    },
    {
      "nev": "Iharosberény",
      "megye": "Somogy"
    },
    {
      "nev": "Ikervár",
      "megye": "Vas"
    },
    {
      "nev": "Iklad",
      "megye": "Pest"
    },
    {
      "nev": "Iklanberény",
      "megye": "Vas"
    },
    {
      "nev": "Iklódbördőce",
      "megye": "Zala"
    },
    {
      "nev": "Ikrény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Iliny",
      "megye": "Nógrád"
    },
    {
      "nev": "Ilk",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Illocska",
      "megye": "Baranya"
    },
    {
      "nev": "Imola",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Imrehegy",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Ináncs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Inárcs",
      "megye": "Pest"
    },
    {
      "nev": "Inke",
      "megye": "Somogy"
    },
    {
      "nev": "Ipacsfa",
      "megye": "Baranya"
    },
    {
      "nev": "Ipolydamásd",
      "megye": "Pest"
    },
    {
      "nev": "Ipolyszög",
      "megye": "Nógrád"
    },
    {
      "nev": "Ipolytarnóc",
      "megye": "Nógrád"
    },
    {
      "nev": "Ipolytölgyes",
      "megye": "Pest"
    },
    {
      "nev": "Ipolyvece",
      "megye": "Nógrád"
    },
    {
      "nev": "Iregszemcse",
      "megye": "Tolna"
    },
    {
      "nev": "Irota",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Isaszeg",
      "megye": "Pest"
    },
    {
      "nev": "Ispánk",
      "megye": "Vas"
    },
    {
      "nev": "Istenmezeje",
      "megye": "Heves"
    },
    {
      "nev": "Istvándi",
      "megye": "Somogy"
    },
    {
      "nev": "Iszkaszentgyörgy",
      "megye": "Fejér"
    },
    {
      "nev": "Iszkáz",
      "megye": "Veszprém"
    },
    {
      "nev": "Isztimér",
      "megye": "Fejér"
    },
    {
      "nev": "Ivád",
      "megye": "Heves"
    },
    {
      "nev": "Iván",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ivánbattyán",
      "megye": "Baranya"
    },
    {
      "nev": "Ivánc",
      "megye": "Vas"
    },
    {
      "nev": "Iváncsa",
      "megye": "Fejér"
    },
    {
      "nev": "Ivándárda",
      "megye": "Baranya"
    },
    {
      "nev": "Izmény",
      "megye": "Tolna"
    },
    {
      "nev": "Izsák",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Izsófalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Jágónak",
      "megye": "Tolna"
    },
    {
      "nev": "Ják",
      "megye": "Vas"
    },
    {
      "nev": "Jakabszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Jákfa",
      "megye": "Vas"
    },
    {
      "nev": "Jákfalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Jákó",
      "megye": "Somogy"
    },
    {
      "nev": "Jánd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Jánkmajtis",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Jánoshalma",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Jánosháza",
      "megye": "Vas"
    },
    {
      "nev": "Jánoshida",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jánossomorja",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Járdánháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Jármi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Jásd",
      "megye": "Veszprém"
    },
    {
      "nev": "Jászágó",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászalsószentgyörgy",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászapáti",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászárokszállás",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászberény",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászboldogháza",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászdózsa",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászfelsőszentgyörgy",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászfényszaru",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászivány",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászjákóhalma",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászkarajenő",
      "megye": "Pest"
    },
    {
      "nev": "Jászkisér",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászladány",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászszentandrás",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jászszentlászló",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Jásztelek",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Jéke",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Jenő",
      "megye": "Fejér"
    },
    {
      "nev": "Jobaháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Jobbágyi",
      "megye": "Nógrád"
    },
    {
      "nev": "Jósvafő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Juta",
      "megye": "Somogy"
    },
    {
      "nev": "Kaba",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Kacorlak",
      "megye": "Zala"
    },
    {
      "nev": "Kács",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kacsóta",
      "megye": "Baranya"
    },
    {
      "nev": "Kadarkút",
      "megye": "Somogy"
    },
    {
      "nev": "Kajárpéc",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kajászó",
      "megye": "Fejér"
    },
    {
      "nev": "Kajdacs",
      "megye": "Tolna"
    },
    {
      "nev": "Kakasd",
      "megye": "Tolna"
    },
    {
      "nev": "Kákics",
      "megye": "Baranya"
    },
    {
      "nev": "Kakucs",
      "megye": "Pest"
    },
    {
      "nev": "Kál",
      "megye": "Heves"
    },
    {
      "nev": "Kalaznó",
      "megye": "Tolna"
    },
    {
      "nev": "Káld",
      "megye": "Vas"
    },
    {
      "nev": "Kálló",
      "megye": "Nógrád"
    },
    {
      "nev": "Kallósd",
      "megye": "Zala"
    },
    {
      "nev": "Kállósemjén",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kálmáncsa",
      "megye": "Somogy"
    },
    {
      "nev": "Kálmánháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kálócfa",
      "megye": "Zala"
    },
    {
      "nev": "Kalocsa",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Káloz",
      "megye": "Fejér"
    },
    {
      "nev": "Kám",
      "megye": "Vas"
    },
    {
      "nev": "Kamond",
      "megye": "Veszprém"
    },
    {
      "nev": "Kamut",
      "megye": "Békés"
    },
    {
      "nev": "Kánó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kántorjánosi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kánya",
      "megye": "Somogy"
    },
    {
      "nev": "Kányavár",
      "megye": "Zala"
    },
    {
      "nev": "Kapolcs",
      "megye": "Veszprém"
    },
    {
      "nev": "Kápolna",
      "megye": "Heves"
    },
    {
      "nev": "Kápolnásnyék",
      "megye": "Fejér"
    },
    {
      "nev": "Kapoly",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposfő",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposgyarmat",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposhomok",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposkeresztúr",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposmérő",
      "megye": "Somogy"
    },
    {
      "nev": "Kapospula",
      "megye": "Tolna"
    },
    {
      "nev": "Kaposújlak",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposvár",
      "megye": "Somogy"
    },
    {
      "nev": "Kaposszekcső",
      "megye": "Tolna"
    },
    {
      "nev": "Kaposszerdahely",
      "megye": "Somogy"
    },
    {
      "nev": "Káptalanfa",
      "megye": "Veszprém"
    },
    {
      "nev": "Káptalantóti",
      "megye": "Veszprém"
    },
    {
      "nev": "Kapuvár",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kára",
      "megye": "Somogy"
    },
    {
      "nev": "Karácsond",
      "megye": "Heves"
    },
    {
      "nev": "Karád",
      "megye": "Somogy"
    },
    {
      "nev": "Karakó",
      "megye": "Vas"
    },
    {
      "nev": "Karakószörcsök",
      "megye": "Veszprém"
    },
    {
      "nev": "Karancsalja",
      "megye": "Nógrád"
    },
    {
      "nev": "Karancsberény",
      "megye": "Nógrád"
    },
    {
      "nev": "Karancskeszi",
      "megye": "Nógrád"
    },
    {
      "nev": "Karancslapujtő",
      "megye": "Nógrád"
    },
    {
      "nev": "Karancsság",
      "megye": "Nógrád"
    },
    {
      "nev": "Kárász",
      "megye": "Baranya"
    },
    {
      "nev": "Karcag",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Karcsa",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kardos",
      "megye": "Békés"
    },
    {
      "nev": "Kardoskút",
      "megye": "Békés"
    },
    {
      "nev": "Karmacs",
      "megye": "Zala"
    },
    {
      "nev": "Károlyháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Karos",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kartal",
      "megye": "Pest"
    },
    {
      "nev": "Kásád",
      "megye": "Baranya"
    },
    {
      "nev": "Kaskantyú",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kastélyosdombó",
      "megye": "Somogy"
    },
    {
      "nev": "Kaszaper",
      "megye": "Békés"
    },
    {
      "nev": "Kaszó",
      "megye": "Somogy"
    },
    {
      "nev": "Katádfa",
      "megye": "Baranya"
    },
    {
      "nev": "Katafa",
      "megye": "Vas"
    },
    {
      "nev": "Kátoly",
      "megye": "Baranya"
    },
    {
      "nev": "Katymár",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Káva",
      "megye": "Pest"
    },
    {
      "nev": "Kávás",
      "megye": "Zala"
    },
    {
      "nev": "Kazár",
      "megye": "Nógrád"
    },
    {
      "nev": "Kazincbarcika",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kázsmárk",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kazsok",
      "megye": "Somogy"
    },
    {
      "nev": "Kecel",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kecskéd",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kecskemét",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kehidakustány",
      "megye": "Zala"
    },
    {
      "nev": "Kék",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kékcse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kéked",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kékesd",
      "megye": "Baranya"
    },
    {
      "nev": "Kékkút",
      "megye": "Veszprém"
    },
    {
      "nev": "Kelebia",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Keléd",
      "megye": "Vas"
    },
    {
      "nev": "Kelemér",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kéleshalom",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kelevíz",
      "megye": "Somogy"
    },
    {
      "nev": "Kemecse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kemence",
      "megye": "Pest"
    },
    {
      "nev": "Kemendollár",
      "megye": "Zala"
    },
    {
      "nev": "Kemeneshőgyész",
      "megye": "Veszprém"
    },
    {
      "nev": "Kemeneskápolna",
      "megye": "Vas"
    },
    {
      "nev": "Kemenesmagasi",
      "megye": "Vas"
    },
    {
      "nev": "Kemenesmihályfa",
      "megye": "Vas"
    },
    {
      "nev": "Kemenespálfa",
      "megye": "Vas"
    },
    {
      "nev": "Kemenessömjén",
      "megye": "Vas"
    },
    {
      "nev": "Kemenesszentmárton",
      "megye": "Vas"
    },
    {
      "nev": "Kemenesszentpéter",
      "megye": "Veszprém"
    },
    {
      "nev": "Keménfa",
      "megye": "Zala"
    },
    {
      "nev": "Kémes",
      "megye": "Baranya"
    },
    {
      "nev": "Kemestaródfa",
      "megye": "Vas"
    },
    {
      "nev": "Kemse",
      "megye": "Baranya"
    },
    {
      "nev": "Kenderes",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kenéz",
      "megye": "Vas"
    },
    {
      "nev": "Kenézlő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kengyel",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kenyeri",
      "megye": "Vas"
    },
    {
      "nev": "Kercaszomor",
      "megye": "Vas"
    },
    {
      "nev": "Kercseliget",
      "megye": "Somogy"
    },
    {
      "nev": "Kerecsend",
      "megye": "Heves"
    },
    {
      "nev": "Kerecseny",
      "megye": "Zala"
    },
    {
      "nev": "Kerekegyháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kerekharaszt",
      "megye": "Heves"
    },
    {
      "nev": "Kereki",
      "megye": "Somogy"
    },
    {
      "nev": "Kerékteleki",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kerepes",
      "megye": "Pest"
    },
    {
      "nev": "Keresztéte",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kerkabarabás",
      "megye": "Zala"
    },
    {
      "nev": "Kerkafalva",
      "megye": "Zala"
    },
    {
      "nev": "Kerkakutas",
      "megye": "Zala"
    },
    {
      "nev": "Kerkáskápolna",
      "megye": "Vas"
    },
    {
      "nev": "Kerkaszentkirály",
      "megye": "Zala"
    },
    {
      "nev": "Kerkateskánd",
      "megye": "Zala"
    },
    {
      "nev": "Kérsemjén",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kerta",
      "megye": "Veszprém"
    },
    {
      "nev": "Kertészsziget",
      "megye": "Békés"
    },
    {
      "nev": "Keszeg",
      "megye": "Nógrád"
    },
    {
      "nev": "Kesznyéten",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Keszőhidegkút",
      "megye": "Tolna"
    },
    {
      "nev": "Keszthely",
      "megye": "Zala"
    },
    {
      "nev": "Kesztölc",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Keszü",
      "megye": "Baranya"
    },
    {
      "nev": "Kétbodony",
      "megye": "Nógrád"
    },
    {
      "nev": "Kétegyháza",
      "megye": "Békés"
    },
    {
      "nev": "Kéthely",
      "megye": "Somogy"
    },
    {
      "nev": "Kétpó",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kétsoprony",
      "megye": "Békés"
    },
    {
      "nev": "Kétújfalu",
      "megye": "Baranya"
    },
    {
      "nev": "Kétvölgy",
      "megye": "Vas"
    },
    {
      "nev": "Kéty",
      "megye": "Tolna"
    },
    {
      "nev": "Kevermes",
      "megye": "Békés"
    },
    {
      "nev": "Kilimán",
      "megye": "Zala"
    },
    {
      "nev": "Kimle",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kincsesbánya",
      "megye": "Fejér"
    },
    {
      "nev": "Királd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Királyegyháza",
      "megye": "Baranya"
    },
    {
      "nev": "Királyhegyes",
      "megye": "Csongrád"
    },
    {
      "nev": "Királyszentistván",
      "megye": "Veszprém"
    },
    {
      "nev": "Kisapáti",
      "megye": "Veszprém"
    },
    {
      "nev": "Kisapostag",
      "megye": "Fejér"
    },
    {
      "nev": "Kisar",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kisasszond",
      "megye": "Somogy"
    },
    {
      "nev": "Kisasszonyfa",
      "megye": "Baranya"
    },
    {
      "nev": "Kisbabot",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kisbágyon",
      "megye": "Nógrád"
    },
    {
      "nev": "Kisbajcs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kisbajom",
      "megye": "Somogy"
    },
    {
      "nev": "Kisbárapáti",
      "megye": "Somogy"
    },
    {
      "nev": "Kisbárkány",
      "megye": "Nógrád"
    },
    {
      "nev": "Kisbér",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kisberény",
      "megye": "Somogy"
    },
    {
      "nev": "Kisberzseny",
      "megye": "Veszprém"
    },
    {
      "nev": "Kisbeszterce",
      "megye": "Baranya"
    },
    {
      "nev": "Kisbodak",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kisbucsa",
      "megye": "Zala"
    },
    {
      "nev": "Kisbudmér",
      "megye": "Baranya"
    },
    {
      "nev": "Kiscsécs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kiscsehi",
      "megye": "Zala"
    },
    {
      "nev": "Kiscsősz",
      "megye": "Veszprém"
    },
    {
      "nev": "Kisdér",
      "megye": "Baranya"
    },
    {
      "nev": "Kisdobsza",
      "megye": "Baranya"
    },
    {
      "nev": "Kisdombegyház",
      "megye": "Békés"
    },
    {
      "nev": "Kisdorog",
      "megye": "Tolna"
    },
    {
      "nev": "Kisecset",
      "megye": "Nógrád"
    },
    {
      "nev": "Kisfalud",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kisfüzes",
      "megye": "Heves"
    },
    {
      "nev": "Kisgörbő",
      "megye": "Zala"
    },
    {
      "nev": "Kisgyalán",
      "megye": "Somogy"
    },
    {
      "nev": "Kisgyőr",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kishajmás",
      "megye": "Baranya"
    },
    {
      "nev": "Kisharsány",
      "megye": "Baranya"
    },
    {
      "nev": "Kishartyán",
      "megye": "Nógrád"
    },
    {
      "nev": "Kisherend",
      "megye": "Baranya"
    },
    {
      "nev": "Kishódos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kishuta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kisigmánd",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kisjakabfalva",
      "megye": "Baranya"
    },
    {
      "nev": "Kiskassa",
      "megye": "Baranya"
    },
    {
      "nev": "Kiskinizs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kiskorpád",
      "megye": "Somogy"
    },
    {
      "nev": "Kisköre",
      "megye": "Heves"
    },
    {
      "nev": "Kiskőrös",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kiskunfélegyháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kiskunhalas",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kiskunlacháza",
      "megye": "Pest"
    },
    {
      "nev": "Kiskunmajsa",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kiskutas",
      "megye": "Zala"
    },
    {
      "nev": "Kisláng",
      "megye": "Fejér"
    },
    {
      "nev": "Kisléta",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kislippó",
      "megye": "Baranya"
    },
    {
      "nev": "Kislőd",
      "megye": "Veszprém"
    },
    {
      "nev": "Kismányok",
      "megye": "Tolna"
    },
    {
      "nev": "Kismarja",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Kismaros",
      "megye": "Pest"
    },
    {
      "nev": "Kisnamény",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kisnána",
      "megye": "Heves"
    },
    {
      "nev": "Kisnémedi",
      "megye": "Pest"
    },
    {
      "nev": "Kisnyárád",
      "megye": "Baranya"
    },
    {
      "nev": "Kisoroszi",
      "megye": "Pest"
    },
    {
      "nev": "Kispalád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kispáli",
      "megye": "Zala"
    },
    {
      "nev": "Kispirit",
      "megye": "Veszprém"
    },
    {
      "nev": "Kisrákos",
      "megye": "Vas"
    },
    {
      "nev": "Kisrécse",
      "megye": "Zala"
    },
    {
      "nev": "Kisrozvágy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kissikátor",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kissomlyó",
      "megye": "Vas"
    },
    {
      "nev": "Kistamási",
      "megye": "Baranya"
    },
    {
      "nev": "Kistapolca",
      "megye": "Baranya"
    },
    {
      "nev": "Kistarcsa",
      "megye": "Pest"
    },
    {
      "nev": "Kistelek",
      "megye": "Csongrád"
    },
    {
      "nev": "Kistokaj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kistolmács",
      "megye": "Zala"
    },
    {
      "nev": "Kistormás",
      "megye": "Tolna"
    },
    {
      "nev": "Kistótfalu",
      "megye": "Baranya"
    },
    {
      "nev": "Kisújszállás",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kisunyom",
      "megye": "Vas"
    },
    {
      "nev": "Kisvárda",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kisvarsány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kisvásárhely",
      "megye": "Zala"
    },
    {
      "nev": "Kisvaszar",
      "megye": "Baranya"
    },
    {
      "nev": "Kisvejke",
      "megye": "Tolna"
    },
    {
      "nev": "Kiszombor",
      "megye": "Csongrád"
    },
    {
      "nev": "Kiszsidány",
      "megye": "Vas"
    },
    {
      "nev": "Kisszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kisszékely",
      "megye": "Tolna"
    },
    {
      "nev": "Kisszekeres",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kisszentmárton",
      "megye": "Baranya"
    },
    {
      "nev": "Kissziget",
      "megye": "Zala"
    },
    {
      "nev": "Kisszőlős",
      "megye": "Veszprém"
    },
    {
      "nev": "Klárafalva",
      "megye": "Csongrád"
    },
    {
      "nev": "Kocs",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kocsér",
      "megye": "Pest"
    },
    {
      "nev": "Kocsola",
      "megye": "Tolna"
    },
    {
      "nev": "Kocsord",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kóka",
      "megye": "Pest"
    },
    {
      "nev": "Kokad",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Kolontár",
      "megye": "Veszprém"
    },
    {
      "nev": "Komádi",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Komárom",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Komjáti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Komló",
      "megye": "Baranya"
    },
    {
      "nev": "Komlódtótfalu",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Komlósd",
      "megye": "Somogy"
    },
    {
      "nev": "Komlóska",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Komoró",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kompolt",
      "megye": "Heves"
    },
    {
      "nev": "Kondó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kondorfa",
      "megye": "Vas"
    },
    {
      "nev": "Kondoros",
      "megye": "Békés"
    },
    {
      "nev": "Kóny",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Konyár",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Kópháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Koppányszántó",
      "megye": "Tolna"
    },
    {
      "nev": "Korlát",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Koroncó",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kórós",
      "megye": "Baranya"
    },
    {
      "nev": "Kosd",
      "megye": "Pest"
    },
    {
      "nev": "Kóspallag",
      "megye": "Pest"
    },
    {
      "nev": "Kótaj",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kovácshida",
      "megye": "Baranya"
    },
    {
      "nev": "Kovácsszénája",
      "megye": "Baranya"
    },
    {
      "nev": "Kovácsvágás",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kozárd",
      "megye": "Nógrád"
    },
    {
      "nev": "Kozármisleny",
      "megye": "Baranya"
    },
    {
      "nev": "Kozmadombja",
      "megye": "Zala"
    },
    {
      "nev": "Köblény",
      "megye": "Baranya"
    },
    {
      "nev": "Köcsk",
      "megye": "Vas"
    },
    {
      "nev": "Kökény",
      "megye": "Baranya"
    },
    {
      "nev": "Kőkút",
      "megye": "Somogy"
    },
    {
      "nev": "Kölcse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kölesd",
      "megye": "Tolna"
    },
    {
      "nev": "Kölked",
      "megye": "Baranya"
    },
    {
      "nev": "Kömlő",
      "megye": "Heves"
    },
    {
      "nev": "Kömlőd",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Kömörő",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Kömpöc",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Körmend",
      "megye": "Vas"
    },
    {
      "nev": "Környe",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Köröm",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kőröshegy",
      "megye": "Somogy"
    },
    {
      "nev": "Körösladány",
      "megye": "Békés"
    },
    {
      "nev": "Körösnagyharsány",
      "megye": "Békés"
    },
    {
      "nev": "Köröstarcsa",
      "megye": "Békés"
    },
    {
      "nev": "Kőröstetétlen",
      "megye": "Pest"
    },
    {
      "nev": "Körösújfalu",
      "megye": "Békés"
    },
    {
      "nev": "Körösszakál",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Körösszegapáti",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Kőszárhegy",
      "megye": "Fejér"
    },
    {
      "nev": "Kőszeg",
      "megye": "Vas"
    },
    {
      "nev": "Kőszegdoroszló",
      "megye": "Vas"
    },
    {
      "nev": "Kőszegpaty",
      "megye": "Vas"
    },
    {
      "nev": "Kőszegszerdahely",
      "megye": "Vas"
    },
    {
      "nev": "Kötcse",
      "megye": "Somogy"
    },
    {
      "nev": "Kötegyán",
      "megye": "Békés"
    },
    {
      "nev": "Kőtelek",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kővágóörs",
      "megye": "Veszprém"
    },
    {
      "nev": "Kővágószőlős",
      "megye": "Baranya"
    },
    {
      "nev": "Kővágótöttös",
      "megye": "Baranya"
    },
    {
      "nev": "Kövegy",
      "megye": "Csongrád"
    },
    {
      "nev": "Köveskál",
      "megye": "Veszprém"
    },
    {
      "nev": "Krasznokvajda",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kulcs",
      "megye": "Fejér"
    },
    {
      "nev": "Kunadacs",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunágota",
      "megye": "Békés"
    },
    {
      "nev": "Kunbaja",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunbaracs",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kuncsorba",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kunfehértó",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunhegyes",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kunmadaras",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kunpeszér",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunszentmárton",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Kunszentmiklós",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Kunsziget",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Kup",
      "megye": "Veszprém"
    },
    {
      "nev": "Kupa",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kurd",
      "megye": "Tolna"
    },
    {
      "nev": "Kurityán",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Kustánszeg",
      "megye": "Zala"
    },
    {
      "nev": "Kutas",
      "megye": "Somogy"
    },
    {
      "nev": "Kutasó",
      "megye": "Nógrád"
    },
    {
      "nev": "Kübekháza",
      "megye": "Csongrád"
    },
    {
      "nev": "Külsősárd",
      "megye": "Zala"
    },
    {
      "nev": "Külsővat",
      "megye": "Veszprém"
    },
    {
      "nev": "Küngös",
      "megye": "Veszprém"
    },
    {
      "nev": "Lábatlan",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Lábod",
      "megye": "Somogy"
    },
    {
      "nev": "Lácacséke",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Lad",
      "megye": "Somogy"
    },
    {
      "nev": "Ladánybene",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Ládbesenyő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Lajoskomárom",
      "megye": "Fejér"
    },
    {
      "nev": "Lajosmizse",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Lak",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Lakhegy",
      "megye": "Zala"
    },
    {
      "nev": "Lakitelek",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Lakócsa",
      "megye": "Somogy"
    },
    {
      "nev": "Lánycsók",
      "megye": "Baranya"
    },
    {
      "nev": "Lápafő",
      "megye": "Tolna"
    },
    {
      "nev": "Lapáncsa",
      "megye": "Baranya"
    },
    {
      "nev": "Laskod",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Lasztonya",
      "megye": "Zala"
    },
    {
      "nev": "Látrány",
      "megye": "Somogy"
    },
    {
      "nev": "Lázi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Leányfalu",
      "megye": "Pest"
    },
    {
      "nev": "Leányvár",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Lébény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Legénd",
      "megye": "Nógrád"
    },
    {
      "nev": "Legyesbénye",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Léh",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Lénárddaróc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Lendvadedes",
      "megye": "Zala"
    },
    {
      "nev": "Lendvajakabfa",
      "megye": "Zala"
    },
    {
      "nev": "Lengyel",
      "megye": "Tolna"
    },
    {
      "nev": "Lengyeltóti",
      "megye": "Somogy"
    },
    {
      "nev": "Lenti",
      "megye": "Zala"
    },
    {
      "nev": "Lepsény",
      "megye": "Fejér"
    },
    {
      "nev": "Lesencefalu",
      "megye": "Veszprém"
    },
    {
      "nev": "Lesenceistvánd",
      "megye": "Veszprém"
    },
    {
      "nev": "Lesencetomaj",
      "megye": "Veszprém"
    },
    {
      "nev": "Létavértes",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Letenye",
      "megye": "Zala"
    },
    {
      "nev": "Letkés",
      "megye": "Pest"
    },
    {
      "nev": "Levél",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Levelek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Libickozma",
      "megye": "Somogy"
    },
    {
      "nev": "Lickóvadamos",
      "megye": "Zala"
    },
    {
      "nev": "Liget",
      "megye": "Baranya"
    },
    {
      "nev": "Ligetfalva",
      "megye": "Zala"
    },
    {
      "nev": "Lipót",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Lippó",
      "megye": "Baranya"
    },
    {
      "nev": "Liptód",
      "megye": "Baranya"
    },
    {
      "nev": "Lispeszentadorján",
      "megye": "Zala"
    },
    {
      "nev": "Liszó",
      "megye": "Zala"
    },
    {
      "nev": "Litér",
      "megye": "Veszprém"
    },
    {
      "nev": "Litka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Litke",
      "megye": "Nógrád"
    },
    {
      "nev": "Lócs",
      "megye": "Vas"
    },
    {
      "nev": "Lókút",
      "megye": "Veszprém"
    },
    {
      "nev": "Lónya",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Lórév",
      "megye": "Pest"
    },
    {
      "nev": "Lothárd",
      "megye": "Baranya"
    },
    {
      "nev": "Lovas",
      "megye": "Veszprém"
    },
    {
      "nev": "Lovasberény",
      "megye": "Fejér"
    },
    {
      "nev": "Lovászhetény",
      "megye": "Baranya"
    },
    {
      "nev": "Lovászi",
      "megye": "Zala"
    },
    {
      "nev": "Lovászpatona",
      "megye": "Veszprém"
    },
    {
      "nev": "Lőkösháza",
      "megye": "Békés"
    },
    {
      "nev": "Lőrinci",
      "megye": "Heves"
    },
    {
      "nev": "Lövő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Lövőpetri",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Lucfalva",
      "megye": "Nógrád"
    },
    {
      "nev": "Ludányhalászi",
      "megye": "Nógrád"
    },
    {
      "nev": "Ludas",
      "megye": "Heves"
    },
    {
      "nev": "Lukácsháza",
      "megye": "Vas"
    },
    {
      "nev": "Lulla",
      "megye": "Somogy"
    },
    {
      "nev": "Lúzsok",
      "megye": "Baranya"
    },
    {
      "nev": "Mád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Madaras",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Madocsa",
      "megye": "Tolna"
    },
    {
      "nev": "Maglóca",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Maglód",
      "megye": "Pest"
    },
    {
      "nev": "Mágocs",
      "megye": "Baranya"
    },
    {
      "nev": "Magosliget",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Magy",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Magyaralmás",
      "megye": "Fejér"
    },
    {
      "nev": "Magyaratád",
      "megye": "Somogy"
    },
    {
      "nev": "Magyarbánhegyes",
      "megye": "Békés"
    },
    {
      "nev": "Magyarbóly",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarcsanád",
      "megye": "Csongrád"
    },
    {
      "nev": "Magyardombegyház",
      "megye": "Békés"
    },
    {
      "nev": "Magyaregregy",
      "megye": "Baranya"
    },
    {
      "nev": "Magyaregres",
      "megye": "Somogy"
    },
    {
      "nev": "Magyarföld",
      "megye": "Zala"
    },
    {
      "nev": "Magyargéc",
      "megye": "Nógrád"
    },
    {
      "nev": "Magyargencs",
      "megye": "Veszprém"
    },
    {
      "nev": "Magyarhertelend",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarhomorog",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Magyarkeresztúr",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Magyarkeszi",
      "megye": "Tolna"
    },
    {
      "nev": "Magyarlak",
      "megye": "Vas"
    },
    {
      "nev": "Magyarlukafa",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarmecske",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarnádalja",
      "megye": "Vas"
    },
    {
      "nev": "Magyarnándor",
      "megye": "Nógrád"
    },
    {
      "nev": "Magyarpolány",
      "megye": "Veszprém"
    },
    {
      "nev": "Magyarsarlós",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarszecsőd",
      "megye": "Vas"
    },
    {
      "nev": "Magyarszék",
      "megye": "Baranya"
    },
    {
      "nev": "Magyarszentmiklós",
      "megye": "Zala"
    },
    {
      "nev": "Magyarszerdahely",
      "megye": "Zala"
    },
    {
      "nev": "Magyarszombatfa",
      "megye": "Vas"
    },
    {
      "nev": "Magyartelek",
      "megye": "Baranya"
    },
    {
      "nev": "Majosháza",
      "megye": "Pest"
    },
    {
      "nev": "Majs",
      "megye": "Baranya"
    },
    {
      "nev": "Makád",
      "megye": "Pest"
    },
    {
      "nev": "Makkoshotyka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Maklár",
      "megye": "Heves"
    },
    {
      "nev": "Makó",
      "megye": "Csongrád"
    },
    {
      "nev": "Malomsok",
      "megye": "Veszprém"
    },
    {
      "nev": "Mályi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mályinka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mánd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mándok",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mánfa",
      "megye": "Baranya"
    },
    {
      "nev": "Mány",
      "megye": "Fejér"
    },
    {
      "nev": "Maráza",
      "megye": "Baranya"
    },
    {
      "nev": "Marcalgergelyi",
      "megye": "Veszprém"
    },
    {
      "nev": "Marcali",
      "megye": "Somogy"
    },
    {
      "nev": "Marcaltő",
      "megye": "Veszprém"
    },
    {
      "nev": "Márfa",
      "megye": "Baranya"
    },
    {
      "nev": "Máriahalom",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Máriakálnok",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Máriakéménd",
      "megye": "Baranya"
    },
    {
      "nev": "Márianosztra",
      "megye": "Pest"
    },
    {
      "nev": "Máriapócs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Markaz",
      "megye": "Heves"
    },
    {
      "nev": "Márkháza",
      "megye": "Nógrád"
    },
    {
      "nev": "Márkó",
      "megye": "Veszprém"
    },
    {
      "nev": "Markóc",
      "megye": "Baranya"
    },
    {
      "nev": "Markotabödöge",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Maróc",
      "megye": "Zala"
    },
    {
      "nev": "Marócsa",
      "megye": "Baranya"
    },
    {
      "nev": "Márok",
      "megye": "Baranya"
    },
    {
      "nev": "Márokföld",
      "megye": "Zala"
    },
    {
      "nev": "Márokpapi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Maroslele",
      "megye": "Csongrád"
    },
    {
      "nev": "Mártély",
      "megye": "Csongrád"
    },
    {
      "nev": "Martfű",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Martonfa",
      "megye": "Baranya"
    },
    {
      "nev": "Martonvásár",
      "megye": "Fejér"
    },
    {
      "nev": "Martonyi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mátészalka",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mátételke",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Mátraballa",
      "megye": "Heves"
    },
    {
      "nev": "Mátraderecske",
      "megye": "Heves"
    },
    {
      "nev": "Mátramindszent",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátranovák",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátraszele",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátraszentimre",
      "megye": "Heves"
    },
    {
      "nev": "Mátraszőlős",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátraterenye",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátraverebély",
      "megye": "Nógrád"
    },
    {
      "nev": "Mátyásdomb",
      "megye": "Fejér"
    },
    {
      "nev": "Matty",
      "megye": "Baranya"
    },
    {
      "nev": "Mátyus",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Máza",
      "megye": "Baranya"
    },
    {
      "nev": "Mecseknádasd",
      "megye": "Baranya"
    },
    {
      "nev": "Mecsekpölöske",
      "megye": "Baranya"
    },
    {
      "nev": "Mecsér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Medgyesbodzás",
      "megye": "Békés"
    },
    {
      "nev": "Medgyesegyháza",
      "megye": "Békés"
    },
    {
      "nev": "Medina",
      "megye": "Tolna"
    },
    {
      "nev": "Megyaszó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Megyehíd",
      "megye": "Vas"
    },
    {
      "nev": "Megyer",
      "megye": "Veszprém"
    },
    {
      "nev": "Meggyeskovácsi",
      "megye": "Vas"
    },
    {
      "nev": "Méhkerék",
      "megye": "Békés"
    },
    {
      "nev": "Méhtelek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mekényes",
      "megye": "Baranya"
    },
    {
      "nev": "Mélykút",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Mencshely",
      "megye": "Veszprém"
    },
    {
      "nev": "Mende",
      "megye": "Pest"
    },
    {
      "nev": "Méra",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Merenye",
      "megye": "Baranya"
    },
    {
      "nev": "Mérges",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mérk",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mernye",
      "megye": "Somogy"
    },
    {
      "nev": "Mersevát",
      "megye": "Vas"
    },
    {
      "nev": "Mesterháza",
      "megye": "Vas"
    },
    {
      "nev": "Mesteri",
      "megye": "Vas"
    },
    {
      "nev": "Mesterszállás",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Meszes",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Meszlen",
      "megye": "Vas"
    },
    {
      "nev": "Mesztegnyő",
      "megye": "Somogy"
    },
    {
      "nev": "Mezőberény",
      "megye": "Békés"
    },
    {
      "nev": "Mezőcsát",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mezőcsokonya",
      "megye": "Somogy"
    },
    {
      "nev": "Meződ",
      "megye": "Baranya"
    },
    {
      "nev": "Mezőfalva",
      "megye": "Fejér"
    },
    {
      "nev": "Mezőgyán",
      "megye": "Békés"
    },
    {
      "nev": "Mezőhegyes",
      "megye": "Békés"
    },
    {
      "nev": "Mezőhék",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Mezőkeresztes",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mezőkomárom",
      "megye": "Fejér"
    },
    {
      "nev": "Mezőkovácsháza",
      "megye": "Békés"
    },
    {
      "nev": "Mezőkövesd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mezőladány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mezőlak",
      "megye": "Veszprém"
    },
    {
      "nev": "Mezőnagymihály",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mezőnyárád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mezőörs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mezőpeterd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Mezősas",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Mezőszemere",
      "megye": "Heves"
    },
    {
      "nev": "Mezőszentgyörgy",
      "megye": "Fejér"
    },
    {
      "nev": "Mezőszilas",
      "megye": "Fejér"
    },
    {
      "nev": "Mezőtárkány",
      "megye": "Heves"
    },
    {
      "nev": "Mezőtúr",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Mezőzombor",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Miháld",
      "megye": "Zala"
    },
    {
      "nev": "Mihályfa",
      "megye": "Zala"
    },
    {
      "nev": "Mihálygerge",
      "megye": "Nógrád"
    },
    {
      "nev": "Mihályháza",
      "megye": "Veszprém"
    },
    {
      "nev": "Mihályi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mike",
      "megye": "Somogy"
    },
    {
      "nev": "Mikebuda",
      "megye": "Pest"
    },
    {
      "nev": "Mikekarácsonyfa",
      "megye": "Zala"
    },
    {
      "nev": "Mikepércs",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Miklósi",
      "megye": "Somogy"
    },
    {
      "nev": "Mikófalva",
      "megye": "Heves"
    },
    {
      "nev": "Mikóháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Mikosszéplak",
      "megye": "Vas"
    },
    {
      "nev": "Milejszeg",
      "megye": "Zala"
    },
    {
      "nev": "Milota",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Mindszent",
      "megye": "Csongrád"
    },
    {
      "nev": "Mindszentgodisa",
      "megye": "Baranya"
    },
    {
      "nev": "Mindszentkálla",
      "megye": "Veszprém"
    },
    {
      "nev": "Misefa",
      "megye": "Zala"
    },
    {
      "nev": "Miske",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Miskolc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Miszla",
      "megye": "Tolna"
    },
    {
      "nev": "Mocsa",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Mogyoród",
      "megye": "Pest"
    },
    {
      "nev": "Mogyorósbánya",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Mogyoróska",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Moha",
      "megye": "Fejér"
    },
    {
      "nev": "Mohács",
      "megye": "Baranya"
    },
    {
      "nev": "Mohora",
      "megye": "Nógrád"
    },
    {
      "nev": "Molnári",
      "megye": "Zala"
    },
    {
      "nev": "Molnaszecsőd",
      "megye": "Vas"
    },
    {
      "nev": "Molvány",
      "megye": "Baranya"
    },
    {
      "nev": "Monaj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Monok",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Monor",
      "megye": "Pest"
    },
    {
      "nev": "Monorierdő",
      "megye": "Pest"
    },
    {
      "nev": "Mónosbél",
      "megye": "Heves"
    },
    {
      "nev": "Monostorapáti",
      "megye": "Veszprém"
    },
    {
      "nev": "Monostorpályi",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Monoszló",
      "megye": "Veszprém"
    },
    {
      "nev": "Monyoród",
      "megye": "Baranya"
    },
    {
      "nev": "Mór",
      "megye": "Fejér"
    },
    {
      "nev": "Mórágy",
      "megye": "Tolna"
    },
    {
      "nev": "Mórahalom",
      "megye": "Csongrád"
    },
    {
      "nev": "Móricgát",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Mórichida",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mosdós",
      "megye": "Somogy"
    },
    {
      "nev": "Mosonmagyaróvár",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mosonszentmiklós",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mosonszolnok",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mosonudvar",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Mozsgó",
      "megye": "Baranya"
    },
    {
      "nev": "Mőcsény",
      "megye": "Tolna"
    },
    {
      "nev": "Mucsfa",
      "megye": "Tolna"
    },
    {
      "nev": "Mucsi",
      "megye": "Tolna"
    },
    {
      "nev": "Múcsony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Muhi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Murakeresztúr",
      "megye": "Zala"
    },
    {
      "nev": "Murarátka",
      "megye": "Zala"
    },
    {
      "nev": "Muraszemenye",
      "megye": "Zala"
    },
    {
      "nev": "Murga",
      "megye": "Tolna"
    },
    {
      "nev": "Murony",
      "megye": "Békés"
    },
    {
      "nev": "Nábrád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nadap",
      "megye": "Fejér"
    },
    {
      "nev": "Nádasd",
      "megye": "Vas"
    },
    {
      "nev": "Nádasdladány",
      "megye": "Fejér"
    },
    {
      "nev": "Nádudvar",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nágocs",
      "megye": "Somogy"
    },
    {
      "nev": "Nagyacsád",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyalásony",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyar",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyatád",
      "megye": "Somogy"
    },
    {
      "nev": "Nagybajcs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nagybajom",
      "megye": "Somogy"
    },
    {
      "nev": "Nagybakónak",
      "megye": "Zala"
    },
    {
      "nev": "Nagybánhegyes",
      "megye": "Békés"
    },
    {
      "nev": "Nagybaracska",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Nagybarca",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nagybárkány",
      "megye": "Nógrád"
    },
    {
      "nev": "Nagyberény",
      "megye": "Somogy"
    },
    {
      "nev": "Nagyberki",
      "megye": "Somogy"
    },
    {
      "nev": "Nagybörzsöny",
      "megye": "Pest"
    },
    {
      "nev": "Nagybudmér",
      "megye": "Baranya"
    },
    {
      "nev": "Nagycenk",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nagycsány",
      "megye": "Baranya"
    },
    {
      "nev": "Nagycsécs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nagycsepely",
      "megye": "Somogy"
    },
    {
      "nev": "Nagycserkesz",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagydém",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagydobos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagydobsza",
      "megye": "Baranya"
    },
    {
      "nev": "Nagydorog",
      "megye": "Tolna"
    },
    {
      "nev": "Nagyecsed",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyér",
      "megye": "Csongrád"
    },
    {
      "nev": "Nagyesztergár",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyfüged",
      "megye": "Heves"
    },
    {
      "nev": "Nagygeresd",
      "megye": "Vas"
    },
    {
      "nev": "Nagygörbő",
      "megye": "Zala"
    },
    {
      "nev": "Nagygyimót",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyhajmás",
      "megye": "Baranya"
    },
    {
      "nev": "Nagyhalász",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyharsány",
      "megye": "Baranya"
    },
    {
      "nev": "Nagyhegyes",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nagyhódos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyhuta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nagyigmánd",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Nagyiván",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Nagykálló",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagykamarás",
      "megye": "Békés"
    },
    {
      "nev": "Nagykanizsa",
      "megye": "Zala"
    },
    {
      "nev": "Nagykapornak",
      "megye": "Zala"
    },
    {
      "nev": "Nagykarácsony",
      "megye": "Fejér"
    },
    {
      "nev": "Nagykáta",
      "megye": "Pest"
    },
    {
      "nev": "Nagykereki",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nagykeresztúr",
      "megye": "Nógrád"
    },
    {
      "nev": "Nagykinizs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nagykónyi",
      "megye": "Tolna"
    },
    {
      "nev": "Nagykorpád",
      "megye": "Somogy"
    },
    {
      "nev": "Nagykovácsi",
      "megye": "Pest"
    },
    {
      "nev": "Nagykozár",
      "megye": "Baranya"
    },
    {
      "nev": "Nagykökényes",
      "megye": "Heves"
    },
    {
      "nev": "Nagykölked",
      "megye": "Vas"
    },
    {
      "nev": "Nagykőrös",
      "megye": "Pest"
    },
    {
      "nev": "Nagykörű",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Nagykutas",
      "megye": "Zala"
    },
    {
      "nev": "Nagylak",
      "megye": "Csongrád"
    },
    {
      "nev": "Nagylengyel",
      "megye": "Zala"
    },
    {
      "nev": "Nagylóc",
      "megye": "Nógrád"
    },
    {
      "nev": "Nagylók",
      "megye": "Fejér"
    },
    {
      "nev": "Nagylózs",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nagymágocs",
      "megye": "Csongrád"
    },
    {
      "nev": "Nagymányok",
      "megye": "Tolna"
    },
    {
      "nev": "Nagymaros",
      "megye": "Pest"
    },
    {
      "nev": "Nagymizdó",
      "megye": "Vas"
    },
    {
      "nev": "Nagynyárád",
      "megye": "Baranya"
    },
    {
      "nev": "Nagyoroszi",
      "megye": "Nógrád"
    },
    {
      "nev": "Nagypáli",
      "megye": "Zala"
    },
    {
      "nev": "Nagypall",
      "megye": "Baranya"
    },
    {
      "nev": "Nagypeterd",
      "megye": "Baranya"
    },
    {
      "nev": "Nagypirit",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyrábé",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nagyrada",
      "megye": "Zala"
    },
    {
      "nev": "Nagyrákos",
      "megye": "Vas"
    },
    {
      "nev": "Nagyrécse",
      "megye": "Zala"
    },
    {
      "nev": "Nagyréde",
      "megye": "Heves"
    },
    {
      "nev": "Nagyrév",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Nagyrozvágy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nagysáp",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Nagysimonyi",
      "megye": "Vas"
    },
    {
      "nev": "Nagyszakácsi",
      "megye": "Somogy"
    },
    {
      "nev": "Nagyszékely",
      "megye": "Tolna"
    },
    {
      "nev": "Nagyszekeres",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyszénás",
      "megye": "Békés"
    },
    {
      "nev": "Nagyszentjános",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nagyszokoly",
      "megye": "Tolna"
    },
    {
      "nev": "Nagytálya",
      "megye": "Heves"
    },
    {
      "nev": "Nagytarcsa",
      "megye": "Pest"
    },
    {
      "nev": "Nagytevel",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagytilaj",
      "megye": "Vas"
    },
    {
      "nev": "Nagytótfalu",
      "megye": "Baranya"
    },
    {
      "nev": "Nagytőke",
      "megye": "Csongrád"
    },
    {
      "nev": "Nagyút",
      "megye": "Heves"
    },
    {
      "nev": "Nagyvarsány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nagyváty",
      "megye": "Baranya"
    },
    {
      "nev": "Nagyvázsony",
      "megye": "Veszprém"
    },
    {
      "nev": "Nagyvejke",
      "megye": "Tolna"
    },
    {
      "nev": "Nagyveleg",
      "megye": "Fejér"
    },
    {
      "nev": "Nagyvenyim",
      "megye": "Fejér"
    },
    {
      "nev": "Nagyvisnyó",
      "megye": "Heves"
    },
    {
      "nev": "Nak",
      "megye": "Tolna"
    },
    {
      "nev": "Napkor",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nárai",
      "megye": "Vas"
    },
    {
      "nev": "Narda",
      "megye": "Vas"
    },
    {
      "nev": "Naszály",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Négyes",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nekézseny",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nemesapáti",
      "megye": "Zala"
    },
    {
      "nev": "Nemesbikk",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nemesborzova",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nemesbőd",
      "megye": "Vas"
    },
    {
      "nev": "Nemesbük",
      "megye": "Zala"
    },
    {
      "nev": "Nemescsó",
      "megye": "Vas"
    },
    {
      "nev": "Nemesdéd",
      "megye": "Somogy"
    },
    {
      "nev": "Nemesgörzsöny",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemesgulács",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemeshany",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemeshetés",
      "megye": "Zala"
    },
    {
      "nev": "Nemeske",
      "megye": "Baranya"
    },
    {
      "nev": "Nemeskér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nemeskeresztúr",
      "megye": "Vas"
    },
    {
      "nev": "Nemeskisfalud",
      "megye": "Somogy"
    },
    {
      "nev": "Nemeskocs",
      "megye": "Vas"
    },
    {
      "nev": "Nemeskolta",
      "megye": "Vas"
    },
    {
      "nev": "Nemesládony",
      "megye": "Vas"
    },
    {
      "nev": "Nemesmedves",
      "megye": "Vas"
    },
    {
      "nev": "Nemesnádudvar",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Nemesnép",
      "megye": "Zala"
    },
    {
      "nev": "Nemespátró",
      "megye": "Zala"
    },
    {
      "nev": "Nemesrádó",
      "megye": "Zala"
    },
    {
      "nev": "Nemesrempehollós",
      "megye": "Vas"
    },
    {
      "nev": "Nemessándorháza",
      "megye": "Zala"
    },
    {
      "nev": "Nemesvámos",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemesvid",
      "megye": "Somogy"
    },
    {
      "nev": "Nemesvita",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemesszalók",
      "megye": "Veszprém"
    },
    {
      "nev": "Nemesszentandrás",
      "megye": "Zala"
    },
    {
      "nev": "Németbánya",
      "megye": "Veszprém"
    },
    {
      "nev": "Németfalu",
      "megye": "Zala"
    },
    {
      "nev": "Németkér",
      "megye": "Tolna"
    },
    {
      "nev": "Nemti",
      "megye": "Nógrád"
    },
    {
      "nev": "Neszmély",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Nézsa",
      "megye": "Nógrád"
    },
    {
      "nev": "Nick",
      "megye": "Vas"
    },
    {
      "nev": "Nikla",
      "megye": "Somogy"
    },
    {
      "nev": "Nógrád",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádkövesd",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádmarcal",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádmegyer",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádsáp",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádsipek",
      "megye": "Nógrád"
    },
    {
      "nev": "Nógrádszakál",
      "megye": "Nógrád"
    },
    {
      "nev": "Nóráp",
      "megye": "Veszprém"
    },
    {
      "nev": "Noszlop",
      "megye": "Veszprém"
    },
    {
      "nev": "Noszvaj",
      "megye": "Heves"
    },
    {
      "nev": "Nova",
      "megye": "Zala"
    },
    {
      "nev": "Novaj",
      "megye": "Heves"
    },
    {
      "nev": "Novajidrány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nőtincs",
      "megye": "Nógrád"
    },
    {
      "nev": "Nyalka",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Nyárád",
      "megye": "Veszprém"
    },
    {
      "nev": "Nyáregyháza",
      "megye": "Pest"
    },
    {
      "nev": "Nyárlőrinc",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Nyársapát",
      "megye": "Pest"
    },
    {
      "nev": "Nyékládháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nyergesújfalu",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Nyésta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nyim",
      "megye": "Somogy"
    },
    {
      "nev": "Nyírábrány",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nyíracsád",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nyirád",
      "megye": "Veszprém"
    },
    {
      "nev": "Nyíradony",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nyírbátor",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírbéltek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírbogát",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírbogdány",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírcsaholy",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírcsászári",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírderzs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyíregyháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírgelse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírgyulaj",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyíri",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nyíribrony",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírjákó",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírkarász",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírkáta",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírkércs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírlövő",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírlugos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírmada",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírmártonfalva",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Nyírmeggyes",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírmihálydi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírparasznya",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírpazony",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírpilis",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírtass",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírtelek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírtét",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírtura",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyírvasvári",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Nyomár",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Nyőgér",
      "megye": "Vas"
    },
    {
      "nev": "Nyugotszenterzsébet",
      "megye": "Baranya"
    },
    {
      "nev": "Nyúl",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Óbánya",
      "megye": "Baranya"
    },
    {
      "nev": "Óbarok",
      "megye": "Fejér"
    },
    {
      "nev": "Óbudavár",
      "megye": "Veszprém"
    },
    {
      "nev": "Ócsa",
      "megye": "Pest"
    },
    {
      "nev": "Ócsárd",
      "megye": "Baranya"
    },
    {
      "nev": "Ófalu",
      "megye": "Baranya"
    },
    {
      "nev": "Ófehértó",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Óföldeák",
      "megye": "Csongrád"
    },
    {
      "nev": "Óhíd",
      "megye": "Zala"
    },
    {
      "nev": "Okány",
      "megye": "Békés"
    },
    {
      "nev": "Okorág",
      "megye": "Baranya"
    },
    {
      "nev": "Okorvölgy",
      "megye": "Baranya"
    },
    {
      "nev": "Olasz",
      "megye": "Baranya"
    },
    {
      "nev": "Olaszfa",
      "megye": "Vas"
    },
    {
      "nev": "Olaszfalu",
      "megye": "Veszprém"
    },
    {
      "nev": "Olaszliszka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Olcsva",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Olcsvaapáti",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Old",
      "megye": "Baranya"
    },
    {
      "nev": "Ólmod",
      "megye": "Vas"
    },
    {
      "nev": "Oltárc",
      "megye": "Zala"
    },
    {
      "nev": "Onga",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ónod",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ópályi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Ópusztaszer",
      "megye": "Csongrád"
    },
    {
      "nev": "Orbányosfa",
      "megye": "Zala"
    },
    {
      "nev": "Orci",
      "megye": "Somogy"
    },
    {
      "nev": "Ordacsehi",
      "megye": "Somogy"
    },
    {
      "nev": "Ordas",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Orfalu",
      "megye": "Vas"
    },
    {
      "nev": "Orfű",
      "megye": "Baranya"
    },
    {
      "nev": "Orgovány",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Ormándlak",
      "megye": "Zala"
    },
    {
      "nev": "Ormosbánya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Orosháza",
      "megye": "Békés"
    },
    {
      "nev": "Oroszi",
      "megye": "Veszprém"
    },
    {
      "nev": "Oroszlány",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Oroszló",
      "megye": "Baranya"
    },
    {
      "nev": "Orosztony",
      "megye": "Zala"
    },
    {
      "nev": "Ortaháza",
      "megye": "Zala"
    },
    {
      "nev": "Osli",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Ostffyasszonyfa",
      "megye": "Vas"
    },
    {
      "nev": "Ostoros",
      "megye": "Heves"
    },
    {
      "nev": "Oszkó",
      "megye": "Vas"
    },
    {
      "nev": "Oszlár",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Osztopán",
      "megye": "Somogy"
    },
    {
      "nev": "Ózd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ózdfalu",
      "megye": "Baranya"
    },
    {
      "nev": "Ozmánbük",
      "megye": "Zala"
    },
    {
      "nev": "Ozora",
      "megye": "Tolna"
    },
    {
      "nev": "Öcs",
      "megye": "Veszprém"
    },
    {
      "nev": "Őcsény",
      "megye": "Tolna"
    },
    {
      "nev": "Öcsöd",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Ököritófülpös",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Ölbő",
      "megye": "Vas"
    },
    {
      "nev": "Ömböly",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Őr",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Őrbottyán",
      "megye": "Pest"
    },
    {
      "nev": "Öregcsertő",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Öreglak",
      "megye": "Somogy"
    },
    {
      "nev": "Őrhalom",
      "megye": "Nógrád"
    },
    {
      "nev": "Őrimagyarósd",
      "megye": "Vas"
    },
    {
      "nev": "Őriszentpéter",
      "megye": "Vas"
    },
    {
      "nev": "Örkény",
      "megye": "Pest"
    },
    {
      "nev": "Örményes",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Örménykút",
      "megye": "Békés"
    },
    {
      "nev": "Őrtilos",
      "megye": "Somogy"
    },
    {
      "nev": "Örvényes",
      "megye": "Veszprém"
    },
    {
      "nev": "Ősagárd",
      "megye": "Nógrád"
    },
    {
      "nev": "Ősi",
      "megye": "Veszprém"
    },
    {
      "nev": "Öskü",
      "megye": "Veszprém"
    },
    {
      "nev": "Öttevény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Öttömös",
      "megye": "Csongrád"
    },
    {
      "nev": "Ötvöskónyi",
      "megye": "Somogy"
    },
    {
      "nev": "Pácin",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pacsa",
      "megye": "Zala"
    },
    {
      "nev": "Pácsony",
      "megye": "Vas"
    },
    {
      "nev": "Padár",
      "megye": "Zala"
    },
    {
      "nev": "Páhi",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Páka",
      "megye": "Zala"
    },
    {
      "nev": "Pakod",
      "megye": "Zala"
    },
    {
      "nev": "Pákozd",
      "megye": "Fejér"
    },
    {
      "nev": "Paks",
      "megye": "Tolna"
    },
    {
      "nev": "Palé",
      "megye": "Baranya"
    },
    {
      "nev": "Pálfa",
      "megye": "Tolna"
    },
    {
      "nev": "Pálfiszeg",
      "megye": "Zala"
    },
    {
      "nev": "Pálháza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Páli",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Palkonya",
      "megye": "Baranya"
    },
    {
      "nev": "Pálmajor",
      "megye": "Somogy"
    },
    {
      "nev": "Pálmonostora",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Pálosvörösmart",
      "megye": "Heves"
    },
    {
      "nev": "Palotabozsok",
      "megye": "Baranya"
    },
    {
      "nev": "Palotás",
      "megye": "Nógrád"
    },
    {
      "nev": "Paloznak",
      "megye": "Veszprém"
    },
    {
      "nev": "Pamlény",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pamuk",
      "megye": "Somogy"
    },
    {
      "nev": "Pánd",
      "megye": "Pest"
    },
    {
      "nev": "Pankasz",
      "megye": "Vas"
    },
    {
      "nev": "Pannonhalma",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Pányok",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Panyola",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pap",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pápa",
      "megye": "Veszprém"
    },
    {
      "nev": "Pápadereske",
      "megye": "Veszprém"
    },
    {
      "nev": "Pápakovácsi",
      "megye": "Veszprém"
    },
    {
      "nev": "Pápasalamon",
      "megye": "Veszprém"
    },
    {
      "nev": "Pápateszér",
      "megye": "Veszprém"
    },
    {
      "nev": "Papkeszi",
      "megye": "Veszprém"
    },
    {
      "nev": "Pápoc",
      "megye": "Vas"
    },
    {
      "nev": "Papos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Páprád",
      "megye": "Baranya"
    },
    {
      "nev": "Parád",
      "megye": "Heves"
    },
    {
      "nev": "Parádsasvár",
      "megye": "Heves"
    },
    {
      "nev": "Parasznya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pári",
      "megye": "Tolna"
    },
    {
      "nev": "Paszab",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pásztó",
      "megye": "Nógrád"
    },
    {
      "nev": "Pásztori",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Pat",
      "megye": "Zala"
    },
    {
      "nev": "Patak",
      "megye": "Nógrád"
    },
    {
      "nev": "Patalom",
      "megye": "Somogy"
    },
    {
      "nev": "Patapoklosi",
      "megye": "Baranya"
    },
    {
      "nev": "Patca",
      "megye": "Somogy"
    },
    {
      "nev": "Pátka",
      "megye": "Fejér"
    },
    {
      "nev": "Patosfa",
      "megye": "Somogy"
    },
    {
      "nev": "Pátroha",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Patvarc",
      "megye": "Nógrád"
    },
    {
      "nev": "Páty",
      "megye": "Pest"
    },
    {
      "nev": "Pátyod",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pázmánd",
      "megye": "Fejér"
    },
    {
      "nev": "Pázmándfalu",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Pécel",
      "megye": "Pest"
    },
    {
      "nev": "Pecöl",
      "megye": "Vas"
    },
    {
      "nev": "Pécs",
      "megye": "Baranya"
    },
    {
      "nev": "Pécsbagota",
      "megye": "Baranya"
    },
    {
      "nev": "Pécsdevecser",
      "megye": "Baranya"
    },
    {
      "nev": "Pécsely",
      "megye": "Veszprém"
    },
    {
      "nev": "Pécsudvard",
      "megye": "Baranya"
    },
    {
      "nev": "Pécsvárad",
      "megye": "Baranya"
    },
    {
      "nev": "Pellérd",
      "megye": "Baranya"
    },
    {
      "nev": "Pély",
      "megye": "Heves"
    },
    {
      "nev": "Penc",
      "megye": "Pest"
    },
    {
      "nev": "Penészlek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pénzesgyőr",
      "megye": "Veszprém"
    },
    {
      "nev": "Penyige",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Perbál",
      "megye": "Pest"
    },
    {
      "nev": "Pere",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Perecse",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pereked",
      "megye": "Baranya"
    },
    {
      "nev": "Perenye",
      "megye": "Vas"
    },
    {
      "nev": "Peresznye",
      "megye": "Vas"
    },
    {
      "nev": "Pereszteg",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Perkáta",
      "megye": "Fejér"
    },
    {
      "nev": "Perkupa",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Perőcsény",
      "megye": "Pest"
    },
    {
      "nev": "Peterd",
      "megye": "Baranya"
    },
    {
      "nev": "Péterhida",
      "megye": "Somogy"
    },
    {
      "nev": "Péteri",
      "megye": "Pest"
    },
    {
      "nev": "Pétervására",
      "megye": "Heves"
    },
    {
      "nev": "Pétfürdő",
      "megye": "Veszprém"
    },
    {
      "nev": "Pethőhenye",
      "megye": "Zala"
    },
    {
      "nev": "Petneháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Petőfibánya",
      "megye": "Heves"
    },
    {
      "nev": "Petőfiszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Petőháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Petőmihályfa",
      "megye": "Vas"
    },
    {
      "nev": "Petrikeresztúr",
      "megye": "Zala"
    },
    {
      "nev": "Petrivente",
      "megye": "Zala"
    },
    {
      "nev": "Pettend",
      "megye": "Baranya"
    },
    {
      "nev": "Piliny",
      "megye": "Nógrád"
    },
    {
      "nev": "Pilis",
      "megye": "Pest"
    },
    {
      "nev": "Pilisborosjenő",
      "megye": "Pest"
    },
    {
      "nev": "Piliscsaba",
      "megye": "Pest"
    },
    {
      "nev": "Piliscsév",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Pilisjászfalu",
      "megye": "Pest"
    },
    {
      "nev": "Pilismarót",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Pilisvörösvár",
      "megye": "Pest"
    },
    {
      "nev": "Pilisszántó",
      "megye": "Pest"
    },
    {
      "nev": "Pilisszentiván",
      "megye": "Pest"
    },
    {
      "nev": "Pilisszentkereszt",
      "megye": "Pest"
    },
    {
      "nev": "Pilisszentlászló",
      "megye": "Pest"
    },
    {
      "nev": "Pincehely",
      "megye": "Tolna"
    },
    {
      "nev": "Pinkamindszent",
      "megye": "Vas"
    },
    {
      "nev": "Pinnye",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Piricse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pirtó",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Piskó",
      "megye": "Baranya"
    },
    {
      "nev": "Pitvaros",
      "megye": "Csongrád"
    },
    {
      "nev": "Pócsa",
      "megye": "Baranya"
    },
    {
      "nev": "Pocsaj",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Pócsmegyer",
      "megye": "Pest"
    },
    {
      "nev": "Pócspetri",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pogány",
      "megye": "Baranya"
    },
    {
      "nev": "Pogányszentpéter",
      "megye": "Somogy"
    },
    {
      "nev": "Pókaszepetk",
      "megye": "Zala"
    },
    {
      "nev": "Polány",
      "megye": "Somogy"
    },
    {
      "nev": "Polgár",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Polgárdi",
      "megye": "Fejér"
    },
    {
      "nev": "Pomáz",
      "megye": "Pest"
    },
    {
      "nev": "Porcsalma",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pornóapáti",
      "megye": "Vas"
    },
    {
      "nev": "Poroszló",
      "megye": "Heves"
    },
    {
      "nev": "Porpác",
      "megye": "Vas"
    },
    {
      "nev": "Porrog",
      "megye": "Somogy"
    },
    {
      "nev": "Porrogszentkirály",
      "megye": "Somogy"
    },
    {
      "nev": "Porrogszentpál",
      "megye": "Somogy"
    },
    {
      "nev": "Pórszombat",
      "megye": "Zala"
    },
    {
      "nev": "Porva",
      "megye": "Veszprém"
    },
    {
      "nev": "Pósfa",
      "megye": "Vas"
    },
    {
      "nev": "Potony",
      "megye": "Somogy"
    },
    {
      "nev": "Potyond",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Pölöske",
      "megye": "Zala"
    },
    {
      "nev": "Pölöskefő",
      "megye": "Zala"
    },
    {
      "nev": "Pörböly",
      "megye": "Tolna"
    },
    {
      "nev": "Pördefölde",
      "megye": "Zala"
    },
    {
      "nev": "Pötréte",
      "megye": "Zala"
    },
    {
      "nev": "Prügy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pula",
      "megye": "Veszprém"
    },
    {
      "nev": "Pusztaapáti",
      "megye": "Zala"
    },
    {
      "nev": "Pusztaberki",
      "megye": "Nógrád"
    },
    {
      "nev": "Pusztacsalád",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Pusztacsó",
      "megye": "Vas"
    },
    {
      "nev": "Pusztadobos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Pusztaederics",
      "megye": "Zala"
    },
    {
      "nev": "Pusztafalu",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pusztaföldvár",
      "megye": "Békés"
    },
    {
      "nev": "Pusztahencse",
      "megye": "Tolna"
    },
    {
      "nev": "Pusztakovácsi",
      "megye": "Somogy"
    },
    {
      "nev": "Pusztamagyaród",
      "megye": "Zala"
    },
    {
      "nev": "Pusztamérges",
      "megye": "Csongrád"
    },
    {
      "nev": "Pusztamiske",
      "megye": "Veszprém"
    },
    {
      "nev": "Pusztamonostor",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Pusztaottlaka",
      "megye": "Békés"
    },
    {
      "nev": "Pusztaradvány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Pusztaszabolcs",
      "megye": "Fejér"
    },
    {
      "nev": "Pusztaszemes",
      "megye": "Somogy"
    },
    {
      "nev": "Pusztaszentlászló",
      "megye": "Zala"
    },
    {
      "nev": "Pusztaszer",
      "megye": "Csongrád"
    },
    {
      "nev": "Pusztavacs",
      "megye": "Pest"
    },
    {
      "nev": "Pusztavám",
      "megye": "Fejér"
    },
    {
      "nev": "Pusztazámor",
      "megye": "Pest"
    },
    {
      "nev": "Putnok",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Püski",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Püspökhatvan",
      "megye": "Pest"
    },
    {
      "nev": "Püspökladány",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Püspökmolnári",
      "megye": "Vas"
    },
    {
      "nev": "Püspökszilágy",
      "megye": "Pest"
    },
    {
      "nev": "Rábacsanak",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábacsécsény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábagyarmat",
      "megye": "Vas"
    },
    {
      "nev": "Rábahídvég",
      "megye": "Vas"
    },
    {
      "nev": "Rábakecöl",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábapatona",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábapaty",
      "megye": "Vas"
    },
    {
      "nev": "Rábapordány",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábasebes",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábaszentandrás",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábaszentmihály",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábaszentmiklós",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábatamási",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rábatöttös",
      "megye": "Vas"
    },
    {
      "nev": "Rábcakapi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rácalmás",
      "megye": "Fejér"
    },
    {
      "nev": "Ráckeresztúr",
      "megye": "Fejér"
    },
    {
      "nev": "Ráckeve",
      "megye": "Pest"
    },
    {
      "nev": "Rád",
      "megye": "Pest"
    },
    {
      "nev": "Rádfalva",
      "megye": "Baranya"
    },
    {
      "nev": "Rádóckölked",
      "megye": "Vas"
    },
    {
      "nev": "Radostyán",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ragály",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rajka",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rakaca",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rakacaszend",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rakamaz",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Rákóczibánya",
      "megye": "Nógrád"
    },
    {
      "nev": "Rákóczifalva",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Rákócziújfalu",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Ráksi",
      "megye": "Somogy"
    },
    {
      "nev": "Ramocsa",
      "megye": "Zala"
    },
    {
      "nev": "Ramocsaháza",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Rápolt",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Raposka",
      "megye": "Veszprém"
    },
    {
      "nev": "Rásonysápberencs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rátka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rátót",
      "megye": "Vas"
    },
    {
      "nev": "Ravazd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Recsk",
      "megye": "Heves"
    },
    {
      "nev": "Réde",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Rédics",
      "megye": "Zala"
    },
    {
      "nev": "Regéc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Regenye",
      "megye": "Baranya"
    },
    {
      "nev": "Regöly",
      "megye": "Tolna"
    },
    {
      "nev": "Rém",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Remeteszőlős",
      "megye": "Pest"
    },
    {
      "nev": "Répáshuta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Répcelak",
      "megye": "Vas"
    },
    {
      "nev": "Répceszemere",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Répceszentgyörgy",
      "megye": "Vas"
    },
    {
      "nev": "Répcevis",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Resznek",
      "megye": "Zala"
    },
    {
      "nev": "Rétalap",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rétközberencs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Rétság",
      "megye": "Nógrád"
    },
    {
      "nev": "Révfülöp",
      "megye": "Veszprém"
    },
    {
      "nev": "Révleányvár",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rezi",
      "megye": "Zala"
    },
    {
      "nev": "Ricse",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rigács",
      "megye": "Veszprém"
    },
    {
      "nev": "Rigyác",
      "megye": "Zala"
    },
    {
      "nev": "Rimóc",
      "megye": "Nógrád"
    },
    {
      "nev": "Rinyabesenyő",
      "megye": "Somogy"
    },
    {
      "nev": "Rinyakovácsi",
      "megye": "Somogy"
    },
    {
      "nev": "Rinyaszentkirály",
      "megye": "Somogy"
    },
    {
      "nev": "Rinyaújlak",
      "megye": "Somogy"
    },
    {
      "nev": "Rinyaújnép",
      "megye": "Somogy"
    },
    {
      "nev": "Rohod",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Románd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Romhány",
      "megye": "Nógrád"
    },
    {
      "nev": "Romonya",
      "megye": "Baranya"
    },
    {
      "nev": "Rózsafa",
      "megye": "Baranya"
    },
    {
      "nev": "Rozsály",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Rózsaszentmárton",
      "megye": "Heves"
    },
    {
      "nev": "Röjtökmuzsaj",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Rönök",
      "megye": "Vas"
    },
    {
      "nev": "Röszke",
      "megye": "Csongrád"
    },
    {
      "nev": "Rudabánya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rudolftelep",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Rum",
      "megye": "Vas"
    },
    {
      "nev": "Ruzsa",
      "megye": "Csongrád"
    },
    {
      "nev": "Ságújfalu",
      "megye": "Nógrád"
    },
    {
      "nev": "Ságvár",
      "megye": "Somogy"
    },
    {
      "nev": "Sajóbábony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóecseg",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajógalgóc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóhídvég",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóivánka",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajókápolna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajókaza",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajókeresztúr",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajólád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajólászlófalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajómercse",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajónémeti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóörös",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajópálfala",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajópetri",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajópüspöki",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajósenye",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajószentpéter",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajószöged",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóvámos",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajóvelezd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sajtoskál",
      "megye": "Vas"
    },
    {
      "nev": "Salföld",
      "megye": "Veszprém"
    },
    {
      "nev": "Salgótarján",
      "megye": "Nógrád"
    },
    {
      "nev": "Salköveskút",
      "megye": "Vas"
    },
    {
      "nev": "Salomvár",
      "megye": "Zala"
    },
    {
      "nev": "Sály",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sámod",
      "megye": "Baranya"
    },
    {
      "nev": "Sámsonháza",
      "megye": "Nógrád"
    },
    {
      "nev": "Sand",
      "megye": "Zala"
    },
    {
      "nev": "Sándorfalva",
      "megye": "Csongrád"
    },
    {
      "nev": "Sántos",
      "megye": "Somogy"
    },
    {
      "nev": "Sáp",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Sáránd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Sárazsadány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sárbogárd",
      "megye": "Fejér"
    },
    {
      "nev": "Sáregres",
      "megye": "Fejér"
    },
    {
      "nev": "Sárfimizdó",
      "megye": "Vas"
    },
    {
      "nev": "Sárhida",
      "megye": "Zala"
    },
    {
      "nev": "Sárisáp",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Sarkad",
      "megye": "Békés"
    },
    {
      "nev": "Sarkadkeresztúr",
      "megye": "Békés"
    },
    {
      "nev": "Sárkeresztes",
      "megye": "Fejér"
    },
    {
      "nev": "Sárkeresztúr",
      "megye": "Fejér"
    },
    {
      "nev": "Sárkeszi",
      "megye": "Fejér"
    },
    {
      "nev": "Sármellék",
      "megye": "Zala"
    },
    {
      "nev": "Sárok",
      "megye": "Baranya"
    },
    {
      "nev": "Sárosd",
      "megye": "Fejér"
    },
    {
      "nev": "Sárospatak",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sárpilis",
      "megye": "Tolna"
    },
    {
      "nev": "Sárrétudvari",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Sarród",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sárszentágota",
      "megye": "Fejér"
    },
    {
      "nev": "Sárszentlőrinc",
      "megye": "Tolna"
    },
    {
      "nev": "Sárszentmihály",
      "megye": "Fejér"
    },
    {
      "nev": "Sarud",
      "megye": "Heves"
    },
    {
      "nev": "Sárvár",
      "megye": "Vas"
    },
    {
      "nev": "Sásd",
      "megye": "Baranya"
    },
    {
      "nev": "Sáska",
      "megye": "Veszprém"
    },
    {
      "nev": "Sáta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sátoraljaújhely",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sátorhely",
      "megye": "Baranya"
    },
    {
      "nev": "Sávoly",
      "megye": "Somogy"
    },
    {
      "nev": "Sé",
      "megye": "Vas"
    },
    {
      "nev": "Segesd",
      "megye": "Somogy"
    },
    {
      "nev": "Selyeb",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sellye",
      "megye": "Baranya"
    },
    {
      "nev": "Semjén",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Semjénháza",
      "megye": "Zala"
    },
    {
      "nev": "Sénye",
      "megye": "Zala"
    },
    {
      "nev": "Sényő",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Seregélyes",
      "megye": "Fejér"
    },
    {
      "nev": "Serényfalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sérsekszőlős",
      "megye": "Somogy"
    },
    {
      "nev": "Sikátor",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Siklós",
      "megye": "Baranya"
    },
    {
      "nev": "Siklósbodony",
      "megye": "Baranya"
    },
    {
      "nev": "Siklósnagyfalu",
      "megye": "Baranya"
    },
    {
      "nev": "Sima",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Simaság",
      "megye": "Vas"
    },
    {
      "nev": "Simonfa",
      "megye": "Somogy"
    },
    {
      "nev": "Simontornya",
      "megye": "Tolna"
    },
    {
      "nev": "Sióagárd",
      "megye": "Tolna"
    },
    {
      "nev": "Siófok",
      "megye": "Somogy"
    },
    {
      "nev": "Siójut",
      "megye": "Somogy"
    },
    {
      "nev": "Sirok",
      "megye": "Heves"
    },
    {
      "nev": "Sitke",
      "megye": "Vas"
    },
    {
      "nev": "Sobor",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sokorópátka",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Solt",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Soltszentimre",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Soltvadkert",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Sóly",
      "megye": "Veszprém"
    },
    {
      "nev": "Solymár",
      "megye": "Pest"
    },
    {
      "nev": "Som",
      "megye": "Somogy"
    },
    {
      "nev": "Somberek",
      "megye": "Baranya"
    },
    {
      "nev": "Somlójenő",
      "megye": "Veszprém"
    },
    {
      "nev": "Somlószőlős",
      "megye": "Veszprém"
    },
    {
      "nev": "Somlóvásárhely",
      "megye": "Veszprém"
    },
    {
      "nev": "Somlóvecse",
      "megye": "Veszprém"
    },
    {
      "nev": "Somodor",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyacsa",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyapáti",
      "megye": "Baranya"
    },
    {
      "nev": "Somogyaracs",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyaszaló",
      "megye": "Somogy"
    },
    {
      "nev": "Somogybabod",
      "megye": "Somogy"
    },
    {
      "nev": "Somogybükkösd",
      "megye": "Somogy"
    },
    {
      "nev": "Somogycsicsó",
      "megye": "Somogy"
    },
    {
      "nev": "Somogydöröcske",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyegres",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyfajsz",
      "megye": "Somogy"
    },
    {
      "nev": "Somogygeszti",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyhárságy",
      "megye": "Baranya"
    },
    {
      "nev": "Somogyhatvan",
      "megye": "Baranya"
    },
    {
      "nev": "Somogyjád",
      "megye": "Somogy"
    },
    {
      "nev": "Somogymeggyes",
      "megye": "Somogy"
    },
    {
      "nev": "Somogysámson",
      "megye": "Somogy"
    },
    {
      "nev": "Somogysárd",
      "megye": "Somogy"
    },
    {
      "nev": "Somogysimonyi",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyszentpál",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyszil",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyszob",
      "megye": "Somogy"
    },
    {
      "nev": "Somogytúr",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyudvarhely",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyvámos",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyvár",
      "megye": "Somogy"
    },
    {
      "nev": "Somogyviszló",
      "megye": "Baranya"
    },
    {
      "nev": "Somogyzsitfa",
      "megye": "Somogy"
    },
    {
      "nev": "Somoskőújfalu",
      "megye": "Nógrád"
    },
    {
      "nev": "Sonkád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Soponya",
      "megye": "Fejér"
    },
    {
      "nev": "Sopron",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sopronhorpács",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sopronkövesd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sopronnémeti",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Sorkifalud",
      "megye": "Vas"
    },
    {
      "nev": "Sorkikápolna",
      "megye": "Vas"
    },
    {
      "nev": "Sormás",
      "megye": "Zala"
    },
    {
      "nev": "Sorokpolány",
      "megye": "Vas"
    },
    {
      "nev": "Sóshartyán",
      "megye": "Nógrád"
    },
    {
      "nev": "Sóskút",
      "megye": "Pest"
    },
    {
      "nev": "Sóstófalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Sósvertike",
      "megye": "Baranya"
    },
    {
      "nev": "Sótony",
      "megye": "Vas"
    },
    {
      "nev": "Söjtör",
      "megye": "Zala"
    },
    {
      "nev": "Söpte",
      "megye": "Vas"
    },
    {
      "nev": "Söréd",
      "megye": "Fejér"
    },
    {
      "nev": "Sukoró",
      "megye": "Fejér"
    },
    {
      "nev": "Sumony",
      "megye": "Baranya"
    },
    {
      "nev": "Súr",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Surd",
      "megye": "Zala"
    },
    {
      "nev": "Sükösd",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Sülysáp",
      "megye": "Pest"
    },
    {
      "nev": "Sümeg",
      "megye": "Veszprém"
    },
    {
      "nev": "Sümegcsehi",
      "megye": "Zala"
    },
    {
      "nev": "Sümegprága",
      "megye": "Veszprém"
    },
    {
      "nev": "Süttő",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Szabadbattyán",
      "megye": "Fejér"
    },
    {
      "nev": "Szabadegyháza",
      "megye": "Fejér"
    },
    {
      "nev": "Szabadhídvég",
      "megye": "Fejér"
    },
    {
      "nev": "Szabadi",
      "megye": "Somogy"
    },
    {
      "nev": "Szabadkígyós",
      "megye": "Békés"
    },
    {
      "nev": "Szabadszállás",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szabadszentkirály",
      "megye": "Baranya"
    },
    {
      "nev": "Szabás",
      "megye": "Somogy"
    },
    {
      "nev": "Szabolcs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szabolcsbáka",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szabolcsveresmart",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szada",
      "megye": "Pest"
    },
    {
      "nev": "Szágy",
      "megye": "Baranya"
    },
    {
      "nev": "Szajk",
      "megye": "Baranya"
    },
    {
      "nev": "Szajla",
      "megye": "Heves"
    },
    {
      "nev": "Szajol",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Szakácsi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szakadát",
      "megye": "Tolna"
    },
    {
      "nev": "Szakáld",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szakály",
      "megye": "Tolna"
    },
    {
      "nev": "Szakcs",
      "megye": "Tolna"
    },
    {
      "nev": "Szakmár",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szaknyér",
      "megye": "Vas"
    },
    {
      "nev": "Szakoly",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szakony",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szakonyfalu",
      "megye": "Vas"
    },
    {
      "nev": "Szákszend",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Szalafő",
      "megye": "Vas"
    },
    {
      "nev": "Szalánta",
      "megye": "Baranya"
    },
    {
      "nev": "Szalapa",
      "megye": "Zala"
    },
    {
      "nev": "Szalaszend",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szalatnak",
      "megye": "Baranya"
    },
    {
      "nev": "Szálka",
      "megye": "Tolna"
    },
    {
      "nev": "Szalkszentmárton",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szalmatercs",
      "megye": "Nógrád"
    },
    {
      "nev": "Szalonna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szamosangyalos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamosbecs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamoskér",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamossályi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamostatárfalva",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamosújlak",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szamosszeg",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szanda",
      "megye": "Nógrád"
    },
    {
      "nev": "Szank",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szántód",
      "megye": "Somogy"
    },
    {
      "nev": "Szany",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szápár",
      "megye": "Veszprém"
    },
    {
      "nev": "Szaporca",
      "megye": "Baranya"
    },
    {
      "nev": "Szár",
      "megye": "Fejér"
    },
    {
      "nev": "Szárász",
      "megye": "Baranya"
    },
    {
      "nev": "Szárazd",
      "megye": "Tolna"
    },
    {
      "nev": "Szárföld",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szárliget",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Szarvas",
      "megye": "Békés"
    },
    {
      "nev": "Szarvasgede",
      "megye": "Nógrád"
    },
    {
      "nev": "Szarvaskend",
      "megye": "Vas"
    },
    {
      "nev": "Szarvaskő",
      "megye": "Heves"
    },
    {
      "nev": "Szászberek",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Szászfa",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szászvár",
      "megye": "Baranya"
    },
    {
      "nev": "Szatmárcseke",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szátok",
      "megye": "Nógrád"
    },
    {
      "nev": "Szatta",
      "megye": "Vas"
    },
    {
      "nev": "Szatymaz",
      "megye": "Csongrád"
    },
    {
      "nev": "Szava",
      "megye": "Baranya"
    },
    {
      "nev": "Százhalombatta",
      "megye": "Pest"
    },
    {
      "nev": "Szebény",
      "megye": "Baranya"
    },
    {
      "nev": "Szécsénke",
      "megye": "Nógrád"
    },
    {
      "nev": "Szécsény",
      "megye": "Nógrád"
    },
    {
      "nev": "Szécsényfelfalu",
      "megye": "Nógrád"
    },
    {
      "nev": "Szécsisziget",
      "megye": "Zala"
    },
    {
      "nev": "Szederkény",
      "megye": "Baranya"
    },
    {
      "nev": "Szedres",
      "megye": "Tolna"
    },
    {
      "nev": "Szeged",
      "megye": "Csongrád"
    },
    {
      "nev": "Szegerdő",
      "megye": "Somogy"
    },
    {
      "nev": "Szeghalom",
      "megye": "Békés"
    },
    {
      "nev": "Szegi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szegilong",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szegvár",
      "megye": "Csongrád"
    },
    {
      "nev": "Székely",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Székelyszabar",
      "megye": "Baranya"
    },
    {
      "nev": "Székesfehérvár",
      "megye": "Fejér"
    },
    {
      "nev": "Székkutas",
      "megye": "Csongrád"
    },
    {
      "nev": "Szekszárd",
      "megye": "Tolna"
    },
    {
      "nev": "Szeleste",
      "megye": "Vas"
    },
    {
      "nev": "Szelevény",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Szellő",
      "megye": "Baranya"
    },
    {
      "nev": "Szemely",
      "megye": "Baranya"
    },
    {
      "nev": "Szemenye",
      "megye": "Vas"
    },
    {
      "nev": "Szemere",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szendehely",
      "megye": "Nógrád"
    },
    {
      "nev": "Szendrő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szendrőlád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szenna",
      "megye": "Somogy"
    },
    {
      "nev": "Szenta",
      "megye": "Somogy"
    },
    {
      "nev": "Szentantalfa",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentbalázs",
      "megye": "Somogy"
    },
    {
      "nev": "Szentbékkálla",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentborbás",
      "megye": "Somogy"
    },
    {
      "nev": "Szentdénes",
      "megye": "Baranya"
    },
    {
      "nev": "Szentdomonkos",
      "megye": "Heves"
    },
    {
      "nev": "Szente",
      "megye": "Nógrád"
    },
    {
      "nev": "Szentegát",
      "megye": "Baranya"
    },
    {
      "nev": "Szentendre",
      "megye": "Pest"
    },
    {
      "nev": "Szentes",
      "megye": "Csongrád"
    },
    {
      "nev": "Szentgál",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentgáloskér",
      "megye": "Somogy"
    },
    {
      "nev": "Szentgotthárd",
      "megye": "Vas"
    },
    {
      "nev": "Szentgyörgyvár",
      "megye": "Zala"
    },
    {
      "nev": "Szentgyörgyvölgy",
      "megye": "Zala"
    },
    {
      "nev": "Szentimrefalva",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentistván",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szentistvánbaksa",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szentjakabfa",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentkatalin",
      "megye": "Baranya"
    },
    {
      "nev": "Szentkirály",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szentkirályszabadja",
      "megye": "Veszprém"
    },
    {
      "nev": "Szentkozmadombja",
      "megye": "Zala"
    },
    {
      "nev": "Szentlászló",
      "megye": "Baranya"
    },
    {
      "nev": "Szentliszló",
      "megye": "Zala"
    },
    {
      "nev": "Szentlőrinc",
      "megye": "Baranya"
    },
    {
      "nev": "Szentlőrinckáta",
      "megye": "Pest"
    },
    {
      "nev": "Szentmargitfalva",
      "megye": "Zala"
    },
    {
      "nev": "Szentmártonkáta",
      "megye": "Pest"
    },
    {
      "nev": "Szentpéterfa",
      "megye": "Vas"
    },
    {
      "nev": "Szentpéterfölde",
      "megye": "Zala"
    },
    {
      "nev": "Szentpéterszeg",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Szentpéterúr",
      "megye": "Zala"
    },
    {
      "nev": "Szenyér",
      "megye": "Somogy"
    },
    {
      "nev": "Szepetnek",
      "megye": "Zala"
    },
    {
      "nev": "Szerecseny",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szeremle",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Szerencs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szerep",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Szergény",
      "megye": "Vas"
    },
    {
      "nev": "Szigetbecse",
      "megye": "Pest"
    },
    {
      "nev": "Szigetcsép",
      "megye": "Pest"
    },
    {
      "nev": "Szigethalom",
      "megye": "Pest"
    },
    {
      "nev": "Szigetmonostor",
      "megye": "Pest"
    },
    {
      "nev": "Szigetszentmárton",
      "megye": "Pest"
    },
    {
      "nev": "Szigetszentmiklós",
      "megye": "Pest"
    },
    {
      "nev": "Szigetújfalu",
      "megye": "Pest"
    },
    {
      "nev": "Szigetvár",
      "megye": "Baranya"
    },
    {
      "nev": "Szigliget",
      "megye": "Veszprém"
    },
    {
      "nev": "Szihalom",
      "megye": "Heves"
    },
    {
      "nev": "Szijártóháza",
      "megye": "Zala"
    },
    {
      "nev": "Szikszó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szil",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szilágy",
      "megye": "Baranya"
    },
    {
      "nev": "Szilaspogony",
      "megye": "Nógrád"
    },
    {
      "nev": "Szilsárkány",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Szilvágy",
      "megye": "Zala"
    },
    {
      "nev": "Szilvás",
      "megye": "Baranya"
    },
    {
      "nev": "Szilvásvárad",
      "megye": "Heves"
    },
    {
      "nev": "Szilvásszentmárton",
      "megye": "Somogy"
    },
    {
      "nev": "Szin",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szinpetri",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szirák",
      "megye": "Nógrád"
    },
    {
      "nev": "Szirmabesenyő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szob",
      "megye": "Pest"
    },
    {
      "nev": "Szokolya",
      "megye": "Pest"
    },
    {
      "nev": "Szólád",
      "megye": "Somogy"
    },
    {
      "nev": "Szolnok",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Szombathely",
      "megye": "Vas"
    },
    {
      "nev": "Szomód",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Szomolya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szomor",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Szorgalmatos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Szorosad",
      "megye": "Somogy"
    },
    {
      "nev": "Szőc",
      "megye": "Veszprém"
    },
    {
      "nev": "Szőce",
      "megye": "Vas"
    },
    {
      "nev": "Sződ",
      "megye": "Pest"
    },
    {
      "nev": "Sződliget",
      "megye": "Pest"
    },
    {
      "nev": "Szögliget",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szőke",
      "megye": "Baranya"
    },
    {
      "nev": "Szőkéd",
      "megye": "Baranya"
    },
    {
      "nev": "Szőkedencs",
      "megye": "Somogy"
    },
    {
      "nev": "Szőlősardó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szőlősgyörök",
      "megye": "Somogy"
    },
    {
      "nev": "Szörény",
      "megye": "Baranya"
    },
    {
      "nev": "Szúcs",
      "megye": "Heves"
    },
    {
      "nev": "Szuha",
      "megye": "Nógrád"
    },
    {
      "nev": "Szuhafő",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szuhakálló",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szuhogy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Szulimán",
      "megye": "Baranya"
    },
    {
      "nev": "Szulok",
      "megye": "Somogy"
    },
    {
      "nev": "Szurdokpüspöki",
      "megye": "Nógrád"
    },
    {
      "nev": "Szűcsi",
      "megye": "Heves"
    },
    {
      "nev": "Szügy",
      "megye": "Nógrád"
    },
    {
      "nev": "Szűr",
      "megye": "Baranya"
    },
    {
      "nev": "Tab",
      "megye": "Somogy"
    },
    {
      "nev": "Tabajd",
      "megye": "Fejér"
    },
    {
      "nev": "Tabdi",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Táborfalva",
      "megye": "Pest"
    },
    {
      "nev": "Tác",
      "megye": "Fejér"
    },
    {
      "nev": "Tagyon",
      "megye": "Veszprém"
    },
    {
      "nev": "Tahitótfalu",
      "megye": "Pest"
    },
    {
      "nev": "Takácsi",
      "megye": "Veszprém"
    },
    {
      "nev": "Tákos",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Taksony",
      "megye": "Pest"
    },
    {
      "nev": "Taktabáj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Taktaharkány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Taktakenéz",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Taktaszada",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Taliándörögd",
      "megye": "Veszprém"
    },
    {
      "nev": "Tállya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tamási",
      "megye": "Tolna"
    },
    {
      "nev": "Tanakajd",
      "megye": "Vas"
    },
    {
      "nev": "Táp",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tápióbicske",
      "megye": "Pest"
    },
    {
      "nev": "Tápiógyörgye",
      "megye": "Pest"
    },
    {
      "nev": "Tápióság",
      "megye": "Pest"
    },
    {
      "nev": "Tápiószecső",
      "megye": "Pest"
    },
    {
      "nev": "Tápiószele",
      "megye": "Pest"
    },
    {
      "nev": "Tápiószentmárton",
      "megye": "Pest"
    },
    {
      "nev": "Tápiószőlős",
      "megye": "Pest"
    },
    {
      "nev": "Táplánszentkereszt",
      "megye": "Vas"
    },
    {
      "nev": "Tapolca",
      "megye": "Veszprém"
    },
    {
      "nev": "Tapsony",
      "megye": "Somogy"
    },
    {
      "nev": "Tápszentmiklós",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tar",
      "megye": "Nógrád"
    },
    {
      "nev": "Tarany",
      "megye": "Somogy"
    },
    {
      "nev": "Tarcal",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tard",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tardona",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tardos",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tarhos",
      "megye": "Békés"
    },
    {
      "nev": "Tarján",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tarjánpuszta",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tárkány",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tarnabod",
      "megye": "Heves"
    },
    {
      "nev": "Tarnalelesz",
      "megye": "Heves"
    },
    {
      "nev": "Tarnaméra",
      "megye": "Heves"
    },
    {
      "nev": "Tarnaörs",
      "megye": "Heves"
    },
    {
      "nev": "Tarnaszentmária",
      "megye": "Heves"
    },
    {
      "nev": "Tarnaszentmiklós",
      "megye": "Heves"
    },
    {
      "nev": "Tarnazsadány",
      "megye": "Heves"
    },
    {
      "nev": "Tárnok",
      "megye": "Pest"
    },
    {
      "nev": "Tárnokréti",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tarpa",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tarrós",
      "megye": "Baranya"
    },
    {
      "nev": "Táska",
      "megye": "Somogy"
    },
    {
      "nev": "Tass",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Taszár",
      "megye": "Somogy"
    },
    {
      "nev": "Tát",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tata",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tatabánya",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tataháza",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Tatárszentgyörgy",
      "megye": "Pest"
    },
    {
      "nev": "Tázlár",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Téglás",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Tekenye",
      "megye": "Zala"
    },
    {
      "nev": "Tékes",
      "megye": "Baranya"
    },
    {
      "nev": "Teklafalu",
      "megye": "Baranya"
    },
    {
      "nev": "Telekes",
      "megye": "Vas"
    },
    {
      "nev": "Telekgerendás",
      "megye": "Békés"
    },
    {
      "nev": "Teleki",
      "megye": "Somogy"
    },
    {
      "nev": "Telki",
      "megye": "Pest"
    },
    {
      "nev": "Telkibánya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tengelic",
      "megye": "Tolna"
    },
    {
      "nev": "Tengeri",
      "megye": "Baranya"
    },
    {
      "nev": "Tengőd",
      "megye": "Somogy"
    },
    {
      "nev": "Tenk",
      "megye": "Heves"
    },
    {
      "nev": "Tényő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tépe",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Terem",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Terény",
      "megye": "Nógrád"
    },
    {
      "nev": "Tereske",
      "megye": "Nógrád"
    },
    {
      "nev": "Teresztenye",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Terpes",
      "megye": "Heves"
    },
    {
      "nev": "Tés",
      "megye": "Veszprém"
    },
    {
      "nev": "Tésa",
      "megye": "Pest"
    },
    {
      "nev": "Tésenfa",
      "megye": "Baranya"
    },
    {
      "nev": "Téseny",
      "megye": "Baranya"
    },
    {
      "nev": "Teskánd",
      "megye": "Zala"
    },
    {
      "nev": "Tét",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tetétlen",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Tevel",
      "megye": "Tolna"
    },
    {
      "nev": "Tibolddaróc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiborszállás",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tihany",
      "megye": "Veszprém"
    },
    {
      "nev": "Tikos",
      "megye": "Somogy"
    },
    {
      "nev": "Tilaj",
      "megye": "Zala"
    },
    {
      "nev": "Timár",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tinnye",
      "megye": "Pest"
    },
    {
      "nev": "Tiszaadony",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszaalpár",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Tiszabábolna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszabecs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszabercel",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszabezdéd",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszabő",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszabura",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszacsécse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszacsege",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Tiszacsermely",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszadada",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszaderzs",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszadob",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszadorogma",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszaeszlár",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszaföldvár",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszafüred",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszagyenda",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszagyulaháza",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Tiszaigar",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszainoka",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszajenő",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszakanyár",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszakarád",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszakécske",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Tiszakerecseny",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszakeszi",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszakóród",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszakürt",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszaladány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszalök",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszalúc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszamogyorós",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszanagyfalu",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszanána",
      "megye": "Heves"
    },
    {
      "nev": "Tiszaörs",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszapalkonya",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszapüspöki",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszarád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszaroff",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszasas",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszasüly",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszaszalka",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszaszentimre",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszaszentmárton",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszasziget",
      "megye": "Csongrád"
    },
    {
      "nev": "Tiszaszőlős",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszatardos",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszatarján",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszatelek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszatenyő",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszaug",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Tiszaújváros",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszavalk",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tiszavárkony",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tiszavasvári",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tiszavid",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tisztaberek",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tivadar",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tóalmás",
      "megye": "Pest"
    },
    {
      "nev": "Tófalu",
      "megye": "Heves"
    },
    {
      "nev": "Tófej",
      "megye": "Zala"
    },
    {
      "nev": "Tófű",
      "megye": "Baranya"
    },
    {
      "nev": "Tokaj",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tokod",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tokodaltáró",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Tokorcs",
      "megye": "Vas"
    },
    {
      "nev": "Tolcsva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Told",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Tolmács",
      "megye": "Nógrád"
    },
    {
      "nev": "Tolna",
      "megye": "Tolna"
    },
    {
      "nev": "Tolnanémedi",
      "megye": "Tolna"
    },
    {
      "nev": "Tomajmonostora",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tomor",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tompa",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Tompaládony",
      "megye": "Vas"
    },
    {
      "nev": "Tordas",
      "megye": "Fejér"
    },
    {
      "nev": "Tormafölde",
      "megye": "Zala"
    },
    {
      "nev": "Tormás",
      "megye": "Baranya"
    },
    {
      "nev": "Tormásliget",
      "megye": "Vas"
    },
    {
      "nev": "Tornabarakony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornakápolna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornanádaska",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornaszentandrás",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornaszentjakab",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornyiszentmiklós",
      "megye": "Zala"
    },
    {
      "nev": "Tornyosnémeti",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tornyospálca",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Torony",
      "megye": "Vas"
    },
    {
      "nev": "Torvaj",
      "megye": "Somogy"
    },
    {
      "nev": "Tószeg",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Tótkomlós",
      "megye": "Békés"
    },
    {
      "nev": "Tótszentgyörgy",
      "megye": "Baranya"
    },
    {
      "nev": "Tótszentmárton",
      "megye": "Zala"
    },
    {
      "nev": "Tótszerdahely",
      "megye": "Zala"
    },
    {
      "nev": "Tótújfalu",
      "megye": "Somogy"
    },
    {
      "nev": "Tótvázsony",
      "megye": "Veszprém"
    },
    {
      "nev": "Tök",
      "megye": "Pest"
    },
    {
      "nev": "Tököl",
      "megye": "Pest"
    },
    {
      "nev": "Töltéstava",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Tömörd",
      "megye": "Vas"
    },
    {
      "nev": "Tömörkény",
      "megye": "Csongrád"
    },
    {
      "nev": "Törökbálint",
      "megye": "Pest"
    },
    {
      "nev": "Törökkoppány",
      "megye": "Somogy"
    },
    {
      "nev": "Törökszentmiklós",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Törtel",
      "megye": "Pest"
    },
    {
      "nev": "Töttös",
      "megye": "Baranya"
    },
    {
      "nev": "Trizs",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Tunyogmatolcs",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tura",
      "megye": "Pest"
    },
    {
      "nev": "Túristvándi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Túrkeve",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Túrony",
      "megye": "Baranya"
    },
    {
      "nev": "Túrricse",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Tuzsér",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Türje",
      "megye": "Zala"
    },
    {
      "nev": "Tüskevár",
      "megye": "Veszprém"
    },
    {
      "nev": "Tyukod",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Udvar",
      "megye": "Baranya"
    },
    {
      "nev": "Udvari",
      "megye": "Tolna"
    },
    {
      "nev": "Ugod",
      "megye": "Veszprém"
    },
    {
      "nev": "Újbarok",
      "megye": "Fejér"
    },
    {
      "nev": "Újcsanálos",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Újdombrád",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Újfehértó",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Újhartyán",
      "megye": "Pest"
    },
    {
      "nev": "Újiráz",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Újireg",
      "megye": "Tolna"
    },
    {
      "nev": "Újkenéz",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Újkér",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Újkígyós",
      "megye": "Békés"
    },
    {
      "nev": "Újlengyel",
      "megye": "Pest"
    },
    {
      "nev": "Újléta",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Újlőrincfalva",
      "megye": "Heves"
    },
    {
      "nev": "Újpetre",
      "megye": "Baranya"
    },
    {
      "nev": "Újrónafő",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Újsolt",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Újszalonta",
      "megye": "Békés"
    },
    {
      "nev": "Újszász",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Újszentiván",
      "megye": "Csongrád"
    },
    {
      "nev": "Újszentmargita",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Újszilvás",
      "megye": "Pest"
    },
    {
      "nev": "Újtelek",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Újtikos",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Újudvar",
      "megye": "Zala"
    },
    {
      "nev": "Újvárfalva",
      "megye": "Somogy"
    },
    {
      "nev": "Ukk",
      "megye": "Veszprém"
    },
    {
      "nev": "Und",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Úny",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Uppony",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Ura",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Uraiújfalu",
      "megye": "Vas"
    },
    {
      "nev": "Úrhida",
      "megye": "Fejér"
    },
    {
      "nev": "Úri",
      "megye": "Pest"
    },
    {
      "nev": "Úrkút",
      "megye": "Veszprém"
    },
    {
      "nev": "Uszka",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Uszód",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Uzsa",
      "megye": "Veszprém"
    },
    {
      "nev": "Üllés",
      "megye": "Csongrád"
    },
    {
      "nev": "Üllő",
      "megye": "Pest"
    },
    {
      "nev": "Üröm",
      "megye": "Pest"
    },
    {
      "nev": "Vác",
      "megye": "Pest"
    },
    {
      "nev": "Vácduka",
      "megye": "Pest"
    },
    {
      "nev": "Vácegres",
      "megye": "Pest"
    },
    {
      "nev": "Váchartyán",
      "megye": "Pest"
    },
    {
      "nev": "Váckisújfalu",
      "megye": "Pest"
    },
    {
      "nev": "Vácrátót",
      "megye": "Pest"
    },
    {
      "nev": "Vácszentlászló",
      "megye": "Pest"
    },
    {
      "nev": "Vadna",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vadosfa",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vág",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vágáshuta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vaja",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vajdácska",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vajszló",
      "megye": "Baranya"
    },
    {
      "nev": "Vajta",
      "megye": "Fejér"
    },
    {
      "nev": "Vál",
      "megye": "Fejér"
    },
    {
      "nev": "Valkó",
      "megye": "Pest"
    },
    {
      "nev": "Valkonya",
      "megye": "Zala"
    },
    {
      "nev": "Vállaj",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vállus",
      "megye": "Zala"
    },
    {
      "nev": "Vámosatya",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vámoscsalád",
      "megye": "Vas"
    },
    {
      "nev": "Vámosgyörk",
      "megye": "Heves"
    },
    {
      "nev": "Vámosmikola",
      "megye": "Pest"
    },
    {
      "nev": "Vámosoroszi",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vámospércs",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Vámosújfalu",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vámosszabadi",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Váncsod",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Vanyarc",
      "megye": "Nógrád"
    },
    {
      "nev": "Vanyola",
      "megye": "Veszprém"
    },
    {
      "nev": "Várad",
      "megye": "Baranya"
    },
    {
      "nev": "Váralja",
      "megye": "Tolna"
    },
    {
      "nev": "Varászló",
      "megye": "Somogy"
    },
    {
      "nev": "Váraszó",
      "megye": "Heves"
    },
    {
      "nev": "Várbalog",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Varbó",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Varbóc",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Várda",
      "megye": "Somogy"
    },
    {
      "nev": "Várdomb",
      "megye": "Tolna"
    },
    {
      "nev": "Várfölde",
      "megye": "Zala"
    },
    {
      "nev": "Varga",
      "megye": "Baranya"
    },
    {
      "nev": "Várgesztes",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Várkesző",
      "megye": "Veszprém"
    },
    {
      "nev": "Várong",
      "megye": "Tolna"
    },
    {
      "nev": "Városföld",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Városlőd",
      "megye": "Veszprém"
    },
    {
      "nev": "Várpalota",
      "megye": "Veszprém"
    },
    {
      "nev": "Varsád",
      "megye": "Tolna"
    },
    {
      "nev": "Varsány",
      "megye": "Nógrád"
    },
    {
      "nev": "Várvölgy",
      "megye": "Zala"
    },
    {
      "nev": "Vasad",
      "megye": "Pest"
    },
    {
      "nev": "Vasalja",
      "megye": "Vas"
    },
    {
      "nev": "Vásárosbéc",
      "megye": "Baranya"
    },
    {
      "nev": "Vásárosdombó",
      "megye": "Baranya"
    },
    {
      "nev": "Vásárosfalu",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vásárosmiske",
      "megye": "Vas"
    },
    {
      "nev": "Vásárosnamény",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vasasszonyfa",
      "megye": "Vas"
    },
    {
      "nev": "Vasboldogasszony",
      "megye": "Zala"
    },
    {
      "nev": "Vasegerszeg",
      "megye": "Vas"
    },
    {
      "nev": "Vashosszúfalu",
      "megye": "Vas"
    },
    {
      "nev": "Vaskeresztes",
      "megye": "Vas"
    },
    {
      "nev": "Vaskút",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Vasmegyer",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Vaspör",
      "megye": "Zala"
    },
    {
      "nev": "Vassurány",
      "megye": "Vas"
    },
    {
      "nev": "Vasvár",
      "megye": "Vas"
    },
    {
      "nev": "Vaszar",
      "megye": "Veszprém"
    },
    {
      "nev": "Vászoly",
      "megye": "Veszprém"
    },
    {
      "nev": "Vasszécseny",
      "megye": "Vas"
    },
    {
      "nev": "Vasszentmihály",
      "megye": "Vas"
    },
    {
      "nev": "Vasszilvágy",
      "megye": "Vas"
    },
    {
      "nev": "Vát",
      "megye": "Vas"
    },
    {
      "nev": "Vatta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vázsnok",
      "megye": "Baranya"
    },
    {
      "nev": "Vécs",
      "megye": "Heves"
    },
    {
      "nev": "Vecsés",
      "megye": "Pest"
    },
    {
      "nev": "Végegyháza",
      "megye": "Békés"
    },
    {
      "nev": "Vejti",
      "megye": "Baranya"
    },
    {
      "nev": "Vékény",
      "megye": "Baranya"
    },
    {
      "nev": "Vekerd",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Velem",
      "megye": "Vas"
    },
    {
      "nev": "Velemér",
      "megye": "Vas"
    },
    {
      "nev": "Velence",
      "megye": "Fejér"
    },
    {
      "nev": "Velény",
      "megye": "Baranya"
    },
    {
      "nev": "Véménd",
      "megye": "Baranya"
    },
    {
      "nev": "Vének",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vép",
      "megye": "Vas"
    },
    {
      "nev": "Vereb",
      "megye": "Fejér"
    },
    {
      "nev": "Veresegyház",
      "megye": "Pest"
    },
    {
      "nev": "Verőce",
      "megye": "Pest"
    },
    {
      "nev": "Verpelét",
      "megye": "Heves"
    },
    {
      "nev": "Verseg",
      "megye": "Pest"
    },
    {
      "nev": "Versend",
      "megye": "Baranya"
    },
    {
      "nev": "Vértesacsa",
      "megye": "Fejér"
    },
    {
      "nev": "Vértesboglár",
      "megye": "Fejér"
    },
    {
      "nev": "Vérteskethely",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Vértessomló",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Vértestolna",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Vértesszőlős",
      "megye": "Komárom-Esztergom"
    },
    {
      "nev": "Vése",
      "megye": "Somogy"
    },
    {
      "nev": "Veszkény",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Veszprém",
      "megye": "Veszprém"
    },
    {
      "nev": "Veszprémfajsz",
      "megye": "Veszprém"
    },
    {
      "nev": "Veszprémgalsa",
      "megye": "Veszprém"
    },
    {
      "nev": "Veszprémvarsány",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vésztő",
      "megye": "Békés"
    },
    {
      "nev": "Vezseny",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Vid",
      "megye": "Veszprém"
    },
    {
      "nev": "Vigántpetend",
      "megye": "Veszprém"
    },
    {
      "nev": "Villány",
      "megye": "Baranya"
    },
    {
      "nev": "Villánykövesd",
      "megye": "Baranya"
    },
    {
      "nev": "Vilmány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vilonya",
      "megye": "Veszprém"
    },
    {
      "nev": "Vilyvitány",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vinár",
      "megye": "Veszprém"
    },
    {
      "nev": "Vindornyafok",
      "megye": "Zala"
    },
    {
      "nev": "Vindornyalak",
      "megye": "Zala"
    },
    {
      "nev": "Vindornyaszőlős",
      "megye": "Zala"
    },
    {
      "nev": "Visegrád",
      "megye": "Pest"
    },
    {
      "nev": "Visnye",
      "megye": "Somogy"
    },
    {
      "nev": "Visonta",
      "megye": "Heves"
    },
    {
      "nev": "Viss",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Visz",
      "megye": "Somogy"
    },
    {
      "nev": "Viszák",
      "megye": "Vas"
    },
    {
      "nev": "Viszló",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Visznek",
      "megye": "Heves"
    },
    {
      "nev": "Vitnyéd",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vízvár",
      "megye": "Somogy"
    },
    {
      "nev": "Vizslás",
      "megye": "Nógrád"
    },
    {
      "nev": "Vizsoly",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Vokány",
      "megye": "Baranya"
    },
    {
      "nev": "Vonyarcvashegy",
      "megye": "Zala"
    },
    {
      "nev": "Vöckönd",
      "megye": "Zala"
    },
    {
      "nev": "Völcsej",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Vönöck",
      "megye": "Vas"
    },
    {
      "nev": "Vöröstó",
      "megye": "Veszprém"
    },
    {
      "nev": "Vörs",
      "megye": "Somogy"
    },
    {
      "nev": "Zabar",
      "megye": "Nógrád"
    },
    {
      "nev": "Zádor",
      "megye": "Baranya"
    },
    {
      "nev": "Zádorfalva",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zagyvarékas",
      "megye": "Jász-Nagykun-Szolnok"
    },
    {
      "nev": "Zagyvaszántó",
      "megye": "Heves"
    },
    {
      "nev": "Záhony",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Zajk",
      "megye": "Zala"
    },
    {
      "nev": "Zajta",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Zákány",
      "megye": "Somogy"
    },
    {
      "nev": "Zákányfalu",
      "megye": "Somogy"
    },
    {
      "nev": "Zákányszék",
      "megye": "Csongrád"
    },
    {
      "nev": "Zala",
      "megye": "Somogy"
    },
    {
      "nev": "Zalaapáti",
      "megye": "Zala"
    },
    {
      "nev": "Zalabaksa",
      "megye": "Zala"
    },
    {
      "nev": "Zalabér",
      "megye": "Zala"
    },
    {
      "nev": "Zalaboldogfa",
      "megye": "Zala"
    },
    {
      "nev": "Zalacsány",
      "megye": "Zala"
    },
    {
      "nev": "Zalacséb",
      "megye": "Zala"
    },
    {
      "nev": "Zalaegerszeg",
      "megye": "Zala"
    },
    {
      "nev": "Zalaerdőd",
      "megye": "Veszprém"
    },
    {
      "nev": "Zalagyömörő",
      "megye": "Veszprém"
    },
    {
      "nev": "Zalahaláp",
      "megye": "Veszprém"
    },
    {
      "nev": "Zalaháshágy",
      "megye": "Zala"
    },
    {
      "nev": "Zalaigrice",
      "megye": "Zala"
    },
    {
      "nev": "Zalaistvánd",
      "megye": "Zala"
    },
    {
      "nev": "Zalakaros",
      "megye": "Zala"
    },
    {
      "nev": "Zalakomár",
      "megye": "Zala"
    },
    {
      "nev": "Zalaköveskút",
      "megye": "Zala"
    },
    {
      "nev": "Zalalövő",
      "megye": "Zala"
    },
    {
      "nev": "Zalameggyes",
      "megye": "Veszprém"
    },
    {
      "nev": "Zalamerenye",
      "megye": "Zala"
    },
    {
      "nev": "Zalasárszeg",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszabar",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszántó",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszegvár",
      "megye": "Veszprém"
    },
    {
      "nev": "Zalaszentbalázs",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentgrót",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentgyörgy",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentiván",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentjakab",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentlászló",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentlőrinc",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentmárton",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszentmihály",
      "megye": "Zala"
    },
    {
      "nev": "Zalaszombatfa",
      "megye": "Zala"
    },
    {
      "nev": "Zaláta",
      "megye": "Baranya"
    },
    {
      "nev": "Zalatárnok",
      "megye": "Zala"
    },
    {
      "nev": "Zalaújlak",
      "megye": "Zala"
    },
    {
      "nev": "Zalavár",
      "megye": "Zala"
    },
    {
      "nev": "Zalavég",
      "megye": "Zala"
    },
    {
      "nev": "Zalkod",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zamárdi",
      "megye": "Somogy"
    },
    {
      "nev": "Zámoly",
      "megye": "Fejér"
    },
    {
      "nev": "Zánka",
      "megye": "Veszprém"
    },
    {
      "nev": "Zaránk",
      "megye": "Heves"
    },
    {
      "nev": "Závod",
      "megye": "Tolna"
    },
    {
      "nev": "Zebecke",
      "megye": "Zala"
    },
    {
      "nev": "Zebegény",
      "megye": "Pest"
    },
    {
      "nev": "Zemplénagárd",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zengővárkony",
      "megye": "Baranya"
    },
    {
      "nev": "Zichyújfalu",
      "megye": "Fejér"
    },
    {
      "nev": "Zics",
      "megye": "Somogy"
    },
    {
      "nev": "Ziliz",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zimány",
      "megye": "Somogy"
    },
    {
      "nev": "Zirc",
      "megye": "Veszprém"
    },
    {
      "nev": "Zók",
      "megye": "Baranya"
    },
    {
      "nev": "Zomba",
      "megye": "Tolna"
    },
    {
      "nev": "Zubogy",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zsadány",
      "megye": "Békés"
    },
    {
      "nev": "Zsáka",
      "megye": "Hajdú-Bihar"
    },
    {
      "nev": "Zsámbék",
      "megye": "Pest"
    },
    {
      "nev": "Zsámbok",
      "megye": "Pest"
    },
    {
      "nev": "Zsana",
      "megye": "Bács-Kiskun"
    },
    {
      "nev": "Zsarolyán",
      "megye": "Szabolcs-Szatmár-Bereg"
    },
    {
      "nev": "Zsebeháza",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Zsédeny",
      "megye": "Vas"
    },
    {
      "nev": "Zselickisfalud",
      "megye": "Somogy"
    },
    {
      "nev": "Zselickislak",
      "megye": "Somogy"
    },
    {
      "nev": "Zselicszentpál",
      "megye": "Somogy"
    },
    {
      "nev": "Zsennye",
      "megye": "Vas"
    },
    {
      "nev": "Zsira",
      "megye": "Győr-Moson-Sopron"
    },
    {
      "nev": "Zsombó",
      "megye": "Csongrád"
    },
    {
      "nev": "Zsujta",
      "megye": "Borsod-Abaúj-Zemplén"
    },
    {
      "nev": "Zsurk",
      "megye": "Szabolcs-Szatmár-Bereg"
    }
  ];

  export default jsoncities;