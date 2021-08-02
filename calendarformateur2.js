document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

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
      id : 'e',
      title: 'Item Télécom222 - VCM26000',
      start: new Date('2021-08-12T08:30:00'),
      end: new Date('2021-08-12T17:00:00'),
      description : '<br/> Salle : Salle telecom <br/> Formateur : FormateurC <br/> VCM26000 : Maintenance IPBX type NeXspan <br/>',
      classNames : ['bg-teal','pl-2']
    },
    {
      id : 'a',
      title: 'Item Télécom222 - VCM26000',
      start: new Date('2021-10-12T08:30:00'),
      end: new Date('2021-10-12T17:00:00'),
      description : '<br/> Salle : Salle telecom <br/> Formateur : FormateurB <br/> VCM26000 : Maintenance IPBX type NeXspan ',
      classNames : ['bg-primary','pl-2']
    },
    {
        id : 'b',
        title: 'Item 1 - VT160000	',
        start: new Date('2021-10-13T08:30:00'),
        end: new Date('2021-10-13T10:00:00'),
        description : '<br/> Salle : Salle spec1 <br/> Formateur : FormateurA <br/> VT160000 : Réseaux IP et applicatifs SNCF	 ',
        classNames : ['bg-teal','pl-2']
    },

    {
        id : 'c',
        title: 'Item 2 - VT160000	',
        start: new Date('2021-10-13T10:30:00'),
        end: new Date('2021-10-13T12:00:00'),
        description : '<br/> Salle : Salle bana1 <br/> Formateur : FormateurA <br/> VT160000 : Réseaux IP et applicatifs SNCF	 ',
        classNames : ['bg-teal','pl-2']
    },

    {
        id : 'd',
        title: 'Item 3 - VT160000	',
        start: new Date('2021-10-13T13:30:00'),
        end: new Date('2021-10-13T15:00:00'),
        description : '<br/> Salle : Salle spec2 <br/> Formateur : FormateurA <br/> VT160000 : Réseaux IP et applicatifs SNCF	 ',
        classNames : ['bg-teal','pl-2']
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