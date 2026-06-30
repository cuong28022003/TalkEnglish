export interface VocabWord {
  word: string;
  phonetic?: string;
  definition: string;
  example: string;
  audioFile?: string;
}

export interface VocabExercise {
  type: 'match' | 'fill-gap' | 'transform' | 'categorize' | 'write';
  instruction: string;
  items: { prompt: string; answer: string }[];
}

export interface VocabSection {
  title: string;
  words: VocabWord[];
  exercise?: VocabExercise;
}

export interface VocabularyLesson {
  id: string;
  title: string;
  category: string;
  description: string;
  sections: VocabSection[];
  overToYou?: string;
  reviewPrompt?: string;
}

export const VOCABULARY_DATA: Record<string, VocabularyLesson> = {
  // ===== THE WORLD AROUND US =====
  'world-weather': {
    id: 'world-weather',
    title: 'Weather and Climate',
    category: 'The World Around Us',
    description: 'Learn vocabulary for describing weather, seasons, and climate conditions.',
    sections: [
      {
        title: 'Weather Conditions',
        words: [
          { word: 'sunny', definition: 'When the sun is shining and there are no clouds', example: 'It\'s a sunny day. Let\'s go to the beach.', audioFile: 'vw_sunny' },
          { word: 'cloudy', definition: 'When the sky is covered with clouds', example: 'It\'s cloudy today. It might rain later.', audioFile: 'vw_cloudy' },
          { word: 'rainy', definition: 'When rain is falling', example: 'The weather is rainy. Don\'t forget your umbrella.', audioFile: 'vw_rainy' },
          { word: 'windy', definition: 'When there is a lot of wind', example: 'It\'s very windy. Hold onto your hat!', audioFile: 'vw_windy' },
          { word: 'storm', definition: 'Very bad weather with strong wind and rain', example: 'A big storm is coming. Stay inside.', audioFile: 'vw_storm' },
          { word: 'fog', definition: 'Thick cloud that is near the ground', example: 'There is thick fog. I can\'t see the road.', audioFile: 'vw_fog' }
        ],
        exercise: {
          type: 'match',
          instruction: 'Match the weather word to its description.',
          items: [
            { prompt: 'When the sun is shining', answer: 'sunny' },
            { prompt: 'When the sky is covered with clouds', answer: 'cloudy' },
            { prompt: 'Very bad weather with strong wind', answer: 'storm' },
            { prompt: 'Thick cloud near the ground', answer: 'fog' }
          ]
        }
      },
      {
        title: 'Temperature and Seasons',
        words: [
          { word: 'temperature', definition: 'How hot or cold something is', example: 'The temperature today is 25 degrees.', audioFile: 'vw_temp' },
          { word: 'degree', definition: 'A unit for measuring temperature', example: 'Water boils at 100 degrees Celsius.', audioFile: 'vw_degree' },
          { word: 'freezing', definition: 'Extremely cold, below 0°C', example: 'It\'s freezing outside. Wear a warm coat.', audioFile: 'vw_freezing' },
          { word: 'mild', definition: 'Neither very hot nor very cold', example: 'The weather is mild in spring.', audioFile: 'vw_mild' }
        ],
        exercise: {
          type: 'fill-gap',
          instruction: 'Complete the sentences with the correct word.',
          items: [
            { prompt: 'Water boils at 100 ___ Celsius.', answer: 'degrees' },
            { prompt: 'It\'s ___ outside. Wear a warm coat.', answer: 'freezing' },
            { prompt: 'The weather is ___ in spring — not too hot, not too cold.', answer: 'mild' }
          ]
        }
      }
    ],
    overToYou: 'Describe the weather in your country right now. What season is it? How does the weather make you feel?',
    reviewPrompt: 'Cover the definitions and try to remember each weather word from memory.'
  },

  // ===== PEOPLE =====
  'people-appearance': {
    id: 'people-appearance',
    title: 'Describing People — Appearance',
    category: 'People',
    description: 'Words to describe how people look — height, build, hair, and face.',
    sections: [
      {
        title: 'Height and Build',
        words: [
          { word: 'tall', definition: 'Of more than average height', example: 'My brother is very tall. He\'s 1.90m.', audioFile: 'vp_tall' },
          { word: 'short', definition: 'Of less than average height', example: 'She\'s quite short for her age.', audioFile: 'vp_short' },
          { word: 'slim', definition: 'Thin in an attractive way', example: 'He\'s tall and slim with brown hair.', audioFile: 'vp_slim' },
          { word: 'well-built', definition: 'Having a strong, muscular body', example: 'The new gym teacher is well-built.', audioFile: 'vp_wellbuilt' },
          { word: 'plump', definition: 'Slightly fat in a nice way', example: 'The baby has plump little cheeks.', audioFile: 'vp_plump' }
        ]
      },
      {
        title: 'Hair and Face',
        words: [
          { word: 'curly', definition: 'Hair that forms small curls or circles', example: 'She has long, curly red hair.', audioFile: 'vp_curly' },
          { word: 'bald', definition: 'Having no hair on the head', example: 'My uncle is bald.', audioFile: 'vp_bald' },
          { word: 'beard', definition: 'Hair that grows on a man\'s chin', example: 'He has a short beard.', audioFile: 'vp_beard' },
          { word: 'freckles', definition: 'Small brown spots on the skin', example: 'She has freckles on her nose.', audioFile: 'vp_freckles' },
          { word: 'wrinkle', definition: 'A small line on the skin from age', example: 'He has wrinkles around his eyes.', audioFile: 'vp_wrinkle' }
        ],
        exercise: {
          type: 'categorize',
          instruction: 'Put these words into two groups: Hair-related and Face-related.',
          items: [
            { prompt: 'curly', answer: 'hair' },
            { prompt: 'bald', answer: 'hair' },
            { prompt: 'beard', answer: 'face' },
            { prompt: 'freckles', answer: 'face' },
            { prompt: 'wrinkle', answer: 'face' }
          ]
        }
      }
    ],
    overToYou: 'Describe yourself or someone in your family. What do they look like? What color is their hair?',
    reviewPrompt: 'Cover the example sentences and try to create your own sentence for each word about appearance.'
  },

  // ===== DAILY LIFE =====
  'daily-routine': {
    id: 'daily-routine',
    title: 'Daily Routine',
    category: 'Daily Life',
    description: 'Common verbs and phrases for describing your everyday activities.',
    sections: [
      {
        title: 'Morning Activities',
        words: [
          { word: 'wake up', definition: 'To stop sleeping', example: 'I wake up at 6:30 every morning.', audioFile: 'vd_wake' },
          { word: 'get up', definition: 'To get out of bed after waking', example: 'He gets up immediately after the alarm.', audioFile: 'vd_getup' },
          { word: 'have a shower', definition: 'To wash your body under running water', example: 'I have a shower before breakfast.', audioFile: 'vd_shower' },
          { word: 'get dressed', definition: 'To put on your clothes', example: 'She gets dressed quickly on weekdays.', audioFile: 'vd_dressed' },
          { word: 'have breakfast', definition: 'To eat the first meal of the day', example: 'I have breakfast at 7 o\'clock.', audioFile: 'vd_breakfast' }
        ]
      },
      {
        title: 'Work and Evening Activities',
        words: [
          { word: 'commute', definition: 'To travel to and from work', example: 'I commute by train every day. It takes 30 minutes.', audioFile: 'vd_commute' },
          { word: 'arrive', definition: 'To reach a place', example: 'I arrive at work at 9 AM.', audioFile: 'vd_arrive' },
          { word: 'have lunch', definition: 'To eat the midday meal', example: 'We usually have lunch at 12:30.', audioFile: 'vd_lunch' },
          { word: 'finish work', definition: 'To stop working for the day', example: 'I finish work at 5:30 PM.', audioFile: 'vd_finish' },
          { word: 'get home', definition: 'To arrive at your house', example: 'I get home at around 6 PM.', audioFile: 'vd_gethome' },
          { word: 'go to bed', definition: 'To get into bed to sleep', example: 'I go to bed at 11 PM.', audioFile: 'vd_bed' }
        ],
        exercise: {
          type: 'fill-gap',
          instruction: 'Complete the sentences about daily routine.',
          items: [
            { prompt: 'I ___ at 6:30. Then I have a shower.', answer: 'wake up' },
            { prompt: 'He ___ by train. It takes 30 minutes.', answer: 'commutes' },
            { prompt: 'I ___ at 11 PM every night.', answer: 'go to bed' },
            { prompt: 'She ___ quickly and goes to work.', answer: 'gets dressed' }
          ]
        }
      }
    ],
    overToYou: 'Write about your own daily routine. What time do you wake up? How do you get to work or school?',
    reviewPrompt: 'Cover the verbs and try to explain the meaning of each one in your own words.'
  },

  // ===== FOOD AND DRINK =====
  'food-drink': {
    id: 'food-drink',
    title: 'Food and Drink',
    category: 'Food and Drink',
    description: 'Vocabulary for different types of food, drinks, and eating.',
    sections: [
      {
        title: 'Types of Food',
        words: [
          { word: 'fruit', definition: 'Sweet food that grows on trees or plants', example: 'I eat fresh fruit every day — apples, bananas, and oranges.', audioFile: 'vf_fruit' },
          { word: 'vegetable', definition: 'A plant used as food, like carrots or potatoes', example: 'You should eat more green vegetables.', audioFile: 'vf_veg' },
          { word: 'meat', definition: 'Animal flesh used as food', example: 'I don\'t eat meat. I\'m a vegetarian.', audioFile: 'vf_meat' },
          { word: 'dairy', definition: 'Food made from milk, like cheese and yogurt', example: 'Dairy products contain calcium.', audioFile: 'vf_dairy' },
          { word: 'grain', definition: 'Seeds used as food, like rice and wheat', example: 'Whole grains are good for your health.', audioFile: 'vf_grain' },
          { word: 'seafood', definition: 'Food from the sea, like fish and shrimp', example: 'We had fresh seafood at the restaurant.', audioFile: 'vf_seafood' }
        ],
        exercise: {
          type: 'categorize',
          instruction: 'Put each food item into the correct category: fruit, vegetable, or meat/seafood.',
          items: [
            { prompt: 'apple', answer: 'fruit' },
            { prompt: 'carrot', answer: 'vegetable' },
            { prompt: 'salmon', answer: 'meat/seafood' },
            { prompt: 'banana', answer: 'fruit' },
            { prompt: 'chicken', answer: 'meat/seafood' },
            { prompt: 'broccoli', answer: 'vegetable' }
          ]
        }
      }
    ],
    overToYou: 'Describe your favorite meal. What foods does it include? Which food groups do they belong to?',
    reviewPrompt: 'Think of 3 more words for each food category: fruit, vegetable, meat, and dairy.'
  },

  // ===== TRAVEL =====
  'travel-transport': {
    id: 'travel-transport',
    title: 'Getting Around — Transport',
    category: 'Travel',
    description: 'Words for different types of transport and travel vocabulary.',
    sections: [
      {
        title: 'Public Transport',
        words: [
          { word: 'bus', definition: 'A large vehicle that carries passengers along a fixed route', example: 'I take the bus to work every day.', audioFile: 'vt_bus' },
          { word: 'train', definition: 'A vehicle that runs on railway tracks', example: 'The train to London leaves at 8 AM.', audioFile: 'vt_train' },
          { word: 'subway', definition: 'An underground railway system in a city', example: 'The subway is the fastest way to get around New York.', audioFile: 'vt_subway' },
          { word: 'taxi', definition: 'A car with a driver that you pay to take you somewhere', example: 'We took a taxi to the airport.', audioFile: 'vt_taxi' },
          { word: 'ticket', definition: 'A piece of paper that allows you to travel', example: 'I bought a return ticket to Paris.', audioFile: 'vt_ticket' },
          { word: 'platform', definition: 'The place where you get on and off a train', example: 'The train departs from platform 3.', audioFile: 'vt_platform' }
        ]
      },
      {
        title: 'Driving',
        words: [
          { word: 'drive', definition: 'To operate a car', example: 'I\'m learning to drive. I\'ll take my test next month.', audioFile: 'vt_drive' },
          { word: 'park', definition: 'To leave your car somewhere for a period of time', example: 'I can never find a place to park in the city center.', audioFile: 'vt_park' },
          { word: 'traffic jam', definition: 'A long line of cars that cannot move', example: 'I was stuck in a traffic jam for an hour.', audioFile: 'vt_traffic' }
        ],
        exercise: {
          type: 'fill-gap',
          instruction: 'Complete the sentences with the correct transport word.',
          items: [
            { prompt: 'I take the ___ to work every day.', answer: 'bus' },
            { prompt: 'The ___ to London leaves at 8 AM from platform 3.', answer: 'train' },
            { prompt: 'I was stuck in a ___ for an hour.', answer: 'traffic jam' },
            { prompt: 'We took a ___ to the airport because we were late.', answer: 'taxi' }
          ]
        }
      }
    ],
    overToYou: 'How do you usually get around? Describe your journey to work, school, or the supermarket.',
    reviewPrompt: 'Cover the words and test yourself: can you use each word in a sentence about your own travel?'
  }
};
