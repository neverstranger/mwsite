function changeSeason() {

  const date = new Date();
  currentSeason = date.getMonth();
  console.log(currentSeason);

  if (currentSeason<=4 && currentSeason>=2) { //spring march-may

    document.documentElement.style.setProperty('--seasonal-image-small', 'url(../images/springsmall.jpeg)');
    document.documentElement.style.setProperty('--seasonal-image-large', 'url(../images/spring.jpeg)');
    document.documentElement.style.setProperty('--dark-colour', 'rgb(37, 36, 27)');
    document.documentElement.style.setProperty('--light-colour', 'rgb(211, 203, 216)');
    document.documentElement.style.setProperty('--accent-dk', 'rgb(73, 56, 43)');
    document.documentElement.style.setProperty('--accent-lt', 'rgb(142, 125, 104)');
    }
    else if(currentSeason<=7 && currentSeason>=5) { //summer months june-aug


    document.documentElement.style.setProperty('--seasonal-image-small', 'url(../images/summerimagesmall.jpeg)');
    document.documentElement.style.setProperty('--seasonal-image-large', 'url(../images/summerimage.jpeg)');
    document.documentElement.style.setProperty('--dark-colour', 'rgb(66, 72, 53)');
    document.documentElement.style.setProperty('--light-colour', 'rgb(191, 212, 205)');
    document.documentElement.style.setProperty('--accent-dk', '(191, 212, 205)');
    document.documentElement.style.setProperty('--accent-lt', 'rgb(143, 183, 216)');
   }
   else if(currentSeason===8 || currentSeason===9) { //autumn months sep, oct


    document.documentElement.style.setProperty('--seasonal-image-small', 'url(../images/autumn.jpg)');
    document.documentElement.style.setProperty('--seasonal-image-large', 'url(../images/autumn.jpg)');
    document.documentElement.style.setProperty('--dark-colour', 'rgb(73, 71, 69)');
    document.documentElement.style.setProperty('--light-colour', 'rgb(206, 199, 174)');
    document.documentElement.style.setProperty('--accent-dk', '(73, 144, 225)');
    document.documentElement.style.setProperty('--accent-lt', 'rgb(140, 195, 242)');
   }
     else if(currentSeason<=2 || currentSeason>=10) { //winter months nov-march


    document.documentElement.style.setProperty('--seasonal-image-small', 'url(../images/mobilewinter.jpeg)');
    document.documentElement.style.setProperty('--seasonal-image-large', 'url(../images/winterdesktop.jpeg)');
    document.documentElement.style.setProperty('--dark-colour', 'rgb(37, 44, 52)');
    document.documentElement.style.setProperty('--light-colour', 'rgb(198, 211, 224)');
    document.documentElement.style.setProperty('--accent-dk', 'rgb(88, 115, 158)');
    document.documentElement.style.setProperty('--accent-lt', 'rgb(157, 196, 230)');
   }
  }
changeSeason();