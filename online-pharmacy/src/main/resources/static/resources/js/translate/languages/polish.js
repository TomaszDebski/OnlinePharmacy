/**
 * 
 */
angular.module('app.translate-config-pl', ['pascalprecht.translate'])
.config(function ($translateProvider) {
	$translateProvider.translations('pl', {
		"menu":{
		  	"menu.home" : "Home",
		  	"menu.medicine" : "Lekarstwa",
		  	"menu.vitamins" : "Witaminy",
		  	"menu.child" : "Dziecko",
		  	"menu.beauty" : "Uroda",
		  	"menu.men" : "M\u0119\u017cczyzna",
		  	"menu.suplements" : "Suplementy",
		  	"menu.gifts" : "Prezenty",
		  	"menu" : ""
		  },"submenu":{
		  	"menu.medicine.pain-relief" : "Leki przeciwb\u00F3lowe",
		  	"menu.medicine.child.pain.relief" : "Leki przeciwb\u00F3lowe dla dzieci",
		  	"menu.medicine.eye.conditions" : "Ochrona oczu",
		  	"menu.vitamins.energy.vitality" : "Energia i Witalno\u015B\u0107",
		  	"menu.medicine" : "Lekarstwa",
		  	"menu.vitamins" : "Witaminy",
		  	"menu.child" : "Dziecko",
		  	"menu.beauty" : "Uroda",
		  	"menu.men" : "M\u0119\u017cczyzna",
		  	"menu.suplements" : "Suplementy",
		  	"menu.gifts" : "Prezenty",
		  	"menu" : ""
		},
		"delivery" :{
			"curier":"Kurier",
			"postOffice":"Poczta",
			"self":"Odbiór osobisty",
		},
		"payment" : {
			"paypall":"Przelew PayPall",
			"bank":"Przelew bankowy",
			"self":"Przy odbiorze osobistym",
		},
	    "index": {
	    	"login": "Zaloguj",
	    	"logout": "Wyloguj",
	    	"contact": "Kontakt",
	    	"welcome": "Witaj",
	    	"registerSpecialist":"Czy jesteś specjalistą?",
	    	"language_EN": "English",
	    	"language_PL": "polski",
	    	"about_portal":"O portalu",
	    	"physiotherapy" : "Fizjoterapia",
	    	"specialists" : "Specjaliści",
	    	"tips" : "Porady",
	    	"timetable" : "Terminarz",
	    	"add_a_visit" : "Dodaj wizytę",
	    	"visits" : "Wizyty",
	    	"patients" : "Pacjenci",
	    	"account" : "Konto",
	    	"add_services" : "Dodaj usługę",
	    	"management" : "Zarządzaj",
	    	"add_kindOfPain" : "Dodaj dolegliwość",
	    	"add_bodyPlace" : "Dodaj obszar ciała",
	    },
	    "main":{
	    	"use_online_tools" : "Wykorzystuj narzędzia online do pracy z pacjentem",
	    	"virtual_office": "Wirtualny gabinet",
	    	"physiotherapy" : "fizjoterapii",
	    	"facilitate_and_speed" : "Ułatw i przyśpiesz swoją prace",
	    },
		"patients": {
			"patients" : "Pacjenci",
			"search_patient" : "Wyszukaj pacjenta",
			"search" : "Wyszukaj",
	    	"add_patient" : "Dodaj pacjenta",
	    	"firstName_lastName" : "Imię i nazwisko",
	    	"gender" : "Płeć",
	    	"date_of_birth" : "Data urodzenia",
	    	"phone" : "Telefon",
	    	"last_visit" : "Ostatnia wizyta",
	    	"actions" : "Akcje",
	    	"man" : "mężczyzna",
	    	"woman" : "kobieta",
	    	"add_a_visit" : "Dodaj wizytę",
	    	"remove_the_patient" : "Usuń pacjenta",
	    	"send_email" : "Wyślij e-mail",
	    	"want_to_remove_the_patient" : "Czy na pewno chcesz usunąć pacjenta?",
		},
		"addVisit" : {
			"add_new_visit":"Dodaj nową wizytę",
			"correct_add_visit" : "Poprawnie dodano wizytę",
			"visit_length":"Czas trwania",
			"what_visit_length":"Określ czas trwania",
			"visit_description" : "Opis wizyty",
			"recommendations_after_the_visit" : "Zalecenia po wizycie",
		},
		"visits" : {
			"visits":"Wizyty",
			"finish_the_visit":"Zakończ wizytę",
			"delete_the_visit":"Usuń wizytę",
			"want_delete_visit":"Czy na pewno chcesz usunąć wizytę?",
			"":"",
			"":"",
		},
		"patient" : {
			"last_visit" : "Ostatnia wizyta",
			"see_visit": "Zobacz wizyty",
			"add_reservation" : "Dodaj rezerwację",
			"correct_patient_data_corrected":"Poprawnie zmieniono dane pacjenta",
			"patient_profile" : "Profil pacjenta",
			"patient_description" : "Opis pacjenta",
			"add_an_interview" : "Dodaj wywiad",
			"interviews" : "Wywiady",
		},
		"addPatient" : {
			"correct_add_patient" : "Poprawnie dodano pacjenta",
			"for_short_firstname" : "Za krótkie imię",
			"for_long_firstname" : "Za długie imię",
			"enter_additional_patient_information" : "Możesz tu wpisać dodatkowe informacje o pacjencie",
			"add_patient" : "Dodaj pacjenta",
		},
		"addService" : {
			"add_new_service" : "Dodaj nową usługę",
			"correct_add_service" : "Poprawnie dodano usługę",
			"service_name" : "Nazwa usługi",
			"service_description" : "Opis usługi",
			"please_correct_price" : "Proszę wpisać prawidłową kwotę",
		},
		"kindOfPain" : {
			"add_new_kindOfPain" : "Dodawanie nowej dolegliwości",
			"pain_name" : "Rodzaj dolegliwości",
			"pain_description" : "Opis dolegliwości",
			"correct_add_kindOfPain" : "Prawidłowo dodano rodzaj dolegliwości"
			
		},
		"interview" : {
			"add_an_interview" : "Dodaj wywiad",
			"pain" : "Ból",
			"location" : "Lokalizacja",
			"kind_of_pain" : "Rodzja bólu",
			"place_of_pain" : "Miejsce bólu",
			"choose_the_type_of_pain" : "Wybierz rodzaj bólu",
			"choose_a_place_of_pain" : "Wybierz miejsce bólu",
		},
		"visit" : {
			"date_of_visit" : "Data wizyty",
			"select_patient_from_list" : "Wybierz pacjenta z listy",
			"visit_of_the_day" : "Wizyta z dnia",
			"see_visits": "Zobacz wizyty",
			"end_visit" : "Zakończ wizytę",
			"details_of_the_visit" : "Szczegóły wizyty",
			"visit_length":"Czas trwania",
			"service_name" : "Nazwa usługi",
			"the_total_cost_of": "Całkowity koszt",
			"payment_method" : "Rodzaj płatności",
			"patient_data" : "Dane pacjenta",
			"firstName_lastName" : "Imię i nazwisko",
			"recommendations_after_a_visit" : "Rekomendacje po wizycie",
			"what_visit_length" : "Podaj długość wizyty",
			"visit_status" : "Status wizyty",
			"are_you_sure_end_visit" : "Czy na pewno chcesz zakończyć wizytę?",
			"end" :"Zakończ",
		},
		"contact" : {
			"subject" : "Temat",
			"select_subject" : "Wybierz temat",
			"message" : "Wiadomość",
			"enter_a_name" : "Wpisz imię",
			"enter_a_email" : "Wpisz e-mail",
			"content_message" : "Treść wiadomości",
			"message_content_is_required" : "Treść wiadomości jest wymagana",
			"send_a_message" : "Wyślij wiadomość",
			"our_office" : "Nasze biuro",
			"general" : "Ogólny",
			"suggestion" : "Sugestia",
			"support" : "Wsparcie",
		},
		"login" : {
			"welcome_login_page" : "Witaj na stronie logowania",
			"access_to_virtual_physiotherapy" : "Dostęp do wirtualnego gabinetu fizjoterapii. Jeśli masz konto, wpisz login i hasło poniżej, a jeśli nie masz:",
			"create_new_account" : "Stwórz nowe konto",
			"error" : "Błąd",
			"incorrect_login_or_password" : "Nieprawidłowy login lub hasło",
			"try_again" : "Spróbuj jeszcze raz",
			"login_is_required" : "Login jest wymagany",
			"password" : "Hasło",
			"password_is_required" : "Hasło jest wymagane",
		},
		"account" : {
			"account" : "Konto",
			"account_details" : "Szczegóły konta",
			"for_short_login" : "Za krótki login",
			"for_long_login" : "Za długi login",
		},
		"holiday" :{
			"make_holiday":"Ustal wakacje",
			"from" : "Początek",
			"to" : "Koniec",
			"required_start_date" : "Wymagane podanie początku urlopu",
			"required_end_date" : "Wymagane podanie końca urlopu",
		},
		"calendar" :{
			"add_a_visit" : "Dodaj wizytę",
			"set_a_day_off" : "Ustal dzień wolny",
		},
		"bodyPlace" : {
			"body_place_name" : "Obszar ciała",
			"body_place_description" : "Opis obszaru ciała",
			"add_new_body_place": "Dodaj nowy obszar ciała",
			"correct_add_body_place": "Prawidłowo dodano nowy obszar ciała",
			"": "",
		},
		"registration" : {
			"use_application" : "Aby korzystać z aplikacji należy rozpocząć od utworzenia konta logowania.",
			"marking_required_fields" : "Oznaczenie wymaganych pól",
			"create_new_user" : "Utworzono nowego użytkownika",
			"username_already_reserved" : "Nazwa usera została już zarezerwowana",
			"password_confirmation_required" : "Potwierdzenie hasła jest wymagane",
			"passwords_not_identical" : "Hasła nie są identyczne",
			"confirm_your_password" : "Potwierdź hasło",
			"create" : "Stwórz",
		},
		"commons" : {
			"physiotherapy_room" : "Gabinet fizjoterapii",
			"our_email" :"Nasz e-mail",
			"success" : "Sukces",
			"save" : "Zapisz",
			"cancel" : "Anuluj",
			"close" : "Zamknij",
			"clear" : "Wyczyść",
			"name" : "Nazwa",
			"login": "Login",
			"firstname" : "Imię",
			"lastName" : "Nazwisko",
			"address" : "Adres",
			"date_of_birth" : "Data urodzenia",
			"description" : "Opis",
			"price" : "Cena",
			"city" : "Miasto",
			"select" : "Wybierz",
			"street" : "Ulica",
			"number" : "Numer",
			"postcode" : "Kod pocztowy",
			"patient" : "Pacjent",
			"date" : "Data",
			"hour" : "Godzina",
			"age" : "Wiek",
			"gender" : "Płeć",
			"type" : "Typ",
			"pesel" : "Pesel",
			"phone" : "Telefon",
			"contents" : "Treść",
			"additional_information" : "Dodatkowe informacje",
			"man" : "mężczyzna",
	    	"woman" : "kobieta",
			"actions" : "Akcje",
			"send_email" : "Wyślij email",
			"select_patient" : "Wybierz pacjenta",
			"select_date" : "Wybierz datę",
			"select_hour" : "Wybierz godzinę",
			"services" : "Usługi",
			"select_service" : "Wybierz usługę",
			"name_is_required" : "Nazwa jest wymagana",
			"firstname_is_required" : "Imię jest wymagane",
			"lastname_is_required" : "Nazwisko jest wymagane",
			"price_is_required":"Cena jest wymagana",
			"date_of_birth_required" : "Data urodzenia jest wymagana",
			"incorrect_date" : "Nieprawidłowa data",
			"phone_is_required" : "Telefon jest wymagany",
			"email_is_required" : "E-mail jest wymagany",
			"incorrect_email" : "Nieprawidłowy e-mail",
			"postcode_is_required" : "Kod pocztowy jest wymagany",
			"pain_name_is_required" : "Rodzaj dolegliwości jest wymagany",
			"city_is_required" : "Miasto jest wymagane",
			"pesel_is_required" : "Pesel jest wymagany",
			"incorrect_pesel" : "Niewłaściwy pesel",
			"body_place_name_is_required" : "Nazwa obszaru ciała jest wymagana",
			"payment_method_required" : "Rodzaj płatności jest wymaganay",
			"please_enter_valid_postcode" : "Proszę podać prawidłowy kod pocztowy",
			"changes_have_been_saved" : "Zmiany zostały zapisane",
			"search" : "Szukaj",
			"card" : "Karta",
			"cash" : "Gotówka",
			"installment" : "Raty",
			"finish" : "Zakończona",
			"reservation" : "Zarezerwowana",
			"personal_info" : "Dane osobiste",
			"Search" : "Wyszukaj",
			"search" : "wyszukaj",
			"remove" : "Usuń",
		}
	 })
})