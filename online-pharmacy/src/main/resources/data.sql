 insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(1,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','ROLE_USER',1);
insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(2,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (2,'admin','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','ROLE_ADMIN',2);
insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(3,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (3,'Jola','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','ROLE_USER',3);
insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(4,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (4,'admin2','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','ROLE_USER',4);
insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(5,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (5,'Ania','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Ania','Ania','ROLE_USER',5);


--insert into user (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);
--insert into user (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (2,'admin','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);

insert into category_product (id,name,description,url,order_url,category_number) values(10,'menu.home','menu.home.description','/','001',''); 

---------------------- MEDICINE ------------------
insert into category_product (id,name,description,url,order_url,category_number) values(20,'menu.medicine','menu.medicine.description','medicine','002','M_PR');
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(21,'menu.medicine.pain-relief','Lekkie lub umiarkowane nasilenie bólu może być leczone lekami przeciwciałami przeciwgrzydłowymi (OTC) lub lekami wydawanymi bez recepty, które są dostępne w aptece pod nadzorem Farmaceuty lub Online z TheFamilyPharmacy.ie. Najczęstszymi skargami, które słyszymy w liczbie OTC są bóle głowy, bóle okresowe, ból zęba, bóle pleców, bóle mięśni i stawów, zapalenie kości i stawów oraz przez cały rok bóle zimna i bólowa.','pain-relief','002001','M_PR',20);


insert into product (id, name,description,description_en, category_product_id,product_number) values 
(1,'PERNATON JOINT MASSAGE Żel','Pernaton Gel zawiera wyciąg z zielonego Lippeda małży z naturalnie występującą glukozaminą. Początkowo ochładza skórę, a następnie łagodzi ciepło mięśni, ścięgien i stawów. Może być stosowany codziennie, aby złagodzić sztywność stawów od starości lub złagodzić bóle stawów i mięśni ze strony szczepu i zranienia. Jest wchłaniana szybko i ma świeży, przyjemny zapach.',
'Pernaton Gel contains pure Green Lipped Mussel extract with naturally occuring glucosamine. It initially cools the skin, then provides a relieving warmth to muscles, tendons and joints. It  can be used daily to help relieve joint stiffness from old age or ease joint and muscle irritation from strain and injury. It is absorbed rapidly and has a fresh, pleasant aroma.',21,'M_PR_1');
insert into product_package (id,product_id,name,price) values (10,1,'20',20.0);
insert into product_package (id,product_id,name,price) values (20,1,'10',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(2,'NUROFEN EXPRESS 200MG TABLETKI','Tabletki Nurofen Express zawierają postać ibuprofenu, która działa szybciej niż standardowe tabletki powlekane. Dają szybką skuteczną pomoc: bóle głowy, bóle stomatologiczne, bóle mięśni, bóle okresowe, bóle pleców, gorączkę, uczucie zimna i grypę.',
	'Nurofen Express tablets contain a form of ibuprofen which works faster than standard film coated tablets. They give fast effective relief from: headache,dental pain, muscular pain, period pain, back pain, fever and cold and flu symptoms.',21,'M_PR_2');
insert into product_package (id,product_id,name,price) values (30,2,'12',12.0);
insert into product_package (id,product_id,name,price) values (40,2,'24',20.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(3,'DICLAC RELIEF ŻEL 1%','Diclac Relief 1% w / w Żel przeciwzapalny zawiera diklofenak sodu 1% wag./wag. Leczy ból i zapalenie ścięgien, więzadeł, mięśni i stawów, jak również reumatyzm tkanek miękkich.',
	'Diclac Relief 1% w/w Anti-Inflammatory Gel contains Diclofenac sodium 1% w/w. It treats pain and inflammation of tendons, ligaments, muscles and joints aswell as soft tissue rheumatism.',21,'M_PR_3');
insert into product_package (id,product_id,name,price) values (50,3,'12',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
		(4,'PANADOL TABLETKI 500MG','Tabletki Panadol zawierają 500 mg Paracetamolu. Mogą być stosowane w celu złagodzenia bólu głowy, bólu zęba, ból gardła, bóle kręgosłupa, ból reumatyczny, ból związany z zapaleniem kości i stawów, bóle mięśni i ból w okresie. Baracetamol skutecznie redukuje temperaturę i gorączkę.',
		'Panadol tablets contain 500mg Paracetamol. They can be used to relieve headache, toothache, sore throat, backache, rheumatic pain, osteoarthritis pain, muscle pain and period pain.Paracetamol is effective in reducing temperatures and fever.',21,'M_PR_4');
insert into product_package (id,product_id,name,price) values (60,4,'12',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(5,'PANADOL EXTRA TABLETKI 24 SZ','Tabletki Panadol Extra zawierają dwa aktywne składniki. Paracetamol jest lekiem przeciwbólowym, który pomaga również obniżyć temperaturę podczas gorączki. Kofeina działa poprawiając skuteczność paracetamolu, zwiększając zdolność organizmu do jej absorpcji.',
	'Panadol Extra tablets contain two active ingredients. Paracetamol is a painkiller which also helps reduce your temperature when you have a fever. Caffeine works to improve the effectiveness of the paracetamol by increasing the body ability to absorb it.',21,'M_PR_5');
insert into product_package (id,product_id,name,price) values (70,5,'10',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
		(6,'EXCEDRIN TABLETKI 20 SZ','Tabletki leku Excedrin mają potężną potrójną formułę do ostrego leczenia migreny i bólów głowy, które są trudne do uderzenia i szybkiego działania. Są to tabletki powlekane zawierające Aspirynę 250 mg, Paracetamol 250 mg i kofeinę 65 mg.',
		'Excedrin tablets boast a powerful triple action formula for the acute treatment of migraine and headaches that is hard hitting and fast acting. They are film coated tablets containing Aspirin 250mg, Paracetamol 250mg and Caffeine 65mg.',21,'M_PR_6');
insert into product_package (id,product_id,name,price) values (80,6,'5',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(7,'NUROFEN TABLETKI 200MG','Nurofen tabletki 200 mg są oryginalnym wyborem w gamie Nurofen. Tabletki są powleczone, więc można je połknąć. Zwalniają ból, zmniejszają stan zapalny i niższą temperaturę',
	'Nurofen Express tablets contain a form of ibuprofen which works faster than standard film coated tablets. They give fast effective relief from: headache,dental pain, muscular pain, period pain, back pain, fever and cold and flu symptoms.',21,'M_PR_7');
insert into product_package (id,product_id,name,price) values (90,7,'3',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(8,'PANADOL NOC TABLETKI1 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',
	'Panadol Night tablets combine the effective pain relieving power of Paracetamol with the gentle sedating properties of an anti-histamine -  Diphenhydramine Hydrochloride. They give night- time relief from muscular aches and pains, backache, toothache, headache ,period pain aswell as cold and flu symptoms. ',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (100,8,'8',10.0);
	--------child.pain.relief
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(22,'menu.medicine.child.pain.relief','Diagnozowanie źródła bólu lub dyskomfortu małego dziecka może być trudne w najlepszym momencie. Kiedy twój maluch jest ranny lub cierpi, sygnały bólu docierają do mózgu, ale często nie wiedzą, jak interpretować tę wiadomość i nie mogą wyrazić tego, co się dzieje. Często dają nam różne znaki, że źle się czują, a kiedy poznajesz swojego maleństwa, zrozumiesz, co próbują ci powiedzieć.','child.pain.relief','002002','',20);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(23,'NUROFEN DLA DZIECI',
	'Ten poręczny dodatek do gamy Nurofen nadaje się od 7 roku życia. Są łatwe do żucia i nie ma potrzeby, aby woda była tak dobra w podróży.',
	'',22,'M_CP_1');
insert into product_package (id,product_id,name,price) values (201,23,'10',10.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(24,'BONJELA Pasta do zębów',
	'Bonjela jest przezroczystym żelem, aplikowanym do wnętrza jamy ustnej lub dziąseł, aby uśmierzyć ból z powodu ząbkowania i bólów dziąseł. Zawiera salicylan choliny, środek przeciwbólowy i przeciwzapalny, który łagodzi bolesny obszar i chlorek cetalkoniowy, który zabija bakterie i pomaga zapobiegać infekcjom.',
	'',22,'M_CP_2');
insert into product_package (id,product_id,name,price) values (202,24,'15 ml',20.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
	(25,'DOZOL',
	'',
	'',22,'M_CP_3');
	insert into product_package (id,product_id,name,price) values (203,25,'100ML',15.0);
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(26,'menu.medicine.eye.conditions','menu.medicine.eye.conditions.description','eye-conditions','002003','',20);
-------------------------------------------




------------------Witaminy-----------------
insert into category_product (id,name,description,url,order_url,category_number) values(30,'menu.vitamins','','vitamins','003','V_EV');

insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(31,'menu.vitamins.energy.vitality','','energy.vitality','003001','V_EV',30);
insert into product (id, name,description,description_en, category_product_id,product_number) values 
(101,'Active Plast Energy','Active Plast Energy na wzrost energii i dobre samopoczucie dla kobiet i mężczyzn. Plastry ENERGY zawierają naturalne składniki tradycyjnie stosowane na wzrost energii i dobre samopoczucie.',
'',31,'V_EV_1');
insert into product_package (id,product_id,name,price) values (1001,101,'12',20.0);
insert into product_package (id,product_id,name,price) values (1002,101,'6',10.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(102,'FLORADIX Tabletki 84 tab','Floradix płynne żelazo i witamina formuła zawiera organiczne żelazo (II) z glukonianu żelaza, witaminy B2, B6, B13 i C, które przyczyniają się do zmniejszenia zmęczenia i zmęczenia.Iron przyczynia się do normalnego tworzenia czerwonych krwinek i hemoglobiny. Witamina C zwiększa wchłanianie żelaza. Płyn zawiera wybrane zioła i kilka koncentratów soków owocowych o przyjemnym smaku. Nie ma alkoholu, konserwantów, barwników ani sztucznych aromatów. Nie zawiera laktozy, glutenu i drożdży.',
'Floradix liquid iron and vitamin formula contains organic iron(II) from ferrous gluconate,vitamin B2,B6,B13 and C which contribute to the reduction of tiredness and fatigue.Iron contributes to normal red blood cell and haemoglobin formation. Vitamin C increases iron absorption.The liquid contains selected herbs and several fruit juice concentrates for a pleasant taste. There is no alcohol,preservatives,colourings or artifical flavourings. It is also free from lactose,gluten and yeast.',31,'V_EV_2');
insert into product_package (id,product_id,name,price) values (1010,102,'12',20.0);
insert into product_package (id,product_id,name,price) values (1011,102,'6',10.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(103,'SONA VITAMIN B COMPLEX TIME RELEASE','Kompleks SONA B zawiera 11 witamin z grupy B, które przyczyniają się do wielu funkcji w organizmie, takich jak metabolizm energetyczny, normalne funkcjonowanie układu nerwowego, funkcja psychiczna, normalne włosy i wzrost skóry, zdrowy układ odpornościowy i pomaga zmniejszyć zmęczenie i zmęczenie. Ta formuła o czasowym uwalnianiu uwalnia składniki odżywcze przez dłuższy czas, co pozwala organizmowi na dłuższy okres wchłaniania i wykorzystywania tych składników odżywczych.',
'',31,'V_EV_3');
insert into product_package (id,product_id,name,price) values (1012,103,'12',20.0);



---------- CHILD -----------------
insert into category_product (id,name,description,url,order_url,category_number) values(40,'menu.child','','child','004','');
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(41,'menu.child.bottles','','bottles','004001','C_BO',40);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(201,'DR BROWNS','Te butelki od Dr Browns zmniejszają problemy z karmieniem, udowodniono, że zachowują składniki odżywcze mleka i są pozbawione próżni, aby wspomóc trawienie.',
'These  bottles from Dr Browns reduce feeding problems, they are proven to preserve the milks nutrients and are vacuum-free to aid digestion. ',41,'C_BO_1');
insert into product_package (id,product_id,name,price) values (2010,201,'12',10.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(202,'NUK PERFECT START','Ten zestaw startowy NUK Perfect Start został opracowany z naturalnym kształtem NUK dla smoczków i smoczków, aby pomóc w prawidłowym rozwoju szczęki. Dzięki temu matka może w dowolnym momencie przełączać się między klatką piersiową a butelką. Kątowe, spłaszczone torebka zapewnia naturalnemu wysunięciu języka i żuchwy podczas ssania, podczas gdy łukowaty szczyt dopasowuje się do kształtu i rozwoju podniebienia dziecka. Te smoczki i smoczki zostały zatwierdzone przez specjalistów ortodontycznych w celu zmniejszenia ryzyka niewspółliniowania zębów. system przeciwkolizyjnego powietrza zapewnia naturalny przepływ płynu, pozwalając dziecku na łatwe picie bez połykania powietrza.',
'',41,'C_BO_2');
insert into product_package (id,product_id,name,price) values (2011,202,'32',10.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(203,'BUTELKA Z SZEROKĄ SZYJKĄ DR BROWN',
'Butelki z szeroką szyjką Dr.Brown Natural Flow pomagają zmniejszyć kolkę i odbijanie się dzieci. Otwór uniemożliwia napowietrzenie mleka, jak również zapadanie się smoczka. Zapewnia wygodę karmienia dziecka.'
,'',41,'C_BO_3');
insert into product_package (id,product_id,name,price) values (2012,203,'240ML',30.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(204,'NUK PIERWSZY WYBÓR + BIAŁA BUTELKA ZESTAW',
'Butelka posiada oryginalny smoczek ortodontyczny NUK. Został zaprojektowany przez niemieckiego ortodontę i specjalistę stomatologa. Smoczek ma kształt sutka matki, dzięki czemu dziecko swobodnie porusza językiem i żuchwą podczas ssania. Specjalny system pozwala dziecku na łatwe picie bez połykania powietrza.',
'',41,'C_BO_4');
insert into product_package (id,product_id,name,price) values (2013,204,'150ML',40.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(205,'SMOCZEK SYLIKONOWY DR BROWN NATURALNY',
'Opatentowany wewnętrzny otwór wentylacyjny pozwala powietrzu wchodzić i kierować go do obszaru nad cieczą, utrzymując oddzielenie powietrza i cieczy. Dzięki temu systemowi dzieci mogą karmić w swoim własnym tempie.',
'',41,'C_BO_5');
insert into product_package (id,product_id,name,price) values (2014,205,'150ML',25.0);
-----------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(42,'menu.child.baby_food','','baby_food','004002','C_BF',40);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(210,'LIPIL NUTRAMIGEN 1 0-6 MIESIĘCY',
'Nutramigen 1 LIPIL to kompletna odżywcza formuła o intensywnie zhydrolizowanym białku. Została zaprojektowana aby zaspokoić wszystkie codzienne potrzeby niemowląt z alergią na mleko krowie. Wolny od laktozy jest pierwszą formułą dla dzieci uczulonych z zalecanym poziomem DHA (omega 3) w celu wspierania prawidłowego rozwoju wzroku.',
'',42,'C_BF_1');
insert into product_package (id,product_id,name,price) values (2050,210,'400G',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(211,'APTAMIL PEPTI 1',
'Aptamil Pepti 1 to żywność specjalnego przeznaczenia medycznego do dietetycznego leczenia alergii na białko mleka krowiego. Białko pozyskane z mleka ulega znacznemu rozkładowi i ma bardzo niską alergogenność.',
'',42,'C_BF_2');
insert into product_package (id,product_id,name,price) values (2051,211,'450G',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(212,'ENFAMIL AR LCP',
'Enfamil AR może być stosowany u niemowląt od urodzenia, cierpiących na niedomykalność wpustu lub plucie. Enfamil AR to kompletna pod względem odżywczym, wcześniej gotowana formuła zawierająca unikalny zagęszczacz skrobi ryżowej, który pęcznieje w żołądku. Enfamil AR zawiera zalecany poziom DHA (omega 3) w celu wspomagania normalnego rozwoju wzroku.',
'',42,'C_BF_3');
insert into product_package (id,product_id,name,price) values (2052,212,'400G',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(214,'C&G NUTRIPREM 2',
'Produkt ten może byś stosowany u przedwcześnie urodzonymi z niską masą urodzeniową po wypisaniu ze szpitala. To mleko zostało specjalnie opracowane, aby sprostać zwiększonym wymaganiom żywieniowym wcześniaków. Może być stosowany u niemowląt w wieku do 6 miesięcy. Jest wzbogacony o kluczowe witaminy i minerały, aby zaspokoić ich potrzeby żywieniowe zanim przejdą na normalną dietę dla niemowląt.',
'',42,'C_BF_5');
insert into product_package (id,product_id,name,price) values (2054,214,'900G',25.0);

------------------------------------------------------------------------------------------------------------------------------------------------------
-------------Beauty------------
insert into category_product (id,name,description,url,order_url,category_number) values(50,'menu.beauty','','','005','');
------------------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(51,'menu.beauty.hair','','hair','005001','D_HA',50);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(300,'SZAMPON BIOXSINE FORTE',
'Szampon Bioxsine Forte (intensywna formuła) wzmacnia słabe mieszki włosowe i sprawia, że ​​włosy wyglądają na żywe, mocne i zdrowe. Odżywia włosy i skórę głowy dzięki swojej suplementowej formule witaminowo-mineralnej. Wzmacnia, zwiększa odporność, dodaje objętości i tworzy odpowiednie środowisko niezbędne do ożywienia słabych mieszków włosowych.',
'',51,'D_HA_1');
insert into product_package (id,product_id,name,price) values (2100,300,'300ml',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(301,'ZESTAW ROZJAŚNIACZY DLA MĘŻCZYZN BBLONDE',
'Profesjonalnie skomponowany zestaw z olejem z awokado i ekstraktem z wodorostów, pomaga chronić i wzmacniać włosy podczas ich rozjaśniania. Efektem są zdrowe włosy o naturalnym połysku.',
'',51,'D_HA_2');
insert into product_package (id,product_id,name,price) values (2101,301,'200ml',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(302,'VITABIOTICS PERFECTIL SKIN SUPLEMENT DIETY',
'Suplement Vitabiotics Perfectil wspomaga wygląd skóry, włosów i paznokci. Każda tabletka zawiera mikroelementy, takie jak witamina B2, B3 i biotyna, które pomagają utrzymać zdrową skórę, a także minerały selen i cynk, które pomagają w utrzymaniu pięknych włosów i paznokci.',
'',51,'D_HA_3');
insert into product_package (id,product_id,name,price) values (2102,302,'30 TABL.',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(303,'LAKIER DO WŁOSÓW ELNETT EXTRA STRENGTH ',
'Delikatny lakier do włosów Elnett nadaje włosom długotrwały efekt dzięki błyszczącemu połyskowi i delikatnemu dotykowi, bez efektu sztywności. Wszystkie lakiery do włosów Elnett są mikroporafinowane, więc włosy nie sklejają się, ale pozostają miękkie.'
,'',51,'D_HA_4');
insert into product_package (id,product_id,name,price) values (2103,303,'200ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(304,'SZAMPON DERMATOLOGICZNY ELAVE',
'Jest to wyjątkowo delikatny szampon bezsiarczanowy. Nadaje się do wszystkich rodzajów włosów, w tym włosów suchych, zniszczonych i kolorowych. Szampon zawiera rumianek, który pomaga ukoić suchą i zniszczoną skórę głowy.','',51,'D_HA_5');
insert into product_package (id,product_id,name,price) values (2104,304,'250ml',25.0);

--------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(52,'menu.beauty.sun_car','','sun_care','005002','D_SC',50);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(350,'KREM BB OLAY COMPLETE ORIGINAL',
'Daje doskonałe wykończenie z wyrównaniem kolorytu skóry i zdrowo wyglądającą poświatą. Posiada filtr SPF 15 i jest odpowiedni dla wszystkich grup wiekowych.',
'',52,'D_SC_1');
insert into product_package (id,product_id,name,price) values (2151,350,'250ml',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(351,
'NAWILŻAJĄCY JOGURTOWY PŁYN DO CIAŁA MORELA I MIÓD AVEENO ','Kremowy płyn do mycia ciała delikatnie oczyszcza i odżywia, pozostawiając zdrowo wyglądającą skórę, która jest miękka i gładka długo po prysznicu. Ta unikalna formuła z płatkami owsianymi i bogatym w składniki odżywcze jogurtem pomaga ożywić Twoją suchą skórę i pozostawia uczucie nawilżenia.','',52,'D_SC_2');
insert into product_package (id,product_id,name,price) values (2152,351,'300ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(352,
'PŁYN MICELARNY GARNIER','Uniwersalny płyn micelarny nie tylko oczyszcza, ale także łagodzi i usuwa makijaż, również oczu i ust. Może być stosowany nawet dla wrażliwej skóry.','',52,'D_SC_3');
insert into product_package (id,product_id,name,price) values (2153,352,'200ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(353,
'LOTION Z MENTOLEM AVEENO SKIN RELIEF MOISTURISING 200ML','Aveeno Skin Relief z Mentolem zawiera mieszankę koloidalnej owsianki znanej ze swoich kojących właściwości i chłodzącego mentolu, który zmniejsza podrażnienia i łagodzi suchość skóry. Ta formuła zapewnia nawilżenie przez 24 godziny i jest odpowiednia dla wrażliwej skóry.','',52,'D_SC_4');
insert into product_package (id,product_id,name,price) values (2154,353,'200ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(354,
'BIO-OIL ','Bio-Oil to rewolucyjny produkt do skóry, który pomaga zmniejszyć wygląd nowych i istniejących blizn i rozstępów. Ma zastosowanie przed i po ciąży. Pomaga ujednolicić koloryt skóry, oraz zapewnić nawilżenie ekspozycji na słońce.','',52,'D_SC_5');
insert into product_package (id,product_id,name,price) values (2155,354,'200ML',25.0);


---------------------
-------------------------------------------------------------------------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number) values(60,'menu.men','','','006','');
-----------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(61,'menu.men.deodorants','','deodorants','006001','E_DE',60);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(400,'DEZODORANT LYNX BODY SPRAY AFRICA TWIN ','Spray do ciała LYNX ma egzotyczną kombinację ciepłych afrykańskich przypraw i aromatów. Jest to najbardziej popularny zapach LYNX. Ten dezodorant w sprayu został zaprojektowany, aby zapewnić Ci chłód nawet w najgorętszych sytuacjach!','',61,'E_DE_1');
insert into product_package (id,product_id,name,price) values (2200,400,'150ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(401,'DEZODORANT BRUT ORIGINAL ','Dezodorant Brut original to niepowtarzalny i klasyczny zapach dla mężczyzn. Australijski produkt, który został stworzony przez mężczyzn dla mężczyzn. Ten klasyczny zapach pomoże Ci dłużej czuć się świeżo.','',61,'E_DE_2');
insert into product_package (id,product_id,name,price) values (2201,401,'200ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(402,'ANTYPERSPIRANT MITCHUM SPORT DLA MĘŻCZYZN ','Antyperspirant Mitchum zapewnia ochronę przez 48 godzin. Ekskluzywna formuła uwalnia czysty tlen, jest to silna substancja neutralizująca brzydki zapach powodowany przez bakterie przez cały dzień. Zawiera aloes i witaminę E, które łagodzą i kondycjonują skórę.','',61,'E_DE_3');
insert into product_package (id,product_id,name,price) values (2202,402,'150ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(403,'ANTYPERSPIRANT RIGHT GUARD XTREME STRESS 72HR ','Antyperspiracyjny sztyft Right Guard zapewnia dodatkową ochronę w sytuacjach stresowych i fizycznych dzięki neutralizatorowi zapachów ciała. Pomaga zwalczać brzydki zapach ciała u źródła i zapewnia długotrwałą świeżość.','',61,'E_DE_4');
insert into product_package (id,product_id,name,price) values (2203,403,'50ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(404,'ANTYPERSPIRANT RIGHT GUARD XTREME COOL ','Right Guard xtreme cool zapewnia 72 godziny dodatkowej ochrony. Zapewnia uczucie chłodu na skórze i pozostawia uczucie świeżości, szczególnie jeśli jesteś zestresowany lub doświadczasz wzmożonej aktywności fizycznej.','',61,'E_DE_5');
insert into product_package (id,product_id,name,price) values (2204,404,'150ML',25.0);
-----------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(62,'menu.men.after_shave','','after_shave','006002','E_AS',60);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(450,'WODA PO GOLENIU BRUT AFTERSHAVE ORIGINAL ','Brut jest znanym na całym świecie, męskim zapachem.  Zapach posiada mieszankę cytrusowych nut z nutą pikantnego drewna. Brut Aftershave Original to charakterystyczny zapach dla prawdziwych mężczyzn.','',62,'E_AS_1');
insert into product_package (id,product_id,name,price) values (2301,450,'100ML',25.0);
-----------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number) values(80,'menu.gifts','','','008','');
-----------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(81,'menu.gifts.for_her','','for_her','008001','G_FH',80);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(500,'PERFUMY BEYONCE RISE  EDP','Podnoszenie na duchu i walka z upodmiotowienie są tym, co głosi Beyonce i jest inspiracją dla jej nowego zapachu Rise.','',81,'G_FH_1');
insert into product_package (id,product_id,name,price) values (2401,500,'100ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values 
(501,'DKNY WOMEN 2PCE ','DKNY Energizing EDT 30ml i 150ml Balsam do ciała Energizing to piękny pomysł na prezent dla każdej kobiety w twoim życiu.','',81,'G_FH_2');
insert into product_package (id,product_id,name,price) values (2402,501,'100ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values (502,'KOLEKCJA DOVE BEAUTY','Ten wspaniały zestaw z Dove zawiera balsam do ciała 250ml, bogatego kremu odżywczego o pojemności 75ml i poręcznego antyperspirantu w rozmiarach podróżnych, 50ml intensywnego szamponu naprawczego i 50ml intensywnej odżywki do naprawy.','',81,'G_FH_3');
insert into product_package (id,product_id,name,price) values (2403,502,'100ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values (503,'KOLEKCJA DOVE HAPPINESS ','Ten zestaw jest doskonałym pomysłem na prezent, jako forma podziękowania dla kobiet w każdym wieku!','',81,'G_FH_4');
insert into product_package (id,product_id,name,price) values (2404,503,'100ML',25.0);

insert into product (id, name,description,description_en, category_product_id,product_number) values (504,'ZESTAW PĘDZLI REAL TECHNIQUES TRAVEL ESSENTIALS','Pakiet pędzli Real Techniques Travel Essentials zapewnia wszystko czego potrzebujesz będąc w drodze. Zapewnia doskonałą aplikację podkładu i doskonałe pokrycie. Ten wielozadaniowy pędzel może być stosowany do nakładania bronzera, różu i pudru. Poręczny pokrowiec służy zarówno jako uchwyt, jak i stojak do utrzymywania pędzli w czystości i ochrony.','',81,'G_FH_5');
insert into product_package (id,product_id,name,price) values (2405,504,'100ML',25.0);
-----------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(82,'menu.gifts.for_him','','for_him','008002','G_FM',80);

insert into product (id, name,description,description_en, category_product_id,product_number) values (550,'WODA PO GOLENIU DLA MĘŻCZYZN CALVIN KLEIN TRUTH','Ta aromatyczna i zmysłowa woda po goleniu, jest zaliczana do aromatycznej klasyfikacji zapachów. Jest zalecany do wieczornego stosowania.','',82,'G_FM_1');
insert into product_package (id,product_id,name,price) values (2500,550,'100ML',25.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values (551,'ZESTAW DLA SKÓRY WRAŻLIWEJ NIVEA DLA MĘŻCZYZN','Nivea Men Sensitive Complete Kit można stosować nawet dla bardzo wrażliwej skóry. Zawiera wszystkie pełnowymiarowe produkty: żel pod prysznic, 48h dezodorant, żel do mycia twarzy, balsam po prysznicu i balsam po goleniu.','',82,'G_FM_2');
insert into product_package (id,product_id,name,price) values (2501,551,'100ML',25.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values (552,'PERFUMY DAVID BECKHAM INSTINCT ','Oryginalny zapach Beckhama stał się współczesnym klasykie. Świeży zapach idealnym do porannego lub nocnego użytkowania. Głównymi nutami są zapach grejpfruta i bergamotki, anyżu, czerwonego pieprzu i białego bursztynu. To niezwykłe połączenie tworzy męski i elegancki zapach.','',82,'G_FM_3');
insert into product_package (id,product_id,name,price) values (2502,552,'100ML',25.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values (553,'WODA PO GOLENIU DAVIDOFF COOLWATER 75ML','Najważniejsze nuty zapachowe to mięta, lawenda, kolendra, rozmaryn,geranium, jaśmin i drzewo sandałowe. Baza składa się z drewna cedrowego, piżma, bursztynu i tytoniu. Odpowiedni dla mężczyzn w każdym wieku.','',82,'G_FM_4');
insert into product_package (id,product_id,name,price) values (2503,553,'100ML',25.0);
insert into product (id, name,description,description_en, category_product_id,product_number) values (554,'MASZYNKA DO GOLENIA GILLETTE MACH3 PACZKA','Ostrza Gillette Mach 3 zapewniają komfort i wydajność. Trzy zaawansowane tarcze usuwają włoski z mniejszym podrażnieniem i pozwalają na dokładniejsze golenie. Ostrza te można stosować dwa razy dłużej niż jednorazowe maszynki do golenia. Pasek smarujący umożliwia gładkie golenie. Taśma staje się biała, gdy zmniejsza się skuteczność.','',82,'G_FM_5');
insert into product_package (id,product_id,name,price) values (2504,554,'100ML',25.0);


-----------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------
insert into category_product (id,name,description,url,order_url,category_number) values(90,'menu.suplements','','','009','');
--insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(41,'menu.suplements.','','boottles','004001','C_BO',40);
--insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(41,'menu.suplements.','','boottles','004001','C_BO',40);

--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) 
--values (1,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',120,1,10);
--
--insert into cart_product (id,name,product_number,price,unit_price,cart_id,product_id,total_number)
--	values(1,'pierwszy','M_PR_1',30,10,1,1,3);
--insert into cart_product (id,name,product_number,price,unit_price,cart_id,product_id,total_number)
--	values(2,'drugi','M_PR_1',40,10,1,1,4);
--insert into cart_product (id,name,product_number,price,unit_price,cart_id,product_id,total_number)
--	values(3,'trzeci','M_PR_1',50,10,1,1,5);
--
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (2,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (3,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',10.01,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (4,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (5,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',10.01,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (6,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (7,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',10.01,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (8,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (9,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',10.01,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (10,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (11,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);
--insert into cart (id,cart_date,city,delivery_option,username,last_name,phone,post_code,street,price,user_id,delivery_price) values (12,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'Lublin','delivery','username','lastName',11111,'20-888','street',20.02,1,10);


