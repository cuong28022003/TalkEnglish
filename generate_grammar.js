const fs = require('fs');
const path = require('path');

const categories = [
  { max: 14, name: "Present and past" },
  { max: 18, name: "Present perfect and past" },
  { max: 25, name: "Future" },
  { max: 37, name: "Modals" },
  { max: 41, name: "if and wish" },
  { max: 46, name: "Passive" },
  { max: 48, name: "Reported speech" },
  { max: 52, name: "Questions and auxiliary verbs" },
  { max: 68, name: "-ing and to..." },
  { max: 81, name: "Articles and nouns" },
  { max: 91, name: "Pronouns and determiners" },
  { max: 97, name: "Relative clauses" },
  { max: 112, name: "Adjectives and adverbs" },
  { max: 120, name: "Conjunctions and prepositions" },
  { max: 136, name: "Prepositions" },
  { max: 145, name: "Phrasal verbs" }
];

function getCategory(unitNum) {
  for (let c of categories) {
    if (unitNum <= c.max) return c.name;
  }
  return "Other";
}

let fileContent = `export interface GrammarUnit {
  id: string;
  title: string;
  category: string;
  explanations: string[];
  examples: string[];
  exercises: { question: string; answer: string }[];
}

export const GRAMMAR_DATA: Record<string, GrammarUnit> = {
`;

// Existing detailed units
const detailedUnits = {
  1: {
    title: 'Present Continuous (I am doing)',
    explanations: [
      '"We use the continuous for things happening at or around the time of speaking. The action is not complete."',
      '"am/is/are + -ing is the present continuous"',
      '"I am (= I’m) driving / He is (= he’s) working"'
    ],
    examples: [
      '"Sarah is in her car. She is on her way to work. She’s driving to work. (= She is driving …)"',
      '"Steve is talking to a friend on the phone. He says: \'I’m reading a really good book at the moment.\' (He has started reading it, but has not finished it yet.)"'
    ],
    exercises: [
      '{ question: "He _____ (tie) his shoelaces.", answer: "is tying" }',
      '{ question: "They _____ (cross) the road.", answer: "are crossing" }',
      '{ question: "Why _____ (you / cry)?", answer: "are you crying" }',
      '{ question: "What _____ (you / do) these days?", answer: "are you doing" }'
    ]
  },
  2: {
    title: 'Present Simple (I do)',
    explanations: [
      '"We use the present simple to talk about things in general."',
      '"We use it to say that something happens all the time or repeatedly, or that something is true in general"',
      '"We say: I work but he works, you go but it goes"'
    ],
    examples: [
      '"Nurses look after patients in hospitals."',
      '"I usually go away at weekends."',
      '"The earth goes round the sun."',
      '"The cafe opens at 7.30 in the morning."'
    ],
    exercises: [
      '{ question: "Tanya _____ (speak) German very well.", answer: "speaks" }',
      '{ question: "Ben and Jack _____ (go) to the same school.", answer: "go" }',
      '{ question: "Bad driving _____ (cause) many accidents.", answer: "causes" }',
      '{ question: "The museum _____ (close) at 4 o’clock on Sundays.", answer: "closes" }',
      '{ question: "The earth _____ (go) round the sun.", answer: "goes" }'
    ]
  },
  3: {
    title: 'Present Continuous and Present Simple 1 (I am doing and I do)',
    explanations: [
      '"We use the continuous for things happening at or around the time of speaking. The action is not complete."',
      '"We use the simple for things in general or things that happen repeatedly."'
    ],
    examples: [
      '"The water is boiling. Be careful. (Continuous)"',
      '"Water boils at 100 degrees Celsius. (Simple)"',
      '"Listen to those people. What language are they speaking? (Continuous)"',
      '"Excuse me, do you speak English? (Simple)"',
      '"Let’s go out. It isn’t raining now. (Continuous)"',
      '"It doesn’t rain very much in summer. (Simple)"'
    ],
    exercises: [
      '{ question: "_____ (you / listen) to the radio? No, you can turn it off.", answer: "Are you listening" }',
      '{ question: "_____ (you / listen) to the radio every day? No, just occasionally.", answer: "Do you listen" }',
      '{ question: "The river _____ (flow) very fast today - much faster than usual.", answer: "is flowing" }',
      '{ question: "The River Nile _____ (flow) into the Mediterranean.", answer: "flows" }'
    ]
  },
  4: {
    title: 'Present Continuous vs Present Simple 2 (I am doing and I do)',
    explanations: [
      '"We use continuous for things happening at or around the time of speaking. The action is not complete."',
      '"We use simple for things in general or things that happen repeatedly."',
      '"I am doing = now, at the time of speaking"',
      '"I do = in general, all the time or sometimes"'
    ],
    examples: [
      '"Are you hungry? Do you want something to eat? (not Are you wanting)"',
      '"Alan says he’s 90 years old, but nobody believes him. (not is believing)"',
      '"She told me her name, but I don’t remember it now."',
      '"Don’t put the dictionary away. I am using it."'
    ],
    exercises: [
      '{ question: "Are you hungry? _____ (you / want) something to eat?", answer: "Do you want" }',
      '{ question: "Alan says he’s 90 years old, but nobody _____ (believe) him.", answer: "believes" }',
      '{ question: "She told me her name, but I _____ (not / remember) it now.", answer: "don’t remember" }',
      '{ question: "Don’t put the dictionary away. I _____ (use) it.", answer: "am using" }',
      '{ question: "Air _____ (consist) mainly of nitrogen and oxygen.", answer: "consists" }'
    ]
  },
  5: {
    title: 'Past Simple (I did)',
    explanations: [
      '"We use the past simple to talk about actions or situations in the past."',
      '"They usually end in -ed (regular verbs). But many verbs are irregular."',
      '"In questions and negative sentences we use did/didn’t + infinitive (enjoy/see/go etc.)."'
    ],
    examples: [
      '"Wolfgang Amadeus Mozart was an Austrian musician and composer. He lived from 1756 to 1791."',
      '"He started composing at the age of five and wrote more than 600 pieces of music."',
      '"I usually get up at 7 o’clock and have a big breakfast. I walk to work... Yesterday she got up at 7 o’clock. She had a big breakfast."'
    ],
    exercises: [
      '{ question: "Yesterday was a typical working day for Laura. She _____ (get up) at 7 o’clock.", answer: "got up" }',
      '{ question: "Mozart _____ (write) more than 600 pieces of music.", answer: "wrote" }',
      '{ question: "How did you learn to drive? My father _____ (teach) me.", answer: "taught" }',
      '{ question: "It was warm, so I _____ (take) off my coat.", answer: "took" }',
      '{ question: "The film wasn’t very good. I _____ (not / enjoy) it much.", answer: "didn’t enjoy" }'
    ]
  },
  6: {
    title: 'Past Continuous (I was doing)',
    explanations: [
      '"I was doing = in the middle of an action. The action or situation had already started before this time, but had not finished."',
      '"I did = complete action."',
      '"We use the past simple and the past continuous together to say that something happened in the middle of something else."'
    ],
    examples: [
      '"We were walking home when I met Dan. (in the middle of walking home)"',
      '"We walked home after the party last night. (= all the way, completely)"',
      '"Kate was watching TV when we arrived."'
    ],
    exercises: [
      '{ question: "Today Helen is wearing a skirt. Yesterday she _____ (wear) trousers.", answer: "was wearing" }',
      '{ question: "What did he say? I don’t know. I _____ (not / listen).", answer: "wasn’t listening" }',
      '{ question: "We _____ (sit) at the back of the theatre. We couldn’t hear very well.", answer: "were sitting" }',
      '{ question: "The weather was bad. It was very cold and it _____ (snow).", answer: "was snowing" }',
      '{ question: "I saw Kate a few minutes ago. She _____ (look) for you.", answer: "was looking" }'
    ]
  },
  7: {
    title: 'Present Perfect 1 (I have done)',
    explanations: [
      '"have/has lost is the present perfect simple."',
      '"When we say \'something has happened\', this is usually new information."',
      '"The present perfect simple is have/has + past participle (finished/decided/lost/done/written)."'
    ],
    examples: [
      '"Ow! I’ve cut my finger."',
      '"The road is closed. There’s been an accident. (= There has been …)"',
      '"Has it stopped raining yet?"',
      '"I’ve written the email, but I haven’t sent it yet."'
    ],
    exercises: [
      '{ question: "My parents are on holiday. They _____ (go) to Italy.", answer: "have gone" }',
      '{ question: "I can’t find my bag. _____ (you / see) it anywhere?", answer: "Have you seen" }',
      '{ question: "I can’t log on to the website. I _____ (forget) my password.", answer: "have forgotten" }',
      '{ question: "Sally is still here. She _____ (not / go) out.", answer: "hasn’t gone" }'
    ]
  },
  8: {
    title: 'Present Perfect 2 (I have done)',
    explanations: [
      '"We use the present perfect to talk about a period of time that continues from the past until now (e.g. have you ever...?)."',
      '"We use it with: recently / in the last few days / so far / since breakfast etc."',
      '"We use the present perfect with This is the first time..., It’s the first time..."'
    ],
    examples: [
      '"Have you ever ridden a horse?"',
      '"This is the first time I’ve driven a car."',
      '"Some children at the zoo are looking at a giraffe. They’ve never seen one before."'
    ],
    exercises: [
      '{ question: "(ride / horse?) _____ a horse?", answer: "Have you ever ridden" }',
      '{ question: "What’s Mark’s sister like? I’ve no idea. I _____ (never / meet) her.", answer: "have never met" }',
      '{ question: "Jack is driving a car for the first time. It’s the first time he _____ (drive) a car.", answer: "has driven" }',
      '{ question: "I _____ (not / use) a computer today.", answer: "haven’t used" }'
    ]
  },
  9: {
    title: 'Present Perfect Continuous (I have been doing)',
    explanations: [
      '"have/has been + -ing is the present perfect continuous."',
      '"We use the present perfect continuous for an activity that has recently stopped or just stopped."'
    ],
    examples: [
      '"Is it raining? No, but the ground is wet. It’s been raining."',
      '"Why are you out of breath? Have you been running?"',
      '"Paul is very tired. He’s been working hard."',
      '"Where have you been? I’ve been looking for you."'
    ],
    exercises: [
      '{ question: "_____ (you / wait) long?", answer: "Have you been waiting" }',
      '{ question: "What _____ (you / do)?", answer: "have you been doing" }',
      '{ question: "How long _____ (you / work) here?", answer: "have you been working" }',
      '{ question: "She _____ (teach) for ten years.", answer: "has been teaching" }'
    ]
  },
  10: {
    title: 'Present Perfect Continuous and Simple (I have been doing and I have done)',
    explanations: [
      '"Continuous (I have been doing) focuses on the activity itself. It does not matter whether the action has been finished or not."',
      '"Simple (I have done) focuses on the result of the activity. The action is complete."'
    ],
    examples: [
      '"I’ve been painting my bedroom. (The activity is not necessarily complete.)"',
      '"I’ve painted my bedroom. (The painting is finished.)"',
      '"He has been reading for two hours."',
      '"He has read 53 pages so far."'
    ],
    exercises: [
      '{ question: "Tom started reading a book two hours ago. He _____ (read) for two hours.", answer: "has been reading" }',
      '{ question: "He _____ (read) 53 pages so far.", answer: "has read" }',
      '{ question: "Where have you been? _____ (you / play) tennis?", answer: "Have you been playing" }',
      '{ question: "Look! Somebody _____ (break) that window.", answer: "has broken" }'
    ]
  },
  11: {
    title: 'how long have you (been) ... ?',
    explanations: [
      '"We use the present perfect (especially with how long, for, and since) to talk about a period of time from the past until now."',
      '"We use the continuous for actions and situations that are still continuing."',
      '"We use the simple for situations that exist now and will probably continue (e.g. know, like, believe)."',
    ],
    examples: [
      '"How long have you known Katherine?"',
      '"How long has your sister been in Australia?"',
      '"How long have you been teaching English? (or How long have you taught English?)"',
      '"Have you always lived in Chicago?"'
    ],
    exercises: [
      '{ question: "_____ (you / know) Katherine? How long?", answer: "How long have you known" }',
      '{ question: "_____ (your sister / be) in Australia? How long?", answer: "How long has your sister been" }',
      '{ question: "_____ (you / teach) English? How long?", answer: "How long have you been teaching" }',
      '{ question: "_____ (Joe / work) at the airport? How long?", answer: "How long has Joe been working" }'
    ]
  },
  12: {
    title: 'for and since / when … ? and how long … ?',
    explanations: [
      '"We use for and since to say how long something has been happening."',
      '"We use for + a period of time: for two hours / for six months / for ages."',
      '"We use since + the start of the period: since 8 o\'clock / since Monday / since 1999."'
    ],
    examples: [
      '"We’ve been waiting for two hours."',
      '"Sally has been working here for six months."',
      '"It’s been raining since lunchtime."',
      '"Paul has lived in Brazil for ten years."'
    ],
    exercises: [
      '{ question: "It’s been raining _____ lunchtime.", answer: "since" }',
      '{ question: "Paul has lived in Brazil _____ ten years.", answer: "for" }',
      '{ question: "We’ve been sitting here _____ an hour.", answer: "for" }',
      '{ question: "Kevin has been looking for a job _____ he left school.", answer: "since" }'
    ]
  },
  13: {
    title: 'Present perfect and past 1 (I have done and I did)',
    explanations: [
      '"The present perfect (something has happened) is a present tense. It tells us about the situation now."',
      '"The past simple (something happened) tells us only about the past."',
      '"Tom has lost his key = he doesn’t have his key now."',
      '"Tom lost his key = we don\'t know whether he has the key now or not."'
    ],
    examples: [
      '"Ten minutes later: He has lost his key."',
      '"Did you hear about Sophie? She’s given up her job."',
      '"Who invented paper? (not has invented)"',
      '"Albert Einstein was the scientist who developed the theory of relativity."'
    ],
    exercises: [
      '{ question: "It _____ (stop) raining for a while, but now it’s raining again.", answer: "stopped" }',
      '{ question: "The town where I live is very different now. It _____ (change) a lot.", answer: "has changed" }',
      '{ question: "I studied German at school, but I _____ (forget) most of it now.", answer: "have forgotten" }',
      '{ question: "The police _____ (arrest) three people, but later they let them go.", answer: "arrested" }'
    ]
  },
  14: {
    title: 'Present perfect and past 2 (I have done and I did)',
    explanations: [
      '"Do not use the present perfect (I have done) when you talk about a finished time (for example: yesterday / ten minutes ago / in 2005 / when I was a child). Use a past tense."',
      '"We use the present perfect for a period of time that continues until now (today / this week / since 2010)."'
    ],
    examples: [
      '"We waited (or were waiting) for an hour. (we are no longer waiting)"',
      '"Jack lived in New York for ten years. Now he lives in Los Angeles."',
      '"I never rode a bike when I was a child."',
      '"The weather has been cold recently. / It was cold last week."'
    ],
    exercises: [
      '{ question: "The weather _____ (be) cold recently.", answer: "has been" }',
      '{ question: "It _____ (be) cold last week.", answer: "was" }',
      '{ question: "I _____ (not / eat) any fruit yesterday.", answer: "didn’t eat" }',
      '{ question: "I _____ (not / eat) any fruit today.", answer: "haven’t eaten" }'
    ]
  },
  15: {
    title: 'Past perfect (I had done)',
    explanations: [
      '"The past perfect (I had done) is the past of the past."',
      '"We use the past perfect to say that something had already happened before another action in the past."',
      '"Form: had + past participle (gone/seen/finished etc.)"'
    ],
    examples: [
      '"When Sarah arrived at the party, Paul wasn’t there. He had gone home."',
      '"I didn’t know who she was. I had never seen her before."',
      '"We were good friends. We had known each other for years."'
    ],
    exercises: [
      '{ question: "The house was very quiet when I got home. Everybody _____ (go) to bed.", answer: "had gone" }',
      '{ question: "I didn’t know who she was. I _____ (never / see) her before.", answer: "had never seen" }',
      '{ question: "We were good friends. We _____ (know) each other for years.", answer: "had known" }',
      '{ question: "I felt very tired when I got home, so I _____ (go) straight to bed.", answer: "went" }'
    ]
  },
  16: {
    title: 'Past perfect continuous (I had been doing)',
    explanations: [
      '"We use the past perfect continuous to say that something had been happening for a period of time before something else happened."',
      '"Form: had been + -ing (working/playing/looking etc.)"'
    ],
    examples: [
      '"I was very tired when I got home. I had been working hard all day."',
      '"The boys came into the house. They were very dirty. They had been playing football."',
      '"We had been playing tennis for about half an hour when it started to rain heavily."'
    ],
    exercises: [
      '{ question: "I was very tired when I arrived home. I _____ (work) hard all day.", answer: "had been working" }',
      '{ question: "The boys came into the house. They were very dirty. They _____ (play) football.", answer: "had been playing" }',
      '{ question: "We _____ (play) tennis for about half an hour when it started to rain.", answer: "had been playing" }',
      '{ question: "He _____ (give up) smoking two years ago.", answer: "gave up" }'
    ]
  },
  17: {
    title: 'have and have got',
    explanations: [
      '"have and have got mean the same thing for possession, relationships, illnesses, etc."',
      '"We do not use have got in the past (only had, not had got)."'
    ],
    examples: [
      '"I’ve got a motorbike, but I haven’t got a car."',
      '"Lisa had long hair when she was a child. (not had got)"',
      '"I’m not working right now. I’m having a break."'
    ],
    exercises: [
      '{ question: "I’m not working right now. I _____ (have) a break.", answer: "am having" }',
      '{ question: "Are you feeling OK? No, I _____ (have) a cold.", answer: "have" }',
      '{ question: "Lisa _____ (have) long hair when she was a child.", answer: "had" }',
      '{ question: "I _____ (not / have) my phone, so I couldn’t contact you.", answer: "didn’t have" }'
    ]
  },
  18: {
    title: 'used to (do)',
    explanations: [
      '"I used to do something = I did it often in the past, but not any more."',
      '"We use used to only for the past. There is no present form (for present, use simple present)."'
    ],
    examples: [
      '"Nicola doesn’t travel much these days. But she used to travel a lot."',
      '"I used to play tennis a lot, but I don’t play very much now."',
      '"I didn’t use to like cheese, but I eat a lot of cheese now."'
    ],
    exercises: [
      '{ question: "She _____ (travel) a lot, but she doesn’t go away much these days.", answer: "used to travel" }',
      '{ question: "I _____ (live) in a small village, but now I live in a city.", answer: "used to live" }',
      '{ question: "I _____ (not / like) cheese, but I eat lots of cheese now.", answer: "didn’t use to like" }',
      '{ question: "She _____ (play) the piano, but she hasn’t played it for a long time.", answer: "used to play" }'
    ]
  },
  19: {
    title: 'Present tenses (I am doing / I do) for the future',
    explanations: [
      '"We use the present continuous (I am doing) for what we have already arranged or planned to do in the future."',
      '"We use the present simple (I do) for timetables, programmes, trains, buses, etc."'
    ],
    examples: [
      '"I’m leaving tomorrow. I’ve got my plane ticket. (Continuous for personal arrangement)"',
      '"What time are you meeting Ann this evening? (Continuous)"',
      '"My train leaves at 11.30. (Simple for timetable)"',
      '"What time does the film begin? (Simple)"'
    ],
    exercises: [
      '{ question: "What _____ (you / do) this evening?", answer: "are you doing" }',
      '{ question: "What time _____ (the train / leave)?", answer: "does the train leave" }',
      '{ question: "I _____ (not / go) out tonight. I’m staying at home.", answer: "am not going" }',
      '{ question: "The concert _____ (start) at 7.30.", answer: "starts" }'
    ]
  },
  20: {
    title: 'I am going to (do)',
    explanations: [
      '"I am going to do something = I have already decided to do it, I intend to do it."',
      '"We also use going to when we can see now that something is sure to happen in the future (e.g., look at those clouds)."',
      '"We use was/were going to to say what somebody intended to do in the past (but didn\'t do)."'
    ],
    examples: [
      '"Are you going to eat anything? No, I’m not hungry."',
      '"Look at those black clouds! It’s going to rain."',
      '"I was going to travel by train, but then we decided to go by car instead."'
    ],
    exercises: [
      '{ question: "There are a lot of black clouds in the sky. It _____ (rain).", answer: "is going to rain" }',
      '{ question: "I _____ (buy) some new clothes yesterday, but I didn’t have time.", answer: "was going to buy" }',
      '{ question: "Tom and I _____ (play) tennis last week, but he hurt his knee.", answer: "were going to play" }',
      '{ question: "I _____ (phone) Jane, but I sent her an email instead.", answer: "was going to phone" }'
    ]
  },
  21: {
    title: 'will/shall 1',
    explanations: [
      '"We use I’ll (= I will) when we decide to do something at the time of speaking (offering, agreeing, promising)."',
      '"We often use I think I’ll ... or I don’t think I’ll ..."',
      '"We do not use will for things we have already arranged or decided to do."'
    ],
    examples: [
      '"That bag looks heavy. I’ll help you with it."',
      '"I’m a little hungry. I think I’ll have something to eat."',
      '"I don’t think I’ll go out tonight. I’m too tired."',
      '"Shall I shut the door? (= do you want me to shut it?)"'
    ],
    exercises: [
      '{ question: "It’s cold in this room. Is it? I _____ (turn) on the heating.", answer: "’ll turn" }',
      '{ question: "Are you free next Friday? Let me see. I _____ (check) my diary.", answer: "’ll check" }',
      '{ question: "I’m tired. I think I _____ (go) to bed.", answer: "’ll go" }',
      '{ question: "I don’t think I _____ (go) swimming today.", answer: "’ll go" }'
    ]
  },
  22: {
    title: 'will/shall 2',
    explanations: [
      '"When we predict a future happening or situation, we use will/won’t."',
      '"We often use will with: probably, I’m sure, I think, I don’t think, I wonder."'
    ],
    examples: [
      '"Joe believes that Kate will pass the driving test."',
      '"I’ll probably be home late tonight."',
      '"Do you think Sarah will like the present we bought her?"',
      '"I wonder what will happen."'
    ],
    exercises: [
      '{ question: "Don’t worry about your exam. I’m sure you _____ (pass).", answer: "’ll pass" }',
      '{ question: "Why don’t you try on this jacket? It _____ (look) nice on you.", answer: "will look" }',
      '{ question: "Do you think it _____ (rain)?", answer: "will rain" }',
      '{ question: "I don’t think the exam _____ (be) very difficult.", answer: "will be" }'
    ]
  },
  23: {
    title: 'I will and I am going to',
    explanations: [
      '"We use will (\'ll) when we decide to do something at the time of speaking. We have not decided before."',
      '"We use going to when we have already decided to do something. We decided before."'
    ],
    examples: [
      '"Gary has been trying to contact you. Has he? OK, I’ll call him."',
      '"Gary has been trying to contact you. Yes, I know. I’m going to call him."',
      '"I’m going to buy some new clothes tomorrow. (not I will buy)"'
    ],
    exercises: [
      '{ question: "I forgot my wallet. Not to worry. I _____ (lend) you some money.", answer: "’ll lend" }',
      '{ question: "Why are you filling that bucket with water? I _____ (wash) the car.", answer: "’m going to wash" }',
      '{ question: "I don’t know how to use the washing machine. It’s easy. I _____ (show) you.", answer: "’ll show" }',
      '{ question: "I’ve decided to paint this room. That’s nice. What colour _____ (you / paint) it?", answer: "are you going to paint" }'
    ]
  },
  24: {
    title: 'will be doing and will have done',
    explanations: [
      '"I will be doing something (future continuous) = I will be in the middle of doing it at a certain time in the future."',
      '"I will have done something (future perfect) = it will already be complete before a time in the future."'
    ],
    examples: [
      '"This time next week I’ll be on holiday. I’ll be lying on the beach."',
      '"Don’t phone between 7 and 8. We’ll be eating."',
      '"Sally always leaves for work at 8.30. She won’t be at home at 9.00 – she’ll have gone to work."'
    ],
    exercises: [
      '{ question: "Tomorrow afternoon we’re going to play tennis from 3 until 4.30. So at 4 o’clock, we _____ (play) tennis.", answer: "’ll be playing" }',
      '{ question: "Can we meet tomorrow? Yes, but not in the afternoon. I _____ (work).", answer: "’ll be working" }',
      '{ question: "Phone me after 8 o’clock. We _____ (finish) dinner by then.", answer: "will have finished" }',
      '{ question: "Don’t phone me at 8.00. I _____ (have) dinner.", answer: "will be having" }'
    ]
  },
  25: {
    title: 'when I do and when I have done / if and when',
    explanations: [
      '"We use the present simple (I do) with a future meaning after when, while, before, after, until, as soon as."',
      '"You can also use the present perfect (have done) after when / after / until / as soon as to show that one thing must be complete before the other."',
      '"We use if (not when) for things that will possibly happen."'
    ],
    examples: [
      '"I’ll call you again later when I arrive. (not when I will arrive)"',
      '"Can I have the newspaper when you’ve finished with it?"',
      '"If it is raining this evening, I won’t go out. (not when it is raining)"'
    ],
    exercises: [
      '{ question: "Don’t forget to lock the door when you _____ (go) out.", answer: "go" }',
      '{ question: "As soon as we get any more information, we _____ (let) you know.", answer: "’ll let" }',
      '{ question: "I want to get to the cinema before the film _____ (start).", answer: "starts" }',
      '{ question: "Don’t drive through a red light. Wait until it _____ (change) to green.", answer: "changes" }'
    ]
  },
  26: {
    title: 'can, could and (be) able to',
    explanations: [
      '"We use can to say that something is possible or allowed, or that somebody has the ability to do something."',
      '"We use be able to instead of can in situations where can is not possible (e.g. present perfect: hasn\'t been able to)."',
      '"We use could for general ability in the past."'
    ],
    examples: [
      '"Gary has travelled a lot. He can speak five languages."',
      '"I haven’t been able to sleep very well recently."',
      '"My grandfather travelled a lot. He could speak five languages."'
    ],
    exercises: [
      '{ question: "Gary has travelled a lot. He _____ (speak) five languages.", answer: "can speak" }',
      '{ question: "I haven’t _____ (sleep) very well recently.", answer: "been able to sleep" }',
      '{ question: "My grandfather travelled a lot. He _____ (speak) five languages.", answer: "could speak" }',
      '{ question: "I looked everywhere for the book, but I _____ (find) it.", answer: "couldn’t find" }'
    ]
  },
  27: {
    title: 'could (do) and could have (done)',
    explanations: [
      '"Sometimes could is the past of can."',
      '"We use could to talk about possible actions now or in the future (especially to make suggestions)."',
      '"We use could have (done) to talk about the past: you had the ability or opportunity to do something, but you didn\'t do it."'
    ],
    examples: [
      '"What shall we do tonight? We could go to the cinema."',
      '"I’m so tired, I could sleep for a week."',
      '"We had a really good holiday. It couldn’t have been better."'
    ],
    exercises: [
      '{ question: "What shall we do tonight? We _____ (go) to the cinema.", answer: "could go" }',
      '{ question: "I _____ (live) in a big city. I’d hate it.", answer: "couldn’t live" }',
      '{ question: "We had a really good holiday. It _____ (be) better.", answer: "couldn’t have been" }',
      '{ question: "Jack prepared for the exam as well as he could. He _____ (study) harder.", answer: "couldn’t have studied" }'
    ]
  },
  28: {
    title: 'must and can’t',
    explanations: [
      '"We use must to say that we believe something is certain."',
      '"We use can\'t to say that we believe something is not possible."',
      '"For the past, we use must have (done) and can\'t have (done)."'
    ],
    examples: [
      '"You’ve been travelling all day. You must be tired."',
      '"That restaurant can’t be very good. It’s always empty."',
      '"The phone rang, but I didn’t hear it. I must have been asleep."'
    ],
    exercises: [
      '{ question: "You’ve been travelling all day. You _____ (be) tired.", answer: "must be" }',
      '{ question: "That restaurant _____ (be) very good. It’s always full of people.", answer: "must be" }',
      '{ question: "That restaurant _____ (be) very good. It’s always empty.", answer: "can’t be" }',
      '{ question: "I lost my phone. I _____ (leave) it in the restaurant last night.", answer: "must have left" }'
    ]
  },
  29: {
    title: 'may and might 1',
    explanations: [
      '"We use may or might to say that something is possible."',
      '"You can use may or might: It may be true. or It might be true."',
      '"The negative forms are may not and might not."'
    ],
    examples: [
      '"Ask Kate. She might know."',
      '"Where’s Ben? He might be having lunch."',
      '"I’ll try, but it may not be possible."'
    ],
    exercises: [
      '{ question: "Do you know where Helen is? She _____ (be) in her room.", answer: "might be" }',
      '{ question: "Whose phone is this? It _____ (be) Tom’s.", answer: "might be" }',
      '{ question: "I hope you can help me. I’ll try, but it _____ (not / be) possible.", answer: "may not be" }',
      '{ question: "Where are those people from? They _____ (be) Brazilian.", answer: "might be" }'
    ]
  },
  30: {
    title: 'may and might 2',
    explanations: [
      '"We use may and might to talk about possible actions or happenings in the future (e.g., perhaps I will)."',
      '"The negative forms are may not and might not."',
      '"Might is typically used when the situation is less certain or more hypothetical."'
    ],
    examples: [
      '"I haven’t decided where to go on holiday. I may go to Ireland."',
      '"Take an umbrella with you. It might rain later."',
      '"Amy may not go out tonight. She isn’t feeling well."'
    ],
    exercises: [
      '{ question: "Take an umbrella with you when you go out. It _____ (rain) later.", answer: "might rain" }',
      '{ question: "Be careful with your coffee. You _____ (spill) it.", answer: "might spill" }',
      '{ question: "Tell me about your problem. I _____ (help) you.", answer: "might be able to help" }',
      '{ question: "We _____ (wait) for a long time for a bus.", answer: "might have to wait" }'
    ]
  },
  31: {
    title: 'have to and must',
    explanations: [
      '"Must is often the speaker’s own opinion or recommendation, while have to is used for facts and external obligations."',
      '"Have to can be used in all tenses. Must is only used for the present or future."',
      '"Mustn’t = do not do it (prohibited). Don’t have to = you don’t need to do it, but you can if you want."'
    ],
    examples: [
      '"I haven’t spoken to Sue for ages. I must phone her. / I have to phone her."',
      '"I have to work from 8.30 to 5.30 every day. (a fact, not an opinion)"',
      '"You must keep this a secret. You mustn’t tell anyone. (= don’t tell anyone)"'
    ],
    exercises: [
      '{ question: "Robert can’t come out... He _____ (work) late.", answer: "has to work" }',
      '{ question: "Last week Tina broke her arm and _____ (go) to hospital.", answer: "had to go" }',
      '{ question: "Richard _____ (wear) a suit to work, but he usually does.", answer: "doesn’t have to" }',
      '{ question: "I promised Kate I’d call her tomorrow. I _____ (forget).", answer: "mustn’t" }'
    ]
  },
  32: {
    title: 'must mustn’t needn’t',
    explanations: [
      '"Must: Necessary to do. Mustn\'t: Necessary not to do."',
      '"Needn\'t: Not necessary to do (also don\'t need to)."',
      '"Needn\'t have (done): Used for the past to say someone did something that was not necessary."'
    ],
    examples: [
      '"We don’t have much time. We must hurry."',
      '"We must be very quiet. We mustn’t make any noise."',
      '"We have plenty of time. We needn’t hurry."'
    ],
    exercises: [
      '{ question: "You must be very quiet. You _____ (make) any noise.", answer: "mustn’t make" }',
      '{ question: "You must be on time. You _____ (be) late.", answer: "mustn’t be" }',
      '{ question: "I can manage the shopping alone. You _____ (come) with me.", answer: "needn’t come" }',
      '{ question: "You can delete these emails. You _____ (keep) them.", answer: "needn’t keep" }'
    ]
  },
  33: {
    title: 'should 1',
    explanations: [
      '"Use should to say something is a good thing or the right thing to do."',
      '"Use should when something is not right or when you expect something to happen."',
      '"Should have (done): Used to say that someone did not do something, but it would have been a good thing to do."'
    ],
    examples: [
      '"You look tired. You should go to bed."',
      '"Should we invite Stephanie to the party?"',
      '"You missed a great party last night. You should have come."'
    ],
    exercises: [
      '{ question: "Anna needs a change. She _____ (go) away for a few days.", answer: "should go" }',
      '{ question: "Your salary is very low. You _____ (look) for another job.", answer: "should look" }',
      '{ question: "Joe hasn’t arrived yet, but he _____ (be) here soon.", answer: "should be" }',
      '{ question: "The TV has been repaired. It _____ (work) OK now.", answer: "should be working" }'
    ]
  },
  34: {
    title: 'should 2',
    explanations: [
      '"You can use should after verbs such as insist, demand, recommend, suggest, and propose."',
      '"Should is used after certain adjectives like strange, funny, natural, typical, surprised, important, and essential."',
      '"If ... should ...: Use this structure to talk about a possibility that is smaller or less likely."'
    ],
    examples: [
      '"Doctors recommend that everyone should eat plenty of fruit."',
      '"It’s only natural that parents should worry about their children."',
      '"Should there be any problems, please let me know."'
    ],
    exercises: [
      '{ question: "The doctor recommended that I _____ (eat) more fruit.", answer: "should eat" }',
      '{ question: "Isn’t it typical of Joe that he _____ (leave) without saying goodbye...?", answer: "should leave" }',
      '{ question: "I was surprised that they _____ (ask) me for advice.", answer: "should ask" }',
      '{ question: "This is a democratic election, and it’s important that you _____ (vote).", answer: "should vote" }'
    ]
  },
  35: {
    title: 'I’d better … it’s time …',
    explanations: [
      '"had better (\'d better): Used to say that it is advisable to do something. If you do not do it, there will be a problem or a danger."',
      '"had better refers to the present or future, not the past."',
      '"it’s time ...: Use \'It’s time (somebody) did something\' to say that something should have already been done or started."'
    ],
    examples: [
      '"The film starts at 8.30. You’d better go now or you’ll miss the beginning."',
      '"It’s late. It’s time we went home."',
      '"Jack is a great talker, but it’s about time he did something instead of just talking."'
    ],
    exercises: [
      '{ question: "It looks as if it might rain. We _____ (take) an umbrella.", answer: "’d better take" }',
      '{ question: "What are we going to do? It’s time we _____ (decide).", answer: "decided" }',
      '{ question: "Kate stops complaining about everything. It’s time she _____ (stop) complaining.", answer: "stopped" }',
      '{ question: "Ben needs to know what happened. Somebody _____ (tell) him.", answer: "’d better tell" }'
    ]
  },
  36: {
    title: 'would',
    explanations: [
      '"Use would/\'d to talk about imaginary situations."',
      '"Use would have (done) to talk about things that did not happen in the past."',
      '"Use would to talk about things that happened regularly in the past, similar to used to."'
    ],
    examples: [
      '"I’d love to live by the sea."',
      '"I would have called you, but I didn\'t have your number."',
      '"When we were children... we would always forget my birthday."'
    ],
    exercises: [
      '{ question: "You should go and see the film. I think you _____ (enjoy) it.", answer: "would enjoy" }',
      '{ question: "Martina insisted on carrying all her luggage. She _____ (not / let) me help her.", answer: "wouldn’t let" }',
      '{ question: "I tried to warn him, but he _____ (not / listen).", answer: "wouldn’t listen" }',
      '{ question: "I was in a hurry when I saw you. Otherwise I _____ (stop) to talk.", answer: "would have stopped" }'
    ]
  },
  37: {
    title: 'can/could/would you … ? etc.',
    explanations: [
      '"Use can or could to ask people to do things. Could is generally more polite."',
      '"Asking for Permission: Use \'Can I...?\', \'Could I...?\', or \'May I...?\' to ask if it is okay to do something."',
      '"Offers and Invitations: Use \'Can I...?\', \'Would you like...?\', or \'I’d like to...\' to offer help or invite someone."'
    ],
    examples: [
      '"Could you tell me the way to the station?"',
      '"Do you think you could take me to the airport?"',
      '"Would you like to come to dinner?"'
    ],
    exercises: [
      '{ question: "You’ve finished your meal... and now you want the bill. _____ (I / have) the bill, please?", answer: "Can I have" }',
      '{ question: "You’re standing... and you want to sit down. You say: _____ (I / sit) here?", answer: "Can I sit" }',
      '{ question: "You can\'t open the door yourself. You say: _____ (you / open) the door, please?", answer: "Could you open" }',
      '{ question: "You meet a very famous person. You ask: Do you think I _____ (get) your autograph?", answer: "could get" }'
    ]
  },
  38: {
    title: 'if I do … and if I did …',
    explanations: [
      '"Use if + present (e.g., if we take) when a situation is possible or you are considering doing it."',
      '"Use if + past (e.g., if we took) to imagine a situation that is different from the actual plan or is unlikely to happen."',
      '"In the \'imaginary\' case, the past tense is used in the if-clause, and would is used in the main clause."'
    ],
    examples: [
      '"If we take the bus, it will be cheaper. (real possibility)"',
      '"If we took the bus, it would be cheaper. (imaginary)"',
      '"What would you do if you were in a lift and it stopped between floors?"'
    ],
    exercises: [
      '{ question: "We’re not going to stay at a hotel. If we _____ (stay) at a hotel, it would cost too much.", answer: "stayed" }',
      '{ question: "Kevin is not going to apply for the job. If he _____ (apply) for the job, he wouldn’t get it.", answer: "applied" }',
      '{ question: "What _____ (you / do) if you _____ (be) in a lift and it _____ (stop) between floors?", answer: "would you do ... were ... stopped" }',
      '{ question: "I’m not going to buy that coat. If I _____ (buy) it, I wouldn\'t have any money left.", answer: "bought" }'
    ]
  },
  39: {
    title: 'if I knew … I wish I knew …',
    explanations: [
      '"When imagining a situation different from reality, use if + past (e.g., if I knew), but the meaning is present, not past."',
      '"Use I wish to express regret that a current situation is not the way you would like it to be."',
      '"You can use were instead of was after if and wish (e.g., If I were you...)."'
    ],
    examples: [
      '"I’d phone him if I knew his number. (= I don’t know it)"',
      '"If you were in my position, what would you do?"',
      '"It’s a pity he can’t drive. It would be useful if he could."'
    ],
    exercises: [
      '{ question: "This soup _____ (taste) better if it wasn’t so salty.", answer: "would taste" }',
      '{ question: "If we _____ (live) in a city, our life would be different.", answer: "lived" }',
      '{ question: "I wish I _____ (have) a piano. I’d love to have one.", answer: "had" }',
      '{ question: "I don\'t know many people. I wish I _____ (know) more people.", answer: "knew" }'
    ]
  },
  40: {
    title: 'if I had known … I wish I had known …',
    explanations: [
      '"To talk about a past situation that did not happen, use if + had (past perfect)."',
      '"The other part of the sentence uses would have (done)."',
      '"Use I wish I had (done) to express regret about something in the past."'
    ],
    examples: [
      '"If I’d known you were in hospital, I would have gone to visit you."',
      '"The view was wonderful. I would have taken some pictures if I’d had a camera with me."',
      '"I wish I had taken your advice."'
    ],
    exercises: [
      '{ question: "I didn’t know you were in hospital. If I _____ (know), I would have visited you.", answer: "had known" }',
      '{ question: "I would have taken some pictures if I _____ (have) a camera.", answer: "’d had / had had" }',
      '{ question: "I didn’t take your advice. I wish I _____ (take) your advice.", answer: "had taken / ’d taken" }',
      '{ question: "I didn\'t see you. If I _____ (see) you, I would have said hello.", answer: "had seen" }'
    ]
  },
  41: {
    title: 'wish',
    explanations: [
      '"Used for regrets about the present (I wish I knew) or the past (I wish I had known)."',
      '"Wish ... would: Use this structure when you want something to happen or change, often because you are annoyed by the current situation."',
      '"Use I wish I could for things you would like to be able to do now."'
    ],
    examples: [
      '"I wish I had a piano. I’d love to have one."',
      '"The weather is horrible. I wish it would stop raining."',
      '"I wish we could have stayed there longer."'
    ],
    exercises: [
      '{ question: "You are always complaining. I wish you _____ (not / complain).", answer: "wouldn’t complain" }',
      '{ question: "The weather is horrible. I wish it _____ (stop) raining.", answer: "would stop" }',
      '{ question: "I can’t go to the party. I wish I _____ (can / go).", answer: "could go" }',
      '{ question: "It\'s a pity I can\'t drive. I wish I _____ (can / drive).", answer: "could drive" }'
    ]
  },
  42: {
    title: 'Passive 1 (is done / was done)',
    explanations: [
      '"In an active sentence, we focus on what the subject does. In a passive sentence, the focus shifts to what happens to the subject."',
      '"The passive is formed using be (is/am/are/was/were) + past participle."',
      '"If you want to say who performed the action in a passive sentence, use by."'
    ],
    examples: [
      '"Two hundred people are employed by the company."',
      '"How old is this house? It was built in 1981."',
      '"Most of the earth’s surface is covered by water."'
    ],
    exercises: [
      '{ question: "Ask about glass. How _____ (make)?", answer: "is glass made" }',
      '{ question: "Ask about DNA. When _____ (discover)?", answer: "was DNA discovered" }',
      '{ question: "They cancelled all flights because of fog. All flights _____ (cancel) because of fog.", answer: "were cancelled" }',
      '{ question: "Somebody accused me of stealing money. I _____ (accuse) of stealing money.", answer: "was accused" }'
    ]
  },
  43: {
    title: 'Passive 2 (be done / been done / being done)',
    explanations: [
      '"Passive Infinitive: Use be done/cleaned/built etc. after modal verbs like will, can, must, or might."',
      '"Present Perfect Passive: Formed with have/has been + past participle."',
      '"Present Continuous Passive: Formed with am/is/are being + past participle."'
    ],
    examples: [
      '"There’s somebody behind us. We’re being followed."',
      '"The date of the meeting has been changed."',
      '"The situation will be known on Tuesday."'
    ],
    exercises: [
      '{ question: "The full results will _____ (know) on Tuesday.", answer: "be known" }',
      '{ question: "The old school is going to _____ (knock) down.", answer: "be knocked" }',
      '{ question: "They have built two new hotels near the airport. Two new hotels _____ (build) near the airport.", answer: "have been built" }',
      '{ question: "I didn’t know that our conversation _____ (record).", answer: "was being recorded" }'
    ]
  },
  44: {
    title: 'Passive 3',
    explanations: [
      '"Verbs like give, ask, offer, pay, show, and tell can have two objects. This allows for two different passive structures."',
      '"You can use the passive of -ing (e.g., I don\'t like being told what to do)."',
      '"Get Passive: Use get instead of be for the passive in informal, spoken English, specifically when something happens."'
    ],
    examples: [
      '"I was given this watch by my grandfather."',
      '"I don\'t like being told what to do."',
      '"Did you get paid last week?"'
    ],
    exercises: [
      '{ question: "Steve hates _____ (keep) waiting.", answer: "being kept" }',
      '{ question: "It’s a busy road... I’m afraid of _____ (knock down).", answer: "being knocked down" }',
      '{ question: "I don\'t often _____ (ask) difficult questions.", answer: "get asked" }',
      '{ question: "She retired from her job recently. She _____ (give) a present by her colleagues.", answer: "was given" }'
    ]
  },
  45: {
    title: 'it is said that … / he is said to … / he is supposed to …',
    explanations: [
      '"Used to say what people say. You can use \'It is said that...\' or \'He is said to...\' with verbs like alleged, believed, expected, reported."',
      '"Supposed to... can mean the same as \'said to\' (it\'s supposed to be good)."',
      '"Supposed to... is also used to describe what is intended, arranged, or expected."'
    ],
    examples: [
      '"Cathy is said to run 10 miles a day."',
      '"Many people are reported to be homeless after the floods."',
      '"You’re not supposed to park your car here."'
    ],
    exercises: [
      '{ question: "It is thought that the thieves got in through a window. The thieves _____ (think) to have got in through a window.", answer: "are thought" }',
      '{ question: "You shouldn’t criticise me all the time. You _____ (supposed) to be my friend.", answer: "’re supposed" }',
      '{ question: "You _____ (not / supposed) to park your car here.", answer: "’re not supposed" }',
      '{ question: "It is expected that the strike will end soon. The strike _____ (expect) to end soon.", answer: "is expected" }'
    ]
  },
  46: {
    title: 'have something done',
    explanations: [
      '"Use this structure when you arrange for someone else to do something for you. Compare \'Lisa repaired the roof\' (herself) with \'Lisa had the roof repaired\'."',
      '"The order is always have + object + past participle."',
      '"You can use get something done in the same way (e.g., I should get my hair cut)."'
    ],
    examples: [
      '"Where did you have your hair cut?"',
      '"Have you ever had your bike stolen?"',
      '"Gary had his nose broken in a fight."'
    ],
    exercises: [
      '{ question: "Sarah services her car once a year. Sarah _____ (have / her car / service) once a year.", answer: "has her car serviced" }',
      '{ question: "Ben didn’t build that wall himself. He _____ (have / it / build).", answer: "had it built" }',
      '{ question: "Joe can’t get a visa. His application was refused. He _____ (have / his application / refuse).", answer: "’s had his application refused" }',
      '{ question: "I’ve had some good news! I _____ (have / my salary / increase).", answer: "’ve had my salary increased" }'
    ]
  },
  47: {
    title: 'Reported speech 1 (he said that …)',
    explanations: [
      '"Reported speech is used when you want to tell someone what another person said in the past."',
      '"When reporting speech, the verb usually changes from the present to the past to reflect that the statement happened earlier (e.g., am/is becomes was, will becomes would)."',
      '"You can use \'that\' to introduce the reported statement, but it is often optional."'
    ],
    examples: [
      '"Direct: Paul said, \'I’m feeling ill.\' -> Reported: Paul said (that) he was feeling ill."',
      '"Direct: Sarah said, \'I don’t know.\' -> Reported: Sarah said (that) she didn’t know."',
      '"Direct: Amy said, \'Twenty.\' -> Reported: Amy told me (that) there were twenty students in her class."'
    ],
    exercises: [
      '{ question: "I asked Sarah the name of the cafe... but she said _____ (she / not / know).", answer: "she didn’t know" }',
      '{ question: "The man on the reception desk said _____ (it / be / only five minutes\' walk).", answer: "it was only five minutes\' walk" }',
      '{ question: "Direct: \'I don\'t have any money.\' Reported: He said he _____ (not / have) any money.", answer: "didn\'t have" }',
      '{ question: "Direct: \'I will be late.\' Reported: She said she _____ (be) late.", answer: "would be" }'
    ]
  },
  48: {
    title: 'Reported speech 2',
    explanations: [
      '"Say vs. Tell: Use tell if you mention the person being spoken to (the object); use say if you do not."',
      '"Reporting Requests and Commands: Use ask or tell followed by somebody + to + infinitive."',
      '"For negative requests, use not to."'
    ],
    examples: [
      '"But you said you didn’t like fish. (Contradicting a previous statement)"',
      '"He told me to wait for him. (Reporting a command)"',
      '"She told her not to worry. (Reporting a negative request)"'
    ],
    exercises: [
      '{ question: "But you said you _____ (cannot / drive).", answer: "couldn\'t drive" }',
      '{ question: "She told her _____ (slow down).", answer: "to slow down" }',
      '{ question: "He told him _____ (mind) his own business.", answer: "to mind" }',
      '{ question: "He _____ (say / tell) me that he was tired.", answer: "told" }'
    ]
  },
  49: {
    title: 'Questions 1',
    explanations: [
      '"In most questions, the subject comes after the first verb (auxiliary verb + subject + main verb)."',
      '"Simple Present/Past: Use do/does/did for the present and past simple."',
      '"Subject vs. Object Questions: When who or what is the subject, do not use do/does/did and keep the statement word order (e.g., Who lives here?)."',
      '"When who or what is the object, use the standard question word order (e.g., Who did you meet?)."'
    ],
    examples: [
      '"How long have you been married?"',
      '"Who hit you? (Who is the subject) vs. Who did you hit? (Who is the object)"',
      '"Isn’t she coming out with us? (Expressing surprise)"'
    ],
    exercises: [
      '{ question: "Somebody paid the bill. _____ (Who)?", answer: "Who paid the bill?" }',
      '{ question: "Something happened. _____ (What)?", answer: "What happened?" }',
      '{ question: "Don\'t go and see that film. Why not? _____ (it / not / be / good)?", answer: "Isn\'t it good?" }',
      '{ question: "I hit somebody. _____ (Who)?", answer: "Who did you hit?" }'
    ]
  },
  50: {
    title: 'Questions 2 (do you know where … ? / he asked me where …)',
    explanations: [
      '"Embedded Questions: When a question is part of a longer sentence (starting with Do you know..., I don’t know...), the word order is the same as a statement (subject + verb) and you do not use do/does/did."',
      '"Reported Questions: In reported speech, the same statement word order applies, and the verb typically shifts to the past."',
      '"Yes/No Questions: Use if or whether when there is no other question word (like what or where)."'
    ],
    examples: [
      '"Do you know what time it is? (not what time is it?)"',
      '"I don\'t know if anybody saw me."',
      '"He asked me where I was from."'
    ],
    exercises: [
      '{ question: "I want to know _____ (what / this word / mean).", answer: "what this word means" }',
      '{ question: "I wonder _____ (how old / Tom / be).", answer: "how old Tom is" }',
      '{ question: "They asked me _____ (why / I / come / to London).", answer: "why I’d come to London" }',
      '{ question: "Do you know _____ (what time / it / be)?", answer: "what time it is" }'
    ]
  },
  51: {
    title: 'Auxiliary verbs (have/do/can etc.) I think so / I hope so etc.',
    explanations: [
      '"Short Answers and Denials: Auxiliary verbs (do, does, did, have, can, etc.) are used to avoid repeating the main verb in short answers or to deny what someone says."',
      '"Showing Interest or Surprise: Mini-questions like \'have you?\' or \'isn\'t she?\' are used to show you are listening or that you find something unexpected."',
      '"So and Neither: Use \'So am I / So do I\' for positive agreement and \'Neither am I / Neither do I\' for negative agreement."'
    ],
    examples: [
      '"‘Do you like onions?’ ‘Yes, I do.’"',
      '"‘I’m not tired.’ ‘Neither am I.’"',
      '"‘Is it going to rain?’ ‘I hope not.’"'
    ],
    exercises: [
      '{ question: "I like football. (Disagree) _____ (Do you? I / not).", answer: "Do you? I don\'t." }',
      '{ question: "I watched TV last night. (Agree) _____ (So / I).", answer: "So did I." }',
      '{ question: "Is it going to rain? I don\'t like rain. _____ (I hope not).", answer: "I hope not." }',
      '{ question: "I\'m tired. _____ (So / I).", answer: "So am I." }'
    ]
  },
  52: {
    title: 'Question tags (do you? isn’t it? etc.)',
    explanations: [
      '"Question tags are mini-questions (auxiliary verb + pronoun) put at the end of a sentence."',
      '"Positive sentences usually take a negative tag (\'isn\'t it?\'), and negative sentences take a positive tag (\'do you?\')."',
      '"They are used to ask for agreement or to check information. Special cases: \'I am... aren\'t I?\'"'
    ],
    examples: [
      '"Karen plays the piano, doesn’t she?"',
      '"You didn’t lock the door, did you?"',
      '"You\'re tired, aren\'t you?"'
    ],
    exercises: [
      '{ question: "Sarah doesn’t know Ann, _____?", answer: "does she" }',
      '{ question: "It\'s (very) expensive, _____?", answer: "isn\'t it" }',
      '{ question: "You couldn’t help me, _____?", answer: "could you" }',
      '{ question: "I’m too impatient, _____?", answer: "aren\'t I" }'
    ]
  },
  53: {
    title: 'Verb + -ing (enjoy doing / stop doing etc.)',
    explanations: [
      '"Certain verbs are followed by an -ing form rather than \'to...\'. These include: enjoy, mind, suggest, stop, finish, recommend, consider."',
      '"Negative: Formed with not -ing (e.g., I enjoy not having to get up early)."',
      '"Finished Actions: You can use \'having done/stolen/said\' to emphasize the action is finished, but the simple -ing form is also correct."'
    ],
    examples: [
      '"I enjoy reading. (not enjoy to read)"',
      '"Suddenly everybody stopped talking."',
      '"They denied doing anything wrong."'
    ],
    exercises: [
      '{ question: "She suggested _____ (go) to the zoo.", answer: "going" }',
      '{ question: "Please stop _____ (make) so much noise!", answer: "making" }',
      '{ question: "I don’t remember her _____ (say) that.", answer: "saying" }',
      '{ question: "I don\'t fancy _____ (go out) this evening.", answer: "going out" }'
    ]
  },
  54: {
    title: 'Verb + to … (decide to … / forget to … etc.)',
    explanations: [
      '"Verbs followed by the infinitive \'to...\' include: offer, agree, refuse, decide, plan, arrange, hope, forget, manage."',
      '"Negative: Formed with not to..."',
      '"After verbs like ask, know, decide, remember, you can use what/how/where/whether + to..."'
    ],
    examples: [
      '"We decided to take a taxi home."',
      '"I promised not to be late."',
      '"Can somebody show me how to use this camera?"'
    ],
    exercises: [
      '{ question: "She agreed _____ (help) him.", answer: "to help" }',
      '{ question: "We managed _____ (get) to the airport in time.", answer: "to get" }',
      '{ question: "Tom appears _____ (be) worried.", answer: "to be" }',
      '{ question: "Have you decided _____ (where / go) on holiday?", answer: "where to go" }'
    ]
  },
  55: {
    title: 'Verb (+ object) + to … (I want you to …)',
    explanations: [
      '"Some verbs like want, expect, ask, help, would like can be used with just \'to...\' or with \'object + to...\'."',
      '"Some verbs must have an object before \'to...\'. These include: tell, remind, warn, ask, invite, persuade."',
      '"Make and Let: These are followed by an object + infinitive without \'to\'."'
    ],
    examples: [
      '"We expected Dan to be late."',
      '"Can you remind me to call Joe?"',
      '"Tom’s glasses make him look older."'
    ],
    exercises: [
      '{ question: "They invited him _____ (stay) with them.", answer: "to stay" }',
      '{ question: "My father allowed me _____ (use) his car.", answer: "to use" }',
      '{ question: "Sarah persuaded me _____ (apply) for the job.", answer: "to apply" }',
      '{ question: "I want you _____ (know) the truth.", answer: "to know" }'
    ]
  },
  56: {
    title: 'Verb + -ing or to … 1 (remember, regret etc.)',
    explanations: [
      '"Some verbs can take either -ing or to... but the meaning is different."',
      '"Remember doing: You did it first, then you remember it. Remember to do: You remember you have to do it first, then you do it."',
      '"Regret doing: Regretting something you did in the past. Regret to say/tell/inform: Used to give bad news."'
    ],
    examples: [
      '"I clearly remember locking the door."',
      '"Please remember to lock the door."',
      '"We regret to inform you that your application has been unsuccessful."'
    ],
    exercises: [
      '{ question: "We played well and deserved _____ (win).", answer: "to win" }',
      '{ question: "He remembers _____ (be) in hospital when he was a small child.", answer: "being" }',
      '{ question: "Please remember _____ (lock) the door when you go out.", answer: "to lock" }',
      '{ question: "I regret _____ (say) that. It was a mistake.", answer: "saying" }'
    ]
  },
  57: {
    title: 'Verb + -ing or to … 2 (try, need, help)',
    explanations: [
      '"Try to do: To attempt or make an effort to do something. Try doing something: To do it as an experiment or test to see if it works."',
      '"Need to do: It is necessary for me/someone to do it. Something needs -ing: Something needs to be done to it."',
      '"Help: You can use help to do or help do. Can\'t help doing: I cannot stop myself from doing it."'
    ],
    examples: [
      '"Please try to be quiet when you come home."',
      '"These cakes are delicious. You should try one."',
      '"It’s a difficult problem. It needs thinking about carefully."',
      '"I’m sorry I’m so nervous. I can’t help it."'
    ],
    exercises: [
      '{ question: "I tried _____ (reach) the shelf, but I wasn\'t tall enough.", answer: "to reach" }',
      '{ question: "If you have a problem with the computer, try _____ (restart) it.", answer: "restarting" }',
      '{ question: "The windows are dirty. They _____ (need / clean).", answer: "need cleaning" }',
      '{ question: "I can\'t make a decision right now. I need _____ (think) about it.", answer: "to think" }'
    ]
  },
  58: {
    title: 'Verb + -ing or to … 3 (like / would like etc.)',
    explanations: [
      '"For things you do regularly, you can use -ing or to ... after like, love, hate."',
      '"Enjoy and mind: These are followed only by -ing."',
      '"Would like / would love / would hate / would prefer: These are usually followed by to ..."',
      '"Would like to have done: Use this to say that you regret not being able to do something in the past."'
    ],
    examples: [
      '"I don’t like being kept waiting."',
      '"I’d love to meet your parents."',
      '"I wouldn\'t like to have been alone."'
    ],
    exercises: [
      '{ question: "Rachel is studying medicine. She likes it. (She / like / study / medicine).", answer: "She likes studying medicine." }',
      '{ question: "‘Would you like _____ (sit) down?’ ‘No, thanks. I’ll stand.’", answer: "to sit" }',
      '{ question: "I wouldn\'t like _____ (be) a dentist.", answer: "to be" }',
      '{ question: "I don\'t mind _____ (be) alone.", answer: "being" }'
    ]
  },
  59: {
    title: 'prefer and would rather',
    explanations: [
      '"Prefer: Used for general preferences. You can say prefer to do or prefer doing."',
      '"Prefer structures: prefer something to something else; prefer (doing) one thing rather than (doing) another."',
      '"Would rather (I\'d rather): Followed by the infinitive without to."',
      '"I\'d rather you did something: Used to say what you want someone else to do. The past tense is used, but the meaning is present or future."'
    ],
    examples: [
      '"I prefer driving to travelling by train."',
      '"I prefer to drive rather than travel by train."',
      '"I’d rather get a taxi."',
      '"‘Shall I tell Anna?’ ‘No, I’d rather she didn’t know.’"'
    ],
    exercises: [
      '{ question: "Do you want to eat now? I’d prefer _____ (wait) till later.", answer: "to wait" }',
      '{ question: "Are you going to pay the bill or would you rather I _____ (pay) it?", answer: "paid" }',
      '{ question: "I\'d rather _____ (get) a taxi.", answer: "get" }',
      '{ question: "I prefer tea _____ (than) coffee.", answer: "to" }'
    ]
  },
  60: {
    title: 'Preposition (in/for/about etc.) + -ing',
    explanations: [
      '"If a preposition is followed by a verb, the verb ends in -ing."',
      '"By -ing: Used to describe how something happens."',
      '"Without -ing: Used to describe an action that didn\'t happen."',
      '"To + -ing: When \'to\' is a preposition (not part of an infinitive), it is followed by -ing (e.g., I\'m looking forward to going on holiday)."'
    ],
    examples: [
      '"Kate must be fed up with studying."',
      '"What did you do after leaving school?"',
      '"You can improve your English by reading more."'
    ],
    exercises: [
      '{ question: "Helen has a good memory for names. Helen is good at _____ (remember names).", answer: "remembering names" }',
      '{ question: "You are going on holiday next week. How do you feel? I’m looking forward to _____ (go on holiday).", answer: "going on holiday" }',
      '{ question: "The burglars got in by _____ (break) a window.", answer: "breaking" }',
      '{ question: "We ran ten kilometres without _____ (stop).", answer: "stopping" }'
    ]
  },
  61: {
    title: 'be/get used to … (I’m used to …)',
    explanations: [
      '"Be used to: To be accustomed to something; it is no longer new or strange."',
      '"Get used to: The process of becoming accustomed to something."',
      '"Structure: Followed by a noun or -ing (never the infinitive)."',
      '"Contrast: Do not confuse \'I am used to doing\' (present state) with \'I used to do\' (past habit)."'
    ],
    examples: [
      '"Lisa wasn\'t used to driving on the left."',
      '"He had to get used to having less money."'
    ],
    exercises: [
      '{ question: "We used to _____ (have) a car, but we sold it.", answer: "have" }',
      '{ question: "I\'m not used to _____ (be) alone.", answer: "being" }',
      '{ question: "I am used to _____ (the weather) here.", answer: "the weather" }',
      '{ question: "It took her a few months to get used to _____ (it).", answer: "it" }'
    ]
  },
  62: {
    title: 'Verb + preposition + -ing (succeed in -ing / insist on -ing etc.)',
    explanations: [
      '"Certain verbs are followed by a specific preposition and then the -ing form. Examples: succeed in, insist on, think of, dream of."',
      '"Some verbs require an object before the preposition. Examples: congratulate (someone) on, accuse (someone) of, suspect (someone) of, prevent (someone) from, thank (someone) for."'
    ],
    examples: [
      '"Has Paul succeeded in finding a job yet?"',
      '"They insisted on paying for the meal."',
      '"Tina accused me of being selfish."'
    ],
    exercises: [
      '{ question: "The man is suspected _____ (use) a false passport.", answer: "of using" }',
      '{ question: "Jen thanked Sue _____ (come) to see her.", answer: "for coming" }',
      '{ question: "They insisted _____ (pay) for the meal.", answer: "on paying" }',
      '{ question: "I don\'t feel _____ (go out) tonight.", answer: "like going out" }'
    ]
  }
};

for (let i = 1; i <= 145; i++) {
  const category = getCategory(i);
  const detail = detailedUnits[i];
  
  fileContent += `  'unit-${i}': {\n`;
  fileContent += `    id: 'unit-${i}',\n`;
  
  if (detail) {
    fileContent += `    title: '${detail.title}',\n`;
    fileContent += `    category: '${category}',\n`;
    fileContent += `    explanations: [\n      ${detail.explanations.join(',\n      ')}\n    ],\n`;
    fileContent += `    examples: [\n      ${detail.examples.join(',\n      ')}\n    ],\n`;
    fileContent += `    exercises: [\n      ${detail.exercises.join(',\n      ')}\n    ]\n`;
  } else {
    fileContent += `    title: 'Unit ${i}: Grammar Topic',\n`;
    fileContent += `    category: '${category}',\n`;
    fileContent += `    explanations: [],\n`;
    fileContent += `    examples: [],\n`;
    fileContent += `    exercises: []\n`;
  }
  
  fileContent += `  }${i === 145 ? '' : ','}\n`;
}

fileContent += `};\n`;

fs.writeFileSync(path.join(__dirname, 'src/app/data/grammar.data.ts'), fileContent, 'utf8');
console.log('Successfully generated grammar.data.ts');
