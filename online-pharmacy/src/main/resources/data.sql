 insert into user_details (id, address , city , email , number , pesel , phone , post_code , second_phone ) values(1,'Koszykowa','Warszawa','email@o2.pl','10','828282828','731712712','01-111','789789789');
insert into user (id,username,password,first_name,last_name,role,user_details_id) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','ROLE_USER',1);
insert into user (id,username,password,first_name,last_name,role) values (2,'admin','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','ROLE_USER');
insert into user (id,username,password,first_name,last_name,role) values (3,'admin2','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','ROLE_USER');

--insert into user (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);
--insert into user (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (2,'admin','$2a$04$9NUQszd97BkpRjb9KaP62OivCd0BTcUg3zHWZdRC1CtGXLMJhXbRu','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);

insert into category_product (id,name,description,url,order_url,category_number) values(10,'menu.home','menu.home.description','/','001',''); 
insert into category_product (id,name,description,url,order_url,category_number) values(20,'menu.medicine','menu.medicine.description','medicine','002','M_PR');
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(21,'menu.medicine.pain-relief','Lekkie lub umiarkowane nasilenie bólu może być leczone lekami przeciwciałami przeciwgrzydłowymi (OTC) lub lekami wydawanymi bez recepty, które są dostępne w aptece pod nadzorem Farmaceuty lub Online z TheFamilyPharmacy.ie. Najczęstszymi skargami, które słyszymy w liczbie OTC są bóle głowy, bóle okresowe, ból zęba, bóle pleców, bóle mięśni i stawów, zapalenie kości i stawów oraz przez cały rok bóle zimna i bólowa.','pain-relief','002001','M_PR',20);


insert into product (id, name,description, category_product_id,product_number) values (1,'PERNATON JOINT MASSAGE Żel','Pernaton Gel zawiera wyciąg z zielonego Lippeda małży z naturalnie występującą glukozaminą. Początkowo ochładza skórę, a następnie łagodzi ciepło mięśni, ścięgien i stawów. Może być stosowany codziennie, aby złagodzić sztywność stawów od starości lub złagodzić bóle stawów i mięśni ze strony szczepu i zranienia. Jest wchłaniana szybko i ma świeży, przyjemny zapach.',21,'M_PR_1');
insert into product_package (id,product_id,name,price) values (10,1,'20',20.0);
insert into product_package (id,product_id,name,price) values (20,1,'10',10.0);
insert into product (id, name,description, category_product_id,product_number) values (2,'NUROFEN EXPRESS 200MG TABLETKI','Tabletki Nurofen Express zawierają postać ibuprofenu, która działa szybciej niż standardowe tabletki powlekane. Dają szybką skuteczną pomoc: bóle głowy, bóle stomatologiczne, bóle mięśni, bóle okresowe, bóle pleców, gorączkę, uczucie zimna i grypę.',21,'M_PR_2');
insert into product_package (id,product_id,name,price) values (30,2,'12',12.0);
insert into product_package (id,product_id,name,price) values (40,2,'24',20.0);
insert into product (id, name,description, category_product_id,product_number) values (3,'DICLAC RELIEF ŻEL 1%','Diclac Relief 1% w / w Żel przeciwzapalny zawiera diklofenak sodu 1% wag./wag. Leczy ból i zapalenie ścięgien, więzadeł, mięśni i stawów, jak również reumatyzm tkanek miękkich.',21,'M_PR_3');
insert into product_package (id,product_id,name,price) values (50,3,'12',10.0);
insert into product (id, name,description, category_product_id,product_number) values (4,'PANADOL TABLETKI 500MG','Tabletki Panadol zawierają 500 mg Paracetamolu. Mogą być stosowane w celu złagodzenia bólu głowy, bólu zęba, ból gardła, bóle kręgosłupa, ból reumatyczny, ból związany z zapaleniem kości i stawów, bóle mięśni i ból w okresie. Baracetamol skutecznie redukuje temperaturę i gorączkę.',21,'M_PR_4');
insert into product_package (id,product_id,name,price) values (60,4,'12',10.0);
insert into product (id, name,description, category_product_id,product_number) values (5,'PANADOL EXTRA TABLETKI 24 SZ','Tabletki Panadol Extra zawierają dwa aktywne składniki. Paracetamol jest lekiem przeciwbólowym, który pomaga również obniżyć temperaturę podczas gorączki. Kofeina działa poprawiając skuteczność paracetamolu, zwiększając zdolność organizmu do jej absorpcji.',21,'M_PR_5');
insert into product_package (id,product_id,name,price) values (70,5,'10',10.0);
insert into product (id, name,description, category_product_id,product_number) values (6,'EXCEDRIN TABLETKI 20 SZ','Tabletki leku Excedrin mają potężną potrójną formułę do ostrego leczenia migreny i bólów głowy, które są trudne do uderzenia i szybkiego działania. Są to tabletki powlekane zawierające Aspirynę 250 mg, Paracetamol 250 mg i kofeinę 65 mg.',21,'M_PR_6');
insert into product_package (id,product_id,name,price) values (80,6,'5',10.0);
insert into product (id, name,description, category_product_id,product_number) values (7,'NUROFEN TABLETKI 200MG','Nurofen tabletki 200 mg są oryginalnym wyborem w gamie Nurofen. Tabletki są powleczone, więc można je połknąć. Zwalniają ból, zmniejszają stan zapalny i niższą temperaturę',21,'M_PR_7');
insert into product_package (id,product_id,name,price) values (90,7,'3',10.0);
insert into product (id, name,description, category_product_id,product_number) values (8,'PANADOL NOC TABLETKI1 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (100,8,'8',10.0);
insert into product (id, name,description, category_product_id,product_number) values (9,'PANADOL NOC TABLETKI2 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (110,9,'8',10.0);
insert into product (id, name,description, category_product_id,product_number) values (10,'PANADOL NOC TABLETKI3 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (120,10,'8',10.0);
insert into product (id, name,description, category_product_id,product_number) values (11,'PANADOL NOC TABLETKI4 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (130,11,'8',10.0);
insert into product (id, name,description, category_product_id,product_number) values (12,'PANADOL NOC TABLETKI5 20 SZ','Tabletki Panadol Night łączą skuteczną lekarstwę Paracetamolu z delikatnymi właściwościami uspokajającymi chlorowodorku anty-histaminy - difenhydraminy. Dają ulgę nocną w bólach mięśniowych, bólach pleców, bólach głowy, bólach głowy, bólach okresowych, zimnych i grypowych. .',21,'M_PR_8');
insert into product_package (id,product_id,name,price) values (140,12,'8',10.0);

insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(22,'menu.medicine.child.pain.relief','menu.medicine.child.pain.relief.description','child-pain-relief','002002','',20);
insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(23,'menu.medicine.eye.conditions','menu.medicine.eye.conditions.description','eye-conditions','002003','',20);
insert into category_product (id,name,description,url,order_url,category_number) values(30,'menu.vitamins','menu.vitamins.description','vitamins','003','V_EV');

insert into category_product (id,name,description,url,order_url,category_number,parent_id) values(31,'menu.vitamins.energy.vitality','menu.vitamins.energy.vitality.description','energy.vitality','003001','V_EV',30);
insert into product (id, name,description, category_product_id,product_number) values (101,'Active Plast Energy','Active Plast Energy na wzrost energii i dobre samopoczucie dla kobiet i mężczyzn. Plastry ENERGY zawierają naturalne składniki tradycyjnie stosowane na wzrost energii i dobre samopoczucie.',31,'V_EV_1');
insert into product_package (id,product_id,name,price) values (1001,101,'12',20.0);
insert into product_package (id,product_id,name,price) values (1002,101,'6',10.0);




insert into category_product (id,name,description,url,order_url,category_number) values(40,'menu.child','','','004','');
insert into category_product (id,name,description,url,order_url,category_number) values(50,'menu.beauty','','','005','');
insert into category_product (id,name,description,url,order_url,category_number) values(60,'menu.men','','','006','');
insert into category_product (id,name,description,url,order_url,category_number) values(70,'menu.suplements','','','007','');
insert into category_product (id,name,description,url,order_url,category_number) values(80,'menu.gifts','','','008','');


