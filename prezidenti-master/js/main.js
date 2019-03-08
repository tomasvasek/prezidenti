$(function () {
    $('#ustava p').hide();
    $('#ustava h4').on('click', function () {
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({ 'background-color': '#38a' });
        } else {
            $(this).css({ 'background-color': '#444' });
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var kviz = $('#kviz div.row');
    prezidenti.forEach(function (obj, idx) {
        console.log(obj.photo);
        /*kviz.append('<div class="col-sm-4"><figure><img src="img/'
        +obj.photo+'" alt="'+obj.name+'"><figcaption>'
        +obj.name+'</figcaption></figure></div>');*/
        kviz.append('<div class="col-sm-4"><figure id="' + idx + '"><img src="img/prezident0.jpg" alt="Prezident"><figcaption>'
            + obj.name + '</figcaption></figure></div>');
    });

    /* Po kliknutí na img se náhodně mění fotky */
    var photo = $('#kviz img');
    photo.on('click', function (event) {
        var index = Math.floor(Math.random() * prezidenti.length);
        $(this).attr('src', 'img/' + prezidenti[index].photo)
            .attr('alt', prezidenti[index].name);
            console.log(event);
            if (event.altKey){
                $('#mojeokno').find('#img').text(prezidenti[index].photo)
                $('#mojeokno').find('.modal-title').text(prezidenti[index].name);
                $('#mojeokno').find('#narozeni').text(prezidenti[index].borned);
                $('#mojeokno').find('#umrti').text(prezidenti[index].died);
                $('#mojeokno').find('#popis').text(prezidenti[index].description);
                $('#mojeokno').find('a').attr('href',prezidenti[index].link);
                $('#mojeokno').modal('show');
            }
    });

    /* Po kliknutí na tlačítko Ověřit ohraničí červeně špatné a zeleně správné odpovědi  */
    var check = $('#kviz .btn-success').on('click', function () {
        $('#kviz figure').each(function (idx, obj) {
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({ 'border': '2px solid green' });
            } else {
                $(obj).find('img').css({ 'border': '2px solid red' });
            }
        });
    });

    function zmenaTextu(i){
        $('#perlicky h4').text(perlicky[i].title);
        $('#perlicky p').text(perlicky[i].text);
    }

    var a = 0;
    zmenaTextu(a);
    $('#perlicky .btn-success').on('click', function () {
        a < perlicky.length - 1 ? a++ : a = 0;
        zmenaTextu(a);
    })

    var i = 0;
    window.setInterval(function () {
        $('#sidlo img').attr('src', 'img/' + sidla[i].photo);
        $('#sidlo figcaption').text(sidla[i].place);
        i < sidla.length - 1 ? i++ : i = 0;
    }, 3000);

    var odkazy = $('#odkazy ul');
    prezidenti.forEach(function (obj, idx) {
        odkazy.append('<li><a href="' + obj.link + '" target="_blank">'
            + obj.name + '</a></li>');
    });
})