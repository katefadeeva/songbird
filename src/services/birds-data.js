const BirdsData = [
  [
    {
      id: 1,
      name: 'Гусь',
      species: 'Anser',
      description: 'Гусь – водоплавающая птица семейства утиных отряда гусеобразных, или пластинчатоклювых. Дикие гуси обитают в Северном полушарии - Европе, Азии, Африке и Северной Америке. Насчитывается около 30 видов. Длина тела до 1 метра, вес от 4 до 6 кг.',
      image: 'https://live.staticflickr.com/3950/15380530797_81b754e2a3_o.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC458918-Snow%20Goose%20dozen%20flt%20-CA%2C%20Salton%20Sea%20area%2C%20Vendel%20Rd%2C%20January%2019%2C%202018%2C%201101%20AM.mp3'
    },
    {
      id: 2,
      name: 'Голубь',
      species: 'Columba livia',
      description: 'Сравнительно маленькие птицы, которые, в отличие от многих других домашних птиц, сохранили способность летать. Длина тела в среднем достигает 40 см, размах крыльев от 50 до 70 см, масса от 250 до 400 г. Окрас оперения очень изменчив и отличается у разных пород, но перья всегда плотные и густые.',
      image: 'https://live.staticflickr.com/3627/3440411022_e400abaa71_o.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC488174-Rock%20Dove%20-CA%2C%20J%20Street%20Marina%2C%20July%2018%2C%202019%2C%200627%20AM.mp3'
    },
    {
      id: 3,
      name: 'Фазан',
      species: 'Phasianus colchicus',
      description: 'По внешнему виду птица очень похожа на курицу, отличает ее длинный медно-золотой с фиолетовым отливом хвост и яркое оперение. ... Длина тела птицы около 85 см, вес самца достигает 2 кг, для самки – чуть меньше. Также и оперение у самочек фазана бледнее, чем у самцов.',
      image: 'https://live.staticflickr.com/1860/43568765195_707ed2da76_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RNVWOVLEUN/goldenpheasant-china190595farrow.mp3'
    },
    {
      id: 4,
      name: 'Утка',
      species: 'Anas platyrhynchos',
      description: 'Одомашненные утки очень похожи на своих диких сородичей – крякв. У птиц мощное телосложение, широкая грудка и спина. Размер головы и шеи изменяется у разных видов, как и окрас оперения. Большинство окрасов пород уток однотонны – белые или темные, пестрые утки встречаются реже.',
      image: 'https://live.staticflickr.com/3873/15296687926_16cef8289f_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YKKDTZHLUU/XC257266-14.001.01.Fulvous_Whistling-Duck.mp3'
    },
    {
      id: 5,
      name: 'Страус',
      species: 'Struthio camelus',
      description: 'Самая крупная птица на Земле, поэтому хорошо известен большинству людей. Высота страуса от кончиков лап до макушки 1,8-2,7 м, вес в среднем 50-75 кг, но самые тяжелые самцы могут весить до 131 кг!',
      image: 'https://live.staticflickr.com/7454/9205518235_42a78aab20_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516153-Struthio_camelus_australis-FL%20quiet%20calls%20imm%20Polokwane%20GameRes%2030Oct19%208.05am%20LS115271a.mp3'
    },
    {
      id: 6,
      name: 'Курица',
      species: 'Gallus gallus',
      description: 'Один самых популярных и распространенных видов домашней птицы. Относится к семейству фазановых, роду гребенчатых кур. Самец курицы называется петухом, птенец – цыпленком. Прародительницей домашней курицы считается банкивская джунглевая курица. За многовековой период одомашнивания люди смогли вывести очень много различных пород.',
      image: 'https://live.staticflickr.com/670/21535633069_878336ae8d_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC472721-LS102413%20Red%20Junglefowl%20call%202%20A.mp3'
    },
    {
      id: 7,
      name: 'Индейка',
      species: 'Meleagris gallopavo',
      description: 'Это крупная птица из отряда курообразных, семейства фазановых, рода индеек. Название самца – индюк, название птенцов – индюшата. Дикие индейки имеют крупные размеры, весят до 8 кг (самец). Длина самца 100—110 см, самки 85 см. Ноги длинные, крепкие. Птицы способны к перелёту на небольшие расстояния.',
      image: 'https://live.staticflickr.com/7233/7301076318_49ffb3cc12_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC539775-3-22-20%20655%20Male-female%20Turkey.mp3'
    },
    {
      id: 8,
      name: 'Гуменник',
      species: 'Anser fabalis',
      description: 'Крупная птица буровато-серой окраски, напоминающий серого гуся. Клюв чёрный с оранжевой полоской посередине. Самец и самка не отличаются по окраске, однако самка несколько мельче. Масса тела колеблется от 2,5 до 4,5 кг и выше.',
      image: 'https://live.staticflickr.com/4918/31017684227_d36ccb4c8b_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC562536-S%C3%A4dg%C3%A5s_11.mp3'
    },
    {
      id: 9,
      name: 'Цесарка',
      species: 'Numida meleagris',
      description: 'Туловище у птицы овальное, удлиненное с длинной головой без перьев. На голове заметен бело-голубой нарост, красные сережки и темно-розового цвета клюв. Шея выгнутая, практически без перьев. Крылья сильные, округлой формы.',
      image: 'https://live.staticflickr.com/2832/11586803815_137552061a_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PJVICFDZGZ/XC361009-160609_0722%200740%20Kern%20Adams_%20Unknown.mp3'
    },
    {
      id: 10,
      name: 'Белоклювая гагара',
      species: 'Gavia adamsii',
      description: 'Самая крупная из гагар. Общая длина 760–920 мм, размах крыльев 1 370–1 520 мм. Самец и самка окрашены одинаково, но самец обычно несколько крупнее. Характерна большая голова на толстой шее и массивный, как бы слегка «вздёрнутый» желтовато-белый (отчётливо светлый) клюв.',
      image: 'https://live.staticflickr.com/65535/49047148303_a6ffa88698_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC396669-170708_0330_Yellow-billed_Loon_%E7%99%BD%E5%98%B4%E6%BD%9B%E9%B3%A5_Gavia_adamsii.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    },
    {
      id: 2,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 3,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 5,
      name: 'Дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 6,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 7,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 8,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    },
    {
      id: 9,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 10,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    }
  ],
  [
    {
      id: 1,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    },
    {
      id: 2,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 3,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Снегирь',
      species: 'Pyrrhula pyrrhula',
      description: 'Птица снегирь относится к небольшим птичкам, по размеру она чуть крупнее воробья. Вес снегиря составляет приблизительно 30-35 граммов, но в тоже время телосложение у него достаточно плотное и крепкое. Длина тела обычного снегиря около 18 сантиметров, а размах крыльев доходит до 30 сантиметров.',
      image: 'https://live.staticflickr.com/65535/49666506948_1d12568ebd_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC553441-200415_2085_BRBU.mp3'
    },
    {
      id: 7,
      name: 'Чиж',
      species: 'Carduelis spinus',
      description: 'Один из видов певчих птиц из семейства вьюрковых, отряда воробьинообразных. Распространён в Евразии, как правило, в хвойных лесах. Чижей часто держат в домашних условиях, в клетках, ради их пения.',
      image: 'https://live.staticflickr.com/908/26653684477_de8b2d136f_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC328992-160724_02.lawrences.goldfinch.lance.benner.mp3'
    },
    {
      id: 8,
      name: 'Трясогузка',
      species: 'Motacilla',
      description: 'Небольшая, но очень стройная птичка. Эту изящность ей придают длинные тонкие ноги и длинный, прямо срезанный хвост. Ловко и быстро бегая по земле, она беспрестанно потряхивает своим хвостиком.',
      image: 'https://live.staticflickr.com/65535/49746796833_c9c4a758b6_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HBPYQXTJEV/2012-05-05_T137_White-fronted-Chat--Rottnest%20Island-16Uhr52.mp3'
    },
    {
      id: 9,
      name: 'Пересмешка',
      species: 'Hippolais',
      description: 'Мелкая, изящная птица с довольно большой головой, широким у основания клювом, длинными крыльями и относительно коротким хвостом. Длина тела — 12—13,5 см. Окраска ярче, чем у других пересмешек: низ тела зеленовато-жёлтый, верх — оливково-коричневый. Над глазом проходит неяркая желтоватая бровь.',
      image: 'https://live.staticflickr.com/65535/50005651838_5d1747d764_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575277-Hypolais%20icterine%20cris%20durs%20et%20tchway%20%2B.mp3'
    },
    {
      id: 10,
      name: 'Канарейка',
      species: 'Serinus canaria',
      description: 'Канарейка несколько больше, чем дикий предок, канарский канареечный вьюрок. Певчие и цветные канарейки длиной примерно от 13,5 до 14,5 см. Имеются декоративные канарейки длиной от 11 см до 23 см. Канарейка отличается гармоничной формой вьюрка — круглой сформированной головой и коротким кеглевидным клювом.',
      image: 'https://live.staticflickr.com/4517/38671718752_3dd04e2262_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC374956-LS105644%20Canary%20song%20A.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 2,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 3,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    },
    {
      id: 5,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    },
    {
      id: 6,
      name: 'Глухарь',
      species: 'Tetrao urogallus',
      description: 'Самая крупная птица подсемейства тетеревиных. От других представителей подсемейства отличается сильно округлённым хвостом и удлинёнными перьями на горле. Обитает в хвойных, смешанных и лиственных лесах Евразии.',
      image: 'https://live.staticflickr.com/1021/5189471461_2b8a7c2fe4_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ASHRYAZILA/XC473716-caper%20call%20and%20song.mp3'
    },
    {
      id: 7,
      name: 'Серая цапля',
      species: 'Ardea cinerea',
      description: 'Это крупная птица, с размахом крыльев от 1,5 до 1,75 м, достигающая высоты 90 см и веса свыше 2 кг. Летящую цаплю нетрудно отличить от других крупных птиц. Она складывает шею в виде латинской буквы S, так что голова оказывается на спине, и вытягивает ноги далеко за обрез хвоста.',
      image: 'https://live.staticflickr.com/65535/49593334811_5fb5d759d3_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YESYDXYEZD/XC569458-heron_cendre_salins2.mp3'
    },
    {
      id: 8,
      name: 'Тетерев',
      species: 'Lyrurus tetrix',
      description: 'Относительно крупная птица с небольшой головой и коротким клювом. Самцы выглядят заметно крупнее самок — их длина составляет 49—58 см, вес 1,0—1,4 кг, тогда как аналогичные показатели самок 40—45 см и 0,7—1,0 кг соответственно. В окрасе ярко выраженный половой диморфизм.',
      image: 'https://live.staticflickr.com/65535/48615218788_a8b0d7d8e0_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CIMGCGUWCS/XC241994-orrfugl-0501_063858.mp3'
    },
    {
      id: 9,
      name: 'Рябчик',
      species: 'Bonasa bonasia',
      description: 'Самый мелкий представитель семейства тетеревиных, намного мельче тетерева. Длина взрослой птицы с хвостом — 35—37 см, размах крыльев — 48—54 см. Вес самцов варьирует в пределах 327—580 г, самок — 305,5—560 г. Масса тела заметно колеблется по сезонам, достигая максимума в конце осени и начале зимы.',
      image: 'https://live.staticflickr.com/7874/40007573913_de6fa1a0f0_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WLJVXULMDF/XC153360-FL28_20130530_030000%20RUGR.mp3'
    },
    {
      id: 10,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },
    {
      id: 3,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 4,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 5,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    },
    {
      id: 6,
      name: 'Фрегат',
      species: 'Fregata',
      description: 'У фрегатов узкие крылья и длинный раздвоенный хвост. В воздухе они крайне искусно летают, однако на земле относительно неповоротливы из-за коротких ног. Сидя на деревьях, они используют крылья для поддержания баланса. Наиболее крупный вид, великолепный фрегат, достигает длины 110 см и размаха крыльев до 230 см.',
      image: 'https://live.staticflickr.com/4913/31941251428_0d10d32637_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411511-171217_1495%20MAFR2%205ft%20juv%20IDLP%201430%20mp3%20amp.mp3'
    },
    {
      id: 7,
      name: 'Тупик',
      species: 'Fratercula arctica',
      description: 'Небольшая, вес около 550г, а длина тела примерно 30 см. Живут на побережье колониями, питаются мелкой рыбой, но иногда могут слопать ракообразных или моллюсков. Тупик хорошо летает, может развить скорость полета до 80км/ч. Они отлично ныряют (70 метров) и плавают под водой, гонясь за рыбой.',
      image: 'https://live.staticflickr.com/65535/49130458906_2096d68d36_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC479187-2018-08-04%20Borgafjordur%20180804%20Macareux%20moine%20quemandage.mp3'
    },
    {
      id: 8,
      name: 'Клуша',
      species: 'Larus fuscus',
      description: 'Крупная птица семейства чайковых, её длина составляет 48—56 см, размах крыльев 117—134 см, вес около 771 г. У взрослых птиц оперение головы, шеи, низа тела и хвоста полностью белое. В гнездовом наряде птицы трудноотличимы от таких же молодых серебристых и морских чаек.',
      image: 'https://live.staticflickr.com/65535/49745096606_9d9f943202_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487330-Goeland%20brun%20alarme%20en%20vol.mp3'
    },
    {
      id: 9,
      name: 'Глупыш',
      species: 'Fulmarus glacialis',
      description: 'Размером с серебристую чайку, размах крыльев около метра. Одна из самых обычных птиц открытого моря на северо-западе Тихого океана, в Охотском и Беринговом морях. Длина тела птицы достигает 48 см. Масса от 600 до 900 г. Телосложение плотное, желтый клюв сильный и короткий.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487674-2018-07-16%20Rif%20Onverdarnes%20grundafjordur%20180716%20Goeland%20bourgmestre%20et%20fulmar%20boreal%20%281%29.mp3'
    },
    {
      id: 10,
      name: 'Баклан',
      species: 'Phalacrocorax',
      description: 'Длина тела достигает 90 см, размах крыльев около 1,5 м. Вес взрослых особей от 1,8 до 3 кг. Большой баклан – это массивная птица с длинной шеей, клювом и крупным черным хохолком на голове.',
      image: 'https://live.staticflickr.com/7913/33269968638_04290f8b95_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KBSWHFODNI/XC123075-Flightless-Cormorant-Dusan-Brinkhuizen-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 4,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 5,
      name: 'Стервятник',
      species: 'Neophron percnopterus',
      description: 'Оперение стервятника окрашено в белый цвет с чёрными длинными перьями по краям крыльев. В области горла перья имеют желтоватый оттенок. Голова у стервятника лысая, со складками, и ярко-жёлтой, иногда даже оранжевой кожей. Такого же цвета и основание клюва, конец которого чёрный. Лапы такие же ярко-жёлтые, как и клюв. Радужная оболочка глаз красновато-коричневая, а хвост имеет клинообразную форму. Оба пола отличает тёмная, иногда совсем чёрная полоска на лице. Зрелые экземпляры достигают величины от 60 до 70 см и веса от 1,5 до 2,2 кг. Размах крыльев составляет 165 см.',
      image: 'https://live.staticflickr.com/5291/5512936112_475ff74f28_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MGYVFVFTWX/XC580021-percno.mp3'
    },
    {
      id: 6,
      name: 'Белоголовый сип',
      species: 'Gyps fulvus',
      description: 'Белоголовый сип крупная птица с длинной шеей. Длина тела 99–112,5 см, размах крыльев 240–255,7 см, длина крыла 73–74,5 см, вес 9–9,75 кг. Голова, шея, воротник у ее основания покрыты белым пухом; зоб бурый; клюв буровато-голубовато-роговой; лапы свинцово-серые.',
      image: 'https://live.staticflickr.com/65535/49826157121_a3c9d525eb_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC423952-Vautour%20fauve%20gemissement%202.mp3'
    },
    {
      id: 7,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'Хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами». Это самая быстрая птица в мире.',
      image: 'https://live.staticflickr.com/65535/49676796972_6ed52e6422_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC571136-Pilgrimsfalk_12.mp3'
    },
    {
      id: 8,
      name: 'Гриф',
      species: 'Gyps coprotheres',
      description: 'Хищная птица, но это не совсем точно. Гриф редко нападает на животных, предпочитая падаль. Крылья у грифов большие и широкие, закругленные по краям, хвост жёсткий, ступенчатый, а ноги крепкие, но со слабыми пальцами, снабженными короткими, тупыми когтями.',
      image: 'https://live.staticflickr.com/7424/27812449931_f5044e6b14_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLSEYIEVCI/XC369789-cape%20vulture.mp3'
    },
    {
      id: 9,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Самая большая птица из орлиного племени. Его смело можно назвать королем орлов. Это крупная и сильная птица весит от 3 до 6 килограммов. Размах крыльев у некоторых особей достигает трёх с половиной метров. Длина тела 76—93 см, размах крыльев 180—240 см',
      image: 'https://live.staticflickr.com/4901/33093015548_092f9e502e_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QLZIXALYUM/XC504822-Aquila%20chrysaetos.mp3'
    },
    {
      id: 10,
      name: 'Бородач',
      species: 'Gypaetus barbatus',
      description: 'Общая длина 95—125 см, вес — 4,5—7,5 кг, длина крыла 75—80 см, размах крыльев 275—308 см. У взрослой птицы голова, шея и брюшная сторона светлые, от беловатого до ярко-рыжего цвета; у глаз и на уздечке чёрное пятно; под клювом пучок чёрных волосовидных перьев, образующих бородку; спинная сторона серебристо-бурого цвета, с белыми стволами перьев. Радужка у взрослых птиц беловатая или желтоватая с красной каймой, у молодых — бурого цвета. Клюв голубовато-серый, ноги серые. Хвост длинный, клиновидный.',
      image: 'https://live.staticflickr.com/673/23885204605_0539031381_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569323-Gypaete%20barbu%20adulte%20et%20jeune%20+.mp3'
    }
  ]
];

export default BirdsData;