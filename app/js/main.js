if($(window).width() <= 1366) {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0){
        $('.header__menu').addClass("header__menu_sticky");
        $('.header__list > li').first().css('display', 'block');
        }
        else{
        $('.header__menu').removeClass("header__menu_sticky");
        $('.header__list > li').first().css('display', 'none')
        }
    });
} else {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 160){
        $('.header__menu').addClass("header__menu_sticky");
        $('.header__list > li').first().css('display', 'block');
        }
        else{
        $('.header__menu').removeClass("header__menu_sticky");
        $('.header__list > li').first().css('display', 'none')
        }
    });
}



// Фикс header ^

$(document).on('click', '.menu-img', function() {
    $('.header__menu_hidden').addClass('header__menu_modal');
    $('.menu').addClass('menu_open');
});
$(document).on('click', '.menu__close, .link__head', function() {
    $('.header__menu_hidden').removeClass('header__menu_modal');
    $('.menu').removeClass('menu_open');
    // clear()
});

// Конец появление меню ^

$(document).on('click', '#login, #loginTablet', function() {

    $('.header__menu_hidden').addClass('header__menu_modal');
    $('.menu').css('display', 'none');
    $('.header__modal-login').css('display', 'flex');
});

$(document).on('click', '.modal-login__close', function() {

    $('.header__menu_hidden').removeClass('header__menu_modal');
    $('.menu').css('display', 'block');
    $('.header__modal-login').css('display', 'none');
    $('.modal-login__main-mail').val('');
    $('.modal-login__main-mail').css('border-color', 'rgba(0, 0, 0, 0.4)');
});

// Появление окна входа ^

$(document).on('click', '.modal-login__footer-button', function() {

    var login = $('#mail').val();
    var password = $('#pass').val();
    if( login != '' && password != '' ) {
        $('#mail, #pass').css('border-color', 'rgba(0, 0, 0, 0.4)')
    }   else if( login == '' || password == '' ) {
        $('#mail, #pass').css('border-color', 'red')
    }
});

// проверка пустых полей ^

$(document).on('click', '.menu__list > li:not(li:first)', function() {
    
    $(this).children().toggle('menu__list_hidden').parent().toggleClass('menu__list-item_red')
    $('.menu__list > li').not(this).toggle('menu__list_hidden');
    
});

// Открытие/скрытие подпунктов меню ^

$(document).on('mouseover', '.articles__title-news, .news-feed__item, .news-bottom__item', function() {
    
    $(this).children('.title__container').children().css('text-decoration', 'underline')
})
$(document).on('mouseout', '.articles__title-news, .news-feed__item, .news-bottom__item', function() {

    $(this).children('.title__container').children().css('text-decoration', 'none')
})

// Hover статей ^

function clear() {

    
}