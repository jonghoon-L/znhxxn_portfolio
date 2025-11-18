'use client'

export default function InteractiveIcons() {
  const icons = [
    // 1. Java
    { 
      name: 'Java', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      pos: { top: '0%', left: '10%' },
      delay: '0s', duration: '8s'
    },
    // 2. Spring Boot
    { 
      name: 'Spring Boot', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      pos: { top: '5%', left: '40%' },
      delay: '1s', duration: '9s'
    },
    // 3. Node.js
    { 
      name: 'Node.js', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      pos: { top: '0%', left: '75%' },
      delay: '2s', duration: '7s'
    },
    // 4. TypeScript
    { 
      name: 'TypeScript', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      pos: { top: '30%', left: '5%' },
      delay: '0.5s', duration: '10s'
    },
    // 5. JavaScript
    { 
      name: 'JavaScript', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      pos: { top: '35%', left: '35%' },
      delay: '1.5s', duration: '8.5s'
    },
    // 6. AWS
    { 
      name: 'AWS', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      isWide: true, 
      pos: { top: '25%', left: '70%' },
      delay: '2.5s', duration: '9.5s'
    },
    // 7. Docker
    { 
      name: 'Docker', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      pos: { top: '60%', left: '10%' },
      delay: '1s', duration: '7.5s'
    },
    // 8. MySQL
    { 
      name: 'MySQL', 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      pos: { top: '65%', left: '45%' },
      delay: '3s', duration: '8s'
    },
    // 9. Git Actions
    { 
      name: 'Git Actions', 
      src: 'https://img.icons8.com/ios-glyphs/90/ffffff/github.png', 
      pos: { top: '55%', left: '80%' },
      delay: '0.2s', duration: '9s'
    },
    // 10. Sentry
    { 
      name: 'Sentry', 
      src: 'https://cdn.worldvectorlogo.com/logos/sentry-3.svg',
      pos: { top: '72%', left: '25%' },
      delay: '2s', duration: '10s'
    },
  ]

  return (
    <div className="w-full h-[400px] relative overflow-visible select-none">
      {icons.map((item, idx) => (
        <div
          key={idx}
          className="absolute animate-float cursor-pointer group"
          style={{
            top: item.pos.top,
            left: item.pos.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          <div 
            className={`
              relative transition-all duration-300 ease-out
              group-hover:scale-125 group-hover:z-50 group-hover:[animation-play-state:paused] group-hover:drop-shadow-2xl
            `}
          >
            <img 
              src={item.src} 
              alt={item.name}
              className={`${item.isWide ? 'w-28' : 'w-20 h-20'} object-contain drop-shadow-md opacity-90 hover:opacity-100`}
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-foreground/90 text-background text-xs px-2 py-1 rounded-md font-bold pointer-events-none z-50">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}