document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar2');

var calendar = new FullCalendar.Calendar(calendarEl, {
  headerToolbar: {
    left: 'prev,next today,datepicker',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },
  locale: 'fr' ,
  weekNumbers : 'true',
  minTime: '08:30:00',
  maxTime: '17:00:00',
  navLinks: true,
  businessHours: true, // display business hours
  editable: true,
  weekends : false,
  selectable: true,
  contentHeight: 600,
  eventLimit: true,
  customButtons: {
        // Add custom datepicker
        datepicker: {
            text: 'Choisir une date',
            click: function(e) {
                picker.show();
            }
        }
    },

  eventMouseEnter: function(info) {
    var tis=info.el;
    var popup=info.event._def
    var start = info.event.start
    var end = info.event.end
    var description = info.event._def.extendedProps.description
    const options = {
        timeZone:"Europe/Paris",
        hour12 : false,
        hour:  "2-digit",
        minute: "2-digit",
        weekday: "long",
        year: "numeric",
        month:"long",
        day:"numeric"
    }
    var displaystart = new Date(start).toLocaleDateString("fr",options)
    var displayend = new Date(end).toLocaleDateString("fr",options)
    var tooltip = '<div class="tooltipevent" style="top:'+($(tis).offset().top-5)+'px;left:'+($(tis).offset().left+($(tis).width())/2)+'px"><div class="text-center">' + popup.title + '</div><div> Début : ' + displaystart + ' <br/> Fin : ' +displayend +''+description+'</div></div>';
    var $tooltip = $(tooltip).appendTo('body');
  },
eventMouseLeave: function(info) {
        $(info.el).css('z-index', 8);
        $('.tooltipevent').remove();
},
  businessHours: [ // specify an array instead
    {
        daysOfWeek: [ 2, 3, 4 ],
        startTime: '08:30', 
        endTime: '17:00'
    },
    {
        daysOfWeek: [ 1 ],
        startTime: '13:30', 
        endTime: '17:00' 
    },
    {
        daysOfWeek: [ 5 ], 
        startTime: '8:30', 
        endTime: '12:00' 
    }
  ],
  nextDayThreshold: '00:00:00',
  events: [
    {
      id : 'a',
      title: 'NVE0000047 : Protections MICOM P12x',
      start: new Date('2021-06-02T13:30:00'),
      end: new Date('2021-06-02T17:00:00'),
      description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-success']
    },
    {
      id : 'a',
      title: 'NVE0000047 : Protections MICOM P12x',
      start: new Date('2021-06-03T08:30:00'),
      end: new Date('2021-06-03T17:00:00'),
      description : '<br/> Salle : Tourraine 02 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-success']
    },
    {
      id : 'b',
      title: 'NVE0000053 : Protections MICOM P12x',
      start: new Date('2021-06-23T13:30:00'),
      end: new Date('2021-06-23T17:00:00'),
      description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-success']
    },
    {
      id : 'b',
      title: 'NVE0000053 : Protections MICOM P12x',
      start: new Date('2021-06-24T08:30:00'),
      end: new Date('2021-06-24T17:00:00'),
      description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-success']
    },
    {
      id : 'c',
      title: 'NVV0000861 : Agent PN en travaux TS',
      start: new Date('2021-06-15T08:30:00'),
      end: new Date('2021-06-15T17:00:00'),
      description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-warning']
    },
    {
      id : 'c',
      title: 'NVV0000861 : Agent PN en travaux TS',
      start: new Date('2021-06-16T08:30:00'),
      end: new Date('2021-06-16T17:00:00'),
      description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
      classNames : ['bg-warning']
    },               
    
  ],
});
calendar.render();
var i18n = {
  previousMonth	: 'Mois précédent',
  nextMonth		: 'Mois prochain',
  months 			: ['Janvier','Février', 'Mars','Avril','Mai','Juin','Juillet','Août','Septembre',"Octobre","Novembre","Décembre"],
  weekdays		: [" lundi "," mardi "," mercredi "," jeudi "," vendredi "," samedi ","dimanche"],
  weekdaysShort	: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam','Dim']
};
var picker = new Pikaday({
    field: document.querySelector('.fc-datepicker-button'),
    format: 'yy-mm-dd',
    i18n: i18n,
    onSelect: function(dateString) {
        picker.gotoDate(new Date(dateString));
        calendar.gotoDate(new Date(dateString));
    }
});
});