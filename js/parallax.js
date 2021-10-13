gsap.registerPlugin(ScrollTrigger);
gsap.config({nullTargetWarn:false});

const bWrap = document.getElementById('bubbles') || false;

const bGroup1 = document.getElementById('bubble-group-1') || false;
const bGroup2 = document.getElementById('bubble-group-2') || false;
const bGroup3 = document.getElementById('bubble-group-3') || false;

const bGrey1 = document.getElementById('bubble-grey-1') || false;
const bGrey2 = document.getElementById('bubble-grey-2') || false;
const bGrey3 = document.getElementById('bubble-grey-3') || false;
const bGrey4 = document.getElementById('bubble-grey-4') || false;
const bGrey5 = document.getElementById('bubble-grey-5') || false;
const bGrey6 = document.getElementById('bubble-grey-6') || false;
const bGrey7 = document.getElementById('bubble-grey-7') || false;

const bBlue1 = document.getElementById('bubble-blue-1') || false;
const bBlue2 = document.getElementById('bubble-blue-2') || false;

const bGreen1 = document.getElementById('bubble-green-1') || false;

const bViolet1 = document.getElementById('bubble-violet-1') || false;

const bYellow1 = document.getElementById('bubble-yellow-1') || false;
const bYellow2 = document.getElementById('bubble-yellow-2') || false;
const bYellow3 = document.getElementById('bubble-yellow-3') || false;
const bYellow4 = document.getElementById('bubble-yellow-4') || false;


gsap.to(bGroup1, {
	yPercent: -10,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGroup2, {
	yPercent: -10,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGroup3, {
	yPercent: -10,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGrey1, {
	y: -75,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bBlue1, {
	y: -90,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGreen1, {
	y: -160,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bYellow1, {
	y: -200,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGrey2, {
	y: -75,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGrey3, {
	y: -125,
	ease: "none",
	scrollTrigger: {
		trigger: '.branch',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bViolet1, {
	y: -150,
	ease: "none",
	scrollTrigger: {
	  trigger: '.first-screen',
	  start: "center center",
	  scrub: true
	}, 
});

gsap.to(bGrey4, {
	y: -150,
	ease: "none",
	scrollTrigger: {
	  trigger: '.branch',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bGrey5, {
	y: -110,
	ease: "none",
	scrollTrigger: {
	  trigger: '.branch',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bYellow2, {
	y: -170,
	ease: "none",
	scrollTrigger: {
	  trigger: '.branch',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bYellow3, {
	y: -190,
	ease: "none",
	scrollTrigger: {
	  trigger: '.branch',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bYellow4, {
	y: -185,
	ease: "none",
	scrollTrigger: {
	  trigger: '.branch',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bGrey6, {
	y: -180,
	ease: "none",
	scrollTrigger: {
	  trigger: '.about',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bGrey7, {
	y: -120,
	ease: "none",
	scrollTrigger: {
	  trigger: '.about',
	  start: "center bottom",
	  scrub: true
	}, 
});

gsap.to(bBlue2, {
	y: -185,
	ease: "none",
	scrollTrigger: {
	  trigger: '.about',
	  start: "center bottom",
	  scrub: true
	}, 
});


/* Fixed Header */

// const showAnim = gsap.from('.header', { || false 
// 	yPercent: -105,
// 	paused: true,
// 	duration: 0.2,
// 	zIndex: 1,
//   }).progress(1);

// ScrollTrigger.create({
// 	start: 'top top',
// 	end: 99999,
// 	position: 'fixed',
// 	onUpdate: (self) => {
// 		self.direction === -1 ? showAnim.play() : showAnim.reverse()
// 	}

// });

/* Fixed Header */

// ScrollTrigger.create({
// 	trigger: '.header',
// 	start: 'top top',
// 	endTrigger: 'footer',
// 	end: 'bottom+=100vh bottom',
// 	pin: true,
// 	pinType: "fixed",
// 	pinReparent: true,
// 	refreshPriority: -1,
// 	pinSpacing: false
// });

/* Push Away from Cursor */


// ScrollTrigger.batch(".features__item", {
// 	interval: 0.1,
// 	batchMax: 0,
// 	onEnter: batch => gsap.to(batch, {autoAlpha: 1, y: 0, stagger: 0.2, overwrite: true}),
// 	onLeave: batch => gsap.set(batch, {autoAlpha: 0, y: 100, overwrite: true}),
// 	onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, y: 0, stagger: 0.2, overwrite: true}),
// 	onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, y: 100, overwrite: true})
// });