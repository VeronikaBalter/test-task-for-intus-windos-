module.exports = {
   purge: ['./public/**/*.html','./src/**/*.vue',],
   darkMode: false,
   theme: {
      screens: {
         'sm': '0px',
         'md': '1024px',
         'lg': '1920px',
      },
      extend: {
         padding: {
           '15px': '15px',
         },
         fontSize:{
            '32px': ['32px', {
               lineHeight: '42px',
            }],            
            '26px': ['26px', {
               lineHeight: '34px',
            }],
            '16px': ['16px', {
               lineHeight: '21px',
            }],
         },
         boxShadow: {
            '0-4-16': '0px 4px 16px rgba(32, 32, 32, 0.05)',
         },
         colors: {
            'dark-grey': '#878787',
            'neutral-black':'#202020',
            'error':'#BA1200'
         },
         animation: {
            loader: 'loader 0.6s infinite alternate'
          },
          keyframes: {
            loader: {
              to: {
                opacity: 0.1,
                transform: 'translate3d(0, -1rem, 0)'
              }
            }
          }
       }
   },
 };