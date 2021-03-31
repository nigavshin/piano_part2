const slider = new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 2,
    gap: 50,
    // autoplay:2000,
    focusAt:0,
    bound:true,
    
    peek: {
        before: 0,
        after: 240,
        
    },

    breakpoints: {
        1024: {
        perView: 1,
        },

        667: {
            peek: {
                before: 0,
                after: 0,
                
            },
        },
    }

})

slider.mount();
