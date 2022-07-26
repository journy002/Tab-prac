const btnBox = document.querySelectorAll('.btn-list .btn-add-txt');
const txtBox = document.querySelector('.txt-box .txt');
const characterTabBtn = document.querySelector('.character-wrap')


btnBox.forEach(e => {
    e.addEventListener('click', () => {
        let txt = e.innerHTML;
        txtBox.value += txt;
        txtBox.focus();
    });
});


function toggleBox(target) {
    const tabShow = document.querySelector(target);
    if(tabShow !== null) {
        if(tabShow.classList.contains('show')){
            tabShow.classList.remove('show');
        }else {
            tabShow.classList.add('show')
        }
        document.addEventListener('click', (e) => {
            if(e.target.closest(target) == null) {
                tabShow.classList.remove('show')
            }
        })
    };
};

const characterBtn = document.querySelectorAll('.special-character > .btn-wrap .btn');
const characterCon = document.querySelectorAll('.special-character .character');

if(characterBtn.length > 0) {
    const siblingsTabBtn = t => [...characterBtn].filter(e => e !== t);
    const siblingsTabCon = t => [...characterCon].filter(e => e !== t);

    for(let i = 0; i < characterBtn.length; i++) {
        characterBtn[i].addEventListener('click', function(){
            characterBtn[i].classList.add('active');
            characterCon[i].classList.add('active');
            const siblingsBtn = siblingsTabBtn(characterBtn[i]);
            const siblingsCon = siblingsTabCon(characterCon[i]);

            siblingsBtn.forEach(function(e) {
                e.classList.remove('active');
            });
            siblingsCon.forEach(function(e){
                e.classList.remove('active')
            });
        });
    };
};
