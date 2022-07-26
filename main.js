const btnList = document.querySelectorAll('.btn-list .btn-add-txt, .special-character .character button');
const txtBox = document.querySelector('.txt-box .txt');

btnList.forEach(e => {
    e.addEventListener('click', () => {
        txtBox.value += e.innerHTML
        txtBox.focus()
    });
});

const characterBtn = document.querySelector('.character-wrap');
function toggleBox(target) {
    if(target !== null) {
        if(characterBtn.classList.contains('show')) {
            characterBtn.classList.remove('show')
        } else {
            characterBtn.classList.add('show')
        }
        document.addEventListener('click', e => {
            if(e.target.closest(target) == null) {
                characterBtn.classList.remove('show')
            }
        });
    }
};

const specialTabBtn = document.querySelectorAll('.special-character .btn-wrap .btn');
const specialTabCon = document.querySelectorAll('.special-character .character');

if(specialTabBtn.length > 0) {
    const siblingsBtn = t => [...specialTabBtn].filter(e => e !== t);
    const siblingsCon = t => [...specialTabCon].filter(e => e !== t);

    for(let i = 0; i < specialTabBtn.length; i++) {
        specialTabBtn[i].addEventListener('click', () => {
            specialTabBtn[i].classList.add('active');
            specialTabCon[i].classList.add('active');
            const siblingBtn = siblingsBtn(specialTabBtn[i]);
            const siblingCon = siblingsCon(specialTabCon[i]);

            siblingBtn.forEach(function(e) {
                e.classList.remove('active');
            });
            siblingCon.forEach(function(e) {
                e.classList.remove('active')
            })
        });
    }
}