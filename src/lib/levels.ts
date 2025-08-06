
export type Lesson = {
  title: string;
  description: string;
  icon: string;
  startingText?: string;
  targetScore: number;
  mode: 'student' | 'researcher' | 'creative';
  solution: string;
};

export type Level = {
  title:string;
  icon: string;
  lessons: Lesson[];
};

export const levels: Level[] = [
  {
    title: "The Basics",
    icon: "Feather",
    lessons: [
      {
        title: "Concise Writing",
        icon: "Scissors",
        description: "Improve a sentence by making it more concise.",
        startingText: "In my personal opinion, it is necessary that we should try to make sure that the report is submitted as soon as possible.",
        targetScore: 65,
        mode: 'student',
        solution: "The report must be submitted as soon as possible. This is a critical deadline, so we need to ensure timely completion."
      },
      {
        title: "Active Voice",
        icon: "Megaphone",
        description: "Rewrite a sentence from passive to active voice for more impact.",
        startingText: "The new policy was implemented by the committee.",
        targetScore: 65,
        mode: 'student',
        solution: "The committee implemented the new policy, which will take effect at the beginning of the next fiscal quarter and impact all departments."
      },
      {
        title: "Clarity and Flow",
        icon: "Waves",
        description: "Refine a paragraph to improve its clarity and flow.",
        startingText: "The system has a failure. This is due to a bug. The bug is in the code. We need to fix it. The system will then work.",
        targetScore: 70,
        mode: 'student',
        solution: "A critical bug in the source code has caused a complete system failure. To restore essential functionality, our development team must identify and resolve this bug with urgency and precision."
      },
       {
        title: "Strong Verbs",
        icon: "Zap",
        description: "Replace weak verbs with strong, more descriptive ones.",
        startingText: "The man walked into the room and looked at the picture.",
        targetScore: 65,
        mode: 'student',
        solution: "The man strode into the room and scrutinized the painting."
      },
      {
        title: "Avoiding Redundancy",
        icon: "Repeat",
        description: "Remove redundant words and phrases from a sentence.",
        startingText: "The final conclusion of the project was that it was a complete and total success.",
        targetScore: 65,
        mode: 'student',
        solution: "The project's conclusion was a total success."
      }
    ]
  },
  {
    title: "Creative Expression",
    icon: "Paintbrush",
    lessons: [
       {
        title: "Show, Don't Tell",
        icon: "Eye",
        description: "Transform a simple statement into a descriptive scene.",
        startingText: "The room was messy.",
        targetScore: 70,
        mode: 'creative',
        solution: "Last night's pizza boxes teetered on a mountain of unopened textbooks, and clothes were strewn across the floor like fallen soldiers in a forgotten war. A fine layer of dust coated every surface, dancing in the single, defiant sunbeam that pierced the grimy window."
      },
      {
        title: "Figurative Language",
        icon: "Flower",
        description: "Use metaphors or similes to make your writing more vivid.",
        startingText: "The sun was very hot. The trees were tall.",
        targetScore: 70,
        mode: 'creative',
        solution: "The sun was a furnace in the sapphire sky, breathing fire onto the world below, while the ancient trees stood like silent, green-robed giants, their branches reaching desperately for a cooler sky."
      },
      {
        title: "Sensory Details",
        icon: "Ear",
        description: "Engage the reader's senses with more descriptive language.",
        startingText: "He ate the apple. It was a good apple.",
        targetScore: 70,
        mode: 'creative',
        solution: "He lifted the gleaming apple, its crimson skin perfectly cool against his fingertips. With a resounding, crisp snap, he broke the skin, and the sweet, tangy juice exploded in his mouth, a refreshing burst of distilled autumn."
      },
      {
        title: "Mood and Atmosphere",
        icon: "Moon",
        description: "Create a specific mood (e.g., suspenseful, joyful) through word choice.",
        startingText: "The house was old and empty.",
        targetScore: 75,
        mode: 'creative',
        solution: "The old house groaned under the weight of years, its empty windows like vacant eyes staring into the encroaching twilight. A lonely wind whispered through the skeletal trees, a mournful tune carrying secrets best left undisturbed."
      },
      {
        title: "Onomatopoeia",
        icon: "Music",
        description: "Use words that imitate sounds to bring a scene to life.",
        startingText: "The fire burned in the fireplace.",
        targetScore: 70,
        mode: 'creative',
        solution: "The fire crackled and popped in the hearth, its hiss and sizzle a cozy chorus against the drumming rain on the windowpane."
      }
    ]
  },
   {
    title: "Academic & Research",
    icon: "GraduationCap",
    lessons: [
       {
        title: "Formal Tone",
        icon: "Tie",
        description: "Rewrite a casual sentence to adopt a more formal, academic tone.",
        startingText: "I think the data kinda shows that our idea is right.",
        targetScore: 65,
        mode: 'researcher',
        solution: "The collected empirical data provides strong evidence suggesting that the initial hypothesis is valid and warrants further investigation."
      },
      {
        title: "Citing Sources",
        icon: "Quote",
        description: "Practice integrating a citation smoothly into a sentence.",
        startingText: "Climate change is a big problem. Many scientists have said this.",
        targetScore: 70,
        mode: 'researcher',
        solution: "Climate change presents a significant and escalating global challenge, a fact that has been rigorously documented by numerous leading scientists in the field (Smith, 2021; Jones et al., 2022)."
      },
      {
        title: "Objective Language",
        icon: "Scale",
        description: "Remove personal bias and emotion from a research statement.",
        startingText: "I believe the results are absolutely amazing and prove everyone wrong.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The results obtained from the study are statistically significant and appear to directly challenge the predominant conclusions established by previous research in this specific domain."
      },
      {
        title: "Defining Terms",
        icon: "BookOpen",
        description: "Clearly define a key term for an academic audience.",
        startingText: "Cognitive dissonance is when you think two different things.",
        targetScore: 75,
        mode: 'researcher',
        solution: "Cognitive dissonance refers to the state of mental discomfort experienced by a person who holds two or more contradictory beliefs, ideas, or values, or is confronted by new information that conflicts with existing beliefs."
      },
      {
        title: "Hedging Language",
        icon: "Shield",
        description: "Use cautious language to present findings accurately.",
        startingText: "This proves that our theory is correct without a doubt.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The findings appear to support the proposed theory; however, further research is required to fully validate these conclusions."
      }
    ]
  },
  {
    title: "Business Communication",
    icon: "Briefcase",
    lessons: [
      {
        title: "Professional Emails",
        icon: "Mail",
        description: "Write a clear and professional email.",
        startingText: "hey, check out my report when u have a sec. thx.",
        targetScore: 70,
        mode: 'student',
        solution: "Dear Team,\n\nPlease find the detailed quarterly performance report attached for your comprehensive review. I would greatly appreciate your feedback by Friday at 5:00 PM so we can finalize the document for the upcoming board meeting. Your unique insights are highly valued.\n\nThank you for your time and dedicated collaboration on this important project.\n\nBest regards,\n[Your Name]"
      },
      {
        title: "Report Summary",
        icon: "FileText",
        description: "Summarize a report's findings clearly and concisely.",
        startingText: "We did a lot of work and found many things. The results were interesting and we think it is important.",
        targetScore: 70,
        mode: 'researcher',
        solution: "This in-depth investigation yielded several key findings that carry significant strategic implications for the organization. Most notably, the primary results indicate a 15% increase in market engagement following the implementation of the new campaign, suggesting a strong and positive return on investment that exceeds initial projections."
      },
      {
        title: "Meeting Agenda",
        icon: "List",
        description: "Create a clear and effective agenda for a team meeting.",
        startingText: "Let's meet tomorrow to talk about stuff.",
        targetScore: 70,
        mode: 'student',
        solution: "Q3 Project Review Meeting Agenda:\n1. Review of Q2 Action Items (5 min)\n2. Analysis of Q3 Project Milestones (15 min)\n3. Discussion of Blockers and Challenges (10 min)\n4. Planning for Q4 Kick-off (10 min)\n5. Next Steps and Action Items (5 min)"
      },
      {
        title: "Positive Framing",
        icon: "Smile",
        description: "Frame constructive feedback in a positive and actionable way.",
        startingText: "Your presentation was boring and you talked too slow.",
        targetScore: 70,
        mode: 'student',
        solution: "Thank you for the presentation. To increase audience engagement next time, consider incorporating more visuals and varying your vocal pace to add more dynamic energy to your delivery."
      },
      {
        title: "Action-Oriented Language",
        icon: "Target",
        description: "Write a memo that clearly outlines required actions.",
        startingText: "We should probably improve our customer service.",
        targetScore: 70,
        mode: 'student',
        solution: "To enhance customer satisfaction, all client-facing staff are required to complete the new 'Advanced Customer Service' training module by October 31st. Please register through the company portal."
      }
    ]
  },
  {
    title: "Advanced Grammar",
    icon: "SpellCheck",
    lessons: [
      {
        title: "Complex Sentences",
        icon: "Spline",
        description: "Combine simple sentences into a more complex, flowing sentence.",
        startingText: "The cat sat on the mat. It was black. It was watching a mouse.",
        targetScore: 70,
        mode: 'student',
        solution: "Perched silently and motionlessly on the welcome mat, the sleek black cat watched the unsuspecting field mouse with an intense, predatory focus, anticipating its next move."
      },
      {
        title: "Parallel Structure",
        icon: "GitCommitVertical",
        description: "Correct the parallel structure in a list.",
        startingText: "She likes running, to swim, and biking.",
        targetScore: 75,
        mode: 'student',
        solution: "She is passionate about several demanding physical activities, including running long distances, swimming in open water, and biking on challenging trails, all of which she pursues on a weekly basis."
      },
      {
        title: "Dangling Modifiers",
        icon: "Link2Off",
        description: "Correct sentences with dangling modifiers.",
        startingText: "After reading the great book, the movie was a disappointment.",
        targetScore: 75,
        mode: 'student',
        solution: "After reading the great book, I found the movie to be a disappointment."
      },
      {
        title: "Subject-Verb Agreement",
        icon: "Milestone",
        description: "Ensure the subject and verb agree in complex sentences.",
        startingText: "The list of approved items are on the desk.",
        targetScore: 70,
        mode: 'student',
        solution: "The list of approved items is on the desk."
      },
      {
        title: "Pronoun-Antecedent Agreement",
        icon: "Users",
        description: "Ensure pronouns agree with their antecedents.",
        startingText: "Each student must bring their own lunch.",
        targetScore: 70,
        mode: 'student',
        solution: "Each student must bring his or her own lunch."
      }
    ]
  },
  {
    title: "Storytelling",
    icon: "BookOpen",
    lessons: [
      {
        title: "Opening Hook",
        icon: "Anchor",
        description: "Write an engaging opening sentence for a story.",
        startingText: "This is a story about a man.",
        targetScore: 75,
        mode: 'creative',
        solution: "The very last thing John ever expected to see swirling in his morning coffee was the faint, ghostly reflection of a man who, according to the official police report, had been pronounced dead for three years."
      },
      {
        title: "Dialogue",
        icon: "MessageSquare",
        description: "Write natural-sounding dialogue between two characters.",
        startingText: 'Person 1 said: "Hello." Person 2 said: "Hi."',
        targetScore: 75,
        mode: 'creative',
        solution: `"You actually made it," Sarah breathed, pulling her frayed, wool collar tight against the biting November wind. Her voice was barely a fragile whisper over the city\'s relentless hum.\n\n"Wouldn\'t miss it for the entire world," Alex replied, his gaze darting nervously across the crowded, rain-slicked square. "Now, please, tell me you brought it."`
      },
      {
        title: "Pacing",
        icon: "Rabbit",
        description: "Control the speed of your story through sentence structure.",
        startingText: "He ran. It was dark. He was scared. He heard a noise.",
        targetScore: 75,
        mode: 'creative',
        solution: "Darkness swallowed the alley. He ran, breath ragged, heart hammering against his ribs. A crash from behind. He didn't look back."
      },
      {
        title: "Conflict",
        icon: "Swords",
        description: "Introduce a clear internal or external conflict.",
        startingText: "A knight fought a dragon. It was a hard fight.",
        targetScore: 75,
        mode: 'creative',
        solution: "The dragon was a fearsome beast of scale and fire, but the true battle raged within Sir Kaelan's own heart; his sworn oath demanded he slay the creature, but its eyes held a sorrowful intelligence he could not ignore."
      },
      {
        title: "Resolution",
        icon: "Flag",
        description: "Write a satisfying conclusion to a short story.",
        startingText: "The adventure was over. He went home.",
        targetScore: 75,
        mode: 'creative',
        solution: "As the sun dipped below the horizon, casting long shadows across the valley, he sheathed his sword. The quest was finished, but as he turned for home, he knew the journey had changed him in ways he was only beginning to understand."
      }
    ]
  },
  {
    title: "Persuasive Writing",
    icon: "Megaphone",
    lessons: [
      {
        title: "Strong Thesis Statement",
        icon: "Milestone",
        description: "Formulate a strong, arguable thesis statement.",
        startingText: "This paper will be about the importance of recycling.",
        targetScore: 70,
        mode: 'researcher',
        solution: "To combat the dual threats of escalating landfill waste and long-term environmental degradation, it is imperative that local municipalities implement mandatory, incentivized recycling programs for all residents and commercial businesses."
      },
      {
        title: "Counter-argument & Rebuttal",
        icon: "ShieldAlert",
        description: "Acknowledge and refute a counter-argument.",
        startingText: "Some people might say that recycling is not important. They are wrong.",
        targetScore: 80,
        mode: 'researcher',
        solution: "While some critics argue that individual residential recycling efforts are statistically insignificant in the face of large-scale industrial pollution, this perspective overlooks crucial data. Comprehensive studies demonstrate that collective, community-wide action not only significantly reduces landfill volume but also conserves vital natural resources and measurably lowers regional greenhouse gas emissions."
      },
      {
        title: "Ethical Appeal (Ethos)",
        icon: "BadgeCheck",
        description: "Establish credibility and authority on a topic.",
        startingText: "You should listen to me because I know what I'm talking about.",
        targetScore: 75,
        mode: 'researcher',
        solution: "With over two decades of experience as a field biologist and a PhD in environmental science, my research consistently points to the urgent need for conservation efforts."
      },
      {
        title: "Call to Action",
        icon: "MoveRight",
        description: "Write a compelling call to action that motivates the reader.",
        startingText: "People should do something about this problem.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The evidence is clear and the time for complacency is over. Contact your local representatives today and demand immediate action to protect our planet for future generations."
      },
      {
        title: "Rhetorical Questions",
        icon: "HelpCircle",
        description: "Use rhetorical questions to engage the reader and provoke thought.",
        startingText: "I want you to think about how important this is.",
        targetScore: 70,
        mode: 'researcher',
        solution: "Can we, in good conscience, stand by and watch as our natural landscapes are irrevocably damaged? Is this the legacy we wish to leave behind?"
      }
    ]
  },
  {
    title: "Punctuation Mastery",
    icon: "Quote",
    lessons: [
      {
        title: "The Oxford Comma",
        icon: "Plus",
        description: "Correctly use the Oxford comma in a series.",
        startingText: "I love my parents, Lady Gaga and Humpty Dumpty.",
        targetScore: 80,
        mode: 'student',
        solution: "For the annual bake sale, we need to bring an assortment of delicious cookies, several batches of rich, fudgy brownies, and at least one certified gluten-free option for those with dietary restrictions."
      },
      {
        title: "Semicolons",
        icon: "Remove",
        description: "Combine two related independent clauses using a semicolon.",
        startingText: "It was a dark and stormy night. The wind howled.",
        targetScore: 75,
        mode: 'student',
        solution: "The highly anticipated outdoor concert was completely sold out; consequently, thousands of disappointed fans were left to listen from outside the venue's main gates."
      },
       {
        title: "Colons",
        icon: "MoreVertical",
        description: "Use a colon to introduce a list, explanation, or quotation.",
        startingText: "The plan had one problem it was impossible.",
        targetScore: 75,
        mode: 'student',
        solution: "The plan had one glaring problem: it was utterly impossible."
      },
      {
        title: "Hyphens and Dashes",
        icon: "Minus",
        description: "Distinguish between hyphens, en dashes, and em dashes.",
        startingText: "The state of the art device a marvel of engineering was ready.",
        targetScore: 80,
        mode: 'student',
        solution: "The state-of-the-art device—a marvel of modern engineering—was finally ready for its public debut."
      },
      {
        title: "Parentheses",
        icon: "Parentheses",
        description: "Use parentheses to add non-essential information.",
        startingText: "The CEO who is a very busy man will be at the meeting.",
        targetScore: 70,
        mode: 'student',
        solution: "The CEO (a notoriously busy man) has confirmed he will be attending the all-hands meeting this afternoon."
      }
    ]
  },
  {
    title: "Tone and Style",
    icon: "SlidersHorizontal",
    lessons: [
      {
        title: "Adjusting Formality",
        icon: "Scaling",
        description: "Change the tone of a paragraph from informal to formal.",
        startingText: "The whole thing was a mess. We gotta figure out what to do.",
        targetScore: 75,
        mode: 'student',
        solution: "The current project status is highly disorganized and presents several critical risks. It is therefore imperative that the leadership team convene to determine a clear and effective course of action to resolve these pressing issues."
      },
      {
        title: "Varying Sentence Structure",
        icon: "Network",
        description: "Rewrite a paragraph to include a variety of sentence lengths and structures.",
        startingText: "He went to the store. He bought some milk. He went home. He drank the milk.",
        targetScore: 80,
        mode: 'creative',
        solution: "His errands for the afternoon were deceptively simple: go to the corner store and buy milk. After returning home with his small purchase, he immediately poured himself a tall, refreshing glass. He then drank it in one long, satisfying gulp."
      },
      {
        title: "Voice and Persona",
        icon: "Voicemail",
        description: "Write the same message from two different personas (e.g., a cheerful and a cynical one).",
        startingText: "The new park is opening tomorrow.",
        targetScore: 80,
        mode: 'creative',
        solution: "Cheerful: Get ready for fun! The brand new community park, filled with sunshine and laughter, opens its gates tomorrow! Cynical: Brace yourselves. The new 'community park,' a patch of suspiciously green grass, officially opens tomorrow to be trampled into mud."
      },
      {
        title: "Diction and Word Choice",
        icon: "SpellCheck",
        description: "Choose words that perfectly match the intended tone (e.g., academic, satirical, etc.).",
        startingText: "The man was sad.",
        targetScore: 75,
        mode: 'creative',
        solution: "Academic: The subject exhibited symptoms of profound melancholy. Satirical: The man was afflicted with a case of the Mondays so severe it had stretched into Wednesday."
      },
      {
        title: "Syntax for Effect",
        icon: "PenTool",
        description: "Use sentence structure (e.g., inversion, short sentences) to create a specific effect.",
        startingText: "The hero arrived just in time to save the day.",
        targetScore: 75,
        mode: 'creative',
        solution: "Just in time, the hero arrived. The day was saved."
      }
    ]
  },
  {
    title: "The Art of Editing",
    icon: "Scissors",
    lessons: [
      {
        title: "Cutting Wordiness",
        icon: "Scan",
        description: "Reduce the word count of a paragraph by 20% while retaining its meaning.",
        startingText: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife, and it should also be noted that this is a very famous book.",
        targetScore: 80,
        mode: 'student',
        solution: "A universally acknowledged truth is that a single man possessing a good fortune must be in want of a wife. This opening line is one of the most famous in literature."
      },
      {
        title: "Proofreading for Errors",
        icon: "Search",
        description: "Find and correct at least 5 grammatical errors in a paragraph.",
        startingText: "Their are many reason's to learn proper grammer, its important for you're career and for clear communication with others, it also makes you look more smart.",
        targetScore: 85,
        mode: 'student',
        solution: "There are many reasons to learn proper grammar. It's important for your career and for clear communication with others. Furthermore, correct grammar enhances your professional appearance by making you seem more intelligent and detail-oriented."
      },
      {
        title: "Consistency Check",
        icon: "CopyCheck",
        description: "Check a piece of writing for consistent tone, style, and formatting.",
        startingText: "Our Q1 results were fantastic! The report, which was compiled by the finance team, indicates a 15% growth. We gotta keep this up!",
        targetScore: 80,
        mode: 'researcher',
        solution: "The Q1 financial report indicates a 15% growth in revenue. These results are highly encouraging and demonstrate the effectiveness of our current strategy. Maintaining this momentum will be a key focus for the upcoming quarter."
      },
      {
        title: "Fact-Checking",
        icon: "BadgeInfo",
        description: "Identify and correct a factual inaccuracy in a sentence.",
        startingText: "The sun, which is the largest planet in our solar system, provides us with heat and light.",
        targetScore: 80,
        mode: 'student',
        solution: "The sun, a star at the center of our solar system, provides our planet with essential heat and light."
      },
      {
        title: "Reading Aloud",
        icon: "AudioLines",
        description: "Improve a clunky sentence so it sounds more natural when read aloud.",
        startingText: "The implementation of the new synergistic workflow initiative will be undertaken by the committee.",
        targetScore: 80,
        mode: 'student',
        solution: "The committee will implement the new workflow initiative."
      }
    ]
  },
  {
    title: "Advanced Persuasion",
    icon: "Flame",
    lessons: [
      {
        title: "Emotional Appeal (Pathos)",
        icon: "HeartHandshake",
        description: "Evoke emotion to persuade the reader.",
        startingText: "The shelter has many dogs. They need homes.",
        targetScore: 75,
        mode: 'creative',
        solution: "Behind the cold, steel bars, a dozen pairs of hopeful eyes follow your every move, their silent pleas echoing in the sterile room. Each gentle tail wag tells a story of abandonment, a story that you alone have the power to rewrite with a happy ending."
      },
      {
        title: "Logical Appeal (Logos)",
        icon: "BrainCircuit",
        description: "Use facts and reason to build a strong argument.",
        startingText: "You should invest in our company because it's a good idea.",
        targetScore: 75,
        mode: 'researcher',
        solution: "With a consistent 15% year-over-year growth, a 30% increase in market share last quarter, and a projected 50% rise in revenue for the upcoming fiscal year, our company presents a statistically sound and compelling investment opportunity."
      },
      {
        title: "Building Credibility (Ethos)",
        icon: "Award",
        description: "Establish trust and authority with your audience.",
        startingText: "I've been a doctor for a while, so I know what's best.",
        targetScore: 75,
        mode: 'researcher',
        solution: "As a board-certified cardiologist with over twenty years of clinical experience, I have dedicated my career to advancing cardiovascular health, and my recommendations are based on extensive research and patient care."
      },
      {
        title: "Addressing Objections",
        icon: "MessageCircleWarning",
        description: "Proactively address and counter potential objections from the reader.",
        startingText: "Our product is expensive, but it's really good.",
        targetScore: 80,
        mode: 'student',
        solution: "While the initial investment in our premium software may seem high, the long-term returns in productivity, efficiency, and error reduction provide a value that far surpasses the upfront cost."
      },
      {
        title: "Using Evidence",
        icon: "Library",
        description: "Support a claim with specific, credible evidence.",
        startingText: "Our new teaching method is better than the old one.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Our new pedagogical approach has demonstrated superior outcomes; students taught with this method scored an average of 18% higher on standardized tests compared to those taught with the traditional curriculum."
      }
    ]
  },
  {
    title: "Narrative Pacing",
    icon: "Clock",
    lessons: [
      {
        title: "Building Suspense",
        icon: "Hourglass",
        description: "Use short sentences and sensory details to create tension.",
        startingText: "He walked down the hallway. It was dark. He heard a noise.",
        targetScore: 75,
        mode: 'creative',
        solution: "The hallway stretched into blackness. Each footstep echoed, swallowed by the oppressive silence. A floorboard creaked upstairs. He froze. It wasn't him."
      },
      {
        title: "Creating a Climax",
        icon: "Mountain",
        description: "Write the turning point of a story with high stakes.",
        startingText: "The hero fought the villain. The hero won.",
        targetScore: 80,
        mode: 'creative',
        solution: "With the clock tower chiming midnight, she lunged, the ancient dagger missing the dragon's armored hide by a mere inch. The beast roared, a torrent of fire erupting from its jaws. It was now or never. She had one last chance to find the chink in its armor—the one her grandfather had spoken of."
      },
      {
        title: "Flashback",
        icon: "History",
        description: "Integrate a flashback smoothly into a narrative.",
        startingText: "He remembered when he was a child. He was happy then.",
        targetScore: 75,
        mode: 'creative',
        solution: "The taste of the madeleine cake was a sudden, jarring tripwire. He was a boy again, sunlight streaming into his grandmother's kitchen, the scent of lemon and butter filling the air. A phantom of a forgotten happiness."
      },
      {
        title: "Foreshadowing",
        icon: "Footprints",
        description: "Subtly hint at future events in the story.",
        startingText: "It was a beautiful day. Nothing could go wrong.",
        targetScore: 75,
        mode: 'creative',
        solution: "As they set sail under a perfect, cloudless sky, none of the crew noticed the single, dark feather that had caught in the rigging, a somber omen from a distant, storm-wracked shore."
      },
      {
        title: "Slowing Down Time",
        icon: "Snail",
        description: "Expand a single moment in time by focusing on minute details.",
        startingText: "The car crashed. It was very fast.",
        targetScore: 80,
        mode: 'creative',
        solution: "Time warped. The screech of tires became a symphony of despair. He saw the spiderweb cracks bloom across the windshield, each tiny sliver of glass a frozen star in a universe of shattering glass and twisted metal."
      }
    ]
  },
  {
    title: "Character Development",
    icon: "Users",
    lessons: [
      {
        title: "Indirect Characterization",
        icon: "Fingerprint",
        description: "Show a character's personality through their actions, not just words.",
        startingText: "She was a kind person.",
        targetScore: 75,
        mode: 'creative',
        solution: "Even though her own stomach growled with hunger, she carefully broke her last piece of bread in two, offering the larger half to the shivering stray dog huddled by the alleyway."
      },
      {
        title: "Writing a Character Arc",
        icon: "Route",
        description: "Show a character changing over time.",
        startingText: "He was selfish, but then he became selfless.",
        targetScore: 80,
        mode: 'creative',
        solution: "He once hoard every gold coin, his treasure chest a monument to his own greed. Yet, after seeing the famine in the village, he unlocked his fortress of wealth, not with a key, but with a newfound compassion, distributing his fortune until the last coin was spent."
      },
      {
        title: "Creating a Flawed Hero",
        icon: "HeartCrack",
        description: "Give a heroic character a relatable flaw.",
        startingText: "The knight was brave and perfect in every way.",
        targetScore: 75,
        mode: 'creative',
        solution: "Sir Gideon was the bravest knight in the kingdom, a legend in battle, yet he possessed a crippling fear of spiders, a secret shame that made a simple barn feel more terrifying than any dragon's lair."
      },
      {
        title: "Distinct Character Voices",
        icon: "MessageSquareQuote",
        description: "Write dialogue that gives two characters unique voices.",
        startingText: 'Person 1: "We should go." Person 2: "I agree, let us depart."',
        targetScore: 80,
        mode: 'creative',
        solution: 'Finn: "C\'mon, we gotta bounce before the guards see us!" \nProfessor Alistair: "Patience, my dear boy. A hasty departure now would be most imprudent. We must be tactical."'
      },
      {
        title: "Internal Monologue",
        icon: "Brain",
        description: "Reveal a character's inner thoughts and feelings.",
        startingText: "He looked calm, but he was actually very nervous.",
        targetScore: 75,
        mode: 'creative',
        solution: "He offered a cool, easy smile to the board members, but inside, a frantic voice was screaming. *Don't let them see you sweat. Just get through this. Don't forget to breathe.*"
      }
    ]
  },
  {
    title: "World-Building",
    icon: "Globe",
    lessons: [
      {
        title: "Immersive Settings",
        icon: "MountainSnow",
        description: "Describe a setting using all five senses.",
        startingText: "The market was busy.",
        targetScore: 80,
        mode: 'creative',
        solution: "The scent of sizzling spices and sweet incense hung thick in the air, mingling with the roar of a thousand haggling voices. Silks of every color imaginable brushed against his skin as he navigated the throng, the rough texture of a cobblestone catching his worn leather boot."
      },
      {
        title: "Establishing a Sci-Fi World",
        icon: "Rocket",
        description: "Introduce futuristic concepts and technology naturally.",
        startingText: "The city had flying cars and tall buildings.",
        targetScore: 75,
        mode: 'creative',
        solution: "Below, the mag-lev traffic flowed in silent, glowing rivers between chrome spires that scraped the ionosphere. From his penthouse on the 800th floor, Kaelen watched the city breathe, its artificial pulse a familiar comfort."
      },
      {
        title: "Creating a Fantasy Culture",
        icon: "Castle",
        description: "Invent a unique cultural tradition for a fantasy race.",
        startingText: "The elves had a special holiday.",
        targetScore: 80,
        mode: 'creative',
        solution: "Once a year, during the twin moon eclipse, the wood-elves would gather for the 'Whispering,' a silent festival where they communicated only through the rustling of leaves, each subtle movement conveying a universe of meaning."
      },
      {
        title: "Historical Context",
        icon: "Scroll",
        description: "Hint at a larger history or past event in your world.",
        startingText: "There was a big war a long time ago.",
        targetScore: 75,
        mode: 'creative',
        solution: "The towering statue of the First King was missing its left hand, a casualty of the Great Siege generations ago, a silent, daily reminder of the price of their freedom."
      },
      {
        title: "Magic Systems",
        icon: "Sparkles",
        description: "Explain a rule or cost of a magic system.",
        startingText: "The wizard cast a powerful spell.",
        targetScore: 80,
        mode: 'creative',
        solution: "To mend the shattered shield, the mage drew on her own life force, the vibrant red of her hair fading to a ghostly white as the magical energies flowed from her into the metal."
      }
    ]
  },
  {
    title: "Poetry and Prose",
    icon: "PenTool",
    lessons: [
      {
        title: "The Haiku Challenge",
        icon: "Leaf",
        description: "Write a 5-7-5 syllable haiku about nature.",
        startingText: "The tree is very green.",
        targetScore: 70,
        mode: 'creative',
        solution: "Green shoots seek the light,\nSunlight warms the gentle earth,\nNew life starts to grow."
      },
      {
        title: "Free Verse Exploration",
        icon: "Feather",
        description: "Write a short, emotional poem without a strict rhyme or meter.",
        startingText: "I feel sad about the rain.",
        targetScore: 75,
        mode: 'creative',
        solution: "The sky weeps today,\nEach drop a memory\nwashing the windows clean,\nbut not the ache\ninside."
      },
      {
        title: "The Sonnet",
        icon: "Heart",
        description: "Write a 14-line poem with a specific rhyme scheme.",
        startingText: "I love you a lot. You are very nice.",
        targetScore: 85,
        mode: 'creative',
        solution: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date."
      },
      {
        title: "Alliteration and Assonance",
        icon: "ALargeSmall",
        description: "Use sound devices to create a musical effect in your writing.",
        startingText: "The snake went through the grass.",
        targetScore: 75,
        mode: 'creative',
        solution: "The sleek, silent snake slithered through the sparse, dry grass."
      },
      {
        title: "Imagery",
        icon: "Image",
        description: "Use vivid imagery to create a strong picture in the reader's mind.",
        startingText: "The sunset was pretty.",
        targetScore: 80,
        mode: 'creative',
        solution: "The sunset bled across the horizon, a spectacular wound of crimson and gold painting the bruised purple clouds."
      }
    ]
  },
  {
    title: "Comedic Writing",
    icon: "Smile",
    lessons: [
      {
        title: "Sarcasm and Irony",
        icon: "Meh",
        description: "Write a sentence that uses verbal irony to be funny.",
        startingText: "I am so happy that my flight was cancelled.",
        targetScore: 70,
        mode: 'creative',
        solution: "Oh, fantastic. Another Monday. I was just thinking my weekend was far too relaxing and enjoyable. This is exactly what I needed to cure that."
      },
      {
        title: "Observational Humor",
        icon: "Search",
        description: "Find the humor in a mundane, everyday situation.",
        startingText: "The self-checkout machine is not working.",
        targetScore: 75,
        mode: 'creative',
        solution: "I'm convinced the self-checkout machine runs on the tears of frustrated shoppers. It screams 'unexpected item in bagging area' with the existential rage of a philosopher who has just realized we're all just unexpected items in the bagging area of life."
      },
      {
        title: "Understatement",
        icon: "ChevronsDown",
        description: "Use understatement for comedic effect.",
        startingText: "The hurricane caused a lot of damage.",
        targetScore: 70,
        mode: 'creative',
        solution: "The hurricane came through and, yes, it seems to have redecorated a bit. The ocean is now our front yard, which should be interesting for property values."
      },
      {
        title: "Hyperbole",
        icon: "ChevronsUp",
        description: "Use exaggeration for comedic effect.",
        startingText: "I'm very hungry.",
        targetScore: 70,
        mode: 'creative',
        solution: "I am so hungry I could eat a whole elephant and then use its tusks as toothpicks."
      },
      {
        title: "The Rule of Three",
        icon: "ListOrdered",
        description: "Use the comedic principle of the 'rule of three'.",
        startingText: "My goals for today are to work and eat.",
        targetScore: 75,
        mode: 'creative',
        solution: "My goals for today are to finish this report, eat a healthy lunch, and seriously contemplate whether a squirrel could do my job better than me."
      }
    ]
  },
  {
    title: "Technical Writing",
    icon: "Wrench",
    lessons: [
      {
        title: "Writing Clear Instructions",
        icon: "ListChecks",
        description: "Write a simple, clear set of instructions for a common task.",
        startingText: "Here's how you make coffee.",
        targetScore: 75,
        mode: 'researcher',
        solution: "To brew coffee using this machine, first ensure the water reservoir is filled to the desired level. Second, place a new filter in the basket. Third, add one scoop of coffee grounds per cup. Finally, press the 'Start' button to begin the brewing cycle."
      },
      {
        title: "Explaining a Complex Process",
        icon: "Binary",
        description: "Simplify a complex topic for a non-expert audience.",
        startingText: "Photosynthesis is complicated.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Photosynthesis is the remarkable process by which plants use sunlight, water, and carbon dioxide to create their own food. In essence, they convert light energy into chemical energy, which fuels their growth and releases the oxygen we breathe."
      },
      {
        title: "User Manual Snippet",
        icon: "BookUser",
        description: "Write a clear, concise troubleshooting step for a user manual.",
        startingText: "If the thing doesn't work, try turning it off and on again.",
        targetScore: 75,
        mode: 'researcher',
        solution: "Issue: The device is unresponsive. \nSolution: 1. Disconnect the device from the power source. 2. Wait 30 seconds. 3. Reconnect the power source and press the power button to restart the device."
      },
      {
        title: "API Documentation",
        icon: "Code",
        description: "Write a clear description for a function in API documentation.",
        startingText: "This function gets users.",
        targetScore: 80,
        mode: 'researcher',
        solution: "/**\n * @description Retrieves a paginated list of users from the database.\n * @param {number} page - The page number to retrieve.\n * @param {number} limit - The number of users to return per page.\n * @returns {Array<User>} A list of user objects.\n */"
      },
      {
        title: "Avoiding Jargon",
        icon: "MessageCircleX",
        description: "Rewrite a technical sentence to be understandable by a layperson.",
        startingText: "The system leverages a heuristic algorithm to asynchronously process data streams.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The system uses a smart problem-solving method to efficiently handle information as it comes in."
      }
    ]
  },
  {
    title: "Copywriting Essentials",
    icon: "ShoppingCart",
    lessons: [
      {
        title: "Writing a Catchy Headline",
        icon: "Newspaper",
        description: "Create a headline that grabs attention and makes you want to read more.",
        startingText: "This is an article about saving money.",
        targetScore: 75,
        mode: 'student',
        solution: "Five Simple Tricks That Will Cut Your Grocery Bill in Half This Week."
      },
      {
        title: "Crafting a Call to Action",
        icon: "Pointer",
        description: "Write a compelling call to action that encourages a specific response.",
        startingText: "You should buy our product.",
        targetScore: 75,
        mode: 'student',
        solution: "Don't wait! Unlock your full potential today by signing up for your free, no-obligation 14-day trial."
      },
      {
        title: "Focusing on Benefits, Not Features",
        icon: "Star",
        description: "Rewrite product copy to focus on the benefits to the user.",
        startingText: "Our new laptop has a 16-hour battery.",
        targetScore: 75,
        mode: 'student',
        solution: "Work all day and binge-watch all night on a single charge. Our new laptop gives you the freedom to unplug."
      },
      {
        title: "The 'AIDA' Formula",
        icon: "ClipboardList",
        description: "Write a short ad using the Attention, Interest, Desire, Action formula.",
        startingText: "We sell good coffee.",
        targetScore: 80,
        mode: 'student',
        solution: "(Attention) Tired of bitter, boring coffee? (Interest) Our single-origin beans are hand-roasted to perfection for a smooth, rich flavor. (Desire) Imagine starting every day with the perfect cup. (Action) Order your first bag today and get 20% off!"
      },
      {
        title: "Writing for Social Media",
        icon: "ThumbsUp",
        description: "Write a short, engaging social media post.",
        startingText: "Our new shoes are now available for purchase.",
        targetScore: 70,
        mode: 'student',
        solution: "Step up your game! 👟 Our brand new Cloud-Runner 2.0s just dropped. Tap to shop before they're gone! #newarrivals #sneakerhead"
      }
    ]
  },
  {
    title: "Blogging & Content",
    icon: "Rss",
    lessons: [
      {
        title: "Writing an Engaging Intro",
        icon: "Magnet",
        description: "Write a blog post introduction that hooks the reader.",
        startingText: "This blog post is about productivity.",
        targetScore: 75,
        mode: 'creative',
        solution: "We've all been there: a to-do list a mile long, a ticking clock, and the siren song of procrastination. But what if you could conquer your day before it even begins? What if the secret to ultimate productivity was simpler than you ever imagined?"
      },
      {
        title: "Crafting a 'Listicle'",
        icon: "ListOrdered",
        description: "Structure a short, engaging list-based article.",
        startingText: "Here are some travel tips.",
        targetScore: 70,
        mode: 'student',
        solution: "3. Pack a Reusable Water Bottle: Staying hydrated is key, and you'll save money while reducing plastic waste.\n4. Learn a Few Local Phrases: A simple 'hello' or 'thank you' in the local language can go a long way in showing respect and connecting with people."
      },
      {
        title: "Writing a Compelling Conclusion",
        icon: "PackageCheck",
        description: "Write a blog post conclusion that summarizes and provides a takeaway.",
        startingText: "So, that's how you do it.",
        targetScore: 75,
        mode: 'creative',
        solution: "Ultimately, mastering productivity isn't about finding more hours in the day; it's about making the most of the hours you have. By implementing these simple strategies, you can take control of your schedule and start achieving your goals. What will you accomplish first?"
      },
      {
        title: "SEO-Friendly Writing",
        icon: "Key",
        description: "Naturally incorporate a keyword into a sentence.",
        startingText: "Healthy recipes are good for you.",
        targetScore: 70,
        mode: 'student',
        solution: "Finding delicious and healthy recipes for dinner can be a challenge, but with a little planning, you can create meals the whole family will love."
      },
      {
        title: "Internal and External Linking",
        icon: "Link",
        description: "Explain the purpose of linking within a blog post.",
        startingText: "You can find more info on our other page.",
        targetScore: 70,
        mode: 'student',
        solution: "For a deeper dive into this topic, check out our complete guide to meal prepping. Additionally, this study from a leading university confirms the benefits of a balanced diet."
      }
    ]
  },
  {
    title: "Scriptwriting",
    icon: "Clapperboard",
    lessons: [
      {
        title: "Formatting a Scene Heading",
        icon: "Film",
        description: "Write a correctly formatted scene heading for a screenplay.",
        startingText: "The scene is in a coffee shop during the day.",
        targetScore: 80,
        mode: 'student',
        solution: "INT. COFFEE SHOP - DAY\nSunlight streams through the large front window, illuminating dust motes dancing over the heads of patrons."
      },
      {
        title: "Writing Action Lines",
        icon: "PersonStanding",
        description: "Write a concise and visual action line.",
        startingText: "He walked across the room and opened the door.",
        targetScore: 75,
        mode: 'creative',
        solution: "He strides across the room. Yanks the door open, revealing the storm raging outside."
      },
      {
        title: "Parentheticals in Dialogue",
        icon: "Parentheses",
        description: "Use a parenthetical to indicate how a line should be delivered.",
        startingText: '"I knew it," he said angrily.',
        targetScore: 75,
        mode: 'creative',
        solution: "JOHN\n(Slamming his fist on the table)\nI knew it."
      },
      {
        title: "Writing Subtext",
        icon: "Layers",
        description: "Write dialogue where the characters mean something different from what they say.",
        startingText: 'Person 1: "Are you okay?" Person 2: "I\'m fine."',
        targetScore: 80,
        mode: 'creative',
        solution: 'ANNA\n(Staring at the broken picture frame)\nAre you sure you\'re okay?\n\nMARK\n(Forcing a smile)\nNever better. Just... admiring the view.'
      },
      {
        title: "Voice Over (V.O.)",
        icon: "Mic",
        description: "Format and write a short voice-over narration.",
        startingText: "The detective thought about the case.",
        targetScore: 75,
        mode: 'creative',
        solution: "DETECTIVE MILLER (V.O.)\nThe dame had a story, sure. But the pieces didn't fit. Every clue was a dead end, another brick wall in a city full of them."
      }
    ]
  },
  {
    title: "Journalism",
    icon: "Newspaper",
    lessons: [
      {
        title: "Writing a News Lead",
        icon: "ArrowUpRight",
        description: "Write a compelling lead (the first sentence) of a news article.",
        startingText: "A fire happened last night.",
        targetScore: 75,
        mode: 'researcher',
        solution: "A four-alarm fire tore through a historic downtown warehouse late Tuesday night, causing an estimated $2 million in damages and displacing three local businesses, fire officials confirmed."
      },
      {
        title: "Objective Reporting",
        icon: "Gavel",
        description: "Report the facts of an event without including personal opinion or bias.",
        startingText: "The terrible new law passed, and it's going to ruin everything.",
        targetScore: 80,
        mode: 'researcher',
        solution: "City Council approved the controversial zoning ordinance in a 5-4 vote on Wednesday, a move that will re-zone the city's northern district for industrial use. Proponents argue it will create jobs, while opponents express concerns over potential environmental impacts."
      },
      {
        title: "The Inverted Pyramid",
        icon: "Pyramid",
        description: "Structure a short news report using the inverted pyramid style.",
        startingText: "A car crash happened. A red car and a blue car crashed. It was on Main Street. No one was hurt.",
        targetScore: 75,
        mode: 'researcher',
        solution: "No injuries were reported after a two-vehicle collision on Main Street this afternoon. The accident, which involved a red sedan and a blue SUV, occurred at approximately 2:30 PM near the intersection with Oak Avenue. Traffic was briefly diverted but has since resumed."
      },
      {
        title: "Using Attributions",
        icon: "Quote",
        description: "Correctly attribute a quote to a source.",
        startingText: '"The fire was huge," a witness said.',
        targetScore: 75,
        mode: 'researcher',
        solution: '"The flames were towering over the building," said local resident Jane Doe, who witnessed the event from her apartment across the street.'
      },
      {
        title: "Writing a Feature Story Lead",
        icon: "PenLine",
        description: "Write an engaging, narrative lead for a feature article.",
        startingText: "This is a story about a man who bakes bread.",
        targetScore: 75,
        mode: 'creative',
        solution: "For the past 50 years, before the sun even considers rising, John Peterson has been having the same conversation with flour, water, and yeast, a silent dialogue that has nourished a community for generations."
      }
    ]
  },
  {
    title: "Memoir & Personal Essay",
    icon: "NotebookPen",
    lessons: [
      {
        title: "Reflecting on a Memory",
        icon: "Album",
        description: "Write about a past event and its significance.",
        startingText: "I remember my first bike. It was red.",
        targetScore: 75,
        mode: 'creative',
        solution: "The rust-pitted, cherry-red frame of that bicycle was more than just a toy; it was my first taste of true freedom. With every wobbly push of the pedals, the world expanded beyond my block, promising adventures I couldn't yet imagine."
      },
      {
        title: "Finding a Universal Theme",
        icon: "Globe2",
        description: "Connect a personal story to a larger, universal human experience.",
        startingText: "I was sad when my dog died.",
        targetScore: 80,
        mode: 'creative',
        solution: "Holding his frayed collar in my hand, I wasn't just mourning a pet; I was confronting the profound, universal silence that follows a great loss, learning the difficult lesson that love's depth is only truly measured by the grief it leaves behind."
      },
      {
        title: "Narrative Voice",
        icon: "Voicemail",
        description: "Establish a clear and consistent narrative voice.",
        startingText: "I went to the store. I was feeling nostalgic.",
        targetScore: 75,
        mode: 'creative',
        solution: "A wave of nostalgia washed over me as I stepped into the old corner store, the jingle of the bell above the door the same familiar sound that had punctuated my childhood summers."
      },
      {
        title: "Show, Don't Tell (Emotions)",
        icon: "HeartPulse",
        description: "Show an emotion through action and description rather than naming it.",
        startingText: "He was very angry.",
        targetScore: 75,
        mode: 'creative',
        solution: "His jaw clenched, and a muscle twitched in his cheek. He stared at the letter, his knuckles white as he crumpled it into a tight ball."
      },
      {
        title: "Writing a 'Slice of Life'",
        icon: "Slice",
        description: "Capture a small, ordinary moment in detail.",
        startingText: "She drank her morning coffee.",
        targetScore: 75,
        mode: 'creative',
        solution: "She cradled the warm mug in her hands, the steam rising to fog her glasses as she watched the quiet, pre-dawn world awaken outside her kitchen window. This small ritual was her anchor in the day's coming storm."
      }
    ]
  },
  {
    title: "Advanced Vocabulary",
    icon: "BrainCircuit",
    lessons: [
      {
        title: "Using Nuanced Words",
        icon: "Palette",
        description: "Replace a common word with a more precise and evocative one.",
        startingText: "The big building was very tall.",
        targetScore: 75,
        mode: 'student',
        solution: "The colossal skyscraper, an imposing edifice of glass and steel, pierced the clouds."
      },
      {
        title: "Avoiding Clichés",
        icon: "Ban",
        description: "Rewrite a sentence to avoid a common cliché.",
        startingText: "At the end of the day, it is what it is.",
        targetScore: 75,
        mode: 'student',
        solution: "After considering all factors, we must accept the situation's unchangeable nature and proceed accordingly."
      },
      {
        title: "Connotation and Denotation",
        icon: "Blend",
        description: "Choose a word with the correct emotional connotation.",
        startingText: "The smell of the old house was interesting.",
        targetScore: 75,
        mode: 'creative',
        solution: "Positive: The aroma of the old house was nostalgic, a blend of cedar and old books. Negative: The stench of the old house was suffocating, a miasma of dust and decay."
      },
      {
        title: "Etymology",
        icon: "Sigma",
        description: "Use a word's origin to inform its meaning.",
        startingText: "He was a good person.",
        targetScore: 80,
        mode: 'student',
        solution: "His magnanimous nature was evident in his every action, a true testament to his great spirit."
      },
      {
        title: "Contextual Vocabulary",
        icon: "BookText",
        description: "Use a sophisticated word correctly in a sentence.",
        startingText: "The problem was hard.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The problem was particularly intractable, defying all conventional methods of resolution."
      }
    ]
  },
  {
    title: "Sentence Fluency",
    icon: "Waves",
    lessons: [
      {
        title: "Using Transitional Phrases",
        icon: "ArrowRightLeft",
        description: "Connect two ideas smoothly using transitional words.",
        startingText: "The company's profits increased. Its market share grew.",
        targetScore: 70,
        mode: 'researcher',
        solution: "The company's profits increased significantly last quarter; consequently, its market share grew by an impressive 5%."
      },
      {
        title: "Rhythmic Writing",
        icon: "Music2",
        description: "Vary sentence length and structure to create a pleasing rhythm.",
        startingText: "He ran. He jumped. He fell. He got up.",
        targetScore: 80,
        mode: 'creative',
        solution: "He ran, a desperate sprint across the open field. With a final, heroic leap, he jumped the chasm. But his victory was short-lived. He fell. Shaken but not broken, he slowly, painfully, got back up."
      },
      {
        title: "Appositives",
        icon: "BetweenHorizontalStart",
        description: "Use an appositive phrase to add detail to a sentence.",
        startingText: "My brother is a doctor. He lives in Chicago.",
        targetScore: 70,
        mode: 'student',
        solution: "My brother, a renowned cardiologist, lives in Chicago."
      },
      {
        title: "Subordinate Clauses",
        icon: "CornerDownRight",
        description: "Use a subordinate clause to add complexity and detail.",
        startingText: "The man was old. He walked slowly.",
        targetScore: 75,
        mode: 'student',
        solution: "The man, who was well into his eighties, walked slowly and deliberately down the path."
      },
      {
        title: "Sentence Openers",
        icon: "Pilcrow",
        description: "Vary the way you begin sentences.",
        startingText: "He walked to the store. He bought some food. He went home.",
        targetScore: 75,
        mode: 'creative',
        solution: "To get some groceries, he walked to the store. After buying some food, he went home."
      }
    ]
  },
  {
    title: "Punctuation Nuances",
    icon: "Parentheses",
    lessons: [
      {
        title: "The Em Dash",
        icon: "Minus",
        description: "Use an em dash to add emphasis or an aside.",
        startingText: "The winner was Sarah, which was a surprise.",
        targetScore: 75,
        mode: 'student',
        solution: "The winner—to everyone's complete and utter surprise—was Sarah."
      },
      {
        title: "Colons for Lists",
        icon: "MoreVertical",
        description: "Use a colon to properly introduce a list.",
        startingText: "I need to buy three things, milk, bread, and eggs.",
        targetScore: 70,
        mode: 'student',
        solution: "My grocery list contains three essential items: milk, bread, and eggs."
      },
      {
        title: "Ellipses",
        icon: "MoreHorizontal",
        description: "Use ellipses to indicate a pause or trailing thought.",
        startingText: "I'm not sure what to do next.",
        targetScore: 70,
        mode: 'creative',
        solution: "He stared out at the endless ocean, wondering what to do next..."
      },
      {
        title: "Quotation Marks within Quotes",
        icon: "Quote",
        description: "Correctly format a quote within another quote.",
        startingText: '"He said, "I will be there." to me," she explained.',
        targetScore: 75,
        mode: 'student',
        solution: '"He clearly told me, \'I will be there,\'" she explained.'
      },
      {
        title: "Brackets in Quotes",
        icon: "Square",
        description: "Use brackets to clarify or add information to a quotation.",
        startingText: '"She will be arriving tomorrow," the official stated.',
        targetScore: 75,
        mode: 'researcher',
        solution: '"She [the Prime Minister] will be arriving tomorrow," the official stated.'
      }
    ]
  },
  {
    title: "Academic Abstracts",
    icon: "BookMarked",
    lessons: [
      {
        title: "Summarizing Research",
        icon: "Newspaper",
        description: "Condense a research summary into a concise abstract.",
        startingText: "This paper is about our study. We studied the effects of coffee on productivity. We found that it helps some people but not others. The results are interesting and we discuss them.",
        targetScore: 85,
        mode: 'researcher',
        solution: "This study investigates the impact of caffeine consumption on productivity in a controlled office environment. Participants (n=100) were assessed on task completion speed and accuracy. Results indicate a statistically significant improvement in performance for participants who consumed a moderate amount of caffeine, while high consumption correlated with decreased accuracy. These findings suggest a nuanced relationship between caffeine and cognitive performance."
      },
      {
        title: "Identifying Keywords",
        icon: "Key",
        description: "Select appropriate keywords for an academic paper.",
        startingText: "This paper is about how social media affects teenagers.",
        targetScore: 75,
        mode: 'researcher',
        solution: "Keywords: social media, adolescent psychology, mental health, screen time, depression."
      },
      {
        title: "Structured Abstract",
        icon: "ClipboardList",
        description: "Write an abstract using the Background, Methods, Results, Conclusion structure.",
        startingText: "We tested a new drug and it worked.",
        targetScore: 85,
        mode: 'researcher',
        solution: "Background: Current treatments for ailment X have limited efficacy. Objective: To evaluate the efficacy of a new drug, Compound Y. Methods: A randomized, double-blind, placebo-controlled trial was conducted with 200 participants. Results: The group receiving Compound Y showed a 40% reduction in symptoms compared to the placebo group (p < 0.05). Conclusion: Compound Y is a promising new treatment for ailment X."
      },
      {
        title: "Conciseness and Clarity",
        icon: "ScanText",
        description: "Make an abstract more concise and clear.",
        startingText: "In our research, we endeavored to ascertain the various factors that have an effect on the thing we were studying.",
        targetScore: 80,
        mode: 'researcher',
        solution: "This study identified key factors influencing the subject."
      },
      {
        title: "Impersonal Tone",
        icon: "UserX",
        description: "Maintain an impersonal, objective tone in an abstract.",
        startingText: "We were very excited to find that our hypothesis was correct.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The results of the experiment confirmed the initial hypothesis."
      }
    ]
  },
  {
    title: "Grant Writing",
    icon: "FileText",
    lessons: [
      {
        title: "Statement of Need",
        icon: "Siren",
        description: "Clearly articulate the problem your project will solve.",
        startingText: "We need money for our after-school program because it's good for kids.",
        targetScore: 80,
        mode: 'researcher',
        solution: "In our community, over 60% of students lack access to structured after-school activities, leading to increased rates of truancy and decreased academic performance. Our proposed program directly addresses this critical gap by providing a safe, educational, and engaging environment for at-risk youth."
      },
      {
        title: "Project Goals and Objectives",
        icon: "Goal",
        description: "Write clear, measurable project goals.",
        startingText: "We want to help students get better at reading.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Goal: To improve literacy among elementary students. Objective 1: Increase the average reading comprehension score of participants by 15% within one academic year. Objective 2: Enroll at least 50 students in the first semester."
      },
      {
        title: "Budget Justification",
        icon: "PiggyBank",
        description: "Justify a budget item in a grant proposal.",
        startingText: "We need $5,000 for computers.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The requested $5,000 for ten new computers is essential to provide each student with access to our online literacy software and to bridge the digital divide for low-income participants."
      },
      {
        title: "Evaluation Plan",
        icon: "ClipboardCheck",
        description: "Describe how you will measure the success of your project.",
        startingText: "We'll know if the project worked if the kids are happy.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Project success will be evaluated using pre- and post-program standardized reading tests, attendance records, and qualitative surveys of students, parents, and teachers."
      },
      {
        title: "Executive Summary",
        icon: "FileUp",
        description: "Write a compelling summary of the entire grant proposal.",
        startingText: "This is a proposal for a project to help kids.",
        targetScore: 85,
        mode: 'researcher',
        solution: "The 'Reading Rockets' initiative seeks $25,000 to launch an after-school literacy program for at-risk youth. By providing one-on-one tutoring and access to educational technology, we project a 15% increase in reading scores for 50 students, addressing a critical educational gap in our community."
      }
    ]
  },
  {
    title: "Public Speaking",
    icon: "Mic",
    lessons: [
      {
        title: "Writing a Speech Opening",
        icon: "Sparkle",
        description: "Write a powerful opening for a speech that grabs the audience's attention.",
        startingText: "Hello everyone. Today I'm going to talk about climate change.",
        targetScore: 80,
        mode: 'creative',
        solution: "Look around this room. In the time it takes for me to finish this sentence, another football field of ancient rainforest will have vanished forever. We are not just at a crossroads; we are at a precipice, and the choice we make today will echo for generations."
      },
      {
        title: "Signposting",
        icon: "Map",
        description: "Use transitional phrases to guide the audience through your speech.",
        startingText: "First I'll talk about this. Then I'll talk about that. Then I'll talk about another thing.",
        targetScore: 75,
        mode: 'student',
        solution: "First, let's explore the root causes of this issue. After that, I'll present three potential solutions. And finally, I want to leave you with a clear call to action."
      },
      {
        title: "The Power of the Pause",
        icon: "Pause",
        description: "Indicate a dramatic pause in a speech transcript.",
        startingText: "The decision is very important.",
        targetScore: 70,
        mode: 'creative',
        solution: "The decision we make today will affect every single one of us. (Pause for effect) And we must choose wisely."
      },
      {
        title: "Writing a Memorable Closing",
        icon: "Medal",
        description: "Write a powerful and memorable closing for a speech.",
        startingText: "That's all I have to say. Thank you.",
        targetScore: 80,
        mode: 'creative',
        solution: "Let's be the generation that chose courage over comfort, that chose a future over our past. Let's get to work. Thank you."
      },
      {
        title: "Adapting for an Audience",
        icon: "Group",
        description: "Rewrite a sentence for two different audiences (e.g., experts and novices).",
        startingText: "The machine uses quantum entanglement.",
        targetScore: 80,
        mode: 'researcher',
        solution: "For Experts: The device's functionality is predicated on the principle of quantum entanglement. For Novices: Imagine two coins that are magically linked, no matter how far apart they are. When you flip one, the other instantly mirrors it. Our machine uses a similar principle to send information."
      }
    ]
  },
  {
    title: "Satire and Parody",
    icon: "Drama",
    lessons: [
      {
        title: "Writing a Satirical Headline",
        icon: "Newspaper",
        description: "Write a headline in the style of a satirical news publication.",
        startingText: "A politician made a vague promise.",
        targetScore: 75,
        mode: 'creative',
        solution: "Area Politician Bravely Vows to 'Look Into' Issue Plaguing Community for Decades."
      },
      {
        title: "Parodying a Famous Style",
        icon: "Pen",
        description: "Rewrite a simple sentence in the style of a famous author (e.g., Hemingway).",
        startingText: "The man went to the cafe to drink coffee and think.",
        targetScore: 80,
        mode: 'creative',
        solution: "The man walked to the cafe. The sun was hot on the pavement. He needed coffee. He needed to think. The coffee was black and strong. The thoughts were not."
      },
      {
        title: "Exaggeration for Satirical Effect",
        icon: "Expand",
        description: "Use exaggeration to satirize a common frustration.",
        startingText: "The new software update has some bugs.",
        targetScore: 75,
        mode: 'creative',
        solution: "The latest software update, designed to 'improve user experience,' has introduced a revolutionary new feature where all your files are permanently replaced with pictures of llamas."
      },
      {
        title: "Using an Ironic Tone",
        icon: "Orbit",
        description: "Write a satirical statement with a deadpan, ironic tone.",
        startingText: "Our company is very environmentally friendly.",
        targetScore: 75,
        mode: 'creative',
        solution: "Our company is deeply committed to the environment. That's why, for every thousand trees we cut down, we plant one ceremonial shrub in a pot in our lobby."
      },
      {
        title: "Parody of a Genre",
        icon: "Film",
        description: "Write a hard-boiled detective narration about a mundane event.",
        startingText: "I couldn't find my keys this morning.",
        targetScore: 80,
        mode: 'creative',
        solution: "The case had gone cold. The keys, gone. Vanished into thin air. The dame—my wife—was getting antsy, but I knew the score. In this town, you trust no one, especially not the sock drawer. It had a history."
      }
    ]
  },
  {
    title: "Legal Writing",
    icon: "Scale",
    lessons: [
      {
        title: "Clarity and Precision",
        icon: "Focus",
        description: "Rewrite an ambiguous sentence to be legally precise.",
        startingText: "The parties should get this done soon.",
        targetScore: 80,
        mode: 'researcher',
        solution: "The parties shall complete their respective obligations herein no later than thirty (30) days from the effective date of this agreement."
      },
      {
        title: "Avoiding Legalese",
        icon: "MessageCircleDashed",
        description: "Translate a sentence full of jargon into plain English.",
        startingText: "Heretofore, the aforementioned party of the first part shall forthwith remit payment.",
        targetScore: 75,
        mode: 'student',
        solution: "From now on, John Smith must pay immediately."
      },
      {
        title: "Structuring a Clause",
        icon: "FileCog",
        description: "Draft a clear and simple contract clause.",
        startingText: "If you are late paying, you will owe more money.",
        targetScore: 80,
        mode: 'researcher',
        solution: "In the event of a late payment, a penalty of 1.5% per month shall be assessed on the outstanding balance."
      },
      {
        title: "Objective Tone in Memos",
        icon: "FileCheck",
        description: "Write an objective summary of a case for a legal memo.",
        startingText: "Our client is obviously innocent and the other guy is a liar.",
        targetScore: 85,
        mode: 'researcher',
        solution: "The plaintiff alleges breach of contract, while the defendant maintains that all contractual obligations were fulfilled. The primary point of contention is the interpretation of the 'force majeure' clause."
      },
      {
        title: "Citing Legal Precedent",
        icon: "BookMarked",
        description: "Practice correctly citing a fictional legal case.",
        startingText: "Another case said we should win.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The court should grant our motion for summary judgment, consistent with the precedent established in Smith v. Jones, 123 F. Supp. 2d 456 (S.D.N.Y. 2001)."
      }
    ]
  },
  {
    title: "Medical Writing",
    icon: "Stethoscope",
    lessons: [
      {
        title: "Patient-Friendly Language",
        icon: "UserRound",
        description: "Translate a medical diagnosis into language a patient can understand.",
        startingText: "The patient presents with acute nasopharyngitis.",
        targetScore: 75,
        mode: 'student',
        solution: "You have the common cold, which is an infection of the nose and throat."
      },
      {
        title: "Writing a Case Report",
        icon: "FileHeart",
        description: "Write a concise summary for a medical case report.",
        startingText: "A patient came in with a weird rash and we figured out what it was.",
        targetScore: 85,
        mode: 'researcher',
        solution: "We report the case of a 45-year-old male presenting with a rare dermatological condition, which was successfully diagnosed and treated with a novel combination therapy."
      },
      {
        title: "Regulatory Documents",
        icon: "FileCheck2",
        description: "Write a clear statement for a clinical trial protocol.",
        startingText: "We are going to test this drug on people to see if it works.",
        targetScore: 80,
        mode: 'researcher',
        solution: "The primary objective of this Phase III clinical trial is to evaluate the safety and efficacy of Drug X in treating hypertension compared to a placebo."
      },
      {
        title: "Clarity in Drug Information",
        icon: "Pill",
        description: "Write a clear and simple instruction for taking medication.",
        startingText: "Take this pill twice a day.",
        targetScore: 70,
        mode: 'student',
        solution: "Take one tablet by mouth in the morning and one tablet in the evening. This medication can be taken with or without food."
      },
      {
        title: "Abstract for a Medical Journal",
        icon: "BookPlus",
        description: "Write a concise abstract for a medical research paper.",
        startingText: "We did a study on a new heart drug. It worked well. More people should use it.",
        targetScore: 85,
        mode: 'researcher',
        solution: "This randomized controlled trial (n=500) assessed the efficacy of 'Cardia-Plus' in reducing systolic blood pressure. The 'Cardia-Plus' group showed a mean reduction of 15 mmHg, significantly greater than the placebo group (p < 0.01). 'Cardia-Plus' is a potentially effective new agent for managing hypertension."
      }
    ]
  },
  {
    title: "Speechwriting",
    icon: "Presentation",
    lessons: [
      {
        title: "The Rule of Three",
        icon: "ListOrdered",
        description: "Structure a point using the classic 'rule of three'.",
        startingText: "We need to be strong and brave.",
        targetScore: 75,
        mode: 'creative',
        solution: "To overcome this challenge, we must be dedicated, we must be resilient, and above all, we must be united."
      },
      {
        title: "Anaphora (Repetition)",
        icon: "Repeat2",
        description: "Use repetition at the beginning of clauses for emphasis.",
        startingText: "We need to fight for our rights and our future.",
        targetScore: 80,
        mode: 'creative',
        solution: "We will fight on the beaches. We will fight on the landing grounds. We will fight in the fields and in the streets. We will never surrender."
      },
      {
        title: "Crafting a Sound Bite",
        icon: "AudioWaveform",
        description: "Write a short, memorable line that is easy to quote.",
        startingText: "It is important to invest in education for the future.",
        targetScore: 80,
        mode: 'student',
        solution: "Education is not an expense; it is an investment in our collective future."
      },
      {
        title: "Rhetorical Questions",
        icon: "MessageCircleQuestion",
        description: "Use a rhetorical question to engage the audience.",
        startingText: "I want you to think about what is right.",
        targetScore: 70,
        mode: 'creative',
        solution: "Are we a nation that stands for justice, or do we turn a blind eye in the face of inequity?"
      },
      {
        title: "Writing for the Ear",
        icon: "Ear",
        description: "Rewrite a complex sentence to be more easily understood when spoken.",
        startingText: "The confluence of economic indicators suggests a downturn is probable.",
        targetScore: 75,
        mode: 'student',
        solution: "All the signs are pointing to one thing: our economy is likely heading for a downturn."
      }
    ]
  },
  {
    title: "UX Writing",
    icon: "MousePointerClick",
    lessons: [
      {
        title: "Microcopy: Buttons",
        icon: "CircleDot",
        description: "Write clear, concise copy for a button.",
        startingText: "Click here to submit your information.",
        targetScore: 75,
        mode: 'student',
        solution: "Create Account"
      },
      {
        title: "Error Messages",
        icon: "TriangleAlert",
        description: "Write a helpful and friendly error message.",
        startingText: "Error: Invalid input.",
        targetScore: 80,
        mode: 'student',
        solution: "Oops! That email address doesn't look right. Please double-check it and try again."
      },
      {
        title: "Empty States",
        icon: "Inbox",
        description: "Write encouraging copy for an empty state (e.g., an empty inbox).",
        startingText: "There is nothing here.",
        targetScore: 75,
        mode: 'creative',
        solution: "You're all caught up! Create your first project to get started."
      },
      {
        title: "Tooltip and Helper Text",
        icon: "Info",
        description: "Write clear helper text for a form field.",
        startingText: "Password must be complex.",
        targetScore: 75,
        mode: 'student',
        solution: "Must be at least 8 characters and include a number and a special character."
      },
      {
        title: "Onboarding Copy",
        icon: "ConciergeBell",
        description: "Write a welcoming message for a new user.",
        startingText: "Welcome to the app.",
        targetScore: 80,
        mode: 'creative',
        solution: "Welcome to Likhee! We're excited to help you improve your writing. Let's start with a quick tour."
      }
    ]
  },
  {
    title: "Email Marketing",
    icon: "Mail",
    lessons: [
      {
        title: "Catchy Subject Lines",
        icon: "MailOpen",
        description: "Write a subject line that encourages opens.",
        startingText: "Our Newsletter",
        targetScore: 75,
        mode: 'student',
        solution: "🤫 A little secret just for you..."
      },
      {
        title: "The Preview Text",
        icon: "TextSelect",
        description: "Write compelling preview text that complements the subject line.",
        startingText: "This email contains information about our sale.",
        targetScore: 75,
        mode: 'student',
        solution: "Don't miss out on 50% off all our best-sellers."
      },
      {
        title: "A Clear Call-to-Action (CTA)",
        icon: "Hand",
        description: "Craft a clear and compelling CTA for an email.",
        startingText: "Click here to learn more.",
        targetScore: 80,
        mode: 'student',
        solution: "Shop the Sale Now"
      },
      {
        title: "Personalization",
        icon: "UserRoundCog",
        description: "Use personalization to make an email more engaging.",
        startingText: "Dear customer, we have a special offer for you.",
        targetScore: 70,
        mode: 'student',
        solution: "Hey [FirstName], we noticed you liked our running shoes. Here's a special offer just for you!"
      },
      {
        title: "The 'P.S.'",
        icon: "PenSquare",
        description: "Use a postscript (P.S.) to add urgency or a final important note.",
        startingText: "The sale ends soon.",
        targetScore: 70,
        mode: 'student',
        solution: "P.S. Don't forget, this offer expires at midnight! You don't want to miss out."
      }
    ]
  },
  {
    title: "Literary Analysis",
    icon: "Library",
    lessons: [
      {
        title: "Developing a Thesis",
        icon: "Lightbulb",
        description: "Formulate a strong, arguable thesis for a literary essay.",
        startingText: "This essay is about the book 'To Kill a Mockingbird'.",
        targetScore: 85,
        mode: 'researcher',
        solution: "In 'To Kill a Mockingbird,' Harper Lee uses the character of Atticus Finch to critique the hypocrisy of Southern society, challenging the reader to confront their own prejudices."
      },
      {
        title: "Analyzing Symbolism",
        icon: "Gem",
        description: "Explain the symbolic meaning of an object in a literary work.",
        startingText: "The green light in The Great Gatsby is important.",
        targetScore: 80,
        mode: 'researcher',
        solution: "The green light at the end of Daisy's dock represents Gatsby's unattainable dream and the elusive nature of the American Dream itself."
      },
      {
        title: "Character Foils",
        icon: "UserCheck",
        description: "Analyze how one character highlights the traits of another.",
        startingText: "Laertes and Hamlet are very different.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Laertes acts as a foil to Hamlet, as his decisive and vengeful nature contrasts sharply with Hamlet's contemplative inaction, thereby highlighting Hamlet's central internal conflict."
      },
      {
        title: "Close Reading a Passage",
        icon: "ZoomIn",
        description: "Analyze the language and style of a specific passage.",
        startingText: "The author uses a lot of long sentences in this paragraph.",
        targetScore: 85,
        mode: 'researcher',
        solution: "Through the use of polysyndeton and long, breathless sentences, the author mirrors the character's escalating panic and chaotic state of mind."
      },
      {
        title: "Connecting to Literary Theory",
        icon: "BookOpenCheck",
        description: "Apply a literary theory (e.g., feminism, marxism) to a text.",
        startingText: "The women in this book do not have a lot of power.",
        targetScore: 90,
        mode: 'researcher',
        solution: "A feminist reading of 'The Awakening' reveals how Edna Pontellier's struggle for personal freedom is ultimately thwarted by the oppressive patriarchal structures of 19th-century society."
      }
    ]
  },
  {
    title: "Historical Writing",
    icon: "ScrollText",
    lessons: [
      {
        title: "Formulating a Historical Question",
        icon: "History",
        description: "Craft a specific, researchable question about a historical event.",
        startingText: "I want to write about World War II.",
        targetScore: 80,
        mode: 'researcher',
        solution: "To what extent did the Lend-Lease Act alter the timeline for Allied victory in the European theater of World War II?"
      },
      {
        title: "Using Primary Sources",
        icon: "FileText",
        description: "Integrate a quote from a primary source into your writing.",
        startingText: "A soldier wrote in his diary that the war was hard.",
        targetScore: 75,
        mode: 'researcher',
        solution: "The grim reality of trench warfare is captured in one soldier's diary entry, which described the 'endless, soul-crushing mud' as a more formidable enemy than the soldiers across no-man's-land."
      },
      {
        title: "Analyzing Historiography",
        icon: "BookCopy",
        description: "Summarize how different historians have interpreted an event.",
        startingText: "Historians disagree about the causes of the Civil War.",
        targetScore: 85,
        mode: 'researcher',
        solution: "While early 20th-century historians often emphasized economic factors, post-civil rights era scholarship has increasingly focused on slavery as the central and driving cause of the American Civil War."
      },
      {
        title: "Contextualization",
        icon: "Combine",
        description: "Place a historical event within its broader context.",
        startingText: "The Boston Tea Party was a protest about tea.",
        targetScore: 80,
        mode: 'researcher',
        solution: "The Boston Tea Party was not merely a protest against the Tea Act, but the culmination of a decade of rising tensions over taxation without representation and British imperial overreach."
      },
      {
        title: "Avoiding Presentism",
        icon: "CalendarX2",
        description: "Analyze a historical event without imposing modern values.",
        startingText: "It was obviously wrong for them to believe in a flat earth.",
        targetScore: 80,
        mode: 'researcher',
        solution: "Within the cosmological framework of the medieval period, the belief in a geocentric universe was a logical and internally consistent model based on the available evidence and philosophical traditions."
      }
    ]
  },
  {
    title: "Travel Writing",
    icon: "Plane",
    lessons: [
      {
        title: "Sense of Place",
        icon: "MapPin",
        description: "Evoke the unique atmosphere of a location.",
        startingText: "I went to Paris. It was nice.",
        targetScore: 80,
        mode: 'creative',
        solution: "Paris wasn't just a city; it was a living museum where the aroma of fresh croissants mingled with the faint scent of rain on ancient cobblestones, and every street corner seemed to whisper a story."
      },
      {
        title: "The Narrative Arc of a Trip",
        icon: "Route",
        description: "Structure a travel story with a beginning, middle, and end.",
        startingText: "First I went to the airport, then I flew, then I arrived.",
        targetScore: 75,
        mode: 'creative',
        solution: "The journey began with a chaotic dash through the airport, a frantic search for the right gate. The flight itself was a peaceful interlude above the clouds. But arriving in the bustling, foreign city was the true start of the adventure."
      },
      {
        title: "Reflective Travel Writing",
        icon: "BookHeart",
        description: "Reflect on how a travel experience changed you.",
        startingText: "My trip to the mountains was cool. I learned a lot.",
        targetScore: 80,
        mode: 'creative',
        solution: "Standing on that silent, windswept peak, watching the world shrink below, I realized it wasn't just the altitude that was taking my breath away. It was the humbling realization of my own smallness in the grand, silent theater of the mountains."
      },
      {
        title: "Describing Food",
        icon: "Utensils",
        description: "Write a vivid description of a local dish.",
        startingText: "I ate some tacos in Mexico. They were good.",
        targetScore: 75,
        mode: 'creative',
        solution: "The street vendor handed me the taco, its warm, soft corn tortilla piled high with sizzling carne asada, fresh cilantro, and a sharp dash of onion. The first bite was an explosion of flavor—smoky, spicy, and utterly perfect."
      },
      {
        title: "Engaging the Reader",
        icon: "Handshake",
        description: "Write an opening that makes the reader want to travel with you.",
        startingText: "This is a story about my trip to Italy.",
        targetScore: 80,
        mode: 'creative',
        solution: "Forget everything you think you know about Italy. Forget the postcards and the guidebooks. Come with me, and I'll show you the real Italy, the one you find down a forgotten alleyway, in the bottom of a glass of local wine."
      }
    ]
  },
  {
    title: "Nature Writing",
    icon: "Leaf",
    lessons: [
      {
        title: "Precise Observation",
        icon: "TreePine",
        description: "Describe a natural object with scientific precision and poetic language.",
        startingText: "I saw a pretty bird.",
        targetScore: 80,
        mode: 'creative',
        solution: "A male northern cardinal, a crimson jewel against the stark white snow, tilted its crested head, its sharp, conical beak perfectly evolved for cracking seeds."
      },
      {
        title: "Personification",
        icon: "Wind",
        description: "Give human qualities to a natural element.",
        startingText: "The wind was blowing hard.",
        targetScore: 75,
        mode: 'creative',
        solution: "The ancient oak groaned under the wind's assault, its branches flailing like the arms of a tired old man fighting a relentless storm."
      },
      {
        title: "Ecological Connections",
        icon: "Network",
        description: "Show the relationship between different elements of an ecosystem.",
        startingText: "Bees get pollen from flowers.",
        targetScore: 80,
        mode: 'researcher',
        solution: "The honeybee, a diligent courier, moves from blossom to blossom, not merely taking nectar, but performing the vital, ancient dance of pollination that ensures the survival of the entire meadow."
      },
      {
        title: "Awe and Wonder",
        icon: "Sunrise",
        description: "Evoke a sense of awe about the natural world.",
        startingText: "The stars were bright.",
        targetScore: 80,
        mode: 'creative',
        solution: "Away from the city's glare, the night sky exploded into a profligate tapestry of stars, a silent, humbling spectacle that made all human concerns feel impossibly small."
      },
      {
        title: "Conservationist's Plea",
        icon: "HeartHandshake",
        description: "Write a subtle call to action for conservation.",
        startingText: "We should protect the forests.",
        targetScore: 85,
        mode: 'creative',
        solution: "To walk through this ancient forest is to walk through a living library, where each tree is a volume of history. One has to wonder how many more chapters we will allow to be written before the library closes for good."
      }
    ]
  },
  {
    title: "Food Writing",
    icon: "CookingPot",
    lessons: [
      {
        title: "Evoking Taste and Smell",
        icon: "CookingPot",
        description: "Describe a dish using sensory language that evokes taste and smell.",
        startingText: "The soup tasted good.",
        targetScore: 80,
        mode: 'creative',
        solution: "The aroma of the tomato soup—a rich blend of roasted garlic and fresh basil—promised a taste of summer, and the first spoonful delivered: bright, tangy, and with a velvety texture that coated the tongue."
      },
      {
        title: "Recipe Writing",
        icon: "NotebookText",
        description: "Write a clear, easy-to-follow recipe instruction.",
        startingText: "Cook the onions until they are soft.",
        targetScore: 75,
        mode: 'student',
        solution: "In a large skillet over medium heat, sauté the chopped onions in olive oil until they become translucent and fragrant, about 5-7 minutes."
      },
      {
        title: "Restaurant Review",
        icon: "MessageSquareText",
        description: "Write a balanced and descriptive restaurant review.",
        startingText: "The restaurant was okay. The food was good but the service was slow.",
        targetScore: 80,
        mode: 'creative',
        solution: "While the culinary creations at 'The Gilded Spoon' were nothing short of spectacular, particularly the pan-seared scallops, the experience was unfortunately marred by inattentive and glacially paced service."
      },
      {
        title: "The Story of a Dish",
        icon: "BookMarked",
        description: "Write about the history or cultural significance of a particular food.",
        startingText: "Pizza comes from Italy.",
        targetScore: 80,
        mode: 'creative',
        solution: "More than just bread, cheese, and tomatoes, pizza is a story of ingenuity, born from the working-class streets of Naples and transformed into a beloved culinary icon that has conquered the globe."
      },
      {
        title: "Writing a 'Lead-in'",
        icon: "PenLine",
        description: "Write an engaging introduction to a recipe.",
        startingText: "Here is a recipe for chocolate chip cookies.",
        targetScore: 75,
        mode: 'creative',
        solution: "There are few things in this world more comforting than the smell of freshly baked chocolate chip cookies. This recipe, passed down through three generations, is my secret weapon for turning any bad day around. It's nostalgia in a single bite."
      }
    ]
  },
  {
    title: "The Final Edit",
    icon: "Award",
    lessons: [
      {
        title: "The Ultimate Proofread",
        icon: "FileCheck2",
        description: "Find and fix all errors (grammar, spelling, punctuation, style) in a complex paragraph.",
        startingText: "Its a fact that a vary good plan, will not succeed if its execution is bad. For all intensive purposes, you must insure that there team is ready for the challenge irregardless of the obsticles they might face, its crutial.",
        targetScore: 90,
        mode: 'student',
        solution: "It's a fact that a very good plan will not succeed if its execution is poor. For all intents and purposes, you must ensure that their team is ready for the challenge, regardless of the obstacles they might face. It's crucial."
      },
      {
        title: "Final Polish",
        icon: "Wand2",
        description: "Take a well-written paragraph and make it truly exceptional.",
        startingText: "The new software is good. It helps users do their work faster. Many people like it.",
        targetScore: 90,
        mode: 'researcher',
        solution: "The new software represents a paradigm shift in user efficiency. By streamlining workflows and automating redundant tasks, it empowers users to accomplish their objectives with unprecedented speed and accuracy, resulting in overwhelmingly positive adoption rates and testimonials."
      },
      {
        title: "Checking for Flow",
        icon: "GitBranch",
        description: "Improve the flow and transitions between sentences.",
        startingText: "Our sales increased last quarter. The marketing team worked hard. The economy was also good.",
        targetScore: 90,
        mode: 'researcher',
        solution: "Our sales increased significantly last quarter, largely due to the diligent efforts of our marketing team. Furthermore, a favorable economic climate provided a tailwind for this impressive growth."
      },
      {
        title: "Elevating Language",
        icon: "SignalHigh",
        description: "Elevate the language of a paragraph to be more powerful and memorable.",
        startingText: "The new discovery is very important and will change things.",
        targetScore: 90,
        mode: 'researcher',
        solution: "This groundbreaking discovery is not merely important; it is transformative, poised to redefine the very foundations of our field and open up new avenues of research for decades to come."
      },
      {
        title: "The Final Read-Through",
        icon: "BookCheck",
        description: "Catch any remaining awkward phrasing or typos in a final review.",
        startingText: "The project was a success, and the team worked good together.",
        targetScore: 90,
        mode: 'student',
        solution: "The project was a resounding success, and the team collaborated exceptionally well."
      }
    ]
  }
];

    

    