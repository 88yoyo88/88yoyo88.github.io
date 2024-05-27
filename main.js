//gsap.to('.logo', {y: 300, duration: 2})

 window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight))
        })
