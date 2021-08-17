import { gsap, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');
  const text = node.querySelectorAll('ul > li')

  tl
    .from(node, { duration:0.3, display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, { duration:0.15, autoAlpha: 0, y: 45, ease: Power1.easeInOut })
    .from(contentInner, { duration: 0.10, autoAlpha: 0, delay: 0.15, ease: Power1.easeOut })
    .from(text, { duration: 0.20, autoAlpha: 0, delay: 0.25, ease: Power1.easeIn }); //added for ul li
  return tl;
}

const getHomeTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const texts = node.querySelectorAll('h1 > div');

  tl
    .from(node, { duration: 0, display: 'none', autoAlpha: 0, delay })
    .fromTo(texts, { x: 200, y: 100, opacity:0 }, { x: 0, duration:3, opacity:100 });

  return tl;
}
//OnEnter 
export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getDefaultTimeline(node, delay);
    timeline.play()
}
//OnExit
export const exit = (node) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(node, { duration:0.15, autoAlpha: 0, ease: Power1.easeOut });
  tl.play();
}
