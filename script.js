function toggleMode() {
    document.body.classList.toggle("dark-mode");

    console.log(
        document.body.classList.contains("dark-mode")
            ? "Night ocean activated"
            : "Day ocean activated"
    );
}

// SCROLL TO GENRE
function scrollToGenre(genre) {
  const cards = document.querySelectorAll(".story-card");
  cards.forEach(card => {
    if (card.getAttribute("data-genre") === genre || genre === "all") {
      card.style.display = "flex"; // show matching
    } else {
      card.style.display = "none"; // hide others
    }
  });
}
// STORIES DATA (expand to 30)
const stories = [
  {  title: "THE SECRET OF THE MIDNIGHT LIBRARY",
    genre: "mystery",
    image: "Images/Mystery1.PNG",
    synopsis: "As they search the library, they discover hidden passages, secret codes, and letters written by people who wanted the truth to remain buried. They initially suspect the town mayor, who had been the last person seen visiting Mr. Gray. However, they later discover that the mayor had been trying to protect the library from someone who wanted to destroy its records..",
    chapter1:  `Chapter 1: The Door That Opened at Midnight
    The rain fell heavily as Elena walked home from school. The streets of Blackwood were almost empty, and the cold wind made her pull her jacket closer around her body.

She was about to turn onto her street when she noticed something unusual.

At the end of the road stood an old building surrounded by tall trees. Its windows were dark, its walls were covered in ivy, and a faded sign hung above the entrance.

BLACKWOOD PUBLIC LIBRARY.

Elena had heard stories about the building since she was a child. According to the townspeople, the library had been closed for twenty years after its librarian disappeared. Nobody knew what happened to him, and nobody seemed interested in finding out.

But tonight, one of the windows was glowing.

Elena stopped walking.

"That's impossible," she whispered.

She approached the building slowly. The front gate creaked as she pushed it open. When she reached the entrance, she noticed a small silver key lying on the wet ground.

The key looked familiar.

Earlier that afternoon, her grandmother had given her an old wooden box filled with family photographs. Inside the box was a letter that mentioned the Blackwood Library. Elena had not understood why her grandmother kept the letter, but now she began to wonder if it was important.

She picked up the key and examined the lock.

To her surprise, the key fit perfectly.

The door opened with a long, unpleasant creak.

Inside, the library smelled of old paper and wood. Tall bookshelves stretched toward the ceiling, and a large clock hung above the reception desk. Everything was covered in dust except for one table near the window.

A book lay open on the table.

Elena approached it carefully. The first page contained a handwritten message:

"To the person who finds this book, the truth has been hidden here for twenty years. Do not trust the person who claims to know everything."

Below the message was a name.

WILLIAM GRAY.

Elena remembered the name from the stories about the missing librarian.

Suddenly, the clock struck twelve.

Every light in the library went out.

A moment later, Elena heard footsteps coming from the second floor.

"Hello?" she called.

The footsteps stopped.

She turned toward the staircase and saw a shadow standing at the top.

Then a quiet voice spoke.

"You shouldn't have opened that door."

Elena froze.

The shadow disappeared, leaving behind a small envelope on the staircase.

With trembling hands, Elena opened it. Inside was a photograph of the library taken twenty years earlier.

On the back, someone had written three words:

"Find the missing book."

Elena looked toward the dark staircase.

Whatever had happened in the library twenty years ago, she knew one thing for certain.

The mystery was not over. `,
    details: "Author: ESCABUSA\nGenre:Mystery"
  },

  {  title: "THE GIRL WHO DISAPPEARED FROM ROOM 12",
    genre: "mystery",
    image: "Images/Mystery2.png",
    synopsis: "At Rosewood Academy, students begin whispering about a girl named Isabella who supposedly disappeared from Room 12 ten years ago. The school claims that Isabella transferred to another institution, but nobody can find her records. Seventeen-year-old Mia becomes interested in the mystery after discovering Isabella's name written beneath an old classroom desk..",
    chapter1: `Chapter 1: The Name Beneath the Desk
    Mia had never believed in school legends.

To her, stories about haunted classrooms and disappearing students were simply ways for older students to frighten younger ones. But everything changed on a Monday afternoon when her teacher asked her to clean Room 12 after class.

The classroom was old and rarely used. Several desks were scratched, the curtains were faded, and one of the windows refused to close properly.

Mia moved a desk to sweep underneath it.

That was when she saw the name.

ISABELLA CRUZ.

The letters had been carved into the wooden surface. Beneath the name was a date from ten years earlier and a short sentence.

"I know what happened."

Mia stared at the writing.

"Who is Isabella Cruz?" she asked when Daniel entered the room.

Daniel dropped his backpack onto a chair.

"You don't know?" he replied. "She's the girl who disappeared from this classroom."

Mia laughed nervously. "People don't just disappear from classrooms."

"That's what everyone says," Daniel answered. "But there's no record of her transferring schools. Some students say the administration removed her name from the yearbook."

Before Mia could respond, Sophie entered carrying a stack of notebooks.

"What are you two talking about?"

Daniel explained everything.

Sophie immediately became serious. Her older sister had graduated from Rosewood Academy, and she remembered hearing a similar story.

"My sister said that a teacher once told the class never to mention Isabella," Sophie said. "Nobody explained why."

The three friends looked at the carved name.

Mia took a photograph of the desk with her phone.

"We should check the old yearbooks," she suggested.

That afternoon, they visited the school library. The librarian helped them find a dusty yearbook from ten years earlier.

They searched every page.

There were photographs of school clubs, sports competitions, and graduation ceremonies. Yet Isabella's name was nowhere to be found.

Then Daniel noticed something strange.

A photograph on one page had been carefully cut out. The caption underneath read, "Room 12 Academic Excellence Award."

Someone had removed the picture but left the caption behind.

"Why would anyone do that?" he asked.

Before Mia could answer, a folded piece of paper slipped from the yearbook.

She picked it up and unfolded it.

The note contained a single sentence:

"If you want to know what happened to Isabella, look behind the clock in Room 12."

The friends exchanged nervous glances.

The next morning, they returned to the classroom before the first bell. Mia carefully removed the old clock from the wall.

Behind it was a small envelope sealed with yellow tape.

Inside was a photograph of Isabella standing beside three teachers. One teacher's face had been crossed out in black ink.

On the back of the photograph, someone had written:

"One of them knows the truth."

Suddenly, footsteps approached the classroom.

Mia quickly placed the photograph inside her notebook.

The door opened.

Their history teacher stood in the doorway, staring directly at the clock.

"What are you doing here?" he asked.

Nobody answered.

Then his eyes fell on the envelope in Mia's hand.

His expression changed.

"Where did you find that?"

For the first time, Mia understood that the story of Isabella Cruz was more than a school legend.

Someone had been waiting ten years for the truth to be discovered.`,
    details: "Author: ESCABUSA\nGenre: Mystery",
  },
  

  {  title: "THE MYSTERY OF THE VANISHING PAINTING",
    genre: "mystery",
    image: "Images/Mystery3.png",
    synopsis: "Seventeen-year-old Lucas lives with his aunt, who owns a small art gallery. One morning, the gallery's most valuable painting, The Blue Garden, disappears from a locked exhibition room. The doors and windows show no signs of forced entry, and the security cameras reveal nothing unusual.",
    chapter1: `Chapter 1: The Empty Frame
    Lucas arrived at the gallery at eight in the morning, expecting another ordinary Saturday.

His aunt, Margaret, had asked him to help prepare the rooms for a special exhibition. The gallery was usually quiet at that hour, with sunlight falling through the tall windows and illuminating the paintings along the walls.

But when Lucas entered the main exhibition room, he immediately noticed something wrong.

A large golden frame hung on the wall.

The painting inside it was gone.

"Aunt Margaret?" he called.

His aunt hurried out of her office. The moment she saw the empty frame, she covered her mouth with one hand.

"No," she whispered. "This can't be happening."

The missing painting was called The Blue Garden. It showed a peaceful garden filled with blue flowers and a small stone fountain. It had belonged to the gallery for decades and was considered its most valuable piece.

Margaret immediately called the police.

Lucas examined the room while he waited. The windows were locked, the door had no visible damage, and the other paintings remained untouched.

Whoever had taken the painting seemed to know exactly what they wanted.

When the police arrived, they questioned the employees and reviewed the security recordings. Unfortunately, the cameras had stopped recording for several minutes during the night.

"Convenient," Lucas muttered.

His aunt gave him a warning look.

"Don't make accusations without evidence."

Lucas nodded, but his attention had shifted to the empty frame. Something small and blue was caught beneath its lower edge.

He carefully pointed it out to the investigator.

The investigator removed the object with a gloved hand. It was a short blue thread.

"Interesting," the investigator said. "We'll examine it."

Later that afternoon, Lucas returned to the gallery library. He searched through old catalogues and found a photograph of The Blue Garden taken thirty years earlier.

In the photograph, the painting's lower corner contained a tiny signature.

Lucas enlarged the image.

The signature read: E. MARLOWE.

He had never heard that name before.

When he showed the photograph to his aunt, her face became unusually pale.

"Where did you find that?" she asked.

"In the old catalogue. Who was E. Marlowe?"

Margaret closed the book.

"An artist from a long time ago."

"Then why isn't her name in the current records?"

His aunt did not answer.

That evening, Lucas searched the gallery's archive without touching any restricted documents. In a public exhibition catalogue, he found a short article explaining that the painting had been purchased from a private seller decades earlier.

The seller's name was not listed.

Beneath the article, someone had written a note in pencil:

"The painting was never supposed to be here."

Lucas read the sentence twice.

Before he could investigate further, his phone rang. Emma, his best friend, was calling.

"Lucas, I found something," she said urgently. "I searched the artist's name. E. Marlowe was a real painter, and her family has been looking for one of her missing works for years."

Lucas looked at the empty frame.

"Do they know about The Blue Garden?"

"I think so," Emma replied. "But there's another problem. Someone listed a painting with the same title for a private sale last night."

Lucas stood up.

"Where?"

Emma sent him the listing.

The photograph showed a blue garden, a stone fountain, and the same golden frame.

But the listing had been posted before the gallery officially announced the disappearance.

Someone had known the painting would be missing.

And that meant the theft might have been planned long before anyone noticed the empty frame.`,
    details: "Author: ESCABUSA\nGenre: Mystery"
  },
  

  {  title: "THE HOUSE WITH THIRTEEN WINDOWS",
    genre: "mystery",
    image: "Images/Mystery4.png",
    synopsis: "When sixteen-year-old Clara inherits an old countryside house from a distant relative, she discovers that the building has thirteen windows, although every official photograph shows only twelve. The house has been empty for years, and the local residents refuse to discuss its former owner, Eleanor Vale.",
    chapter1: `Chapter 1: The Window in the Mirror
    The first thing Clara noticed about the house was that it seemed much larger than it looked from the road.

It stood on a hill beyond the village, surrounded by overgrown gardens and a tall iron fence. Its stone walls were covered with moss, and its roof had darkened with age.

Her mother handed her the old brass key.

"Your great-aunt Eleanor left this house to you," she explained. "We'll stay for a few days while the lawyer prepares the documents."

Clara stared at the building.

"Why would she leave it to me? I never even met her."

"Your grandmother said Eleanor always wanted someone in the family to take care of it."

They entered through the front door. Inside, the house smelled of dust and old wood. A staircase rose toward the second floor, and an enormous mirror hung in the entrance hall.

Clara counted the windows visible from the front garden.

One, two, three, four, five, six.

From the side, she could see six more.

"Twelve windows," she said.

Her mother looked at her. "What?"

"Nothing."

They spent the afternoon opening curtains and cleaning the rooms. Clara explored the second floor and found an old bedroom with a desk, a wardrobe, and a mirror facing the hallway.

When she looked into the mirror, she noticed something strange.

A thirteenth window appeared in the reflection.

Clara turned around.

There was no window behind her.

She looked back at the mirror.

The window was still there, showing a patch of garden covered in white flowers.

Her heart beat faster.

She stepped closer to the mirror and touched its wooden frame. The reflection seemed perfectly ordinary except for the impossible window.

Then she heard a soft tapping sound.

Three taps.

Clara spun around.

The room was empty.

She hurried downstairs and told her mother what she had seen.

Her mother smiled tiredly.

"It's an old mirror, Clara. Maybe the angle makes the reflection confusing."

But Clara knew what she had seen.

That night, she woke to the sound of footsteps above her bedroom ceiling. She sat up and listened. The footsteps moved slowly from one end of the house to the other, then stopped.

She took her flashlight and stepped into the hallway.

At the end of the corridor stood the old mirror.

The thirteenth window was visible again.

This time, a small envelope rested on the floor beneath its reflection.

Clara picked it up.

Inside was a yellowed letter addressed to Eleanor Vale. The handwriting was neat, but the final sentence had been underlined several times.

"If the thirteenth window appears, the truth is ready to be found."

Clara read the sentence again.

Then she noticed a date at the bottom of the letter.

It had been written fifty years earlier.

She carried the letter to the desk in her bedroom and examined it under the flashlight. The writer mentioned a hidden room, a family inheritance, and a person who could not be trusted.

Suddenly, the tapping returned.

This time, it came from inside the wall beside the mirror.

Clara pressed her palm against the wooden panel.

Something clicked.

A narrow section of the wall shifted inward, revealing a dark space behind it.

Clara stared into the opening.

Inside lay a small wooden box covered in dust.

She reached for it, but before her fingers touched the lid, a voice spoke from the staircase.

"Put that back."

Clara turned.

An elderly man stood in the shadows, holding a lantern.

"Who are you?" she asked.

The man looked at the hidden compartment.

"My name is Thomas," he replied. "I looked after this house for Eleanor."

"What's inside the box?"

Thomas's expression became serious.

"Something her family spent fifty years trying to hide."

Clara looked back at the opening.

For the first time, she wondered whether inheriting the house had been a gift—or a warning.`,
    details: "Author: ESCABUSA\nGenre: Mystery"
  },
  

  {  title: "THE LAST LETTER FROM MOONLIGHT ISLAND",
    genre: "mystery",
    image: "Images/Mystery5.jpeg",
    synopsis: "Fourteen-year-old Adrian visits Moonlight Island with his older sister, Nina, during their school vacation. The island is famous for its lighthouse, which has been closed since its keeper disappeared fifteen years earlier. On their first evening, Adrian finds a letter hidden inside an old bottle near the shore.",
    chapter1: `Chapter 1: A Message in a Bottle
    Adrian had always wanted to visit Moonlight Island.

He had seen photographs of its blue waters, white beaches, and tall lighthouse in travel magazines. But when the ferry finally arrived, he noticed that the island looked quieter than he had imagined.

The streets were almost empty, and the old lighthouse stood on a rocky hill overlooking the sea.

"That's where the missing keeper lived," Nina said, pointing toward it.

Adrian adjusted his backpack.

"Do you think the story is real?"

"Which story?"

"The one about the keeper who disappeared fifteen years ago."

Nina shrugged.

"People disappear for ordinary reasons. Not every story needs to be mysterious."

Their parents had rented a small cottage near the beach. After unpacking, Adrian asked permission to explore the shore with Nina.

The tide was low, revealing rocks and small pools of seawater. While Nina took photographs, Adrian noticed a glass bottle caught between two stones.

Inside it was a folded piece of paper.

He carefully removed the cork and pulled out the letter.

The paper was yellowed, and the ink had faded in several places. At the top was a date from fifteen years earlier.

The message read:

"To whoever finds this letter, the island's greatest treasure is not gold. Find the place where the moon touches the sea, and you will discover what was taken."

At the bottom was a name.

SAMUEL REED.

Adrian stared at it.

"That's the lighthouse keeper," Nina said after reading the letter. "Where did you find this?"

"Between those rocks."

She examined the paper.

"It could be an old tourist game."

"Then why does it have his name?"

Before Nina could answer, a boy about Adrian's age approached them. He carried a fishing basket and wore a blue cap.

"Where did you get that letter?" he asked.

Adrian looked at him suspiciously.

"Why?"

The boy pointed toward the signature.

"My grandfather used to talk about Samuel Reed. He said Samuel left the island without telling anyone."

"What happened to him?" Adrian asked.

"Nobody knows for sure. Some people think he went away to start a new life. Others believe he discovered something he shouldn't have."

The boy introduced himself as Kai and offered to show them the lighthouse the next day.

That evening, Adrian spread the letter across the cottage's kitchen table. He read the message several times, trying to understand the clue.

The place where the moon touches the sea.

He looked out the window. The moon was rising over the water, creating a bright silver path across the waves.

Then he noticed something strange.

The path ended directly beneath the lighthouse.

"Look at that," he whispered.

Nina came to the window.

"What am I looking at?"

"The moonlight. It points straight toward the lighthouse."

Nina studied the view.

"Maybe that's what the letter means."

Adrian returned to the table and turned the paper over. At first, the back seemed blank. Then he noticed faint marks beneath the yellowed surface.

He held it close to the lamp.

A map slowly became visible.

It showed the lighthouse, the shoreline, and a small building marked with an X.

Beneath the drawing were four words:

"The keeper knows the way."

Suddenly, someone knocked on the cottage door.

Nina opened it.

An elderly woman stood outside, holding a small parcel.

"I'm looking for the person who found Samuel Reed's letter," she said.

Adrian stepped forward.

"That's me."

The woman looked at the letter in his hand and sighed.

"Then you must return it to the sea."

"Why?"

"Because Samuel left that message for a reason."

She placed the parcel on the table and walked away before they could ask another question.

Inside the parcel was an old brass compass.

On its back were the initials S.R.

Adrian held the compass carefully.

The needle did not point north.

Instead, it pointed toward the lighthouse.

And somewhere inside that abandoned building, a mystery that had remained unsolved for fifteen years was waiting for someone to begin.`,
    details: "Author: ESCABUSA\nGenre: Mystery"
  },
  

  {  title: "THE BOY UNDER MY UMBRELLA",
    genre: "romance",
    image: "Images/Romance1.png",
    synopsis: "Seventeen-year-old Hannah Reyes believes that love only distracts people from their dreams. She spends most of her time studying and working toward a scholarship that will help her attend her dream university. One rainy afternoon, she meets Ethan Cruz, a cheerful student who forgets his umbrella and ends up sharing hers. Their first meeting is awkward because Ethan accidentally spills coffee on her notebook.",
    chapter1: `Chapter 1: One Umbrella, Two Strangers
    Hannah Reyes hated rainy Mondays.

They made the roads crowded, her shoes wet, and her carefully arranged schedule completely useless. That morning, she had spent twenty minutes waiting for a jeepney, only to discover that her notebook had been soaked by the rain.

"Perfect," she muttered.

She hurried toward the school entrance, holding her bag over her head. Just as she reached the gate, someone ran past her and accidentally bumped into her shoulder.

Her notebook fell into a puddle.

"Oh, no!"

"I'm so sorry!"

A boy immediately stopped and bent down to help her. His white uniform was wrinkled, his hair was dripping, and he was holding an empty paper coffee cup.

"Are you always this careless?" Hannah asked.

"Only on Mondays," he answered with an apologetic smile.

Hannah stared at him. "That's not funny."

"You're right. It isn't." He handed her the notebook. "Let me make it up to you."

"Can you make the rain stop?"

"Unfortunately, my powers don't work on weather."

Despite herself, Hannah almost smiled.

The boy introduced himself as Ethan Cruz, a student from the next section. Before she could walk away, he noticed the umbrella sticking out of her bag.

"Could I borrow that?"

Hannah raised an eyebrow. "You just ruined my morning."

"And now I'm asking you to save mine."

She sighed and opened the umbrella.

"Fine. But don't touch my notebook again."

They walked toward the building together, squeezed beneath the small umbrella. Ethan kept moving toward the rain, leaving Hannah almost completely dry while his own shoulder became soaked.

"You know," she said, "you could move closer."

Ethan looked at her, surprised. "Are you sure?"

"Don't make me regret it."

He moved beneath the umbrella, smiling as if she had given him the greatest gift in the world.

When they reached the classroom building, Ethan stepped away.

"Thank you, Hannah."

She froze. "How do you know my name?"

He pointed toward her notebook, where her name was written in large letters.

"Right. I'm not a mind reader."

For the first time that morning, Hannah laughed.

She watched him disappear into the hallway, then looked down at her notebook. A small piece of paper had been tucked between its pages.

It read:

Thank you for sharing your umbrella. Coffee is on me tomorrow. — Ethan

Hannah shook her head.

She had a scholarship application to finish, examinations to prepare for, and absolutely no time for distractions.

Still, as she entered her classroom, she caught herself wondering what kind of coffee Ethan would buy.

And that annoyed her more than the rain ever could.`,
    details: "Author: ESCABUSA\nGenre: Romance"
  },
  

  {  title: "MY BEST FRIEND, MY FIRST LOVE",
    genre: "romance",
    image: "Images/Romance2.png",
    synopsis: "Maya and Lucas have been best friends since childhood. They share everything, from school problems to family celebrations, and everyone assumes they will always remain inseparable. Maya secretly develops feelings for Lucas but refuses to confess because she fears losing their friendship.",
    chapter1: `Chapter 1: The Boy Next Door
    Maya Santos knew three things about Lucas Mendoza.

First, he hated vegetables.

Second, he always forgot his homework.

And third, he had the most annoying habit of knocking on her bedroom window whenever he wanted something.

Tap. Tap. Tap.

Maya closed her eyes.

"Lucas, I'm going to throw something at you!"

"Good morning to you, too!"

She opened the curtains and found her best friend standing outside with two cups of milk tea.

"Peace offering," he announced.

Maya opened the window. "What did you do?"

"Why does everyone assume I've done something wrong?"

"Because you usually have."

Lucas grinned and handed her a cup.

They had been neighbors since they were seven. Their families were close, their houses stood beside each other, and their mothers had long ago accepted that Lucas would appear at their dinner table without warning.

To Maya, Lucas was home in the shape of a person.

That was exactly the problem.

Somewhere between childhood games and high school examinations, her feelings had changed. She no longer saw him as just the boy who stole her snacks or borrowed her notes. She noticed his smile, his kindness, and the way he remembered small things about her.

Unfortunately, Lucas still treated her like the little girl who once cried because he won a spelling contest.

"What's wrong?" he asked.

"Nothing."

"You've been saying that all week."

"Maybe I have nothing to say."

Lucas looked genuinely hurt, and Maya immediately regretted her words.

Before she could apologize, he took a folded paper from his pocket.

"I have news."

"What kind?"

"I applied for the student leadership program in Cebu. I got accepted."

Maya's smile slowly disappeared.

"Cebu?"

"It's only for the summer," he explained. "But if I do well, I might get a scholarship there next year."

She forced herself to smile. "That's great, Lucas."

"You're not happy?"

"Of course I am."

He studied her face, as though searching for something she refused to say.

Then his phone rang. He glanced at the screen and smiled.

"Sorry. I have to go. I'll tell you everything later."

Maya watched him walk away.

A few minutes later, she saw him talking to a girl near the school gate. The girl laughed at something he said, and Lucas smiled in that familiar way Maya had secretly loved for years.

For the first time, Maya wondered whether being his best friend was enough.

That afternoon, she found a message from Lucas waiting on her phone.

Lucas: Are you free Saturday? I want to spend the day with you before I leave.

Maya stared at the message.

She wanted to say yes immediately. She wanted to tell him she would miss him, that she was afraid of the distance, and that she had fallen for him long before she understood what those feelings meant.

Instead, she typed:

Maya: Sorry, I'm busy.

She put down her phone and covered her face with a pillow.

She had spent years afraid of losing Lucas.

Now, by hiding her feelings, she was beginning to lose him anyway.`,
    details: "Author: ESCABUSA\nGenre: Romance"
  },
  
  {  title: "ENEMIES IN THE LIBRARY",
    genre: "romance",
    image: "Images/Romance3.png",
    synopsis: "Sofia Ramirez is one of the top students in her class, determined to win an academic competition that could earn her a university scholarship. Her biggest rival is Adrian Flores, a confident and competitive student who always seems to challenge her answers.",
    chapter1: `Chapter 1: The Seat Beside My Rival
    "You're late."

Sofia Ramirez looked up from her laptop and found Adrian Flores standing beside her library table.

"Good morning to you, too," she replied.

"It's already ten minutes past our meeting time."

"And yet, somehow, the world continues to exist."

Adrian pulled out the chair across from her.

"You know, if sarcasm were a subject, you'd probably graduate with honors."

"And if being annoying were a subject, you'd be the professor."

The librarian glanced at them, and both immediately lowered their voices.

Sofia returned to her research notes. She had spent the entire weekend preparing for their academic project, and the last thing she needed was Adrian questioning her work.

Unfortunately, their teacher had decided that the two highest-ranking students should work together.

Sofia had ranked first.

Adrian had ranked second.

He had reminded her of that fact approximately twelve times since Monday.

"Your introduction is too long," Adrian said, looking at her screen.

"Nobody asked for your opinion."

"Our teacher did. Remember? We're partners."

Sofia turned the laptop toward him. "Fine. What would you change?"

Adrian read the paragraph carefully.

For once, he didn't make a joke.

"Your explanation is good," he said. "But if we move this part earlier, the whole argument becomes clearer."

Sofia checked his suggestion.

He was right.

She hated that he was right.

"That's actually useful," she admitted.

Adrian placed a hand over his chest. "I'm honored. Should I write down the date?"

"Don't ruin the moment."

He laughed, and Sofia found herself smiling before she could stop.

They worked for another hour, discussing their research and organizing their sources. As the library grew quieter, Sofia noticed Adrian checking his phone repeatedly.

"Are you waiting for someone?" she asked.

"My younger brother. I promised to help him with his homework after school."

"You have a younger brother?"

"Two, actually."

Sofia blinked. "You never mentioned them."

"You never asked."

For the first time, she wondered how much she had misunderstood about him.

Adrian packed his things, then hesitated.

"Hey, Sofia?"

She looked up.

"Your research is really good. I joke around, but I know how much work you put into it."

She didn't know what to say.

"Thank you," she finally replied.

He smiled and walked toward the exit.

Sofia returned to her laptop, but she could no longer concentrate. She kept thinking about the way Adrian had spoken, without teasing or competition.

Then she noticed a small notebook he had left on the table.

She picked it up, intending to return it the next day.

The first page contained a list of research references. The second contained reminders about his brothers' school activities.

On the third page, she found a sentence written in the margin:

"I wonder what Sofia is like when she's not trying to be the best."

Sofia stared at the words.

For the first time since meeting Adrian, she had no clever response.

And for reasons she couldn't explain, she suddenly wanted to find out what he was like when he wasn't trying to beat her, either.`,
    details: "Author: ESCABUSA\nGenre: Romance"
  },
  

  {  title: "WHEN WE MEET AGAIN",
    genre: "romance",
    image: "Images/Romance4.png",
    synopsis: "At eighteen, Claire and Daniel promise to stay together after graduation. They have been close friends for years, and their friendship eventually becomes a first love neither wants to lose. However, Daniel moves abroad to help his family, while Claire remains in their hometown to pursue her education. Their long-distance relationship becomes difficult as missed calls, busy schedules, and unspoken worries create distance between them.",
    chapter1: `Chapter 1: The Name on the Blueprint
    Claire had promised herself she would never return to the old community center.

Not because she hated the place, but because too many memories lived inside its faded walls.

It was where she had met Daniel Reyes, where they had studied together after school, and where he had first told her that he wanted to see the world.

It was also where they had said goodbye.

Now, five years later, Claire stood outside the building with a folder of architectural plans under her arm.

The town council had hired her to help renovate the center. It was an important project, and she intended to complete it professionally.

No memories. No regrets. Just work.

She entered the building and walked toward the main hall. Sunlight streamed through the dusty windows, illuminating the old wooden benches.

Someone was standing near the stage.

A familiar voice spoke before she could turn away.

"Claire?"

Her fingers tightened around the folder.

She knew that voice.

Slowly, she turned.

Daniel stood a few steps away, wearing a simple white shirt and holding a set of construction plans. He looked older, more confident, and strangely familiar.

For a moment, neither of them spoke.

Then Daniel smiled faintly.

"You're the architect?"

"You're working here?"

They spoke at the same time, then fell silent.

Daniel laughed softly. "I guess some things haven't changed."

Claire forced herself to smile. "Some things change more than others."

His expression shifted.

"I deserved that."

She looked down at her folder. "I'm here to discuss the renovation. Let's keep this professional."

"Of course."

They spent the next hour reviewing the building plans. Daniel explained the repairs that needed to be completed, while Claire described her proposed design. They worked surprisingly well together, remembering the same details about the building and agreeing on most of the changes.

It was almost as though five years had disappeared.

Almost.

When the meeting ended, Claire packed her documents.

Daniel remained beside the table.

"How have you been?" he asked.

"Good. Busy."

"I'm glad."

She wanted to ask him a thousand questions. Why had he stopped calling? Why had he made their final conversation sound so certain? Had he ever regretted leaving?

Instead, she said, "I have another meeting tomorrow."

Daniel nodded.

"I'll be here."

Claire walked toward the door, determined not to look back.

Then she heard him call her name.

"Claire, wait."

She stopped.

Daniel held out a folded piece of paper.

"I found this while clearing the storage room."

She opened it.

It was an old photograph of the two of them sitting on the community center steps, laughing at something outside the frame.

On the back, in Daniel's handwriting, were the words:

"Someday, we'll come back here and tell each other how everything turned out."

Claire looked at him.

"You kept this?"

"I never threw it away."

Her eyes returned to the photograph.

For five years, she had convinced herself that their story was over.

But standing there, holding a memory neither of them had forgotten, she realized that some endings were simply questions waiting for an answer.

And tomorrow, she would have to see him again.`,
    details: "Author: ESCABUSA\nGenre: Romance"
  },
  

  {  title: "LOVE LETTERS BETWEEN THE SHELVES",
    genre: "romance",
    image: "Images/Romance5.png",
    synopsis: "Lily Fernandez spends most afternoons at her favorite secondhand bookshop, where she hopes to become a published writer someday. One day, she discovers an anonymous letter tucked inside a poetry book. The writer describes the comfort of finding someone who understands the things that are difficult to say aloud.",
    chapter1: `Chapter 1: A Letter in the Poetry Section
    Lily Fernandez loved secondhand bookstores because every book seemed to have lived a life before reaching her hands.

Some contained handwritten names. Others had faded receipts tucked between their pages. Occasionally, she found a pressed flower or a note from someone who had once loved the same story.

On Friday afternoon, she discovered something different.

She was browsing the poetry section of Paper Moon Books when a folded letter slipped from a collection of poems.

Lily glanced around.

Nobody seemed to have noticed.

She unfolded the paper carefully.

To whoever finds this,

Have you ever wanted to tell someone everything but couldn't find the courage to say it aloud? Sometimes I think it's easier to write to a stranger because a stranger doesn't already have an idea of who you're supposed to be.

Maybe that's why I keep coming back to this bookshop. Here, I can imagine becoming someone brave enough to say what I mean.

If you found this letter, I hope you have a good day.

— Someone who likes rainy afternoons

Lily read it twice.

It was simple, but something about the letter made her feel as though the writer had described a thought she had never shared with anyone.

She folded the paper and slipped it into her bag.

For the next ten minutes, she tried to continue reading, but her mind kept returning to the mysterious writer.

Finally, she took out her notebook and began writing a reply.

Dear Someone,

I think strangers can sometimes understand us because they listen without expecting us to be perfect. But maybe being brave doesn't mean having nothing to fear. Maybe it means telling the truth even when you're afraid of what someone might think.

I hope you have a good day, too.

— Someone who likes stories with happy endings

The following afternoon, Lily returned to Paper Moon Books and placed her letter inside the same poetry collection.

She told herself it was just a small experiment.

Nothing more.

A week passed without a reply.

Then, on the following Friday, she found another letter waiting between the pages.

Dear Someone Who Likes Happy Endings,

Do you really believe every story deserves one? What if two people care about each other but are too afraid to admit it?

Would you tell them to take a chance, or would you tell them to protect themselves?

Lily smiled.

She had no idea who was writing to her, but she was beginning to look forward to their conversations.

That afternoon, while she was writing her answer, a young man approached the counter carrying a stack of books.

"You're Lily, right?" he asked.

She looked up. "Yes. Do I know you?"

"I'm Noah. I volunteer here on weekends."

"Oh, right. I've seen you before."

He smiled and placed the books on the counter.

"You're always in the poetry section."

"Is that a crime?"

"Not at all. I'm just curious. Do you write poetry?"

"Sometimes. Mostly short stories."

"That's nice. What kind?"

Lily hesitated before answering.

"Stories about people who are afraid to say what they feel."

Noah looked at her for a moment, then smiled.

"Those are usually the stories worth reading."

She felt her cheeks grow warm and quickly looked down at her notebook.

After Noah left, Lily returned to the poetry section. She opened the book and began writing her reply.

She didn't notice that Noah had paused near the doorway.

He glanced back at the book in her hands, then quietly continued walking.

That evening, another letter appeared inside the poetry collection.

Dear Someone Who Likes Happy Endings,

I think I know what my answer is now. Maybe people should take a chance, even if they don't know how the story will end.

But what if the person they're hoping for is closer than they think?

Lily held the letter against her chest and smiled.

For the first time in a long while, she couldn't wait to see what tomorrow might bring.`,
    details: "Author: ESCABUSA\nGenre: Romance"
  },
  

  {  title: "THE HOUSE THAT WHISPERED",
    genre: "horror",
    image: "Images/whisper.png",
    synopsis: "Sixteen-year-old Amelia moves with her family into an old house in a quiet town. The house is beautiful, but the neighbors warn them never to enter the locked room at the end of the upstairs hallway. Amelia initially ignores the warning until she begins hearing whispers coming from inside the room every night.",
    chapter1: `Chapter 1: The Voice Behind the Door
    The first night in the new house was supposed to be exciting.

Amelia had imagined decorating her bedroom, exploring the garden, and making the place feel like home. Instead, she sat on her bed listening to the strange sounds coming from the hallway.

Whispering.

At first, she thought her parents were talking downstairs. But when she opened her bedroom door, the hallway was completely empty.

The sound came again.

"Amelia..."

She froze.

The voice was quiet, almost like someone speaking from the other side of a wall.

"Mom?" she called.

Nobody answered.

She stepped into the hallway and noticed a narrow door at the far end. It was painted dark brown, with a rusty lock and a small brass number attached to its surface.

13.

"Don't go near that room."

Amelia spun around. Her younger brother, Ethan, stood behind her in his pajamas.

"Why not?"

"Mom said it's locked because the room is old."

"Then why did you come here?"

Ethan shrugged. "I heard someone talking."

Amelia stared at the door.

So she hadn't imagined it.

The next morning, she asked her mother about the room.

"It's probably just an old storage room," her mother explained while unpacking boxes. "The previous owner asked us not to open it until the property inspection is finished."

"Did the previous owner live here?"

"An elderly man. He moved away several years ago."

Amelia wanted to ask more questions, but her mother was busy.

That afternoon, while exploring the upstairs rooms, Amelia noticed a loose floorboard near the staircase. Beneath it was a small notebook covered in dust.

The first page contained a name.

Eleanor Whitmore, 1987.

Amelia sat on the floor and began reading.

The first few entries described ordinary things: school, family dinners, and rainy afternoons. But the later entries became increasingly strange.

One sentence had been underlined several times.

"The voice knows my name, but nobody else can hear it."

Amelia felt a chill run through her.

She turned the page.

"Mother says Room 13 must remain locked. Father says the house is remembering something. I don't understand what that means."

Suddenly, a loud knock came from the end of the hallway.

Amelia dropped the diary.

Three knocks.

Then silence.

She slowly approached the locked door. The whispering began again, clearer than before.

"Amelia..."

She stepped backward.

A small piece of paper slid beneath the door.

She picked it up with trembling fingers.

Written on it were five words:

"You found Eleanor's diary. Run."

Amelia looked toward the staircase.

Someone was standing at the bottom, watching her.

And the person was wearing the same clothes as the figure in an old photograph she had found inside the diary.`,
    details: "Author: ESCABUSA\nGenre: Horror"
  },
  
  {  title: "THE CLASSROOM THAT NEVER CLOSES",
    genre: "horror",
    image: "Images/classroom.png",
    synopsis: "When seventeen-year-old Nathan transfers to an old academy, he hears rumors about Classroom 204. Students claim that its lights turn on after midnight, even though the room has been closed for years. The school administration insists that the classroom is empty and that the stories are simply pranks.",
    chapter1: `Chapter 1:  Present, Even When Absent
    Nathan hated being the new student.

Everyone already had friends, familiar teachers, and stories from previous school years. He had only a timetable, a map of the building, and a strong desire not to get lost.

Unfortunately, he got lost before lunch.

He turned down a corridor marked STAFF ONLY and found himself standing in front of a classroom with a faded sign.

CLASSROOM 204.

The door was slightly open.

Nathan glanced at his timetable. His next class was in Room 104, not 204.

He was about to leave when he heard a chair scrape across the floor.

"Hello?" he called.

No answer.

He pushed the door open.

The classroom was empty. Dust covered the desks, and the curtains were drawn. A large blackboard stood at the front, covered in faint chalk marks.

Nathan stepped inside.

On the nearest desk, someone had carved a number.

His student number.

He leaned closer to make sure he wasn't mistaken.

The numbers were exact.

A bell rang somewhere in the building, and Nathan hurried out.

At lunch, he told Chloe, a student from his class, what he had seen.

"Room 204?" she repeated.

"What's wrong with it?"

Chloe lowered her voice.

"Nobody uses that classroom. It was closed years ago."

Mark, who was sitting beside her, laughed.

"Don't tell me you're already scared of an empty room."

"I'm not scared," Nathan replied. "I just want to know why my number is on the desk."

Mark's smile disappeared.

"Wait. What number?"

Nathan showed them a photograph he had taken.

Chloe stared at the screen.

"My older sister told me something about that room," she said. "She said that if you hear your name after the final bell, you shouldn't answer."

Nathan shook his head. "That's ridiculous."

"Then we can check it after school," Mark suggested.

They waited until the corridors were nearly empty before returning to Room 204.

The door was now locked.

Nathan tried the handle.

Nothing happened.

"See?" Mark said. "Someone probably carved your number as a joke."

Then they heard a bell.

It rang once from inside the classroom.

Chloe stepped backward.

A moment later, a voice spoke from behind the door.

"Attendance."

The friends stopped breathing for a second.

A second voice answered.

"Present."

Then another.

"Present."

The voices continued, one after another, as though a class were taking place on the other side.

Finally, a voice called:

"Nathan Reyes?"

Nathan stared at the door.

He didn't answer.

The voice called his name again.

"Nathan Reyes?"

Mark grabbed his arm.

"Let's go."

They hurried down the corridor, but before reaching the stairs, Nathan heard a final sound from behind them.

A chair scraping across the floor.

Then a quiet voice whispered:

"Absent."

The following morning, Nathan returned to his classroom and found a folded paper on his desk.

Inside was a short message written in black ink.

"Thank you for attending. We will see you tonight."`,
    details: "Author: ESCABUSA\nGenre: Horror"
  },
  

  {  title: "THE DOLL THAT CHANGED ITS FACE",
    genre: "horror",
    image: "Images/doll.png",
    synopsis: "Twelve-year-old Sophie receives an antique porcelain doll from her grandmother. The doll has a blue dress, glass eyes, and a name written on its box: Margaret. Her grandmother warns her never to leave the doll facing a mirror, but Sophie assumes the warning is an old superstition.",
    chapter1: `Chapter 1: Margaret's Smile
    Sophie had never liked dolls with glass eyes.

They always seemed to be looking at something behind her, even when she moved across the room.

So when her grandmother handed her an old porcelain doll wrapped in a blue cloth, Sophie tried not to show her discomfort.

"It's beautiful, Grandma," she said politely.

The doll wore a faded blue dress and had curly brown hair. Its painted smile was small and delicate.

"Her name is Margaret," Grandma said. "Please take good care of her."

Sophie nodded.

Then her grandmother added something strange.

"Never leave her facing a mirror."

Sophie laughed nervously. "Why?"

"Just promise me."

"Okay."

That evening, Sophie placed the doll on her bedroom shelf and went downstairs for dinner.

When she returned, she noticed that the doll was facing the wall.

She frowned.

She was certain she had placed it facing the room.

Perhaps the shelf had been bumped.

She turned the doll around and went to bed.

The next morning, Margaret was sitting on Sophie's desk.

Sophie stopped in the doorway.

"Daniel?"

Her older brother appeared in the hall.

"What?"

"Did you move my doll?"

Daniel looked at the porcelain figure and laughed.

"No. Why would I touch that creepy thing?"

Sophie frowned at him.

"It's not creepy."

"Then why are you standing outside your room like it's going to bite you?"

She picked up the doll and placed it inside her wardrobe.

That afternoon, she went to visit her grandmother and asked about Margaret.

"Who gave you the doll?" Sophie asked.

Grandma looked surprised.

"I told you. She's an old family keepsake."

"But where did she come from?"

Her grandmother paused before answering.

"A friend gave her to me when I was young."

"What happened to your friend?"

"She moved away."

Grandma changed the subject, but Sophie noticed that she seemed uncomfortable.

That night, Sophie placed the doll inside a box and closed the lid.

She was tired of thinking about it.

At exactly midnight, she woke to the sound of something falling.

A soft thud came from her desk.

Sophie switched on her lamp.

The box was still closed.

She opened it carefully.

Margaret lay inside, her blue dress neatly arranged.

Sophie sighed in relief.

Then she noticed the doll's face.

Its painted smile seemed different.

The corners of its mouth had turned downward, making it look almost sad.

Sophie blinked and leaned closer.

Perhaps the light was playing tricks on her.

She closed the box and returned to bed.

The following morning, she discovered a photograph beneath the doll.

It showed her grandmother as a young girl standing beside another child. Between them was a porcelain doll wearing a blue dress.

On the back of the photograph were three words:

"Margaret never left."

Sophie stared at the picture.

Then she looked at the doll.

For the first time, she noticed that the girl in the photograph had exactly the same face.

`,
    details: "Author: ESCABUSA\nGenre: Horror"
  },
  

  {  title: "THE FOREST THAT CALLS YOUR NAME",
    genre: "horror",
    image: "Images/forest.png",
    synopsis: "Sixteen-year-old Leo joins his cousins on a weekend trip to a forest famous for strange sounds and unexplained lights. Local residents warn visitors not to follow voices coming from deep among the trees, but the cousins dismiss the warnings as folklore.",
    chapter1: `Chapter 1: Someone in the Trees
    Leo had been warned about the forest three times before the trip even began.

His aunt warned him during breakfast. His uncle warned him while packing the car. Then an elderly man at the village store leaned across the counter and said, "If the trees call your name, keep walking."

Leo thanked him politely and went outside.

He didn't believe in stories about haunted forests.

The trip was supposed to be simple: one afternoon of hiking, one night at a campsite, and a return home the following morning.

His cousins, Mia and Oliver, were already waiting beside the trail.

"Ready?" Mia asked.

"Born ready," Leo replied.

They followed a narrow path beneath tall trees. Sunlight filtered through the leaves, and birds called from the branches overhead.

For the first hour, everything was ordinary.

Then Leo heard someone say his name.

"Leo."

He turned around.

Mia and Oliver were walking several steps behind him.

"Did you call me?" he asked.

Mia shook her head.

They continued.

A few minutes later, the voice came again.

"Leo."

This time, it sounded closer.

Oliver stopped walking.

"Did you hear that?"

Mia's expression changed.

"Hear what?"

"Someone said Leo's name."

The three cousins stood silently.

The forest seemed unusually quiet.

Then a voice spoke from somewhere among the trees.

"Leo, come here."

It sounded exactly like Oliver.

But Oliver was standing beside him.

"That's not funny," Leo said.

Oliver looked pale.

"I didn't say anything."

Mia pulled out her phone to check the time, but the screen showed no signal.

"We should go back," she said.

Leo wanted to agree, but he noticed something strange beside the trail.

A wooden sign stood between two trees. Its surface was covered in scratches, and beneath the scratches was a single word.

WELCOME.

They had passed that exact sign earlier.

Except earlier, it had said EXIT.

Oliver pointed toward the trail ahead.

"Maybe we're going in circles."

They decided to return to the campsite before it grew dark.

However, after twenty minutes of walking, they found themselves standing beside the same wooden sign.

Leo looked at the ground. Their footprints continued behind them, but the path ahead seemed unfamiliar.

Then Mia noticed a small building hidden between the trees.

It was an old ranger station with broken windows and a rusted door.

Inside, they found a desk, several empty shelves, and a notebook covered in dust.

Leo opened it.

The first page contained a warning written in large letters.

"If you hear a voice calling your name, do not answer. The forest repeats what it learns."

He turned to the next page.

The notebook contained dates, sketches of the trails, and descriptions of strange sounds recorded by a ranger many years earlier.

The final entry had been written in a hurried hand.

"I heard my own voice calling from the northern trail. It told me something I have not done yet."

Leo looked up.

From somewhere outside the station, a voice called his name.

This time, it sounded exactly like him.

"Leo, don't open the door."

His hand froze above the handle.

Because he had not said those words.`,
    details: "Author: ESCABUSA\nGenre: Horror"
  },
  

  {  title: "ROOM 309 IS EMPTY",
    genre: "horror",
    image: "Images/309.png",
    synopsis: "Eighteen-year-old Grace travels with her family to an old seaside hotel for a short vacation. At the reception desk, she notices that the room-number sequence jumps from 308 to 310. When she asks the receptionist about Room 309, the receptionist insists that no such room exists.",
    chapter1: `Chapter 1: The Missing Number
    Grace noticed the missing room number before she even reached the elevator.

"Excuse me," she said to the receptionist. "Where's Room 309?"

The receptionist stopped typing.

"Sorry?"

"The room numbers go from 308 to 310. Is there another hallway?"

The receptionist smiled, but the expression looked forced.

"No, miss. Our hotel has no Room 309."

Grace glanced at the directory beside the desk.

It listed every room on the third floor except one.

"That's strange."

"Old buildings have unusual layouts," the receptionist replied. "Enjoy your stay."

Grace took the elevator to the third floor, where her family had been assigned Room 312.

The corridor was long and quiet. A faded carpet covered the floor, and old paintings hung between the doors.

She counted the rooms as she walked.

She stopped.

Between 308 and 310 was a narrow section of wall covered by a large painting of a ship.

Grace leaned closer.

The wall beneath the painting looked different from the surrounding plaster. There was a thin vertical line, as though a door had been carefully concealed.

She was about to touch it when her mother called from the other end of the corridor.

"Grace! Are you coming?"

She hurried toward her family's room.

That night, Grace couldn't sleep.

The hotel was quiet except for the distant sound of waves. She had almost drifted off when she heard a telephone ringing.

One ring.

Then another.

She sat up.

The sound seemed to come from the wall beside her bed.

Her parents were asleep in the adjoining room, and her phone was on the bedside table.

The ringing stopped.

Grace switched on the lamp and examined the wall.

Nothing unusual.

Then she noticed something beneath the bed.

A small brass key lay on the carpet.

She picked it up.

A metal tag was attached to it.

309.

Grace stared at the key for several seconds before placing it inside her bag.

The next morning, she returned to the reception desk.

"Someone left a key in my room," she explained.

The receptionist's smile disappeared when she saw the number.

"Where did you find this?"

"Under my bed."

The receptionist reached for the key, but Grace pulled her hand back.

"Why does this room number not exist?"

The receptionist looked toward the elevator.

"Please forget about it."

"Why?"

"Because some doors are better left closed."

Before Grace could ask another question, a hotel employee approached them. He was about her age and carried a stack of folded towels.

"My name is Ben," he said quietly. "If you want to know about Room 309, meet me in the lobby at six."

Then he walked away.

Grace watched him disappear behind the reception desk.

That evening, she met Ben beside the hotel library.

He carried an old photograph showing the third-floor corridor decades earlier.

The painting of the ship was visible in the background.

But beside it stood a door.

Above the door was a brass number.

Ben turned the photograph over.

On the back, someone had written:

"The room is empty, but the guest has never checked out."

Grace looked at the picture again.

Then, from somewhere upstairs, a telephone began to ring.

Ben's face went pale.

"That's impossible," he whispered. "We disconnected every phone on the third floor years ago."

The ringing continued.

And from behind the wall, someone knocked three times.`,
    details: "Author: ESCABUSA\nGenre: Horror"
  },
  

  {  title: "THE BOY WHO FAILED AT EVERYTHING (BUT BECAME FAMOUS)",
    genre: "comedy",
    image: "Images/boy.png",
    synopsis: "Leo Santos is a student who seems to have a talent for making everything go wrong. Whenever he joins a school activity, something embarrassing happens. During a science experiment, he accidentally covers his teacher in soap bubbles. During a cooking contest, he makes a cake so hard that his classmates joke it could be used as a building material.",
    chapter1: `Chapter 1: The Most Unlucky Morning
    Leo Santos woke up at exactly seven thirty in the morning.

His school started at seven.

"OH, NO!" Leo shouted as he jumped out of bed.

He rushed to the bathroom, brushed his teeth, and accidentally used his father's shaving cream instead of toothpaste. He didn't notice until he looked in the mirror and wondered why his mouth tasted like a barbershop.

"At least my teeth are clean," he said.

Leo quickly changed into his school uniform. Unfortunately, he put his shirt on backward and wore two different socks. One was blue, and the other had a picture of a smiling banana.

He grabbed his bag and ran downstairs.

"Mom! Where's my breakfast?" he asked.

His mother pointed at the dining table. "There it is."

Leo grabbed a sandwich, took one bite, and immediately made a strange face.

"Mom, why does my sandwich taste like soap?"

His mother looked at the sandwich. "Because that's the sandwich I made for your father to use as a joke. His real breakfast is in the kitchen."

Leo stared at her.

"So I've been eating a prank?"

"Congratulations, son. You've become the victim of your own breakfast."

Leo sighed and ran outside.

At the bus stop, he finally caught the school bus. He jumped inside, gasping for air.

"Good morning, everyone!" he announced.

The students stared at him.

Then someone laughed.

Leo looked down and realized that his school ID was hanging from his pants pocket like a tail.

"Nice fashion statement, Leo!" his best friend, Marco, shouted.

"Thank you. It's the latest design from the Department of Bad Decisions."

Everyone laughed.

When Leo arrived at school, he hurried into the classroom just as their teacher, Mrs. Reyes, was writing on the board.

"Good morning, Ma'am!" Leo said proudly.

Mrs. Reyes turned around. "Leo, why are you late?"

"I had an emergency, Ma'am."

"What kind of emergency?"

"Breakfast attacked me."

The class burst into laughter.

Mrs. Reyes closed her eyes and took a deep breath. "Please sit down before your explanation becomes another subject."

Leo sat beside Marco, who was already trying not to laugh.

Their first subject was science. Mrs. Reyes asked the class to demonstrate how certain liquids reacted when mixed.

"Leo," she said, "would you like to help with the experiment?"

Leo froze.

Whenever a teacher asked him to help, something terrible happened.

"Ma'am, I believe in teamwork," he replied carefully. "Perhaps we should give someone else a chance to shine."

"Wonderful. You can work with Marco."

Marco's smile disappeared.

A few minutes later, Leo poured the wrong liquid into the container. Instead of a small reaction, a mountain of bubbles spilled over the table.

The bubbles covered the experiment, the floor, and unfortunately, Mrs. Reyes's shoes.

The classroom became silent.

Leo slowly raised his hand.

"Ma'am, on the bright side, our classroom now has free bubble wrap."

Mrs. Reyes stared at him.

Marco covered his face with his notebook.

Then, to everyone's surprise, Mrs. Reyes started laughing.

Soon, the entire class was laughing too.

Leo smiled. Maybe being unlucky wasn't so bad after all.

He didn't know that Marco had recorded the entire incident.

And by lunchtime, the video would become the most popular thing in school.

Leo Santos had no idea that his terrible morning was about to change his life.`,
    details: "Author: ESCABUSA\nGenre: Comedy"
  },
  

  {  title: "MY FAMILY IS A CIRCUS",
    genre: "comedy",
    image: "Images/circus.png",
    synopsis: "The Dela Cruz family is famous in their neighborhood, but not for the reasons they would like. Their father believes he is an excellent singer, even though the neighbors disagree. Their mother is a talented cook who sometimes forgets what she is cooking. Their eldest daughter, Mia, is a dramatic teenager who treats every small problem like a television series. Meanwhile, their youngest son, Toto, is a mischievous boy who loves playing harmless pranks.",
    chapter1: `Chapter 1: The Morning Disaster
    Saturday morning was supposed to be peaceful in the Dela Cruz household.

Unfortunately, peace had never been invited to their house.

At exactly six o'clock, Mr. Dela Cruz stood in the living room wearing sunglasses and holding a hairbrush like a microphone.

"Ladies and gentlemen!" he shouted. "Prepare yourselves for the voice of the century!"

His wife, Linda, covered her head with a pillow.

"Prepare yourselves for the complaints of the neighbors," she muttered.

Mr. Dela Cruz began singing loudly.

The family dog, Bruno, howled.

"See?" Mr. Dela Cruz said proudly. "Even Bruno is singing with me!"

"He's not singing, Dad," Mia shouted from upstairs. "He's asking for help!"

Mia, the family's dramatic teenager, came downstairs wearing pajamas and a face that suggested the world had personally offended her.

"Why is everyone so noisy? I was having a beautiful dream!"

"What was your dream?" asked her younger brother, Toto.

"I was a famous actress, receiving an award."

Toto nodded seriously. "Well, congratulations. Your audience is currently suffering."

Mia threw a pillow at him.

Before the argument could continue, their mother entered the living room holding a frying pan.

"Everybody, listen! I have an announcement!"

The family immediately became quiet.

"We are joining the neighborhood talent show next Saturday!"

Everyone stared at her.

Mr. Dela Cruz raised his hand. "Excellent! I shall sing a romantic ballad."

"No!" everyone shouted at once.

He looked offended. "You people don't appreciate art."

Mia stood up dramatically. "I will perform a tragic monologue about a girl whose family refuses to support her dreams."

Toto grinned. "I'll do magic!"

His mother smiled. "That's wonderful, Toto. What trick will you perform?"

Toto pulled a coin from behind his father's ear.

Mr. Dela Cruz gasped. "Where did you get that?"

"Your wallet."

"THAT IS NOT MAGIC! THAT IS THEFT!"

"It's called financial disappearance," Toto explained.

Linda rubbed her forehead. "Can we please choose something that everyone can do together?"

The family thought for a moment.

Then Mr. Dela Cruz snapped his fingers. "I've got it! A musical performance!"

"No!" the others shouted again.

"Fine," he said. "A dance performance."

Mia crossed her arms. "Dad, you dance like a refrigerator falling down the stairs."

At that moment, Mr. Dela Cruz tried to demonstrate a dance move. His foot slipped on Bruno's toy, and he landed safely on the sofa with his legs in the air.

Toto pointed at him.

"Perfect! Dad can perform modern gravity!"

Even Linda couldn't stop laughing.

The family spent the next hour arguing about their talent. Nobody agreed, nobody listened, and Bruno somehow ended up wearing Mia's sunglasses.

Finally, Linda clapped her hands.

"Enough! We will practice after breakfast."

Everyone cheered.

Then she looked toward the kitchen.

"Oh, no. The pancakes!"

Smoke was coming from the kitchen.

The entire family rushed toward it.

Mr. Dela Cruz looked at the black pancakes on the stove.

"Well," he said thoughtfully, "at least breakfast matches our future performance."

Toto picked one up and examined it.

"Mom, are these pancakes or the remains of a car tire?"

Linda grabbed the plate.

"Nobody is eating these!"

The family burst into laughter once again.

Their talent show preparations hadn't even started, and they were already a complete disaster.

`,
    details: "Author: ESCABUSA\nGenre: Comedy"
  },
  

  {  title: "THE WORST ROOMMATES EVER",
    genre: "comedy",
    image: "Images/worst.png",
    synopsis: "Three college students with completely different personalities are assigned to share a small apartment near their university. Alex is a neat and organized student who schedules almost everything. Ben is a lazy but charming gamer who believes that washing dishes is an advanced form of exercise. Carlo is an enthusiastic cook whose experiments often result in strange smells and questionable meals.",
    chapter1: `Chapter 1: Welcome to the Disaster Zone
    Alex arrived at the apartment carrying three suitcases, two boxes, and a folder containing his carefully prepared cleaning schedule.

He looked around the living room and smiled.

"Finally. A peaceful place where I can study."

The door opened behind him.

Ben walked inside carrying a gaming console, a pillow, and a bag of chips.

"Hey, roommate! Which room has the best Wi-Fi?"

Alex blinked.

"Shouldn't you ask which room has the best ventilation or lighting?"

Ben looked confused.

"Does ventilation improve internet speed?"

Before Alex could answer, another person entered the apartment.

Carlo carried a large cooking pot, a bag of onions, and something that smelled suspiciously like burnt cheese.

"Good news, everyone!" Carlo announced. "I brought food!"

Alex cautiously looked inside the pot.

"What is it?"

"Special fried rice."

"Why is it purple?"

Carlo smiled proudly. "Innovation."

Ben took a spoonful, chewed slowly, and stared at the ceiling.

"Wow."

Carlo grinned. "You like it?"

Ben swallowed.

"I'm trying to remember my life before this moment."

Alex immediately took out his cleaning schedule.

"Okay, before we start living together, we need rules."

Ben dropped onto the sofa.

"Rule number one: never disturb someone during a gaming session."

"Rule number two," Carlo added, "never criticize the chef."

Alex sighed. "Rule number three: everyone must wash their own dishes."

The room fell silent.

Ben looked at Carlo.

Carlo looked at Ben.

Then both looked at Alex as if he had announced the end of civilization.

"Every day?" Ben asked.

"Yes."

"Even when we're tired?"

"Yes."

"Even during exam week?"

"Especially during exam week."

Ben slowly turned toward Carlo.

"I think we need a new roommate."

Their first argument lasted twenty minutes. Their second argument lasted thirty minutes. Their third argument began when Carlo discovered that Ben had eaten the last piece of chicken.

"BEN!" Carlo shouted. "WHERE IS MY CHICKEN?"

Ben kept his eyes on the television.

"What chicken?"

"The chicken I put in the refrigerator!"

"Oh, that chicken."

"YES, THAT CHICKEN!"

Ben paused the game.

"I thought it was community property."

Carlo stared at him.

"Community property? Did the chicken attend our orientation?"

Alex tried to calm them down.

"Everyone, please. We can solve this peacefully."

Carlo pointed at Ben. "He ate my lunch!"

Ben pointed at Carlo. "He made the rice purple!"

Alex opened his mouth to respond, but a terrible smell suddenly filled the room.

They all turned toward the kitchen.

Carlo's pot was bubbling.

"Oh," Carlo said. "I forgot I was cooking something else."

Smoke began drifting from the stove.

Alex grabbed a kitchen towel. Ben ran to open the window. Carlo rushed toward the pot, shouting instructions nobody understood.

Within seconds, all three roommates were running around the kitchen like contestants in a cooking show hosted by a confused tornado.

Finally, the stove was turned off, the window was open, and the apartment was safe.

Alex sat down, exhausted.

"We have been roommates for forty-five minutes."

Ben nodded.

"And we have already experienced three disasters."

Carlo smiled.

"At least we're making memories!"

Alex looked at the purple rice, the smoky kitchen, and the empty chicken container.

Then he opened his cleaning schedule and wrote a new rule.

RULE NUMBER FOUR: CARLO IS NOT ALLOWED TO EXPERIMENT WITH FOOD WITHOUT ADULT SUPERVISION.

Carlo read it and gasped.

"Adult supervision? We're college students!"

Ben patted his shoulder.

"Don't worry, Chef. We'll always remember your sacrifice."

And that was how the worst roommates in the university began their unforgettable year together.`,
    details: "Author: Rhealyn Robelles\nGenre: Comedy"
  },
  

  {  title: " THE PRINCESS WHO HATED PRINCE",
    genre: "comedy",
    image: "Images/princess.jpeg",
    synopsis: "Princess Amelia lives in a kingdom where every princess is expected to be graceful, polite, and ready to marry a handsome prince. Unfortunately, Amelia has other plans. She loves inventing strange machines, climbing trees, and making jokes during royal ceremonies.",
    chapter1: `Chapter 1: A Princess With a Terrible Idea
    Princess Amelia was supposed to be practicing her royal wave.

Instead, she was hanging upside down from a tree.

"Your Highness!" shouted her royal adviser, Sir Bernard. "Please come down immediately!"

"Why?" Amelia asked.

"Because princesses do not hang from trees!"

Amelia considered this.

"Then how do they get the best view of the kingdom?"

Sir Bernard opened his mouth, closed it, and decided that retirement sounded wonderful.

Amelia climbed down and brushed leaves from her royal dress.

"Sir Bernard, do you know what I want to be when I grow up?"

"A wise and respected queen?"

"An inventor!"

"Ah."

"An inventor who builds a machine that folds laundry, cooks breakfast, and makes annoying people disappear."

Sir Bernard frowned.

"Disappear where, Your Highness?"

"Somewhere with excellent customer service."

Before he could respond, a royal messenger hurried into the garden.

"Princess Amelia! The king requests your presence in the throne room!"

Amelia sighed.

"If this is about the royal wave again, tell him my hand is on vacation."

"Your Highness!"

"Fine, fine. I'm coming."

Inside the throne room, King Albert sat beside Queen Margaret. They both wore expressions that suggested they had been discussing Amelia's future for several hours.

"Amelia," the king began, "you are almost old enough to take on greater royal responsibilities."

"Wonderful! Can I become the kingdom's official inventor?"

"No."

"The royal comedian?"

"No."

"The person who decides which desserts we eat at dinner?"

The queen hesitated.

"That position is currently under discussion."

Amelia smiled. "Finally, a promising career."

The king cleared his throat.

"We have decided to organize a royal ball. Several princes from neighboring kingdoms will attend."

Amelia stared at him.

"Why?"

"To help you meet a suitable prince."

"I already know several suitable people."

The queen smiled hopefully. "You do?"

"Yes. The royal gardener is kind, the palace chef makes excellent pastries, and the librarian has never once interrupted my experiments."

The king rubbed his forehead.

"Amelia, we mean a prince."

"That seems unnecessarily specific."

The queen sighed. "You must at least meet the guests."

Amelia thought for a moment.

Then a mischievous smile appeared on her face.

"Of course! I'll welcome every prince properly."

The king looked relieved.

"Really?"

"Absolutely. I'll make sure they have an unforgettable visit."

That afternoon, Amelia went to her workshop and began building a strange machine using gears, springs, a bell, and three kitchen spoons.

Her assistant, Pip, stared at the invention.

"What does it do?"

Amelia tightened a screw.

"That depends."

"On what?"

"Whether it works."

Pip slowly stepped backward.

"Should we test it?"

"Excellent idea!"

Amelia pulled a lever.

The machine rattled, shook, and released a loud burst of confetti. A moment later, a spring-loaded cushion shot across the workshop and landed directly on Pip's head.

Silence followed.

Then Pip removed the cushion.

"Your Highness, I think your machine is broken."

Amelia examined the invention.

"Broken? Nonsense. It has successfully launched a cushion."

"But why?"

Amelia grinned.

"Because the princes arrive tomorrow, and I want to see which ones can survive a little surprise."

Pip stared at her.

"You're going to test the princes with a cushion machine?"

"Not just a cushion machine."

Amelia pulled a curtain aside.

Behind it stood three more inventions, each more ridiculous than the last.

Pip covered his face.

"May the kingdom have mercy on us."

Amelia laughed.

The royal ball hadn't even begun, and the princess was already planning the most ridiculous welcome in the history of the kingdom.`,
    details: "Author: ESCABUSA\nGenre: Comedy"
  },
  

  {  title: "THE DAY EVERYONE LOST THEIR BRAINS",
    genre: "comedy",
    image: "Images/Comedy5.png",
    synopsis: "At Maplewood High School, an ordinary Monday turns into an extraordinary disaster when students begin acting strangely. The class president forgets how to lead a meeting, the school athlete becomes terrified of a volleyball, and the strictest teacher suddenly starts telling jokes during mathematics class.",
    chapter1: `Chapter 1: Monday Has Officially Gone Wrong
    Nina knew something was wrong the moment she entered Maplewood High School.

Usually, the hallway was filled with students rushing to class, arguing about homework, or trying to finish assignments five minutes before the bell.

Today, everyone was standing perfectly still.

A student was staring at his backpack as if it contained the secrets of the universe.

Another was trying to open a classroom door by pushing the wall beside it.

Near the stairs, the school's star basketball player was hiding behind a potted plant.

Nina approached him.

"Josh, what are you doing?"

Josh slowly peeked out from behind the plant.

"The volleyball is watching me."

Nina looked at the gymnasium.

"That's a basketball."

Josh gasped.

"Even worse. It has friends!"

Nina decided not to ask any more questions.

She hurried toward her classroom, where Ella was standing on a chair and wearing a paper hat.

"What happened to you?" Nina asked.

Ella pointed dramatically at the whiteboard.

"The evidence is everywhere."

Nina looked at the board.

Someone had written:

TODAY'S LESSON: HOW TO SURVIVE MONDAY.

Below it was a drawing of a potato wearing sunglasses.

"That isn't evidence," Nina said.

"It's a clue."

"A clue to what?"

Ella lowered her voice.

"Someone has replaced the entire school with confused people."

Nina stared at her.

"You're a confused person, too."

Ella nodded. "Exactly. That makes me an expert."

Before Nina could respond, their mathematics teacher, Mr. Santos, entered the classroom.

Everyone immediately sat down.

Mr. Santos was famous for being serious. He never smiled, never joked, and once gave a student extra homework for laughing at the word "banana."

Today, however, he walked to the front of the room wearing a colorful party hat.

"Good morning, everyone!" he announced cheerfully.

The students stared at him.

"Today, we will study algebra," he continued. "But first, who here likes jokes?"

Nobody raised a hand.

Mr. Santos laughed at his own question.

"That's okay! My jokes are like fractions. Some people understand them, but most people just want to leave."

Nina slowly turned toward Ella.

Ella whispered, "This is serious."

"He's telling jokes, Ella."

"Exactly. The situation is worse than I thought."

Mr. Santos wrote an equation on the board.

"Now, who can solve this?"

A student raised his hand.

"Sir, I think the answer is twelve."

"Wonderful!" Mr. Santos said. "You have won absolutely nothing, but you may sit down."

The class gasped.

Their teacher had officially become a comedian.

At lunchtime, the confusion grew worse.

The school principal was spotted wearing roller skates in the cafeteria. The librarian was singing loudly while organizing books. Even the school guard was asking students to show their homework before entering the gate.

Nina, Josh, and Ella gathered around a table.

"We need to find out what's happening," Nina said.

Josh opened his lunchbox.

"Can we investigate after I eat?"

"No," Ella replied. "Every second counts."

Josh took a bite of his sandwich.

"Then count faster."

Nina ignored him and placed a notebook on the table.

"We'll collect clues. First, we need to find out when this started."

Ella nodded and wrote something down.

"Suspect number one: Monday."

"Monday isn't a person," Nina said.

"That's exactly what Monday wants us to believe."

Josh nearly choked laughing.

Suddenly, the school loudspeaker crackled.

A strange voice announced, "Attention, students and teachers. Please report to the gymnasium immediately. Bring your notebooks, your lunch, and any remaining common sense."

The loudspeaker went silent.

Everyone in the cafeteria looked at one another.

Nina slowly stood up.

"Okay. That was definitely not a normal announcement."

Ella grabbed her notebook.

Josh picked up his sandwich.

Together, the three friends headed toward the gymnasium, determined to uncover the mystery.

None of them knew what awaited them inside.

But one thing was certain.

Monday was about to become the strangest day in Maplewood High School history.`,
    details: "Author: ESCABUSA\nGenre: Comedy"
  },
  

  {  title: "THE KINGDOM OF THE FORGOTTEN STARS",
    genre: "fantasy",
    image: "Images/fantasy1.jpg",
    synopsis: "In the magical kingdom of Astravia, stars are more than lights in the sky. Each star holds a memory, a dream, or a special power belonging to the people below. For centuries, the kingdom has been protected by the Star Keepers, a group of powerful guardians who maintain the balance between magic and darkness.",
    chapter1: `Chapter 1: The Night the Stars Disappeared
    Luna Everhart had always believed that the stars were the most beautiful things in the world.

Every night, she climbed onto the roof of her grandmother's cottage, wrapped herself in a thick blanket, and watched the sky. While the other children in Willowbrook practiced their magic, Luna preferred to imagine what it would be like to touch the stars with her own hands.

Unfortunately, magic had never liked Luna.

At the age of six, she had tried to make a flower bloom. Nothing happened.

At the age of ten, she had attempted to summon a tiny ball of light. Instead, she sneezed and knocked over a bucket of water.

Now, at sixteen, Luna had accepted that she might be the only person in Astravia who could not perform even the simplest spell.

"Still talking to the sky?" her grandmother asked from the window.

Luna smiled. "The stars are better listeners than people."

"Perhaps because they don't have to remind you to clean your room."

"Grandmother!"

Her grandmother laughed and returned inside.

Luna leaned back and looked upward. Thousands of stars shimmered above the village, forming patterns that ancient astronomers had named after dragons, warriors, and forgotten gods.

Then one star disappeared.

Luna sat up.

A second star vanished.

Then a third.

Within moments, the sky began losing its lights as if an invisible hand were erasing them one by one.

"What is happening?" Luna whispered.

A cold wind swept across the roof. The trees stopped moving, the crickets fell silent, and every window in the village went dark.

Suddenly, Luna felt a sharp warmth on her wrist.

She looked down.

A silver symbol was glowing on her skin. It resembled a small star surrounded by seven curved lines.

Before she could call for help, a voice echoed inside her mind.

The final Star Keeper has awakened.

Luna stumbled backward.

"Who's there?"

The voice answered, ancient and distant.

Find the seven stars before the last light fades.

A flash of silver illuminated the roof.

When Luna opened her eyes, a small red fox was sitting beside her. Its fur glowed faintly, and its golden eyes were fixed on the symbol on her wrist.

"Well," the fox said, "this is inconvenient."

Luna stared at it.

"You can talk!"

The fox tilted its head. "And you can state the obvious. It seems we both have talents."

Luna pinched her arm.

"Ouch!"

"Good," said the fox. "You're awake. I was worried I had been assigned to a dream."

"Who are you?"

"Ember. Magical messenger, occasional troublemaker, and currently the only creature in this village who knows what that symbol means."

Luna looked at her wrist again.

"What does it mean?"

Ember's playful expression disappeared.

"It means the stars are being stolen. And if the last one disappears, the magic protecting this kingdom will vanish with it."

Luna swallowed nervously.

"But I'm not a wizard. I can't even light a candle."

"Then it's fortunate that the universe has a terrible sense of humor."

Before Luna could reply, the cottage door burst open. Her grandmother rushed onto the roof, carrying an old wooden box.

She looked at Ember, then at the glowing mark on Luna's wrist.

For the first time in Luna's life, her grandmother appeared frightened.

"I had hoped this day would never come," she whispered.

She opened the box and removed a silver pendant shaped like a star.

"Luna, there is something I should have told you long ago."

Luna stared at the pendant.

"What is it?"

"Your mother was not an ordinary woman. She was the last guardian of the stars before you."

Luna felt the world shift around her.

"My mother?"

Her grandmother placed the pendant in her hand.

"Your journey begins tonight. And you must promise me one thing."

"What?"

"Never trust anyone who claims the stars belong to them."

Far beyond the village, a dark tower appeared on the horizon. At its highest window, a figure in a black cloak watched the final stars disappear.

The figure smiled.

"The Star Keeper has returned."

And somewhere in the darkness, something ancient began to awaken.`,
    details: "Author: ESCABUSA\nGenre: Fantasy"
  },
  

  {  title: "THE GIRL WHO COULD TALK TO DRAGONS",
    genre: "fantasy",
    image: "Images/fantasy2.jpg",
    synopsis: "In the kingdom of Drakemore, dragons are believed to be dangerous creatures that disappeared centuries ago. The royal family teaches that dragons once threatened humanity, and that the legendary Dragon Riders saved the kingdom by driving them beyond the mountains..",
    chapter1: `Chapter 1: The Voice Inside the Cave
    Mira Ashford was supposed to be gathering herbs.

Her grandmother had given her a basket and a simple instruction: collect moonleaf from the forest and return before sunset.

Mira had agreed immediately.

She had then spent the next two hours chasing a butterfly, climbing a tree, and investigating a strange footprint near the river.

The basket was still empty.

"Grandmother is going to turn me into soup," Mira muttered.

A strange sound came from the rocks nearby.

It was a soft, trembling cry.

Mira stopped walking.

"Hello?"

The sound came again.

She followed it to a narrow cave hidden behind a curtain of ivy. Inside, something moved in the darkness.

Mira carefully stepped forward.

There, curled beside a pile of stones, was a small dragon.

Its scales were deep blue, its wings were folded awkwardly, and a golden horn curled above each eye. One of its wings appeared to be hurt.

Mira forgot how to breathe.

Dragons were supposed to be extinct.

Everyone knew that.

The royal teachers said the last dragon had vanished hundreds of years ago. The village elders said that dragons were monsters. Even Mira's grandmother refused to discuss them.

Yet a dragon was sitting directly in front of her.

The creature lifted its head.

"Finally," it groaned. "Someone has arrived."

Mira screamed.

The dragon screamed louder.

They stared at each other.

Then the dragon frowned.

"Why are you screaming? You're the one with the enormous face."

Mira pointed at it.

"You can talk!"

The dragon blinked. "You can hear me!"

"Of course I can hear you!"

"Then why are you shouting?"

"BECAUSE YOU'RE A DRAGON!"

The dragon considered this for a moment.

"Fair point."

Mira slowly lowered her hand.

"What is your name?"

"Flint. Youngest dragon of the Azure Mountain clan, excellent flyer, future ruler of the northern skies."

He tried to stand, stumbled, and landed on his belly.

"Currently experiencing a minor inconvenience."

Mira knelt beside him.

"Your wing is hurt."

"Excellent observation. You should become a royal healer."

She ignored his sarcasm and carefully examined the injured wing. A thin silver cord was wrapped around it, glowing with strange symbols.

Flint immediately pulled away.

"Don't touch that!"

"Why?"

"It's enchanted. Whoever tied it wants me to stay weak."

Mira frowned.

"Who would do that?"

Flint lowered his voice.

"People from the kingdom."

Mira stepped back.

"But dragons disappeared centuries ago."

"No," Flint replied. "We hid."

"Why?"

"Because humans broke the agreement."

Before Mira could ask another question, footsteps echoed outside the cave.

Flint's eyes widened.

"They've found me."

Mira heard voices approaching.

"Search the rocks!" someone shouted. "The blue dragon cannot have gone far!"

Mira looked at the cave entrance, then at Flint.

She had never fought anyone in her life. She had never even won an argument with her grandmother about bedtime.

But she knew she could not leave the dragon behind.

"Can you walk?" she whispered.

"Can you fly?" Flint asked.

"No."

"Then we're both disappointing today."

Mira grabbed a loose blanket from her basket and covered Flint's blue scales. Then she pushed a pile of branches toward the entrance, hiding the cave's opening.

The footsteps grew louder.

A man appeared outside, wearing silver armor and carrying a spear marked with the royal crest.

"Girl!" he called. "Have you seen a dragon?"

Mira forced herself to smile.

"A dragon? Here? No, sir. I've only seen a very large lizard."

The soldier narrowed his eyes.

"Large lizard?"

"Extremely large. Very shy. Terrible manners."

Behind the blanket, Flint made a small snorting sound.

Mira quickly coughed to cover it.

The soldier stared at her for a long moment before moving toward the river.

When the footsteps finally faded, Mira released a breath she had been holding.

Flint pushed the blanket away.

"You lied to a royal guard."

"I noticed."

"That was either very brave or very foolish."

"Can it be both?"

Flint smiled, revealing tiny pointed teeth.

"Perhaps you really are a Dragon Speaker."

Mira froze.

"A what?"

Flint looked at the glowing silver cord around his wing.

"Someone who can hear us, understand us, and awaken the magic humans tried to erase."

Outside the cave, a distant roar rolled across the mountains.

Flint turned toward the sound.

"My family is calling for me."

Mira picked up her basket.

"Then let's find them."

Flint looked at her with surprise.

"You would help a dragon?"

Mira smiled.

"I've spent my whole life wanting to meet one. I'm not going to waste the opportunity."

Together, the girl and the dragon stepped into the forest.

Neither knew that their meeting would change the fate of two entire worlds.`,
    details: "Author: ESCABUSA\nGenre: Fantasy"
  },
  

  {  title: "THE ACADEMY OF IMPOSSIBLE MAGIC",
    genre: "fantasy",
    image: "Images/fantasy3.jpg",
    synopsis: "The Academy of Impossible Magic is a hidden school where young witches, wizards, and magical creatures learn to control extraordinary powers. Students can manipulate time, summon mythical animals, and travel through enchanted portals. However, the academy has one rule: every student must demonstrate a magical ability before being accepted..",
    chapter1: `Chapter 1: The Letter That Bit Back
    Theo Vale was having a perfectly ordinary Tuesday until his mailbox attacked him.

He had just returned from the bakery when a cream-colored envelope shot out of the mailbox and landed on his nose.

"Ouch!"

The envelope flapped its corners like wings.

Then it bit his finger.

"HEY!"

Theo dropped the bread.

The envelope landed on the pavement and cleared its nonexistent throat.

"Mr. Theodore Vale," it announced in a tiny, formal voice, "you are hereby invited to attend the Academy of Impossible Magic."

Theo stared at it.

Then he stared at the mailbox.

Then he stared at the envelope again.

"I think I've finally lost my mind."

"That is a common first reaction," the envelope replied. "The second is usually screaming."

Theo screamed.

"Thank you," said the envelope. "Your response has been recorded."

It unfolded itself, revealing a letter written in shimmering purple ink.

Dear Mr. Vale,

We are pleased to inform you that you have been accepted into the Academy of Impossible Magic. Your arrival is expected tomorrow morning. Please bring one suitcase, three pencils, and a willingness to accept that reality is often negotiable.

Sincerely,

Professor Wren, Headmaster

Theo read the letter three times.

He had never attended a magic school. He had never cast a spell. The most unusual thing he had ever done was accidentally microwave a spoon.

He ran inside.

"Grandma!"

His grandmother appeared in the kitchen, holding a wooden spoon.

"Why are you shouting?"

"My mailbox sent me a letter!"

She looked at the envelope.

Then she sighed.

"Ah. So it has finally arrived."

Theo slowly lowered the letter.

"You knew about this?"

His grandmother placed the spoon on the table.

"Your grandfather was a magician. A very unusual one."

"Why didn't you tell me?"

"Because you once tried to turn a potato into a dog."

"I was eight!"

"You also gave the potato a name."

Theo crossed his arms.

"His name was Sir Barkington, and he deserved better."

His grandmother laughed and handed him an old leather suitcase.

"Pack your things. Your school is waiting."

The next morning, Theo followed the instructions on the letter and stood beside an old clock tower in the center of town.

There was no school nearby.

There wasn't even a road.

He checked the letter again.

At precisely eight o'clock, knock three times on the clock tower and say, 'I am ready for the impossible.'

Theo looked around to make sure nobody was watching.

Then he knocked.

Once.

Twice.

Three times.

"I am ready for the impossible."

Nothing happened.

Theo frowned.

"Perhaps I should have said it with more confidence."

He knocked again.

"I AM READY FOR THE IMPOSSIBLE!"

The clock tower sneezed.

Its enormous hands spun backward, the bricks shimmered, and a doorway appeared where the stone wall had been.

Beyond the doorway stood a magnificent castle floating above a sea of clouds. Towers twisted in impossible directions, staircases climbed into the sky, and tiny dragons carried books between the windows.

Theo's mouth fell open.

A girl with silver glasses stepped through the doorway.

"First year?" she asked.

Theo nodded.

"I'm Iris."

"Theo."

She glanced at his suitcase.

"What's your specialty?"

"I can make toast."

Iris waited.

"That's it?"

"Sometimes it burns."

She smiled politely.

"Well, perhaps you're secretly talented."

They entered the academy together.

Inside, a professor was demonstrating a spell that transformed a teacup into a rabbit. Another student accidentally turned his shoes into singing fish.

Theo watched in amazement.

Then a small bell rang.

"New students!" announced a tall wizard wearing a green robe. "Please gather for your ability assessment."

Theo swallowed nervously.

One by one, students demonstrated their powers. Iris created three perfect copies of herself. A boy made the ceiling rain harmless blue flowers. Another student summoned a tiny dragon that immediately stole his lunch.

Finally, the professor called Theo's name.

"Theodore Vale."

Theo stepped forward.

"Show us what you can do."

He stared at the wooden table in front of him.

"I don't know any spells."

"Then simply focus on something impossible."

Theo closed his eyes.

He imagined a teacup turning into a frog.

Nothing happened.

He imagined the frog singing.

Still nothing.

Then he imagined a frog wearing a crown and riding a bicycle.

The room flashed white.

A loud pop echoed through the hall.

Suddenly, the wooden table had become a giant purple frog wearing a golden crown. It was riding a tiny bicycle and singing an opera song.

Everyone stared.

The frog bowed.

Theo opened one eye.

"Oh."

The professor slowly removed his glasses.

"Remarkable."

Iris grinned.

"I think you've found your specialty."

The frog crashed into a pillar.

Theo winced.

"Can I choose a different specialty?"

The professor looked at the frog, which was now arguing with the bicycle.

"No, Mr. Vale. I believe the specialty has chosen you."

Far below the academy, behind a sealed stone door, something stirred.

A forgotten spell had just awakened.

And the academy's oldest secrets were about to return.`,
    details: "Author: ESCABUSA\nGenre: Fantasy"
  },
  

  {  title: "THE PRINCE OF THE SHADOW MOON",
    genre: "fantasy",
    image: "Images/fantasy4.jpg",
    synopsis: "The kingdom of Noctara exists beneath a mysterious moon that glows silver during the day and black during the night. Its people believe the moon protects them from ancient creatures that once ruled the world. For generations, the royal family has guarded a powerful artifact known as the Shadow Crown..",
    chapter1: `Chapter 1: The Shadow That Moved First
    Prince Adrian hated birthday celebrations.

Every year, the royal palace organized an enormous banquet filled with musicians, expensive decorations, and speeches about responsibility.

Every year, Adrian wished he could disappear.

"Your Highness, please stand straight," said his tutor, Master Ellion.

Adrian straightened his back.

"Smile."

He smiled.

"Less like you're planning an escape."

Adrian stopped smiling.

Master Ellion sighed.

"Sometimes I wonder why the king assigned me to teach you."

"Because my older brother frightened the previous tutor?"

"That is not the point."

Adrian glanced at the enormous clock above the throne room. In ten minutes, the king would announce Adrian's official entrance into adulthood.

In twelve minutes, Adrian planned to escape through the kitchen.

In fifteen minutes, he hoped to be somewhere with no music, no speeches, and no royal relatives asking whether he had found a suitable princess.

"Your Highness!" a servant called. "The ceremony is beginning."

Adrian followed Master Ellion into the throne room.

Hundreds of guests filled the hall. Golden banners hung from the ceiling, and silver candles floated above the tables. At the far end of the room sat King Lucien, wearing the ancient Shadow Crown.

The crown's black stones glimmered like tiny pieces of midnight.

"Today," the king announced, "we celebrate my son's eighteenth birthday and his place in the royal family of Noctara."

The guests applauded.

Adrian bowed.

Then he noticed something strange.

His shadow was facing the wrong direction.

Everyone else's shadows stretched toward the candles. Adrian's shadow pointed toward the throne.

He looked down.

The shadow raised its head.

Adrian froze.

The shadow lifted one hand.

Adrian kept both of his hands at his sides.

Slowly, the shadow turned its face toward him.

A voice whispered from the floor.

The crown must not remain with the king.

Adrian stumbled backward.

Master Ellion caught his arm.

"Are you unwell?"

"My shadow just spoke to me."

Master Ellion's expression changed.

"What did you say?"

Before Adrian could answer, every candle in the room went out.

The guests gasped.

A cold wind swept through the hall. The windows rattled, and the silver moonlight outside turned black.

When the candles relit, the king was standing.

The Shadow Crown had vanished from his head.

"Seal the palace!" he shouted. "Nobody leaves!"

Guards rushed toward the doors. Guests began arguing, and a royal musician fainted directly into a bowl of fruit.

Adrian barely noticed.

His shadow was standing upright beside him.

It looked exactly like him, except its eyes glowed silver.

"Who are you?" Adrian whispered.

"I am the part of you that remembers."

"Remembers what?"

"Your kingdom's first lie."

Adrian stared at it.

"I don't have time for mysterious riddles."

"You have less time than you think."

The shadow pointed toward a narrow doorway behind the throne.

"Find the moon chamber. There you will discover why the crown disappeared."

Adrian glanced at the guards.

"And if I don't?"

The shadow's silver eyes dimmed.

"Then the black moon will rise, and everything your family has built will fall."

The shadow collapsed back onto the floor.

Adrian stood motionless for a moment.

Then Master Ellion grabbed his shoulder.

"Your Highness, the king requires you."

Adrian looked toward his father, who was giving orders to the royal guards.

He could tell the king was afraid.

Not angry.

Not confused.

Afraid.

For the first time in his life, Adrian understood that his family might be hiding something far more dangerous than a missing crown.

He slipped through the narrow doorway while the guards were distracted.

Behind him, the throne room descended into chaos.

Ahead of him, a staircase spiraled down into darkness.

At the bottom, a silver door slowly opened.

A girl stood on the other side, holding a lantern filled with moonlight.

"You took your time, Prince Adrian," she said.

Adrian frowned.

"Do I know you?"

"No."

"Then how do you know my name?"

The girl smiled.

"Because your shadow has been looking for me for eighteen years."

And somewhere above the palace, the moon turned completely black.

 `,
    details: "Author: ESCABUSA\nGenre: Fantasy"
  },
  

  {  title: "THE SECRET GARDEN OF IMMORTALS",
    genre: "fantasy",
    image: "Images/fantasy5.jpg",
    synopsis: "Hidden behind an abandoned stone wall lies the Garden of Immortals, a magical place where plants can remember the past, flowers can whisper secrets, and trees grow from the dreams of forgotten people. According to an old village legend, the garden grants eternal life to anyone who discovers its heart.",
    chapter1: `Chapter 1: The Flower That Knew Her Name
    Elara Finch had a secret.

She talked to plants.

Not in the ordinary way people spoke to their gardens while watering flowers. Elara whispered to them, asked them questions, and sometimes argued with them when they refused to grow.

Her uncle called it a harmless habit.

The village children called it strange.

The plants, however, seemed to enjoy her company.

"Good morning, Mr. Thorn," Elara said, watering a small rosebush.

A branch moved slightly.

"Yes, I know you're growing slowly. But complaining won't help."

The rosebush dropped a leaf onto her shoe.

Elara narrowed her eyes.

"That was rude."

She was kneeling beside the garden wall when she heard a soft rustling sound behind the oldest tree.

At first, she thought it was a rabbit.

Then she noticed a silver glow between the roots.

Elara pushed aside the leaves and discovered a small key.

It was made of a strange metal that felt warm in her hand. Tiny vines were engraved along its handle, and a green stone shone at its center.

She had never seen anything like it.

"Uncle?" she called.

No answer.

She turned the key over.

A tiny voice whispered from the ground.

"About time."

Elara nearly dropped it.

"Who said that?"

The voice came again.

"Down here, obviously."

A small mushroom beside her boot had developed a face.

Elara stared at it.

The mushroom yawned.

"Could you stop staring? It's making me uncomfortable."

Elara stood up so quickly that she bumped her head against a branch.

"Ouch!"

The mushroom laughed.

"Excellent. The chosen gardener has arrived, and she has already lost a battle against a tree."

"I'm not a chosen anything!"

"Of course not. And I'm a royal carriage."

Elara looked around to make sure she was alone.

Then she leaned closer to the mushroom.

"What does this key open?"

The mushroom's tiny face became serious.

"The gate."

"What gate?"

"The gate to the Garden of Immortals."

Elara had heard the story since childhood. According to village legend, a secret garden existed beyond an abandoned stone wall. Its flowers never withered, its trees remembered ancient kings, and its heart could grant eternal life.

Most people believed it was a fairy tale.

Elara had always hoped it was real.

"Where is the gate?" she whispered.

The mushroom pointed toward the old stone wall.

"There."

Elara looked at the wall. It was covered in ivy, moss, and decades of neglect. There was no door, no handle, and certainly no sign of a magical garden.

She pressed the silver key against a small crack between the stones.

The wall trembled.

Green light spread across its surface, revealing the outline of a hidden doorway. With a deep rumble, the stones separated.

Beyond the opening was a garden unlike anything Elara had ever imagined.

Silver trees stretched toward a violet sky. Glowing flowers floated above clear streams. Butterflies carried tiny sparks of light on their wings, and golden vines curled around marble statues.

At the center of the garden stood an enormous tree with branches shaped like open hands.

Elara stepped through the doorway.

The gate closed behind her.

"Well," she whispered, "this is definitely not in the gardening manual."

A white rabbit hopped onto a nearby stone.

It wore a tiny blue coat and carried a miniature walking stick.

"You're late," it announced.

Elara blinked.

"Everyone keeps saying that today."

The rabbit adjusted its coat.

"My name is Thistle, official guardian of the eastern garden, keeper of the third gate, and supervisor of visitors who lack proper instructions."

"You're a rabbit."

"And you're a human. We all have our burdens."

Elara looked toward the enormous tree.

"What is this place?"

Thistle's ears lowered.

"The Garden of Immortals. Or what remains of it."

Elara noticed that several flowers near the stream had turned gray. The glowing butterflies were disappearing, and cracks had formed along the trunk of the great tree.

"What happened?"

Thistle looked at the silver key in her hand.

"The garden's heart has been stolen. Without it, every living thing here will slowly lose its magic."

"Who stole it?"

The rabbit hesitated.

"Someone who believes immortality belongs to them alone."

A quiet voice came from behind the tree.

"That isn't the whole truth."

Elara turned.

A boy about her age stepped out from the shadows. His clothes were old-fashioned, and a thin silver mark crossed his palm.

He looked at Elara as though he had been waiting for her for a very long time.

"Who are you?" she asked.

The boy frowned.

"I don't remember."

Thistle tapped his walking stick against the ground.

"That's the problem. He has forgotten everything except one thing."

Elara waited.

The boy looked at the enormous tree.

Then he spoke.

"The garden is not supposed to live forever."

At that moment, every flower in the garden turned toward Elara.

The great tree opened its glowing branches.

And a voice older than the kingdom whispered her name.

Elara Finch, the garden remembers you.`,
    details: "Author: ESCABUSA\nGenre: Fantasy"
  },
  

  {  title: "THE ISLAND THAT FORGOT US",
    genre: "survival",
    image: "Images/survival1.jpg",
    synopsis: "Sixteen-year-old Ethan Cole and his classmates are traveling by boat for a school adventure when a sudden storm forces them to abandon their planned route. After the boat is damaged, Ethan, his best friend Noah, and three other students find themselves stranded on an unfamiliar island.",
    chapter1: `Chapter 1: The Last Boat Ride
    Ethan Cole had never liked boats.

He didn't mind the ocean when he was standing safely on the beach, but the moment his feet left solid ground, his imagination began inventing every possible disaster.

Unfortunately, his school had organized an educational trip to a small island known for its beautiful beaches and wildlife.

"Relax," Noah, his best friend, said as he leaned against the railing. "What's the worst that could happen?"

Ethan looked at the dark clouds gathering in the distance.

"Please never say that again."

Noah laughed. "You're acting like we're sailing into the end of the world."

Their teacher, Mr. Harris, called everyone toward the center of the boat.

"Students, please remain seated. The weather forecast says we may experience some rain, but our captain is familiar with these waters."

Ethan sat down immediately.

"Good. Excellent. I love familiar waters."

A few minutes later, the wind grew stronger.

The boat began rocking from side to side. Students stopped taking pictures and started holding their bags. The captain hurried toward the steering cabin while Mr. Harris tried to keep everyone calm.

Then the radio crackled.

"Captain, this is the coastal station. A storm is moving toward your current location. Please change your course immediately."

The captain adjusted the controls.

But the wind was already pushing the boat away from its planned route.

A wave struck the side of the vessel, sending water across the deck.

Someone screamed.

"Everyone inside!" Mr. Harris shouted.

Ethan grabbed Noah's arm as they rushed toward the cabin. Another wave rocked the boat, and a loud cracking sound came from beneath their feet.

The captain shouted something that Ethan couldn't understand.

Then the engine stopped.

For a moment, the only sounds were the wind and the pounding rain.

Noah swallowed nervously.

"Okay," he said. "I officially withdraw my earlier statement."

Ethan stared at him.

"Which one?"

"The one about the worst thing that could happen."

The captain and crew worked to stabilize the boat, but the engine would not restart. The vessel drifted toward a rocky section of coastline.

Mr. Harris gathered the students.

"We need everyone to follow instructions carefully. The crew is preparing the emergency equipment. Stay together and listen."

Ethan's heart pounded as he watched the island grow closer.

It was covered in dense green trees, with steep cliffs rising behind a narrow beach. There were no buildings, roads, or visible signs of people.

The boat finally reached a shallow stretch of sand where the crew guided everyone ashore.

Rain continued falling as the students gathered beneath the trees.

They were wet, frightened, and exhausted, but everyone appeared to be accounted for.

Mr. Harris checked the emergency supplies and tried the radio.

Only static answered.

"We'll try again when the weather improves," he said. "For now, we need to stay together, keep warm, and find a safe place away from the rising tide."

Noah looked around.

"So, what's the plan?"

Mr. Harris glanced toward the forest.

"First, we establish a safe camp. Then we'll look for a reliable source of fresh water."

Ethan looked at the darkening sky.

"And after that?"

"After that, we wait for rescue."

It sounded simple enough.

But as the group began moving away from the beach, Ethan noticed something unusual in the wet sand.

A line of footprints led from the forest toward the water.

They were too large to belong to any of his classmates.

And they were fresh.

Ethan called Noah over and pointed toward them.

Noah's smile disappeared.

"Maybe they're from the crew?"

Ethan shook his head.

"The crew came from the boat. These came from the forest."

Before they could investigate, a distant sound echoed through the trees.

Three sharp knocks.

Then silence.

Mr. Harris called for everyone to keep moving.

Ethan followed the group, but he couldn't stop looking back at the footprints.

They had come to the island expecting a school adventure.

Now, with no working engine and no radio signal, Ethan had a terrible feeling that the island was not as deserted as it appeared.

And the sun was already beginning to set.`,
    details: "Author: ESCABUSA\nGenre: Survival"
  },
  

  {  title: "THE LAST DAY ON EARTH",
    genre: "survival",
    image: "Images/survival2.jpg",
    synopsis: "Seventeen-year-old Maya Bennett lives in a crowded city where life seems ordinary until emergency broadcasts announce that a massive solar storm is approaching Earth. Scientists warn that the storm could disrupt electrical systems, communication networks, transportation, and essential services around the world.",
    chapter1: `Chapter 1:  When the Lights Went Out
    Maya Bennett was halfway through her mathematics homework when every light in the apartment flickered.

She looked up from her notebook.

"Oliver, did you touch the television again?"

Her younger brother was sitting on the sofa, eating cereal from a large bowl.

"No."

"Then why did the lights flicker?"

Oliver shrugged.

"Maybe the house is blinking."

Maya threw a pencil at him. It landed several inches away.

"Terrifying aim," Oliver said.

Before Maya could respond, the television interrupted its program with an emergency announcement.

A serious-looking presenter appeared on the screen.

"We interrupt this broadcast with an urgent update from the national weather and space agency. A major solar storm is approaching Earth. Residents are advised to prepare for possible disruptions to electrical power and communications."

Maya stopped smiling.

"Solar storm?"

Oliver looked up from his cereal.

"Does that mean aliens?"

"No, Oliver. It means the sun is being annoying."

The presenter continued explaining the possible effects. Maya reached for her phone and opened a news application, but the page loaded slowly.

A message from her mother appeared.

Maya, stay inside with Oliver. I am trying to get home early. Keep your phones charged.

Maya immediately plugged in her phone.

Outside, the afternoon sky looked unusually bright. People on the street were pointing toward the horizon, where faint bands of color seemed to shimmer above the buildings.

For a few minutes, everything appeared normal.

Then the television went black.

The lights switched off.

The refrigerator stopped humming.

Somewhere outside, a car alarm began ringing.

Oliver slowly lowered his cereal bowl.

"Maya?"

"I'm here."

"Why is everything quiet?"

Maya walked to the window.

Across the street, traffic had stopped. Drivers were getting out of their cars, and pedestrians were looking at their phones. The digital billboard on the corner had gone dark.

She tried calling their mother.

The call failed.

She tried again.

Nothing.

"Maybe the network is busy," Maya said, trying to sound calm.

Then someone knocked on their apartment door.

Maya opened it to find Mrs. Alvarez, their elderly neighbor, standing in the hallway.

"Are you two all right?" she asked.

Maya nodded.

"Yes. Is everything okay outside?"

"Not exactly. The elevators have stopped, and the building manager is checking the backup generator. I wanted to make sure you had drinking water."

Maya glanced toward the kitchen.

"We have some."

"Good. Fill a few clean containers while you can. We don't know how long the interruption will last."

Maya thanked her and hurried inside.

She and Oliver filled several bottles and placed their phones beside the window, hoping to get a signal.

After an hour, their mother still hadn't returned.

Maya began pacing.

"She should be home by now."

Oliver hugged a pillow.

"Maybe she's helping someone."

"Maybe."

Maya wanted to believe that explanation.

Then a distant siren sounded.

A few minutes later, someone in the hallway shouted that the city trains had stopped running and several major roads were blocked by stalled vehicles.

Maya looked at her brother.

"We're going to stay here tonight. Tomorrow, if we still can't contact Mom, we'll ask Mrs. Alvarez to help us find a safe way to reach her."

Oliver nodded, though his eyes were full of worry.

Maya took a notebook from her schoolbag and began writing down the things they needed to do.

Check water.

Count food.

Keep the doors locked.

Stay together.

It was a small list, but writing it made the situation feel more manageable.

Then, just as the sky began turning orange, Maya heard a familiar voice from the building's entrance.

"Maya!"

She rushed to the window.

A woman was standing outside, waving toward the apartment building.

But the street was crowded, and Maya couldn't see her clearly.

She called out, but the sound was swallowed by the noise below.

Her phone suddenly vibrated.

One message appeared from an unknown number.

MAYA, DON'T LEAVE THE BUILDING. I'M LOOKING FOR OLIVER.

Maya stared at the screen.

She hadn't told anyone that Oliver was missing.

She turned toward the sofa.

Oliver was no longer there.

His cereal bowl sat on the table, and the front door was slightly open.

Maya ran into the hallway.

"OLIVER!"

No answer.

She hurried down the stairs, calling his name until her voice became hoarse.

At the entrance, Mrs. Alvarez caught her arm.

"Maya, what's wrong?"

"My brother is gone!"

Mrs. Alvarez immediately took out a flashlight.

"Then we will find him. But we must be careful and stay together."

Maya looked at the dark streets beyond the building.

The world she knew had changed in a single afternoon.

And now, with the lights out and her brother missing, she had her first real mission: bring Oliver home.`,
    details: "Author: ESCABUSA\nGenre: Survival"
  },
  

  {  title: "ALONE IN THE WHITE WILDERNESS",
    genre: "survival",
    image: "Images/survival3.jpg",
    synopsis: "Fourteen-year-old Sam Walker is traveling with his father through a remote mountain region when their vehicle becomes stranded during an unexpected snowstorm. While attempting to reach a nearby ranger station, they become separated in the blinding snow.",
    chapter1: `Chapter 1: The Storm Arrives
    Sam Walker had been looking forward to the mountain trip for months.

He imagined taking photographs of snow-covered trees, building a snowman, and drinking hot chocolate beside a fireplace. His father had promised that they would spend two nights at a small lodge near the mountain pass.

What Sam had not imagined was a road covered in ice.

"Are we almost there?" Sam asked from the passenger seat.

His father, David, glanced at the road.

"About twenty minutes, assuming the weather cooperates."

Sam looked out the window.

The sky was gray, and small snowflakes drifted across the windshield.

"Is it supposed to snow this much?"

"Not according to yesterday's forecast."

The vehicle continued along the narrow mountain road. Tall pine trees stood on both sides, their branches beginning to collect snow.

Then the radio crackled.

A warning sounded from the speakers.

"Travelers in the northern mountain region are advised to seek shelter. Heavy snowfall and reduced visibility are expected."

David turned down the radio.

"We may need to change our plans."

Sam sighed.

"But we just got here!"

"Mountains don't care about our plans, Sam."

A few minutes later, the snowfall became heavier. The road markings disappeared beneath a thin white layer, and the vehicle's tires began slipping.

David slowed down.

"We're going to stop at the next safe place and wait for the storm to pass."

Before they could reach a wider section of road, the vehicle slid sideways and stopped near a snowbank.

Sam gripped his seat.

"Are we stuck?"

"Looks that way."

David tried reversing slowly, but the tires couldn't gain traction.

He switched off the engine.

"All right. We're going to stay calm and assess the situation."

Sam looked toward the trees.

"Can we walk to the lodge?"

"Not in this visibility. We need to stay near the vehicle unless there's a clear, safe reason to move."

His father checked their supplies and attempted to call the local ranger station. The phone showed no signal.

Outside, the wind grew stronger.

David looked at the road, then at the thickening snow.

"We'll keep warm, conserve our supplies, and try the radio again shortly."

Sam nodded, although his stomach felt tight.

For the next hour, they waited. David periodically checked the weather and tried to contact help.

Then a loud gust shook the vehicle.

A branch fell across the road ahead, blocking their route.

David frowned.

"That settles it. We can't drive out right now."

He reached for his coat.

"I'm going to check the road from a safe distance. You stay here, keep the doors closed, and don't wander away from the vehicle."

Sam nodded.

His father stepped outside and disappeared behind the curtain of snow.

Five minutes passed.

Then ten.

Sam peered through the window.

" Dad?"

There was no answer.

He called again, but the wind swallowed his voice.

Sam waited a little longer, remembering his father's instructions. He did not run blindly into the storm. Instead, he turned on the vehicle's hazard lights and used the emergency whistle kept in the glove compartment.

He blew it three times.

A faint sound came from somewhere beyond the trees.

Sam listened carefully.

It sounded like a whistle answering his own.

He called out.

"Dad!"

The wind grew louder.

Then a dark shape moved between the trees.

Sam leaned forward, hoping to see his father.

But the shape was too small.

It was a dog.

The animal approached the vehicle cautiously, its fur covered in snow. A red collar hung around its neck, but there was no person nearby.

Sam opened the window just enough to look at it.

"Hey, buddy. Are you lost too?"

The dog wagged its tail.

Sam checked the road again.

His father was nowhere in sight.

He knew he had to make a careful decision. Leaving the vehicle without knowing where his father had gone could make things worse.

He blew the whistle again and waited.

No answer came.

As the daylight faded, Sam used the emergency radio to send another distress call, giving their last known location as accurately as he could.

Then he spotted something near the road: a bright orange marker half-buried in the snow.

It pointed toward a ranger shelter farther up the mountain.

Sam looked at the marker, then at the dog.

He did not know whether his father had reached the shelter, whether rescuers had heard his call, or how long the storm would last.

But he knew one thing.

He had to keep thinking clearly.

The dog sat beside him and rested its head on his knee.

Sam gently patted its fur.

"We're going to get through this," he whispered.

Outside, the snow continued falling, slowly covering the road and the tracks that might have led him back to his father.`,
    details: "Author: ESCABUSA\nGenre: Survival"
  },
  

  {  title: "THE LAST SURVIVORS OF OAKWOOD",
    genre: "survival",
    image: "Images/survival4.jpg",
    synopsis: "After a mysterious illness forces the evacuation of several towns, seventeen-year-old Ava Morgan and her younger brother, Ben, are taken to a temporary shelter in Oakwood. Authorities promise that the crisis will soon be under control, but communication becomes increasingly unreliable, and supplies begin running low.",
    chapter1: `Chapter 1: The Empty Shelter
    Ava Morgan had never liked the sound of emergency announcements.

There was something about the calm voice, the serious wording, and the long pauses that made everything sound worse than it already was.

Three weeks earlier, the announcement had told everyone in Oakwood to remain indoors.

One week later, it had instructed families to report to designated shelters.

Now, standing inside the crowded school gymnasium that had become a temporary shelter, Ava listened to another announcement from a battery-powered radio.

"Residents are advised to remain calm. Relief supplies are being distributed, and transportation arrangements will be announced when available."

Her younger brother, Ben, sat beside her on a folded blanket.

"Does that mean we're going home today?"

Ava wanted to say yes.

Instead, she pulled his jacket closer around his shoulders.

"I don't know yet."

Ben looked toward the rows of families waiting for food and water.

"I miss my room."

"I miss having a shower that doesn't last thirty seconds."

He smiled faintly.

For a moment, they almost felt normal.

Then a volunteer hurried across the gymnasium.

"Everyone, please listen. We need to reorganize the sleeping areas. Keep your belongings with you and follow the staff's instructions."

Ava packed their small bag. It contained two water bottles, a flashlight, a change of clothes for each of them, and a photograph of their parents.

Their parents had been sent to a separate medical center when the illness first spread. Ava had not heard their voices for several days.

She checked the radio again.

Static.

"Maybe the signal is broken," Ben said.

"Maybe."

That night, Ava woke to the sound of engines outside.

Through the gymnasium windows, she saw several large vehicles parked near the entrance. Staff members were moving boxes and guiding people toward them.

She shook Ben gently.

"Wake up. Something's happening."

The gymnasium was filled with hurried footsteps and confused questions.

A staff member approached their row.

"Please remain here while we organize the next group."

Ava waited.

Then the lights went out.

Someone shouted for a flashlight.

A child began crying.

In the confusion, Ava held Ben's hand tightly and guided him toward the wall, away from the moving crowd.

When the lights returned, the vehicles were gone.

So were most of the staff.

Ava hurried toward the entrance.

"Hello? Is anyone here?"

Only the wind answered.

She checked the office, the cafeteria, and the hallway. The shelter had been almost completely emptied. A few blankets lay scattered across the floor, and unopened boxes of supplies sat beside the reception desk.

Ben stood behind her.

"Where did everyone go?"

Ava swallowed.

"I don't know."

She tried the emergency phone. It had no connection. The radio produced only static.

For the first time, the situation felt real in a way that no announcement could explain.

They were alone.

Ava wanted to panic, but Ben was watching her.

She took a slow breath.

"Okay. First, we check what supplies are available. Then we find a safe place to wait while we try to contact someone."

They collected sealed water bottles, packaged food, a first-aid kit, and a larger flashlight. Ava wrote their names and the date on a piece of paper and left it on the reception desk, explaining that they were still in Oakwood and needed help.

As they approached the gymnasium doors, a voice called from behind the bleachers.

"You're not leaving without us, are you?"

Ava turned.

Three people emerged from the shadows: a quiet boy carrying a backpack, a girl holding a small radio, and an older student wearing a volunteer vest.

The girl raised the radio.

"I picked up a signal earlier. Someone was talking about a relief center outside town."

Ava stepped closer.

"Did you hear where?"

"Not clearly. But I heard the words 'north road' and 'radio tower.'"

The older student looked toward the empty entrance.

"If there's a working relief center, we should try to contact them before we leave."

Ava nodded.

"We'll work together, but nobody wanders off alone. We share what we have, and we make decisions carefully."

Ben looked up at her.

"Are we going to find Mom and Dad?"

Ava squeezed his hand.

"That's the plan."

Outside, the first light of morning spread across the empty streets of Oakwood.

The five survivors stepped out of the shelter, carrying everything they could safely manage.

Behind them stood the abandoned school.

Ahead lay a town they no longer recognized.

And somewhere beyond the northern road, a radio signal was waiting to be found.`,
    details: "Author: ESCABUSA\nGenre: Survival"
  },
  

  {  title: "SEVEN DAYS IN THE JUNGLE",
    genre: "survival",
    image: "Images/survival5.jpg",
    synopsis: "Seventeen-year-old Lucas Reed joins a supervised outdoor expedition with four other students and two experienced guides. The trip is designed to teach navigation, teamwork, and wilderness awareness. But when a sudden landslide blocks their route and separates the students from their guides, the group must rely on what they have learned.",
    chapter1: `Chapter 1:  The Wrong Turn
    Lucas Reed had two rules for outdoor adventures.

Rule number one: never trust a map that looked older than your grandparents.

Rule number two: never volunteer to lead a group unless you knew where you were going.

Unfortunately, he had broken both rules before lunchtime.

"Lucas, you're holding the map upside down," Sophie Bennett said.

Lucas turned it around.

"I was checking whether the forest looked different from another perspective."

Sophie raised an eyebrow.

"Of course you were."

Their guide, Mr. Collins, laughed.

"Don't worry, Lucas. Learning to navigate takes practice. That's why we're here."

The expedition had started early that morning. Five students were traveling with two experienced guides through a designated trail in a large tropical forest. Their goal was to reach a ranger station by late afternoon and return to camp the following day.

The weather was warm, the trees were enormous, and birds called from branches high above the trail.

Lucas had been excited at first.

Then he saw a spider the size of his palm.

Now he was reconsidering every decision that had led him into the forest.

"How much farther?" he asked.

"About three kilometers to the next rest point," Mr. Collins replied. "Stay on the marked trail and keep the group together."

Sophie walked ahead with another student, Daniel, while Lucas followed with Mia and Aaron.

They crossed a narrow wooden bridge and stopped near a stream to refill their water bottles from the group's treated water supply.

Everything seemed peaceful.

Then a deep rumble rolled through the forest.

The ground shook.

"Move away from the slope!" Mr. Collins shouted.

A landslide sent mud, branches, and rocks crashing down across the trail ahead. The students scrambled toward a safer patch of ground as the guides called out instructions.

When the rumbling stopped, the trail was blocked.

A thick wall of mud and fallen trees separated the group from the route they had planned to follow.

"Everyone all right?" Mrs. Patel, the second guide, called.

The students answered one by one.

Lucas counted the group.

Sophie.

Daniel.

Mia.

Aaron.

Himself.

But the guides were on the other side of the blocked trail.

"Can you hear us?" Mr. Collins shouted.

"Yes!" Sophie called back.

"We're going to find another way around and contact the ranger station. Stay together in a safe location. Do not attempt to cross the landslide."

Lucas felt his stomach tighten.

"How long will that take?"

"We don't know," Mrs. Patel replied. "Keep calm and follow the safety plan we discussed."

The guides' voices faded as they moved away from the blocked section.

For several seconds, nobody spoke.

Then Daniel said, "So... what now?"

Sophie took a deep breath.

"We stay where it's safe, check our supplies, and wait for the guides' instructions."

Aaron looked at the darkening sky.

"What if they can't get back before nightfall?"

Mia hugged her backpack.

"Please don't say that."

Lucas pulled out the map.

His hands were trembling slightly, but he forced himself to study the markings.

"We shouldn't wander," he said. "The guides told us to stay together. We can make sure everyone has water and food while we wait."

Sophie glanced at him.

"That's actually a good idea."

Lucas looked surprised.

"Did you just agree with me?"

"Don't make it weird."

They checked their supplies and moved to a nearby clearing away from the slope. The students remained together, used their whistles to signal their location, and waited for further instructions.

A little later, Lucas noticed something carved into a tree beside the clearing.

It was a symbol made of three short lines and a circle.

He called Sophie over.

"Have you seen this before?"

She examined it carefully.

"No. Maybe it's an old trail marker."

Lucas checked the map again.

A similar symbol appeared near the edge of the printed trail, beside a small drawing of a ranger station.

His heart began beating faster.

"Look. There might be another marked route nearby."

Sophie studied the map.

"Maybe. But we shouldn't follow an unfamiliar trail without the guides' instructions."

Lucas nodded.

For once, he agreed with her completely.

As the afternoon light faded, the group continued waiting in their safe location. They kept their supplies together, used their whistles at intervals, and avoided moving deeper into the forest.

Then a sound came from the trees.

A whistle.

Three short notes.

Lucas stood up.

"That's our signal!"

The others listened.

The whistle came again, farther away.

Sophie picked up her own whistle and answered.

For a moment, they heard nothing.

Then a faint voice called from beyond the trees.

"Stay where you are! We're coming!"

The students exchanged relieved looks.

But before the guides could reach them, the sky opened, and heavy rain began pouring through the canopy.

Lucas looked at the blocked trail, the fading light, and the mysterious marker carved into the tree.

The guides were still trying to reach them, and the group had to remain safe until help arrived.

Their outdoor adventure had become a real survival challenge.

And it was only the first day.`,
    details: "Author: ESCABUSA\nGenre: Survival"
  },
  
  

];

// RENDER STORIES
const container = document.getElementById("story-container");
stories.forEach((story, index) => {
  const card = document.createElement("div");
  card.className = "story-card";
  card.setAttribute("data-genre", story.genre);

  card.innerHTML = `
    <img src="${story.image}" alt="${story.title}">
    <h3>${story.title}</h3>
    <p class="synopsis"><strong>Synopsis:</strong> ${story.synopsis}</p>
    <div class="buttons">
      <button onclick="viewDetails(${index})"> Book Details</button>
      <button onclick="viewChapter(${index})"> Read Chapter 1</button>
    </div>
  `;
  container.appendChild(card);
});

// VIEW BOOK DETAILS
function viewDetails(index) {
  alert("Book Details:\n\n" + stories[index].details);
}

// VIEW CHAPTER
function viewChapter(index) {
  document.getElementById("stories").style.display = "none";
  document.getElementById("chapter-view").style.display = "block";
  document.getElementById("chapter-content").innerText = stories[index].chapter1;
}

// BACK TO STORIES
function backToStories() {
  document.getElementById("stories").style.display = "block";
  document.getElementById("chapter-view").style.display = "none";
}
const img = card.querySelector("img");

img.onerror = function () {
    console.error("Image not found:", story.image);
};

img.onload = function () {
    console.log("Image loaded:", story.image);
};