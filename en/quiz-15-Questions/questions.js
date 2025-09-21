const allQuizSets = {
  firstSet: {
    hunger: [
      {
        question: "What do you crave first when you're hungry?",
        answers: [
          { text: "Something sweet", sign: "Libra" },
          { text: "A warm soup", sign: "Cancer" },
          { text: "Meat and nothing else", sign: "Aries" },
          { text: "Something exotic", sign: "Sagittarius" }
        ]
      },
      {
        question: "Which food would you never refuse?",
        answers: [
          { text: "Pizza", sign: "Leo" },
          { text: "Chocolate", sign: "Libra" },
          { text: "Seafood specialty", sign: "Pisces" },
          { text: "Barbecue", sign: "Aries" }
        ]
      },
      {
        question: "How do you behave when you're really hungry?",
        answers: [
          { text: "I suffer silently", sign: "Pisces" },
          { text: "I get irritable", sign: "Capricorn" },
          { text: "I crack jokes", sign: "Gemini" },
          { text: "I demand food immediately", sign: "Leo" }
        ]
      }
    ],

    patience: [
      {
        question: "How do you react when you have to wait?",
        answers: [
          { text: "Patient but nervous", sign: "Capricorn" },
          { text: "I entertain myself", sign: "Gemini" },
          { text: "I hate waiting", sign: "Aries" },
          { text: "I imagine something nice", sign: "Pisces" }
        ]
      },
      {
        question: "What do you do when someone is late?",
        answers: [
          { text: "I send a message", sign: "Leo" },
          { text: "I leave", sign: "Sagittarius" },
          { text: "I wait quietly", sign: "Cancer" },
          { text: "I call them immediately", sign: "Capricorn" }
        ]
      },
      {
        question: "How do you deal with boredom?",
        answers: [
          { text: "I look for something new", sign: "Gemini" },
          { text: "I meditate", sign: "Pisces" },
          { text: "I plan my next move", sign: "Capricorn" },
          { text: "I lose patience", sign: "Aries" }
        ]
      }
    ],

    conflict: [
      {
        question: "How do you resolve conflicts?",
        answers: [
          { text: "Directly and quickly", sign: "Aries" },
          { text: "Diplomatically", sign: "Libra" },
          { text: "I withdraw", sign: "Pisces" },
          { text: "I joke about it", sign: "Gemini" }
        ]
      },
      {
        question: "Your reaction to criticism?",
        answers: [
          { text: "I defend myself", sign: "Leo" },
          { text: "I reflect on it", sign: "Capricorn" },
          { text: "I ignore it", sign: "Sagittarius" },
          { text: "I ask for details", sign: "Cancer" }
        ]
      },
      {
        question: "When you argue, what do you do?",
        answers: [
          { text: "I shut down", sign: "Pisces" },
          { text: "I seek reconciliation", sign: "Libra" },
          { text: "I walk away", sign: "Sagittarius" },
          { text: "I fight to the end", sign: "Aries" }
        ]
      }
    ],

    love: [
      {
        question: "What's your love style?",
        answers: [
          { text: "Passionate and direct", sign: "Aries" },
          { text: "Gentle and caring", sign: "Cancer" },
          { text: "Fun and unpredictable", sign: "Gemini" },
          { text: "Romantic and elegant", sign: "Libra" }
        ]
      },
      {
        question: "What attracts you most?",
        answers: [
          { text: "Confidence", sign: "Leo" },
          { text: "Emotional depth", sign: "Pisces" },
          { text: "Intellect and humor", sign: "Capricorn" },
          { text: "Freedom and spontaneity", sign: "Sagittarius" }
        ]
      },
      {
        question: "How do you show love?",
        answers: [
          { text: "With gifts", sign: "Leo" },
          { text: "With hugs", sign: "Cancer" },
          { text: "With words", sign: "Gemini" },
          { text: "With gestures", sign: "Libra" }
        ]
      }
    ],

    adventure: [
      {
        question: "Your ideal weekend?",
        answers: [
          { text: "Hiking", sign: "Sagittarius" },
          { text: "Spa and relaxation", sign: "Cancer" },
          { text: "Exploring the city", sign: "Gemini" },
          { text: "Party with friends", sign: "Leo" }
        ]
      },
      {
        question: "How do you choose a destination?",
        answers: [
          { text: "Spontaneously", sign: "Aries" },
          { text: "Based on reviews", sign: "Capricorn" },
          { text: "By intuition", sign: "Pisces" },
          { text: "By aesthetics", sign: "Libra" }
        ]
      },
      {
        question: "What excites you most?",
        answers: [
          { text: "The unknown", sign: "Sagittarius" },
          { text: "Luxury", sign: "Leo" },
          { text: "Nature", sign: "Cancer" },
          { text: "People", sign: "Gemini" }
        ]
      }
    ]
  }

secondSet: {
  hunger: [
    {
      question: "What meal do you start your day with?",
      answers: [
        { text: "Coffee and nothing else", sign: "Capricorn" },
        { text: "Fruit smoothie", sign: "Pisces" },
        { text: "Eggs and toast", sign: "Aries" },
        { text: "Something sweet", sign: "Libra" }
      ]
    },
    {
      question: "What matters most in a meal?",
      answers: [
        { text: "Flavor", sign: "Leo" },
        { text: "Nutritional value", sign: "Capricorn" },
        { text: "Presentation", sign: "Libra" },
        { text: "Portion size", sign: "Aries" }
      ]
    },
    {
      question: "How do you choose a restaurant?",
      answers: [
        { text: "Recommendations", sign: "Sagittarius" },
        { text: "Instagram aesthetic", sign: "Libra" },
        { text: "Proximity", sign: "Gemini" },
        { text: "Price", sign: "Capricorn" }
      ]
    }
  ],

  patience: [
    {
      question: "How do you behave in a waiting line?",
      answers: [
        { text: "Chat with people", sign: "Gemini" },
        { text: "Stand quietly", sign: "Cancer" },
        { text: "Check my phone", sign: "Capricorn" },
        { text: "Leave", sign: "Aries" }
      ]
    },
    {
      question: "How do you react to traffic jams?",
      answers: [
        { text: "Sing in the car", sign: "Leo" },
        { text: "Plan an alternative route", sign: "Capricorn" },
        { text: "Lose my temper", sign: "Aries" },
        { text: "Imagine I'm somewhere else", sign: "Pisces" }
      ]
    },
    {
      question: "What do you do when someone is late?",
      answers: [
        { text: "Call them", sign: "Capricorn" },
        { text: "Send a message", sign: "Leo" },
        { text: "Leave", sign: "Sagittarius" },
        { text: "Wait silently", sign: "Cancer" }
      ]
    }
  ],

  conflict: [
    {
      question: "How do you react when someone disagrees with you?",
      answers: [
        { text: "Defend my opinion", sign: "Aries" },
        { text: "Listen and analyze", sign: "Capricorn" },
        { text: "Make jokes", sign: "Gemini" },
        { text: "Ignore it", sign: "Sagittarius" }
      ]
    },
    {
      question: "How do you behave in a group debate?",
      answers: [
        { text: "Take the lead", sign: "Leo" },
        { text: "Try to mediate", sign: "Libra" },
        { text: "Withdraw", sign: "Pisces" },
        { text: "Ask questions", sign: "Cancer" }
      ]
    },
    {
      question: "How do you resolve misunderstandings?",
      answers: [
        { text: "Directly", sign: "Aries" },
        { text: "Diplomatically", sign: "Libra" },
        { text: "With analysis", sign: "Capricorn" },
        { text: "With humor", sign: "Gemini" }
      ]
    }
  ],

  love: [
    {
      question: "How do you flirt?",
      answers: [
        { text: "With a look", sign: "Libra" },
        { text: "With jokes", sign: "Gemini" },
        { text: "Directly", sign: "Aries" },
        { text: "With attention", sign: "Cancer" }
      ]
    },
    {
      question: "What's your ideal date?",
      answers: [
        { text: "Candlelit dinner", sign: "Libra" },
        { text: "Nature adventure", sign: "Sagittarius" },
        { text: "Movie night", sign: "Cancer" },
        { text: "Something spontaneous", sign: "Gemini" }
      ]
    },
    {
      question: "How do you show feelings?",
      answers: [
        { text: "With words", sign: "Gemini" },
        { text: "With actions", sign: "Capricorn" },
        { text: "With hugs", sign: "Cancer" },
        { text: "With gifts", sign: "Leo" }
      ]
    }
  ],

  adventure: [
    {
      question: "What's your travel style?",
      answers: [
        { text: "Backpacking", sign: "Sagittarius" },
        { text: "Luxury hotels", sign: "Leo" },
        { text: "Camping", sign: "Cancer" },
        { text: "City break", sign: "Gemini" }
      ]
    },
    {
      question: "What attracts you most in a destination?",
      answers: [
        { text: "Culture", sign: "Capricorn" },
        { text: "Food", sign: "Cancer" },
        { text: "People", sign: "Gemini" },
        { text: "Nature", sign: "Sagittarius" }
      ]
    },
    {
      question: "How do you behave while traveling?",
      answers: [
        { text: "Plan everything", sign: "Capricorn" },
        { text: "Follow intuition", sign: "Pisces" },
        { text: "Seek fun", sign: "Leo" },
        { text: "Explore locally", sign: "Sagittarius" }
      ]
    }
  ]
}

thirdSet: {
  hunger: [
    {
      question: "What do you eat when you're stressed?",
      answers: [
        { text: "Sweets", sign: "Libra" },
        { text: "I eat nothing", sign: "Capricorn" },
        { text: "Whatever I find", sign: "Aries" },
        { text: "Something warm", sign: "Cancer" }
      ]
    },
    {
      question: "What's your comfort food?",
      answers: [
        { text: "Chocolate", sign: "Libra" },
        { text: "Soup", sign: "Cancer" },
        { text: "Pizza", sign: "Leo" },
        { text: "Barbecue", sign: "Aries" }
      ]
    },
    {
      question: "How do you behave when you're hungry?",
      answers: [
        { text: "I get irritable", sign: "Capricorn" },
        { text: "I crack jokes", sign: "Gemini" },
        { text: "I suffer silently", sign: "Pisces" },
        { text: "I demand food immediately", sign: "Leo" }
      ]
    }
  ],

  patience: [
    {
      question: "How do you handle waiting?",
      answers: [
        { text: "I plan", sign: "Capricorn" },
        { text: "I imagine", sign: "Pisces" },
        { text: "I entertain myself", sign: "Gemini" },
        { text: "I lose my temper", sign: "Aries" }
      ]
    },
    {
      question: "What do you do when someone is late?",
      answers: [
        { text: "I call them", sign: "Capricorn" },
        { text: "I leave", sign: "Sagittarius" },
        { text: "I wait silently", sign: "Cancer" },
        { text: "I send a message", sign: "Leo" }
      ]
    },
    {
      question: "How do you behave when you're bored?",
      answers: [
        { text: "I look for fun", sign: "Gemini" },
        { text: "I meditate", sign: "Pisces" },
        { text: "I plan", sign: "Capricorn" },
        { text: "I lose focus", sign: "Aries" }
      ]
    }
  ],

  conflict: [
    {
      question: "How do you resolve conflicts?",
      answers: [
        { text: "Directly", sign: "Aries" },
        { text: "Diplomatically", sign: "Libra" },
        { text: "I withdraw", sign: "Pisces" },
        { text: "I joke about it", sign: "Gemini" }
      ]
    },
    {
      question: "Your reaction to criticism?",
      answers: [
        { text: "I defend myself", sign: "Leo" },
        { text: "I reflect", sign: "Capricorn" },
        { text: "I ignore it", sign: "Sagittarius" },
        { text: "I ask for details", sign: "Cancer" }
      ]
    },
    {
      question: "When you argue, what do you do?",
      answers: [
        { text: "I shut down", sign: "Pisces" },
        { text: "I seek reconciliation", sign: "Libra" },
        { text: "I walk away", sign: "Sagittarius" },
        { text: "I fight", sign: "Aries" }
      ]
    }
  ],

  love: [
    {
      question: "How do you show love?",
      answers: [
        { text: "With words", sign: "Gemini" },
        { text: "With hugs", sign: "Cancer" },
        { text: "With gifts", sign: "Leo" },
        { text: "With actions", sign: "Capricorn" }
      ]
    },
    {
      question: "Your ideal date?",
      answers: [
        { text: "Romantic dinner", sign: "Libra" },
        { text: "Hiking", sign: "Sagittarius" },
        { text: "Movie night", sign: "Cancer" },
        { text: "Spontaneous hangout", sign: "Gemini" }
      ]
    },
    {
      question: "How do you flirt?",
      answers: [
        { text: "With a look", sign: "Libra" },
        { text: "With jokes", sign: "Gemini" },
        { text: "Directly", sign: "Aries" },
        { text: "With attention", sign: "Cancer" }
      ]
    }
  ],

  adventure: [
    {
      question: "What's your travel style?",
      answers: [
        { text: "Backpacking", sign: "Sagittarius" },
        { text: "Luxury", sign: "Leo" },
        { text: "Camping", sign: "Cancer" },
        { text: "City break", sign: "Gemini" }
      ]
    },
    {
      question: "What attracts you most?",
      answers: [
        { text: "Culture", sign: "Capricorn" },
        { text: "Food", sign: "Cancer" },
        { text: "People", sign: "Gemini" },
        { text: "Nature", sign: "Sagittarius" }
      ]
    },
    {
      question: "How do you behave while traveling?",
      answers: [
        { text: "I plan everything", sign: "Capricorn" },
        { text: "I follow intuition", sign: "Pisces" },
        { text: "I seek fun", sign: "Leo" },
        { text: "I explore locally", sign: "Sagittarius" }
      ]
    }
  ]
}

fourthSet: {
  hunger: [
    {
      question: "What matters most when eating out?",
      answers: [
        { text: "Ambience", sign: "Libra" },
        { text: "Speed of service", sign: "Aries" },
        { text: "Food quality", sign: "Capricorn" },
        { text: "Company", sign: "Gemini" }
      ]
    },
    {
      question: "Your guilty pleasure snack?",
      answers: [
        { text: "Chips", sign: "Leo" },
        { text: "Ice cream", sign: "Cancer" },
        { text: "Chocolate", sign: "Libra" },
        { text: "Sandwich", sign: "Aries" }
      ]
    },
    {
      question: "When do you enjoy food the most?",
      answers: [
        { text: "When I'm alone", sign: "Capricorn" },
        { text: "With others", sign: "Gemini" },
        { text: "On vacation", sign: "Sagittarius" },
        { text: "At home", sign: "Cancer" }
      ]
    }
  ],

  patience: [
    {
      question: "How do you behave when you have to wait?",
      answers: [
        { text: "I think about something else", sign: "Pisces" },
        { text: "I entertain myself", sign: "Gemini" },
        { text: "I lose patience", sign: "Aries" },
        { text: "I plan", sign: "Capricorn" }
      ]
    },
    {
      question: "How do you react to technical difficulties?",
      answers: [
        { text: "Calmly", sign: "Cancer" },
        { text: "Frustrated", sign: "Aries" },
        { text: "I look for a solution", sign: "Capricorn" },
        { text: "I make jokes", sign: "Gemini" }
      ]
    },
    {
      question: "How do you deal with boredom?",
      answers: [
        { text: "I look for something new", sign: "Sagittarius" },
        { text: "I imagine", sign: "Pisces" },
        { text: "I do something useful", sign: "Capricorn" },
        { text: "I scroll memes", sign: "Gemini" }
      ]
    }
  ],

  conflict: [
    {
      question: "How do you behave in a debate?",
      answers: [
        { text: "I defend my stance", sign: "Aries" },
        { text: "I try to mediate", sign: "Libra" },
        { text: "I ignore it", sign: "Sagittarius" },
        { text: "I listen carefully", sign: "Cancer" }
      ]
    },
    {
      question: "How do you react to injustice?",
      answers: [
        { text: "I fight back", sign: "Aries" },
        { text: "I write about it", sign: "Capricorn" },
        { text: "I share it online", sign: "Gemini" },
        { text: "I try to understand", sign: "Pisces" }
      ]
    },
    {
      question: "How do you resolve conflicts with friends?",
      answers: [
        { text: "I talk directly", sign: "Aries" },
        { text: "I wait it out", sign: "Pisces" },
        { text: "I joke about it", sign: "Gemini" },
        { text: "I send a message", sign: "Libra" }
      ]
    }
  ],

  love: [
    {
      question: "How do you show love?",
      answers: [
        { text: "With gifts", sign: "Leo" },
        { text: "With hugs", sign: "Cancer" },
        { text: "With words", sign: "Gemini" },
        { text: "With actions", sign: "Capricorn" }
      ]
    },
    {
      question: "Your ideal partner is...",
      answers: [
        { text: "Fun", sign: "Gemini" },
        { text: "Caring", sign: "Cancer" },
        { text: "Passionate", sign: "Aries" },
        { text: "Romantic", sign: "Libra" }
      ]
    },
    {
      question: "How do you flirt?",
      answers: [
        { text: "With a look", sign: "Libra" },
        { text: "With jokes", sign: "Gemini" },
        { text: "Directly", sign: "Aries" },
        { text: "With attention", sign: "Cancer" }
      ]
    }
  ],

  adventure: [
    {
      question: "What's your travel style?",
      answers: [
        { text: "Backpacking", sign: "Sagittarius" },
        { text: "Luxury", sign: "Leo" },
        { text: "Camping", sign: "Cancer" },
        { text: "City break", sign: "Gemini" }
      ]
    },
    {
      question: "What attracts you most?",
      answers: [
        { text: "Culture", sign: "Capricorn" },
        { text: "Food", sign: "Cancer" },
        { text: "People", sign: "Gemini" },
        { text: "Nature", sign: "Sagittarius" }
      ]
    },
    {
      question: "How do you behave while traveling?",
      answers: [
        { text: "I plan everything", sign: "Capricorn" },
        { text: "I follow intuition", sign: "Pisces" },
        { text: "I seek fun", sign: "Leo" },
        { text: "I explore locally", sign: "Sagittarius" }
      ]
    }
  ]
}

fifthSet: {
  hunger: [
    {
      question: "What do you eat when you're sad?",
      answers: [
        { text: "Ice cream", sign: "Cancer" },
        { text: "Chocolate", sign: "Libra" },
        { text: "I don't eat", sign: "Capricorn" },
        { text: "Whatever I find", sign: "Aries" }
      ]
    },
    {
      question: "Your ideal breakfast?",
      answers: [
        { text: "Coffee and croissant", sign: "Libra" },
        { text: "Smoothie bowl", sign: "Pisces" },
        { text: "Eggs and toast", sign: "Aries" },
        { text: "I skip breakfast", sign: "Capricorn" }
      ]
    },
    {
      question: "How do you behave when you're hungry?",
      answers: [
        { text: "I get irritable", sign: "Aries" },
        { text: "I crack jokes", sign: "Gemini" },
        { text: "I suffer silently", sign: "Pisces" },
        { text: "I demand food immediately", sign: "Leo" }
      ]
    }
  ],

  patience: [
    {
      question: "How do you behave in a queue?",
      answers: [
        { text: "I chat", sign: "Gemini" },
        { text: "I stand quietly", sign: "Cancer" },
        { text: "I check my phone", sign: "Capricorn" },
        { text: "I leave", sign: "Aries" }
      ]
    },
    {
      question: "How do you react to someone being late?",
      answers: [
        { text: "I call", sign: "Capricorn" },
        { text: "I leave", sign: "Sagittarius" },
        { text: "I wait", sign: "Cancer" },
        { text: "I send a message", sign: "Leo" }
      ]
    },
    {
      question: "How do you deal with boredom?",
      answers: [
        { text: "I look for something new", sign: "Sagittarius" },
        { text: "I imagine", sign: "Pisces" },
        { text: "I do something useful", sign: "Capricorn" },
        { text: "I scroll memes", sign: "Gemini" }
      ]
    }
  ],

  conflict: [
    {
      question: "How do you react when someone interrupts you?",
      answers: [
        { text: "I interrupt back", sign: "Aries" },
        { text: "I ignore it", sign: "Sagittarius" },
        { text: "I make a joke", sign: "Gemini" },
        { text: "I calmly continue", sign: "Cancer" }
      ]
    },
    {
      question: "How do you behave in a debate?",
      answers: [
        { text: "I defend my stance", sign: "Aries" },
        { text: "I try to mediate", sign: "Libra" },
        { text: "I ignore it", sign: "Sagittarius" },
        { text: "I listen carefully", sign: "Cancer" }
      ]
    },
    {
      question: "How do you resolve conflicts with friends?",
      answers: [
        { text: "I talk directly", sign: "Aries" },
        { text: "I wait it out", sign: "Pisces" },
        { text: "I joke about it", sign: "Gemini" },
        { text: "I send a message", sign: "Libra" }
      ]
    }
  ],

  love: [
    {
      question: "How do you show love?",
      answers: [
        { text: "With gifts", sign: "Leo" },
        { text: "With hugs", sign: "Cancer" },
        { text: "With words", sign: "Gemini" },
        { text: "With actions", sign: "Capricorn" }
      ]
    },
    {
      question: "Your ideal partner is...",
      answers: [
        { text: "Fun", sign: "Gemini" },
        { text: "Caring", sign: "Cancer" },
        { text: "Passionate", sign: "Aries" },
        { text: "Romantic", sign: "Libra" }
      ]
    },
    {
      question: "How do you flirt?",
      answers: [
        { text: "With a look", sign: "Libra" },
        { text: "With jokes", sign: "Gemini" },
        { text: "Directly", sign: "Aries" },
        { text: "With attention", sign: "Cancer" }
      ]
    }
  ],

  adventure: [
    {
      question: "What's your travel style?",
      answers: [
        { text: "Backpacking", sign: "Sagittarius" },
        { text: "Luxury", sign: "Leo" },
        { text: "Camping", sign: "Cancer" },
        { text: "City break", sign: "Gemini" }
      ]
    },
    {
      question: "What attracts you most?",
      answers: [
        { text: "Culture", sign: "Capricorn" },
        { text: "Food", sign: "Cancer" },
        { text: "People", sign: "Gemini" },
        { text: "Nature", sign: "Sagittarius" }
      ]
    },
    {
      question: "How do you behave while traveling?",
      answers: [
        { text: "I plan everything", sign: "Capricorn" },
        { text: "I follow intuition", sign: "Pisces" },
        { text: "I seek fun", sign: "Leo" },
        { text: "I explore locally", sign: "Sagittarius" }
      ]
    }
  ]
}
  
};

