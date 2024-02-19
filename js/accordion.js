(() => {

    const $elm1 = document.querySelector('#js-accordion1');
    const $trigger1 = $elm1.getElementsByTagName('p');

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    let displayValue = 'block';
    if (viewportWidth > 600) {
        displayValue = 'flex';
      }

    $trigger1[0].addEventListener('click', (e) => clickHandler(e));
    $trigger1[1].addEventListener('click', (e) => clickHandler(e));

    const clickHandler = (e) => {
        e.preventDefault();

        const $content1 = document.querySelector('.hidden');
        const $atrigger1 = document.querySelector('.jaccordion-trigger1');
        const $atrigger2 = document.querySelector('.jaccordion-trigger2');


            if($content1.style.display === displayValue){
            $content1.style.display = 'none';
            $atrigger1.style.display = 'inline-block';
            $atrigger2.style.display = 'none';
            } else {
            $content1.style.display = displayValue;
            $atrigger1.style.display = 'none';
            $atrigger2.style.display = 'inline-block';
            };


    };
    

    const $elm2 = document.querySelector('#js-accordion2');
    const $trigger2 = $elm2.getElementsByTagName('p');

    $trigger2[0].addEventListener('click', (e) => clickHandler2(e));
    $trigger2[1].addEventListener('click', (e) => clickHandler2(e));

    const clickHandler2 = (e) => {
        e.preventDefault();

        const $content2 = document.querySelector('.hidden2');
        const $btrigger1 = document.querySelector('.jaccordion-trigger3');
        const $btrigger2 = document.querySelector('.jaccordion-trigger4');


            if($content2.style.display === displayValue){
            $content2.style.display = 'none';
            $btrigger1.style.display = 'inline-block';
            $btrigger2.style.display = 'none';
            } else {
            $content2.style.display = displayValue;
            $btrigger1.style.display = 'none';
            $btrigger2.style.display = 'inline-block';
            };


    };

})();


// javascriptはまだ勉強中です
// I am still learning JavaScript.
