
    


	var CharTimeout = 50; // скорость печатания
	var StoryTimeout = 2000; // время ожидания перед переключением

	var Summaries = new Array();
	var SiteLinks = new Array();

		Summaries[0] = 'Я веб разработчик.';
		SiteLinks[0] = '#';
		Summaries[1] = 'Создаю сайты на основе CMS';
		SiteLinks[1] = '#';
		Summaries[2] = 'Опыт работы более 2 лет';
		SiteLinks[2] = '#';
		Summaries[3] = 'Живу в МО, пгрк Некрасовский.';
		SiteLinks[3] = '#';
		
	/* Печатание текста - Тиккер
	----------------------------------------------------------------
	var CharTimeout = 20;
	var StoryTimeout = 7000;
	var Summaries = new Array();
	var SiteLinks = new Array();
		Summaries[0] = "CMS для простых сайтов GetSimple на русском языке";
		SiteLinks[0] = "#link1";
		Summaries[1] = "Spectrum - шикарная тема для WordPress на русском языке";
		SiteLinks[1] = "#link2";
	startTicker();
	*/

	function startTicker(){
		massiveItemCount =  Number(Summaries.length); //количество элементов массива
		// Определяем значения запуска
		CurrentStory     = -1;
		CurrentLength    = 0;
		// Расположение объекта
		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();     
	}
	// Основной цикл тиккера
	function runTheTicker(){
		var myTimeout;  
		// Переход к следующему элементу
		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
			AnchorObject.href = SiteLinks[CurrentStory];
		}
		// Располагаем текущий текст в анкор с печатанием
		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		// Преобразуем длину для подстроки и определяем таймер
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}
		// Повторяем цикл с учетом задержки
		setTimeout("runTheTicker()", myTimeout);
	}
	// Генератор подстановки знака
	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "|";
	}

	startTicker();

	//carousel 
	const container = document.getElementById("myCarousel");
	const options = { Dots: false };

	new Carousel(container, options, { Thumbs });