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
      selectable: true,
      weekends : false,
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
      eventClick: function(info) {
        //alert('Event: ' + info.event.title);
        //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        //alert('View: ' + info.view.type);

        // change the border color just for fun
        //info.el.style.borderColor = 'red';
        $('#myModal').modal('show')
        $('#titresession').text(info.event._def.title)
        var datedebut = info.event.start
        console.log(datedebut)
        var datefin = info.event.end
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
        $('#datedebut').text("Date début: "+new Date(datedebut).toLocaleDateString("fr",options))
        $('#datefin').text("Date fin: "+new Date(datefin).toLocaleDateString("fr",options))

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
      nextDayThreshold: '00:00:00',
      events: [
        {
            id : 'c',
            title: 'NVV0000861 : Agent PN en travaux TS',
            start: new Date('2021-06-08T08:30:00'),
            end: new Date('2021-06-08T17:00:00'),
            description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
            classNames : ['bg-warning','pl-2']
        },
        {
            id : 'c',
            title: 'NVV0000861 : Agent PN en travaux TS',
            start: new Date('2021-06-09T08:30:00'),
            end: new Date('2021-06-09T17:00:00'),
            description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
            classNames : ['bg-warning','pl-2']
        },
        {
            id : 'f',
            title: 'NVV0000251 : Agent PN en travaux TS',
            start: new Date('2021-06-02T08:30:00'),
            end: new Date('2021-06-02T17:00:00'),
            description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
            classNames : ['bg-warning','pl-2']
        },
        {
            id : 'f',
            title: 'NVV0000251 : Agent PN en travaux TS',
            start: new Date('2021-06-03T08:30:00'),
            end: new Date('2021-06-03T17:00:00'),
            description : '<br/> Salle : Tourraine 01 <br/> Formateur : Dupont Jean ',
            classNames : ['bg-warning','pl-2']
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