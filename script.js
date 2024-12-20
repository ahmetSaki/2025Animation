document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden'; // HIDES THE SCROLL BAR
    var windowHeight = window.innerHeight;


    // FIRST ANIMATION FUNCTION

    function firstAnimation() {
        anime({
            targets: '#year2025Container',
            translateX: -567,
            duration: 4000,
            easing: 'easeInOutQuad',
            complete: function (anim) {
                anime({
                    targets: '#yearBalloon',
                    translateX: -29,
                    duration: 4000,
                    easing: 'easeInOutQuad',
                    complete: function (anim) {
                        // SECOND ANIMATION FUNCTION WORKS AFTER FIRST ANIMATION FUNCTION
                        secondAnimation();
                    }
                });
            },
        });

        anime({
            targets: '.fixed',
            translateX: 200,
            duration: 4000,
            easing: 'easeInOutQuad',
        });
    }


    // SECOND ANIMATION FUNCTION

    function secondAnimation() {
        anime({
            targets: '.balloon2024',
            translateY: -windowHeight / 2 - 13,
            duration: 4000,
            easing: 'easeInOutQuad',
            complete: function (anim) {
                // YEAR2025 FUNCTION WORKS AFTER SECOND ANIMATION FUNCTION
                year2025();
            }
        });
    }


    // YEAR2025 FUNCTION

    function year2025() {
        anime({
            targets: '#year2025',
            translateX: -33,
            duration: 4000,
            easing: 'easeInOutQuad',
            complete: function (anim) {
                // NEWYEAR FUNCTION WORKS AFTER YEAR2025 FUNCTION
                newYear();
            }
        });
    }


    // NEWYEAR FUNCTION

    function newYear() {
        var newYearText = document.getElementById('newYearText');
        var years = document.getElementById('years');

        newYearText.style.display = 'flex';
        newYearText.style.color = 'white';
        years.style.color = 'white';
        document.body.style.background = ' rgb(221, 45, 45)'
        anime({
            targets: '#newYearText',
            translateY: 269,
            duration: 4000,
            easing: 'easeInOutQuad',
            complete: function (anim) {
                var balloons = document.getElementById('balloons');
                balloons.style.display = 'flex';
                anime({
                    targets: '#balloons',
                    translateY: -windowHeight - 200,
                    duration: 4000,
                    easing: 'easeInOutQuad',
                })
            }
        })
    }



    // START ANIMATIONS IN SEQUENCE
    firstAnimation();
});
