export interface Sentence {
  text: string;
  audioFile: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  sentences: Sentence[];
}

export const LESSONS_DATA: Record<string, Lesson> = {
  // ===== A. DAILY LIFE =====
  'daily-life-greetings': {
    id: 'daily-life-greetings',
    title: 'Greetings',
    category: 'Daily Life',
    subCategory: 'Greetings',
    description: 'You meet someone. You want to say hello.',
    sentences: [
      { text: "Hello. How are you?", audioFile: "dl_greet_1" },
      { text: "Good morning. How are you today?", audioFile: "dl_greet_2" },
      { text: "Hi, nice to meet you.", audioFile: "dl_greet_3" },
      { text: "How's it going?", audioFile: "dl_greet_4" },
      { text: "Long time no see!", audioFile: "dl_greet_5" },
      { text: "What have you been up to?", audioFile: "dl_greet_6" },
      { text: "It's good to see you again.", audioFile: "dl_greet_7" },
      { text: "How have you been?", audioFile: "dl_greet_8" }
    ]
  },
  'daily-life-introductions': {
    id: 'daily-life-introductions',
    title: 'Introductions',
    category: 'Daily Life',
    subCategory: 'Introductions',
    description: 'You meet someone for the first time. You want to introduce yourself.',
    sentences: [
      { text: "My name is John. Nice to meet you.", audioFile: "dl_intro_1" },
      { text: "I'm from the United States.", audioFile: "dl_intro_2" },
      { text: "I work as a teacher.", audioFile: "dl_intro_3" },
      { text: "This is my friend, Sarah.", audioFile: "dl_intro_4" },
      { text: "What do you do?", audioFile: "dl_intro_5" },
      { text: "Where are you from?", audioFile: "dl_intro_6" },
      { text: "I'd like you to meet my colleague.", audioFile: "dl_intro_7" },
      { text: "Pleased to meet you.", audioFile: "dl_intro_8" }
    ]
  },
  'daily-life-family': {
    id: 'daily-life-family',
    title: 'Family',
    category: 'Daily Life',
    subCategory: 'Family',
    description: 'You talk about your family members.',
    sentences: [
      { text: "I have two brothers and one sister.", audioFile: "dl_fam_1" },
      { text: "My mother is a doctor.", audioFile: "dl_fam_2" },
      { text: "Do you have any children?", audioFile: "dl_fam_3" },
      { text: "My father retired last year.", audioFile: "dl_fam_4" },
      { text: "We have a family dinner every Sunday.", audioFile: "dl_fam_5" },
      { text: "My sister is older than me.", audioFile: "dl_fam_6" },
      { text: "This is a photo of my family.", audioFile: "dl_fam_7" },
      { text: "My grandparents live with us.", audioFile: "dl_fam_8" }
    ]
  },
  'daily-life-hobbies': {
    id: 'daily-life-hobbies',
    title: 'Hobbies',
    category: 'Daily Life',
    subCategory: 'Hobbies',
    description: 'You talk about what you like to do in your free time.',
    sentences: [
      { text: "I enjoy reading books in my free time.", audioFile: "dl_hob_1" },
      { text: "I like playing soccer on weekends.", audioFile: "dl_hob_2" },
      { text: "What do you do for fun?", audioFile: "dl_hob_3" },
      { text: "I love listening to music.", audioFile: "dl_hob_4" },
      { text: "She enjoys painting.", audioFile: "dl_hob_5" },
      { text: "I go hiking every Saturday.", audioFile: "dl_hob_6" },
      { text: "My hobby is photography.", audioFile: "dl_hob_7" },
      { text: "Do you play any musical instruments?", audioFile: "dl_hob_8" }
    ]
  },
  'daily-life-shopping': {
    id: 'daily-life-shopping',
    title: 'Shopping',
    category: 'Daily Life',
    subCategory: 'Shopping',
    description: 'You go shopping and need to buy things.',
    sentences: [
      { text: "How much does this cost?", audioFile: "dl_shop_1" },
      { text: "I'm just looking, thanks.", audioFile: "dl_shop_2" },
      { text: "Do you have this in a smaller size?", audioFile: "dl_shop_3" },
      { text: "Can I try this on?", audioFile: "dl_shop_4" },
      { text: "I'll take it.", audioFile: "dl_shop_5" },
      { text: "Do you accept credit cards?", audioFile: "dl_shop_6" },
      { text: "Can I get a receipt, please?", audioFile: "dl_shop_7" },
      { text: "Is there a discount on this?", audioFile: "dl_shop_8" }
    ]
  },
  'daily-life-weather': {
    id: 'daily-life-weather',
    title: 'Weather',
    category: 'Daily Life',
    subCategory: 'Weather',
    description: 'You talk about the weather.',
    sentences: [
      { text: "It's a beautiful day today.", audioFile: "dl_wth_1" },
      { text: "It looks like it's going to rain.", audioFile: "dl_wth_2" },
      { text: "What's the temperature outside?", audioFile: "dl_wth_3" },
      { text: "It's very cold today.", audioFile: "dl_wth_4" },
      { text: "The weather is nice and warm.", audioFile: "dl_wth_5" },
      { text: "Is it going to snow?", audioFile: "dl_wth_6" },
      { text: "It's sunny with a slight breeze.", audioFile: "dl_wth_7" },
      { text: "I heard there's a storm coming.", audioFile: "dl_wth_8" }
    ]
  },

  // ===== B. FOOD & DRINK =====
  'food-drink-restaurant': {
    id: 'food-drink-restaurant',
    title: 'Ordering Food',
    category: 'Food & Drink',
    subCategory: 'Restaurant',
    description: 'You just sat down at a restaurant. You want to order food.',
    sentences: [
      { text: "I'd like a cheeseburger, please.", audioFile: "fd_rest_1" },
      { text: "Can I have a Coke?", audioFile: "fd_rest_2" },
      { text: "What do you recommend?", audioFile: "fd_rest_3" },
      { text: "I'll take the grilled chicken.", audioFile: "fd_rest_4" },
      { text: "Could I get extra cheese?", audioFile: "fd_rest_5" },
      { text: "Can I have it without onions?", audioFile: "fd_rest_6" },
      { text: "I'd like a side of fries.", audioFile: "fd_rest_7" },
      { text: "Can I make it a combo?", audioFile: "fd_rest_8" }
    ]
  },
  'food-drink-coffee-shop': {
    id: 'food-drink-coffee-shop',
    title: 'Coffee Shop',
    category: 'Food & Drink',
    subCategory: 'Coffee Shop',
    description: 'You go to a coffee shop to get a drink.',
    sentences: [
      { text: "I'd like a latte, please.", audioFile: "fd_cof_1" },
      { text: "Can I get that with oat milk?", audioFile: "fd_cof_2" },
      { text: "What size would you like?", audioFile: "fd_cof_3" },
      { text: "I'll have a medium, please.", audioFile: "fd_cof_4" },
      { text: "Can I get it iced?", audioFile: "fd_cof_5" },
      { text: "How much is that?", audioFile: "fd_cof_6" },
      { text: "Can I have extra foam?", audioFile: "fd_cof_7" },
      { text: "Do you have any decaf?", audioFile: "fd_cof_8" }
    ]
  },
  'food-drink-ordering': {
    id: 'food-drink-ordering',
    title: 'Ordering Takeout',
    category: 'Food & Drink',
    subCategory: 'Ordering',
    description: 'You call a restaurant to order food for pickup or delivery.',
    sentences: [
      { text: "I'd like to place an order for delivery.", audioFile: "fd_ord_1" },
      { text: "Can I get two pepperoni pizzas?", audioFile: "fd_ord_2" },
      { text: "What's the estimated delivery time?", audioFile: "fd_ord_3" },
      { text: "My address is 123 Main Street.", audioFile: "fd_ord_4" },
      { text: "Can I add extra cheese to that?", audioFile: "fd_ord_5" },
      { text: "How much will it be?", audioFile: "fd_ord_6" },
      { text: "Please include some napkins.", audioFile: "fd_ord_7" },
      { text: "Thank you. How long will it take?", audioFile: "fd_ord_8" }
    ]
  },
  'food-drink-supermarket': {
    id: 'food-drink-supermarket',
    title: 'At the Supermarket',
    category: 'Food & Drink',
    subCategory: 'Supermarket',
    description: 'You go to the supermarket to buy groceries.',
    sentences: [
      { text: "Excuse me, where is the bread aisle?", audioFile: "fd_sup_1" },
      { text: "How much are these apples?", audioFile: "fd_sup_2" },
      { text: "Do you have any organic milk?", audioFile: "fd_sup_3" },
      { text: "I need a shopping cart.", audioFile: "fd_sup_4" },
      { text: "Is this on sale?", audioFile: "fd_sup_5" },
      { text: "Can I get a bag, please?", audioFile: "fd_sup_6" },
      { text: "I'll pay by card.", audioFile: "fd_sup_7" },
      { text: "Could you check the price for me?", audioFile: "fd_sup_8" }
    ]
  },

  // ===== C. TRAVEL =====
  'travel-airport': {
    id: 'travel-airport',
    title: 'At the Airport',
    category: 'Travel',
    subCategory: 'Airport',
    description: 'You are at the airport checking in for your flight.',
    sentences: [
      { text: "Where is the check-in counter?", audioFile: "tr_air_1" },
      { text: "Can I see your passport, please?", audioFile: "tr_air_2" },
      { text: "How many bags are you checking?", audioFile: "tr_air_3" },
      { text: "I'd like a window seat, please.", audioFile: "tr_air_4" },
      { text: "What gate is my flight?", audioFile: "tr_air_5" },
      { text: "Is my flight on time?", audioFile: "tr_air_6" },
      { text: "Where is baggage claim?", audioFile: "tr_air_7" },
      { text: "I lost my luggage.", audioFile: "tr_air_8" }
    ]
  },
  'travel-hotel': {
    id: 'travel-hotel',
    title: 'Hotel Check-in',
    category: 'Travel',
    subCategory: 'Hotel',
    description: 'You arrive at your hotel and want to check in.',
    sentences: [
      { text: "I have a reservation under Smith.", audioFile: "tr_hot_1" },
      { text: "Check-in is at 3 PM.", audioFile: "tr_hot_2" },
      { text: "Can I get a room with a view?", audioFile: "tr_hot_3" },
      { text: "What time is breakfast served?", audioFile: "tr_hot_4" },
      { text: "Is there free Wi-Fi?", audioFile: "tr_hot_5" },
      { text: "Can I have a late checkout?", audioFile: "tr_hot_6" },
      { text: "The air conditioning isn't working.", audioFile: "tr_hot_7" },
      { text: "Could you call me a taxi?", audioFile: "tr_hot_8" }
    ]
  },
  'travel-asking-directions': {
    id: 'travel-asking-directions',
    title: 'Asking Directions',
    category: 'Travel',
    subCategory: 'Directions',
    description: 'You are lost and need to ask for directions.',
    sentences: [
      { text: "Excuse me, how do I get to the station?", audioFile: "tr_dir_1" },
      { text: "Is it far from here?", audioFile: "tr_dir_2" },
      { text: "Turn left at the traffic light.", audioFile: "tr_dir_3" },
      { text: "Go straight for two blocks.", audioFile: "tr_dir_4" },
      { text: "It's on your right.", audioFile: "tr_dir_5" },
      { text: "How long does it take to walk there?", audioFile: "tr_dir_6" },
      { text: "Can you show me on the map?", audioFile: "tr_dir_7" },
      { text: "Thank you for your help.", audioFile: "tr_dir_8" }
    ]
  },
  'travel-taxi': {
    id: 'travel-taxi',
    title: 'Taking a Taxi',
    category: 'Travel',
    subCategory: 'Taxi',
    description: 'You need to take a taxi to get somewhere.',
    sentences: [
      { text: "Can you take me to the airport?", audioFile: "tr_tax_1" },
      { text: "How much will it cost?", audioFile: "tr_tax_2" },
      { text: "Please turn on the meter.", audioFile: "tr_tax_3" },
      { text: "I'm in a hurry.", audioFile: "tr_tax_4" },
      { text: "Could you drive slower?", audioFile: "tr_tax_5" },
      { text: "Stop here, please.", audioFile: "tr_tax_6" },
      { text: "Can I pay by card?", audioFile: "tr_tax_7" },
      { text: "Keep the change.", audioFile: "tr_tax_8" }
    ]
  },

  // ===== D. WORK =====
  'work-interview': {
    id: 'work-interview',
    title: 'Job Interview',
    category: 'Work',
    subCategory: 'Interview',
    description: 'You are in a job interview. You need to answer questions confidently.',
    sentences: [
      { text: "Tell me about yourself.", audioFile: "wk_int_1" },
      { text: "I have five years of experience.", audioFile: "wk_int_2" },
      { text: "My greatest strength is problem-solving.", audioFile: "wk_int_3" },
      { text: "Why do you want to work here?", audioFile: "wk_int_4" },
      { text: "I'm looking for new challenges.", audioFile: "wk_int_5" },
      { text: "Where do you see yourself in five years?", audioFile: "wk_int_6" },
      { text: "Thank you for this opportunity.", audioFile: "wk_int_7" },
      { text: "I look forward to hearing from you.", audioFile: "wk_int_8" }
    ]
  },
  'work-meeting': {
    id: 'work-meeting',
    title: 'Business Meeting',
    category: 'Work',
    subCategory: 'Meeting',
    description: 'You are in a business meeting and need to express your ideas.',
    sentences: [
      { text: "Let's start the meeting.", audioFile: "wk_mtg_1" },
      { text: "I'd like to add something.", audioFile: "wk_mtg_2" },
      { text: "Could you please clarify that?", audioFile: "wk_mtg_3" },
      { text: "I agree with your point.", audioFile: "wk_mtg_4" },
      { text: "Let me share my screen.", audioFile: "wk_mtg_5" },
      { text: "What are the next steps?", audioFile: "wk_mtg_6" },
      { text: "I'll follow up via email.", audioFile: "wk_mtg_7" },
      { text: "Thank you everyone for coming.", audioFile: "wk_mtg_8" }
    ]
  },
  'work-email': {
    id: 'work-email',
    title: 'Writing Emails',
    category: 'Work',
    subCategory: 'Email',
    description: 'You need to write professional emails at work.',
    sentences: [
      { text: "Dear Mr. Johnson, I'm writing to apply for...", audioFile: "wk_em_1" },
      { text: "Please find attached the report.", audioFile: "wk_em_2" },
      { text: "I look forward to your response.", audioFile: "wk_em_3" },
      { text: "Could you please review my proposal?", audioFile: "wk_em_4" },
      { text: "Thank you for your prompt reply.", audioFile: "wk_em_5" },
      { text: "Let me know if you need anything else.", audioFile: "wk_em_6" },
      { text: "I'm writing to follow up on our meeting.", audioFile: "wk_em_7" },
      { text: "Best regards, John.", audioFile: "wk_em_8" }
    ]
  },
  'work-presentation': {
    id: 'work-presentation',
    title: 'Giving a Presentation',
    category: 'Work',
    subCategory: 'Presentation',
    description: 'You need to give a presentation to your team.',
    sentences: [
      { text: "Good morning everyone, thank you for coming.", audioFile: "wk_pr_1" },
      { text: "Today I'll be talking about our Q3 results.", audioFile: "wk_pr_2" },
      { text: "Let me start with an overview.", audioFile: "wk_pr_3" },
      { text: "As you can see from this chart...", audioFile: "wk_pr_4" },
      { text: "Are there any questions?", audioFile: "wk_pr_5" },
      { text: "Let's move on to the next slide.", audioFile: "wk_pr_6" },
      { text: "In conclusion, we exceeded our targets.", audioFile: "wk_pr_7" },
      { text: "Thank you for your attention.", audioFile: "wk_pr_8" }
    ]
  },

  // ===== E. SCHOOL =====
  'school-classroom': {
    id: 'school-classroom',
    title: 'In the Classroom',
    category: 'School',
    subCategory: 'Classroom',
    description: 'You are in a classroom and need to communicate with your teacher.',
    sentences: [
      { text: "I have a question about the homework.", audioFile: "sc_cl_1" },
      { text: "Can you explain this again?", audioFile: "sc_cl_2" },
      { text: "What page are we on?", audioFile: "sc_cl_3" },
      { text: "When is the assignment due?", audioFile: "sc_cl_4" },
      { text: "I'm sorry I'm late.", audioFile: "sc_cl_5" },
      { text: "Could you speak more slowly?", audioFile: "sc_cl_6" },
      { text: "I didn't understand the lesson.", audioFile: "sc_cl_7" },
      { text: "Is there a study guide for the exam?", audioFile: "sc_cl_8" }
    ]
  },
  'school-exam': {
    id: 'school-exam',
    title: 'Taking an Exam',
    category: 'School',
    subCategory: 'Exam',
    description: 'You are taking an exam and need to clarify instructions.',
    sentences: [
      { text: "How much time do we have?", audioFile: "sc_ex_1" },
      { text: "Can I use a calculator?", audioFile: "sc_ex_2" },
      { text: "Do we need to write in pen or pencil?", audioFile: "sc_ex_3" },
      { text: "I finished early.", audioFile: "sc_ex_4" },
      { text: "The exam was very difficult.", audioFile: "sc_ex_5" },
      { text: "I'm confident I passed.", audioFile: "sc_ex_6" },
      { text: "When will we get our results?", audioFile: "sc_ex_7" },
      { text: "I need to review my answers.", audioFile: "sc_ex_8" }
    ]
  },
  'school-library': {
    id: 'school-library',
    title: 'At the Library',
    category: 'School',
    subCategory: 'Library',
    description: 'You are at the library and need help finding resources.',
    sentences: [
      { text: "How do I search for books?", audioFile: "sc_lib_1" },
      { text: "Can I borrow this book?", audioFile: "sc_lib_2" },
      { text: "How long can I keep it?", audioFile: "sc_lib_3" },
      { text: "I'd like to renew this book.", audioFile: "sc_lib_4" },
      { text: "Is there a quiet study room?", audioFile: "sc_lib_5" },
      { text: "Where can I find journals?", audioFile: "sc_lib_6" },
      { text: "Can I print here?", audioFile: "sc_lib_7" },
      { text: "What time does the library close?", audioFile: "sc_lib_8" }
    ]
  },
  'school-graduation': {
    id: 'school-graduation',
    title: 'Graduation',
    category: 'School',
    subCategory: 'Graduation',
    description: 'You are preparing for or attending your graduation ceremony.',
    sentences: [
      { text: "I'm so excited to graduate!", audioFile: "sc_grad_1" },
      { text: "The ceremony starts at 10 AM.", audioFile: "sc_grad_2" },
      { text: "My family is here to support me.", audioFile: "sc_grad_3" },
      { text: "I'm going to miss this place.", audioFile: "sc_grad_4" },
      { text: "What are your plans after graduation?", audioFile: "sc_grad_5" },
      { text: "I already have a job offer.", audioFile: "sc_grad_6" },
      { text: "Let's take a photo together.", audioFile: "sc_grad_7" },
      { text: "Congratulations, we did it!", audioFile: "sc_grad_8" }
    ]
  },

  // ===== F. HEALTH =====
  'health-doctor': {
    id: 'health-doctor',
    title: 'Visiting the Doctor',
    category: 'Health',
    subCategory: 'Doctor',
    description: 'You are at the doctor\'s office describing your symptoms.',
    sentences: [
      { text: "I have a headache and a fever.", audioFile: "hl_doc_1" },
      { text: "I've been feeling sick for three days.", audioFile: "hl_doc_2" },
      { text: "Does it hurt when I press here?", audioFile: "hl_doc_3" },
      { text: "I need a prescription for my medication.", audioFile: "hl_doc_4" },
      { text: "How often should I take this medicine?", audioFile: "hl_doc_5" },
      { text: "I need to make an appointment.", audioFile: "hl_doc_6" },
      { text: "Do I need to come back for a check-up?", audioFile: "hl_doc_7" },
      { text: "Thank you, doctor.", audioFile: "hl_doc_8" }
    ]
  },
  'health-hospital': {
    id: 'health-hospital',
    title: 'At the Hospital',
    category: 'Health',
    subCategory: 'Hospital',
    description: 'You or someone you know needs to go to the hospital.',
    sentences: [
      { text: "I need to go to the emergency room.", audioFile: "hl_hos_1" },
      { text: "Can you call an ambulance?", audioFile: "hl_hos_2" },
      { text: "Where is the nearest hospital?", audioFile: "hl_hos_3" },
      { text: "What are your visiting hours?", audioFile: "hl_hos_4" },
      { text: "She's in room 302.", audioFile: "hl_hos_5" },
      { text: "The surgery went well.", audioFile: "hl_hos_6" },
      { text: "When can he go home?", audioFile: "hl_hos_7" },
      { text: "I need to fill out these forms.", audioFile: "hl_hos_8" }
    ]
  },
  'health-pharmacy': {
    id: 'health-pharmacy',
    title: 'At the Pharmacy',
    category: 'Health',
    subCategory: 'Pharmacy',
    description: 'You go to the pharmacy to pick up medication.',
    sentences: [
      { text: "I'm here to pick up a prescription.", audioFile: "hl_ph_1" },
      { text: "Do I need a prescription for this?", audioFile: "hl_ph_2" },
      { text: "How many times a day should I take this?", audioFile: "hl_ph_3" },
      { text: "Are there any side effects?", audioFile: "hl_ph_4" },
      { text: "Do you have something for a cold?", audioFile: "hl_ph_5" },
      { text: "How much does this cost?", audioFile: "hl_ph_6" },
      { text: "Can I get a generic version?", audioFile: "hl_ph_7" },
      { text: "Thanks for your help.", audioFile: "hl_ph_8" }
    ]
  },
  'health-emergency': {
    id: 'health-emergency',
    title: 'Emergency',
    category: 'Health',
    subCategory: 'Emergency',
    description: 'There is a medical emergency and you need help immediately.',
    sentences: [
      { text: "Help! I need a doctor.", audioFile: "hl_em_1" },
      { text: "Call 911 right now!", audioFile: "hl_em_2" },
      { text: "Someone is injured.", audioFile: "hl_em_3" },
      { text: "He can't breathe.", audioFile: "hl_em_4" },
      { text: "Is there a hospital nearby?", audioFile: "hl_em_5" },
      { text: "Please stay calm. Help is coming.", audioFile: "hl_em_6" },
      { text: "I need a first aid kit.", audioFile: "hl_em_7" },
      { text: "She's unconscious.", audioFile: "hl_em_8" }
    ]
  },

  // ===== G. RELATIONSHIPS =====
  'relationships-dating': {
    id: 'relationships-dating',
    title: 'Dating',
    category: 'Relationships',
    subCategory: 'Dating',
    description: 'You are going on a date and want to make a good impression.',
    sentences: [
      { text: "Would you like to go out with me?", audioFile: "rel_date_1" },
      { text: "I had a wonderful time tonight.", audioFile: "rel_date_2" },
      { text: "Can I take you to dinner?", audioFile: "rel_date_3" },
      { text: "You look great tonight.", audioFile: "rel_date_4" },
      { text: "I really enjoy spending time with you.", audioFile: "rel_date_5" },
      { text: "Would you like to see each other again?", audioFile: "rel_date_6" },
      { text: "I'll call you tomorrow.", audioFile: "rel_date_7" },
      { text: "Good night. I'll text you.", audioFile: "rel_date_8" }
    ]
  },
  'relationships-apologizing': {
    id: 'relationships-apologizing',
    title: 'Apologizing',
    category: 'Relationships',
    subCategory: 'Apologizing',
    description: 'You need to apologize for a mistake.',
    sentences: [
      { text: "I'm really sorry for what I said.", audioFile: "rel_ap_1" },
      { text: "It was my fault. Please forgive me.", audioFile: "rel_ap_2" },
      { text: "I didn't mean to hurt your feelings.", audioFile: "rel_ap_3" },
      { text: "I promise it won't happen again.", audioFile: "rel_ap_4" },
      { text: "Can we talk about this?", audioFile: "rel_ap_5" },
      { text: "I understand if you're upset.", audioFile: "rel_ap_6" },
      { text: "Let me make it up to you.", audioFile: "rel_ap_7" },
      { text: "I value our friendship.", audioFile: "rel_ap_8" }
    ]
  },
  'relationships-invitations': {
    id: 'relationships-invitations',
    title: 'Invitations',
    category: 'Relationships',
    subCategory: 'Invitations',
    description: 'You want to invite someone to an event or gathering.',
    sentences: [
      { text: "Would you like to come to my party?", audioFile: "rel_inv_1" },
      { text: "I'm having a dinner this Friday.", audioFile: "rel_inv_2" },
      { text: "Can you make it on Saturday?", audioFile: "rel_inv_3" },
      { text: "I'd love to come. Thank you!", audioFile: "rel_inv_4" },
      { text: "I'm sorry, I can't make it.", audioFile: "rel_inv_5" },
      { text: "Should I bring anything?", audioFile: "rel_inv_6" },
      { text: "The party starts at 8 PM.", audioFile: "rel_inv_7" },
      { text: "I'm looking forward to it.", audioFile: "rel_inv_8" }
    ]
  },

  // ===== H. MONEY =====
  'money-bank': {
    id: 'money-bank',
    title: 'At the Bank',
    category: 'Money',
    subCategory: 'Bank',
    description: 'You go to the bank to manage your money.',
    sentences: [
      { text: "I'd like to open a bank account.", audioFile: "mon_bank_1" },
      { text: "I want to deposit this check.", audioFile: "mon_bank_2" },
      { text: "Can I withdraw cash from my account?", audioFile: "mon_bank_3" },
      { text: "What's the current exchange rate?", audioFile: "mon_bank_4" },
      { text: "I'd like to transfer money.", audioFile: "mon_bank_5" },
      { text: "Can I check my balance?", audioFile: "mon_bank_6" },
      { text: "I lost my credit card.", audioFile: "mon_bank_7" },
      { text: "Please print my bank statement.", audioFile: "mon_bank_8" }
    ]
  },
  'money-atm': {
    id: 'money-atm',
    title: 'Using an ATM',
    category: 'Money',
    subCategory: 'ATM',
    description: 'You need to use an ATM machine.',
    sentences: [
      { text: "Insert your card here.", audioFile: "mon_atm_1" },
      { text: "Enter your PIN number.", audioFile: "mon_atm_2" },
      { text: "Select the amount you want to withdraw.", audioFile: "mon_atm_3" },
      { text: "Please take your cash.", audioFile: "mon_atm_4" },
      { text: "Do you want a receipt?", audioFile: "mon_atm_5" },
      { text: "The ATM ate my card.", audioFile: "mon_atm_6" },
      { text: "I forgot my PIN.", audioFile: "mon_atm_7" },
      { text: "This ATM is out of service.", audioFile: "mon_atm_8" }
    ]
  },
  'money-credit-card': {
    id: 'money-credit-card',
    title: 'Credit Card',
    category: 'Money',
    subCategory: 'Credit Card',
    description: 'You need to apply for or use a credit card.',
    sentences: [
      { text: "I'd like to apply for a credit card.", audioFile: "mon_cc_1" },
      { text: "What is the interest rate?", audioFile: "mon_cc_2" },
      { text: "I'd like to increase my credit limit.", audioFile: "mon_cc_3" },
      { text: "My card was declined.", audioFile: "mon_cc_4" },
      { text: "Can I pay with credit card?", audioFile: "mon_cc_5" },
      { text: "I need to report a lost card.", audioFile: "mon_cc_6" },
      { text: "When is my payment due?", audioFile: "mon_cc_7" },
      { text: "I want to check my statement online.", audioFile: "mon_cc_8" }
    ]
  },

  // ===== I. TECHNOLOGY =====
  'technology-computer': {
    id: 'technology-computer',
    title: 'Computer Basics',
    category: 'Technology',
    subCategory: 'Computer',
    description: 'You need to use a computer and need help with basic tasks.',
    sentences: [
      { text: "My computer is not turning on.", audioFile: "tech_comp_1" },
      { text: "How do I connect to Wi-Fi?", audioFile: "tech_comp_2" },
      { text: "Can you help me install this software?", audioFile: "tech_comp_3" },
      { text: "I forgot my password.", audioFile: "tech_comp_4" },
      { text: "The screen is frozen.", audioFile: "tech_comp_5" },
      { text: "How do I save this file?", audioFile: "tech_comp_6" },
      { text: "I need to back up my data.", audioFile: "tech_comp_7" },
      { text: "The internet is very slow.", audioFile: "tech_comp_8" }
    ]
  },
  'technology-smartphone': {
    id: 'technology-smartphone',
    title: 'Using a Smartphone',
    category: 'Technology',
    subCategory: 'Smartphone',
    description: 'You need help using your smartphone.',
    sentences: [
      { text: "How do I download this app?", audioFile: "tech_phone_1" },
      { text: "My battery is draining too fast.", audioFile: "tech_phone_2" },
      { text: "Can you help me set up my email?", audioFile: "tech_phone_3" },
      { text: "I can't hear you. Let me call you back.", audioFile: "tech_phone_4" },
      { text: "How do I take a screenshot?", audioFile: "tech_phone_5" },
      { text: "I need to charge my phone.", audioFile: "tech_phone_6" },
      { text: "My screen is cracked.", audioFile: "tech_phone_7" },
      { text: "Can you send me the location?", audioFile: "tech_phone_8" }
    ]
  },
  'technology-technical-support': {
    id: 'technology-technical-support',
    title: 'Technical Support',
    category: 'Technology',
    subCategory: 'Support',
    description: 'You need help with a technical issue.',
    sentences: [
      { text: "I'm having trouble with my printer.", audioFile: "tech_supp_1" },
      { text: "It keeps saying 'error' on the screen.", audioFile: "tech_supp_2" },
      { text: "I already tried restarting it.", audioFile: "tech_supp_3" },
      { text: "Can you connect to my computer remotely?", audioFile: "tech_supp_4" },
      { text: "The software won't install.", audioFile: "tech_supp_5" },
      { text: "My account has been hacked.", audioFile: "tech_supp_6" },
      { text: "I need to reset my password.", audioFile: "tech_supp_7" },
      { text: "Thank you for your help.", audioFile: "tech_supp_8" }
    ]
  },

  // ===== J. EMERGENCIES =====
  'emergencies-police': {
    id: 'emergencies-police',
    title: 'Calling the Police',
    category: 'Emergencies',
    subCategory: 'Police',
    description: 'You need to call the police for help.',
    sentences: [
      { text: "I need to report a theft.", audioFile: "em_pol_1" },
      { text: "Someone broke into my car.", audioFile: "em_pol_2" },
      { text: "I've been robbed.", audioFile: "em_pol_3" },
      { text: "Can you send an officer to my address?", audioFile: "em_pol_4" },
      { text: "I saw someone suspicious.", audioFile: "em_pol_5" },
      { text: "There's been an accident.", audioFile: "em_pol_6" },
      { text: "I lost my passport.", audioFile: "em_pol_7" },
      { text: "Is there a police station nearby?", audioFile: "em_pol_8" }
    ]
  },
  'emergencies-accident': {
    id: 'emergencies-accident',
    title: 'Car Accident',
    category: 'Emergencies',
    subCategory: 'Accident',
    description: 'You witnessed or were involved in an accident.',
    sentences: [
      { text: "There's been a car accident.", audioFile: "em_acc_1" },
      { text: "Is everyone okay?", audioFile: "em_acc_2" },
      { text: "Call an ambulance!", audioFile: "em_acc_3" },
      { text: "I need to exchange insurance information.", audioFile: "em_acc_4" },
      { text: "The driver ran a red light.", audioFile: "em_acc_5" },
      { text: "Can you describe what happened?", audioFile: "em_acc_6" },
      { text: "I'll be a witness.", audioFile: "em_acc_7" },
      { text: "My car is damaged.", audioFile: "em_acc_8" }
    ]
  },
  'emergencies-emergency-call': {
    id: 'emergencies-emergency-call',
    title: 'Emergency Call',
    category: 'Emergencies',
    subCategory: 'Emergency Call',
    description: 'You need to make an emergency call.',
    sentences: [
      { text: "This is an emergency.", audioFile: "em_ec_1" },
      { text: "I need help immediately.", audioFile: "em_ec_2" },
      { text: "There is a fire in my building.", audioFile: "em_ec_3" },
      { text: "Someone is hurt badly.", audioFile: "em_ec_4" },
      { text: "What is your emergency?", audioFile: "em_ec_5" },
      { text: "Help is on the way.", audioFile: "em_ec_6" },
      { text: "Stay on the line with me.", audioFile: "em_ec_7" },
      { text: "I can hear sirens now.", audioFile: "em_ec_8" }
    ]
  }
};
