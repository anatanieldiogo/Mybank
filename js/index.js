$('.my-call-modal-transfer').click(function(){
    $('.my-modal-transfer').css('display', 'block')
    $('.my-back').css('display', 'block')
})

$('.my-back').click(function(){
    $('.my-modal-transfer').css('display', 'none')
    $('.my-back').css('display', 'none')
})

$('.my-modal-transfer-close').click(function(){
    $('.my-modal-transfer').css('display', 'none')
    $('.my-back').css('display', 'none')
})