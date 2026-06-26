export interface VocabSection {
  title: string;
  explanations: string[];
  examples: string[];
}

export interface VocabularyLesson {
  id: string;
  title: string;
  category: string;
  description: string;
  sections: VocabSection[];
}

export const VOCABULARY_DATA: Record<string, VocabularyLesson> = {
  'get-vs-take': {
    id: 'get-vs-take',
    title: 'What’s the difference between GET & TAKE?',
    category: 'English Vocabulary',
    description: 'Learn the nuanced differences between "get" and "take" in various situations, including active vs. passive dynamics, giving vs. stealing, and common exceptions.',
    sections: [
      {
        title: 'Active vs. Passive Dynamics',
        explanations: [
          'The easiest way to think about this is: <strong>"got"</strong> is a passive situation. It involves two people where someone gives or delivers something to you.',
          '<strong>"take"</strong> and <strong>"took"</strong> are active situations. It involves only one person (you), doing an action to obtain or achieve an item yourself.'
        ],
        examples: [
          '"I got a beer." (Someone handed or brought it to you)',
          '"I took a flyer." (You grabbed it from a counter yourself without being handed it)',
          '"I got a raise." (Your boss gave you an increase in pay)'
        ]
      },
      {
        title: 'Permission and Stealing',
        explanations: [
          'A critical nuance when using <strong>"take"</strong> is the element of permission.',
          'If you say you <strong>"took"</strong> something without having permission, it often implies stealing.',
          '<strong>"get"</strong> is used when the item is obtained legitimately through someone else\'s action or offer.'
        ],
        examples: [
          '"I took a beer." (Can mean you just grabbed it from the fridge yourself, OR you stole it)',
          '"I took a car." (People will assume you stole the car, leading to jail!)',
          '"I got the coffee." (Someone made it for you after you paid for it)'
        ]
      },
      {
        title: 'Health and Natural Processes',
        explanations: [
          '<strong>"get"</strong> is used for things transmitted to you, such as illnesses or viruses, because they are passed from one person to another.',
          '<strong>"take"</strong> is used for self-administered items, such as medicines you consciously decide to consume.'
        ],
        examples: [
          '"I got a cold." (Because somebody gave it to me)',
          '"Every day I take my pills."'
        ]
      },
      {
        title: 'Travel and Movement',
        explanations: [
          'Both verbs function differently regarding locations and transport.',
          'Use <strong>"get to"</strong> when arriving at a place.',
          'Use <strong>"take to"</strong> when offering transport to someone else.',
          'For specific transport, use <strong>"get in/out of"</strong> for cars and <strong>"get on/off"</strong> for larger transit like buses and trains.'
        ],
        examples: [
          '"They got to the hotel at midnight."',
          '"Amy offered to take Joe to the airport."',
          '"She got in the car and drove away."',
          '"She got on the bus and I never saw her again."'
        ]
      },
      {
        title: 'Grammatical Functions & Idioms',
        explanations: [
          '<strong>Informal Passive:</strong> In spoken English, "get" replaces "be" in passive sentences when an event happens.',
          '<strong>Requests:</strong> Both can be used to ask for things.',
          '<strong>Exceptions:</strong> There are many exceptions where "take" is used idiomatically without an actual physical object.'
        ],
        examples: [
          '"Nobody got hurt." / "I didn\'t get invited."',
          '"Can I get these postcards, please?"',
          '"I am going to take a lesson." / "I am going to take a shower."'
        ]
      }
    ]
  }
};
