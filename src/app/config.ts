import {
  WhiteBoardHeadline,
  WhiteBoardColumn,
  WhiteBoardSection
} from './model/whiteboard';

const STAND_UP = 1;
const RETRO = 2;

// Sections 1 to 10
const LOGISTICS = 10;
const logisticsSections: WhiteBoardSection[] = [
  {
    id: 1,
    columnId: LOGISTICS,
    title: 'PTO',
    detail: 'i.e. \'Personal Time Out\'',
    items: []
  },
  {
    id: 5,
    columnId: LOGISTICS,
    title: 'Rituals',
    detail: 'Our way of life...',
    items: []
  }
];

// sections 11-20
const HELP = 20;
const helpSections = [
  {
    id: 11,
    columnId: HELP,
    title: 'Help',
    detail: 'What can we do to help you?',
    items: []
  },
  {
    id: 15,
    columnId: HELP,
    title: 'Resources',
    detail: 'Sources of relevant information',
    items: []
  }
];

// sections 21-30
const THE_NEWS = 30;
const newsSections = [
  {
    id: 22,
    columnId: THE_NEWS,
    title: 'New Faces',
    detail: 'Welcome!',
    items: []
  },
  {
    id: 24,
    columnId: THE_NEWS,
    title: 'Finances',
    detail: 'Just in case that you are rich...',
    items: []
  },

  {
    id: 27,
    columnId: THE_NEWS,
    title: 'Politics',
    detail: 'What\'s new in the NWO?',
    items: []
  }
];

// sections 31-40
const THE_FUTURE = 40;
const futureSections = [
  {
    id: 31,
    columnId: THE_FUTURE,
    title: 'Events',
    detail: 'What\'s going to happen soon?',
    items: []
  },
  {
    id: 35,
    columnId: THE_FUTURE,
    title: 'Dead lines',
    detail: 'What we have coming our way',
    items: []
  }
];

// sections 51-60
const HAPPY_FACE = 50;
const happyFaceSections = [
  {
    id: 51,
    columnId: HAPPY_FACE,
    title: 'Tell us!',
    detail: null,
    items: []
  }
];
// sections 71-80
const NEUTRAL_FACE = 60;
const neutralFaceSections = [
  {
    id: 71,
    columnId: NEUTRAL_FACE,
    title: 'Uhmm...',
    detail: null,
    items: []
  }
];
// sections 81-90
const SAD_FACE = 70;
const sadFaceSections = [
  {
    id: 81,
    columnId: SAD_FACE,
    title: 'What is it?!',
    detail: null,
    items: []
  }
];
// sections 91-100
const ACTIONS = 80;
const actionsSections = [
  {
    id: 91,
    columnId: ACTIONS,
    title: 'I know!',
    detail: null,
    items: []
  }
];

export class Configuration {
  private static ID = 0;

  public static headlines: WhiteBoardHeadline[] = [
    {
      id: STAND_UP,
      title: 'stand up',
      detail: ''
    },
    {
      id: RETRO,
      title: 'retro',
      detail: ''
    }
  ];

  public static columns: WhiteBoardColumn[] = [
    // ===================================
    //        STAND_UP
    // ===================================
    {
      id: LOGISTICS,
      whiteBoardId: STAND_UP,
      icon: null,
      title: 'LOGISTICS',
      detail: 'Things we need to know and let others know ahead of time.',
      sections: logisticsSections
    },
    {
      id: HELP,
      whiteBoardId: STAND_UP,
      icon: null,
      title: 'GROWTH',
      detail: 'Things we need to do to improve the way we do our job.',
      sections: helpSections
    },

    {
      id: THE_NEWS,
      whiteBoardId: STAND_UP,
      icon: null,
      title: 'THE NEWS',
      detail:
        'Things that happen \'out there\' and we might want to know, or bring to others\' attention.',
      sections: newsSections
    },

    {
      id: THE_FUTURE,
      whiteBoardId: STAND_UP,
      icon: null,
      title: 'THE FUTURE',
      detail: 'Things that we have coming our way soon.',
      sections: futureSections
    },

    // ===================================
    //        RETRO
    // ===================================

    {
      id: HAPPY_FACE,
      whiteBoardId: RETRO,
      icon: 'happy.jpeg',
      title: null,
      detail: 'What has been great!',
      sections: happyFaceSections
    },

    {
      id: NEUTRAL_FACE,
      whiteBoardId: RETRO,
      icon: 'neutral.jpeg',
      title: null,
      detail: 'What has been \'just fine\'',
      sections: neutralFaceSections
    },

    {
      id: SAD_FACE,
      whiteBoardId: RETRO,
      icon: 'sad.jpeg',
      title: null,
      detail: 'What has not been cool, OK? >:(',
      sections: sadFaceSections
    },
    {
      id: ACTIONS,
      whiteBoardId: RETRO,
      icon: null,
      title: 'ACTIONS',
      detail: 'What are we going to do about it?',
      sections: actionsSections
    }
  ];
}
