function writeFromFill(output, text, fill, time){
    let mainText = '';
    for(let i=0; i<text.length; i++){
        mainText += fill
    }
    $(output).text(mainText)
    for(let i=0; i<text.length; i++){
        setTimeout(function(){
            mainText = mainText.substring(0, i) + text[i] + mainText.substring(i + 1)
            $(output).text(mainText)
        }, time * i)
    }
}
writeFromFill('#logoText', 'password Generation', '?', 50)

function generatePassword(character, length){
    let password = ''
    for(i=0; i<length; i++){
        password += character[Math.floor(Math.random() * character.length)]
    }
    return password
}

$('#randomAC').click(function(){
    $('#acceptCharacter').val('') 
    const randCharacter = '!-_?@$%--*&^(qwertyuiopasdfghjklzxcvbnmasdfjklzvm)1234567890#&-(!@#&;?:\+-QWERTYUIOPASDFGHJKLZXCVBNM-*\_-{<?>}~+=,.[|]:;'
    for(let i=0; i<20 + $('#numberCharacters').val()/2; i++){
        acceptCharacter.value += randCharacter[Math.floor(Math.random() * randCharacter.length)]
    }
})
$('#numberCharacters').on('input', function(){
    $('.range p').text(`number of allowed characters: ${$('#numberCharacters').val()}`)
})
$('.range p').text(`number of allowed characters: ${$('#numberCharacters').val()}`)

$('#generatePassword').click(function(){
    if($('#acceptCharacter').val().length > 0){
        if($('.outputContainer').length == 0){
            $('.wrap').append(`
                <div class="outputContainer">
                    <p style="margin-left: 10px;">output</p>
                    <div class="output"><p>${generatePassword($('#acceptCharacter').val(), $('#numberCharacters').val())}</p></div>
                </div>`)
        } else $('.output p').text(generatePassword($('#acceptCharacter').val(), $('#numberCharacters').val()))
    } else $('#errorAlert').css('display', 'flex')
})
$('#acceptCharacter').on('input', function(){
    if($('#acceptCharacter').val().length > 0) $('#errorAlert').css('display', 'none')
})