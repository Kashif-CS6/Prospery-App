const data = [
  {
    id: 1,
    question: "What is your main goal?",
    options: [
      {
        opt: "Grow wealth",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/1.webp",
      },
      {
        opt: "Passive income",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/2.webp",
      },
      {
        opt: "Financial independence",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/3.webp",
      },
      {
        opt: "Be on my Boss",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/4.webp",
      },
      {
        opt: "Retire wealthy",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/5.webp",
      },
      {
        opt: "Travel to world",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/goal/male/6.webp",
      },
    ],
  },
  {
    id: 2,
    question: "What is your current source of Income?",
    options: [
      {
        opt: "Full time job",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/income-source/1.webp",
      },
      {
        opt: "Passive income",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/income-source/2.webp",
      },
      {
        opt: "Other",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/income-source/3.webp",
      },
    ],
  },
  {
    id: 3,
    question: "What would you describe your financial situation?",
    options: [
      {
        opt: "I'm comfortable",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/financial-situation/1.webp",
      },
      {
        opt: "I would like to have more stability",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/financial-situation/2.webp",
      },
      {
        opt: "I'm struggling to meet my financial goals",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/financial-situation/3.webp",
      },
    ],
  },
  {
    id: 4,
    question: "What annual income do you want to achieve?",
    options: [
      {
        opt: "$30,000-$50,000",
      },
      {
        opt: "$50,000-$100,000",
      },
      {
        opt: "More than $100,000",
      },
    ],
    sidepic:
      "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/income/male/45/background.webp",
  },
  {
    id: 5,
    question: "What do you feel anxious about the most?",
    label: "Choose all that apply",
    options: [
      {
        opt: "Low income",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/1.webp",
      },
      {
        opt: "Living paycheck to paycheck",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/2.webp",
      },
      {
        opt: "Financial dependence",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/3.webp",
      },
      {
        opt: "Routine",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/4.webp",
      },
      {
        opt: "Constant stress",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/5.webp",
      },
      {
        opt: "Other",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/anxious/6.webp",
      },
    ],
    next: "button",
  },
  {
    id: 6,
    question: "Does your current income meet your financial needs?",
    options: [
      {
        opt: "Easily meets needs",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/needs/1.webp",
      },
      {
        opt: "It's adequate enough",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/needs/2.webp",
      },
      {
        opt: "I struggle with my financial needs",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/needs/3.webp",
      },
      {
        opt: "My income is not enough",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/needs/4.webp",
      },
    ],
  },
  {
    id: 7,
    question: "When was the last time you couldn't afford something?",
    options: [
      {
        opt: "This month",
      },
      {
        opt: "One month ago",
      },
      {
        opt: "This year",
      },
      {
        opt: "More than 1 year ago",
      },
    ],
    sidepic:
      "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/afford/male/45/background.webp",
  },
  {
    id: 8,
    question: "What is your largest debt?",
    options: [
      {
        opt: "Mortgage",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/debts/1.webp",
      },
      {
        opt: "Auto loan",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/debts/2.webp",
      },
      {
        opt: "Student loan",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/debts/3.webp",
      },
      {
        opt: "Credit card debt",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/debts/4.webp",
      },
      {
        opt: "I don't have any debts",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/debts/5.webp",
      },
    ],
  },
  {
    id: 9,
    question: "How confident are you about your financial future?",
    options: [
      {
        opt: "Very confident",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/future/1.webp",
      },
      {
        opt: "Somewhat confident",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/future/2.webp",
      },
      {
        opt: "Not confident at all",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/future/3.webp",
      },
    ],
  },
  {
    id: 10,
    question: "Do you have a plan for your retirement?",
    options: [
      {
        opt: "I don't plan retirement, but i want to",
      },
      {
        opt: "I constantly save money for retirement",
      },
      {
        opt: "I use pension fund for retirement",
      },
    ],
    sidepic:"https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/retire/male/45/background.webp"
  },
  {
    id: 11,
    question: "Do you have a habit of saving money?",
    options: [
      {
        opt: "I try to save money all the time",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/saving/1.webp",
      },
      {
        opt: "I want to save money, but I can't ",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/saving/2.webp",
      },
      {
        opt: "I don't save money",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/saving/3.webp",
      },
    ],
  },
  {
    id: 12,
    question: "Do you currently have any sources of passive income?",
    options: [
      {
        opt: "Yes, I receive income without much effort",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/sources/1.webp",
      },
      {
        opt: "I'm trying to build",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/sources/2.webp",
      },
      {
        opt: "No, I don't",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/sources/3.webp",
      },
    ],
  },
  {
    id: 13,
    question:
      "Would you be interested in learning simple ways to grow your wealth?",
    options: [
      {
        opt: "Yes",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/grow/1.webp",
      },
      {
        opt: "No",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/grow/2.webp",
      },
      {
        opt: "Hm, not sure",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/grow/3.webp",
      },
    ],
  },
  {
    id: 14,
    question: "Do you know anything about investing?",
    options: [
      {
        opt: "I'm experienced, but want to improve",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowinvesting/1.webp",
      },
      {
        opt: "I've heard a thing or two",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowinvesting/2.webp",
      },
      {
        opt: "No, but I'd like to know",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowinvesting/3.webp",
      },
    ],
  },
  {
    id: 15,
    question: "Rate your knowledge to create passive income",
    options: [
      {
        opt: "Expert",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowledge/1.webp",
      },
      {
        opt: "Proficient",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowledge/2.webp",
      },
      {
        opt: "Intermediate",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowledge/3.webp",
      },
      {
        opt: "Novice",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/knowledge/4.webp",
      },
    ],
  },
  {
    id: 16,
    question: "Which companies are you most interested in?",
    label: "Choose all of that apply",
    options: [
      {
        opt: "Netflix",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/1.webp",
      },
      {
        opt: "Tesla",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/2.webp",
      },
      {
        opt: "Apple",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/3.webp",
      },
      {
        opt: "Amazone",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/4.webp",
      },
      {
        opt: "McDonalds",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/5.webp",
      },
      {
        opt: "Shell",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/6.webp",
      },
      {
        opt: "Exxon",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/7.webp",
      },
      {
        opt: "Microsoft",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/8.webp",
      },
      {
        opt: "Google",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/9.webp",
      },
      {
        opt: "Pfizer",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/asset/10.webp",
      },
    ],
    next: "button",
  },
  {
    id: 17,
    question: "Rate your readiness to invest",
    options: [
      {
        opt: "All set",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/ready_to_invest/1.webp",
      },
      {
        opt: "Ready",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/ready_to_invest/2.webp",
      },
      {
        opt: "Somewhat Ready",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/ready_to_invest/3.webp",
      },
      {
        opt: "Not Ready",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p13_v3_wgc_nt/quiz/ready_to_invest/4.webp",
      },
    ],
  },
  {
    id: 19,
    question: "Is there anything special you wish to achieve?",
    label:
      "You are more likely to reach your goal if you have something important to aim for",
    options: [
      {
        opt: "Buy a house",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/1.webp",
      },
      {
        opt: "A perfect wedding",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/2.webp",
      },
      {
        opt: "Vacation",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/3.webp",
      },
      {
        opt: "Buy a car",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/4.webp",
      },
      {
        opt: "Worry-free retirement",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/5.webp",
      },
      {
        opt: "Other",
        pic: "https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/wish/6.webp",
      },
    ],
  },
  {
    id: 20,
    question: "How much time are you ready to spend to achieve your goal?",
    options: [
      { opt: "5 min/day" },
      { opt: "10 min/day" },
      { opt: "15 min/day" },
      { opt: "20 min/day" },
    ],
    sidepic:"https://d2vm05b1botqyl.cloudfront.net/images/p15_v3_hrg_nt/quiz/time/male/45/background.webp"
  },
];

export default data;
