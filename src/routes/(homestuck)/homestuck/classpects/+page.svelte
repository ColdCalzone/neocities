<style>
    #header {
        width: 20%;
        min-width: 270px;
        background-color: #00000000;
        /* header color here! */
        height: 150px;
        /* this is only for a background image! */
        /* if you want to put images IN the header, 
    you can add them directly to the <div id="header"></div> element! */
        background-image: url('images/banner.png');
        /*background-size:cover;*/
        background-repeat: no-repeat;
        background-position: center;
        position: fixed;
    }

    /* navigation section!! */
    #navbar {
        height: calc(100vh - 150px);
        /* navbar color */
        background-color: #00000000;
        position: fixed;
        bottom: 0;
        width: 20%;
        min-width: 270px;
    }

    #navbar ul {
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        list-style-type: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #navbar li {
        padding-top: 10px;
        text-align: center;
        margin: auto;
    }

    /* navigation links*/
    #navbar li a {
        color: #d7cdf7;
        /* navbar text color */
        font-weight: 800;
        text-decoration: none;
        /* this removes the underline */
    }

    /* navigation link when a link is hovered over */
    #navbar li a:hover {
        color: #ffffff;
        text-decoration: underline;
    }

    #navbar div {
        margin: 0 auto;
        height: 100%;
        /* width: 900px; */
    }

    #navigation {
        float: left;
        height: 100vh;
        width: 20%;
        min-width: 270px;
    }


    @media only screen and (max-width: 800px) {

        #navbar ul {
            flex-wrap: wrap;
        }

        #navbar div {
            width: 100%;
        }
    }


    table {
        border-collapse: collapse;
        margin: 0 auto;
    }
    table, th, td {
        border: 3px solid #0c0c0c
    }

    th, td {
        padding: 5px;
    }

    tr > *:nth-child(2) {
        text-align: center;
    }
    tr > *:nth-child(3) {
        text-align: right;
    }

    h1, h2, h3, h4 {
        text-align: center;
    }

    p {
        text-indent: 2.4em;
    }
</style>

<div class="flex">
    <main>
        <h1>An accidental analysis of Homestuck's Classes</h1>
        <p style="text-align: center;">The below is nearly a copy-pasted series of messages I made in a Discord Server on the subject of classes. The later parts have been revised since their inception.</p>
        <hr>
        <img style="margin: 0 auto; display: block;max-width: 100%;" src="/homestuck/images/IncitingIncident.png">
        
        <h2>Part 1</h2>
        <hr>
        <p>The Active/Passive alignment of a class, to me, is descriptive of the way a hero engages with their aspect, the length of their personal hero's journey, and the mode of operation they engage with their class verb.</p>
        <p>For instance, lets take the most extreme examples, Caliborn: Lord of Time, and alt!Calliope: Muse of Space.</p>

        <p>Let us ignore the inherent difficulty of a dead session, and go straight to the part where Caliborn ascends. He immediately gains complete command (which I will, from this point, assume is the Lord/Muse class verb) over time and gets to do whatever he damn well pleases, and will NEVER experience growth; for all intents and purposes he has no journey, no arc. He engages in nothing that isn't completely self-centered, which goes so far as his time travel, which is limited to himself. He engages with time on a completely local level.</p>

        <p>Now look at alt!Calliope. We'll still ignore the dead session issue and go to the part where she makes her choice. Her choice is that of sacrifice. She then must wait for untold eternities (sounds like a cool band name) for alpha Calliope. At this point she commands space to such an extent that all of Paradox Space (at least, that which is relevant to Homestuck) collapses into The Pocket, for the purpose of helping the main cast, at nearly no benefit to herself*.</p>

        <span>* <i>eyes epilogues I haven't read</i> I'll get to you one day.... I know you hold secrets.............</span>
        
        <h3>An aside: Reach</h3>
        <p>As the most intensely Active and Passive players, you can consider the "reach" Caliborn and Calliope have to be sort of like... dividing with zero. Caliborn's got 0 reach but insane control over his aspect locally. Calliope's got that divide-by-zero reach, but she had to wait to use it.</p>

        <p>I must confess I've skimmed over the journey for alt!Calliope... and that's because there isn't one! Unless you consider her journey as contrast between herself and alpha Calliope. Cherubs are forces of nature before people, and in the context of the alt timeline, there was barely a person for Calliope to be, however...</p>
        
        <h2>Part 2</h2>
        <hr>
        <p>Now let us consider some actual characters. First I will inspect Roxy: Rogue of Void and Vriska: Thief of Light.</p>

        <p>Roxy is more emblematic of Rogue than of Void, which makes it pretty easy to understand what Rogue does. We can see her journey takes some time, and she has to work to understand how to use her powers. She steals for the betterment of others before herself -- making the matriorb, giving pumpkins (which are, notably, basically non-concepts in Homestuck) to the needy carapacians... -- and has pretty damn good control over Void outside of that.</p>

        <p>Vriska. She's a Thief alright. As far as we know she basically immediately came into the powers. She pretty casually uses them in The Veil, that's for sure. Her theft is entirely selfish -- both her theft of the spotlight and of All The Luck, which she only ever accumulates for herself. Her control is probably pretty good, but nothing on the level of Roxy. I don't feel the need to get into Pre-SGRUB stuff, since that's both messy and pretty clearly aligns with her Thief role.</p>

        <h2>Part 3.1: We're adding subtitles now?</h2>
        <hr>
        <p>As a preface to this part, I think we should divert our attention to the basis of classpect analysis I'm engaging in right now: the 7 Passive/Active pairings of classes. Of these, three are given, two bound by the axis of a verb, and the alignment of some classes without given pairs are the table scraps.</p>

        <p>Let's first try to dissect the barest information from this, as best can be done textually:</p>
        <table>
            <tr>
                <th>ACTIVE</th>
                <th> - </th>
                <th>PASSIVE</th>
            </tr>
            <tr>
                <td>LORD</td>
                <td> ? </td>
                <td>MUSE</td>
            </tr>
            <tr>
                <td>THIEF</td>
                <td> [STEAL] </td>
                <td>ROGUE</td>
            </tr>
            <tr>
                <td>PRINCE</td>
                <td> [DESTROY] </td>
                <td>BARD</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>HEIR</td>
            </tr>
            <tr>
                <td>WITCH</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>SEER</td>
            </tr>
        </table>
        <p>Not a great start. We can at least fill in the verb of the master classes pretty easily with whatever crap we want. They're barely classes to begin with. Earlier I made the assumption that it was "command". Now we're only down 4 pairs -- and verbs -- and 5 class alignments. Much better.</p>

        <p>We can fill in a few gaps based on my earlier descriptions of Passive/Active alignment. Easiest is Page, who reeks of so much Passive alignment it's not even funny. To get much further though we'll need to identify some verbs.</p>

        <p>The verb of a class pair describes the axis on which both its classes revolve. Thief and Rogue, they Steal. Prince and Bard, they Destroy. What else? The easiest (listed) class to make a verb for currently is Seer, the verb of course being Understand, or more simplistically, Know. If this leap were one which lead me astray, I would gladly plunge into the depths -- there's no fucking way this is wrong and if it is, Hussie's a hack. I'll skip my normal meandering drivel and jump to the obvious pairing here: Mage. They're not Mages like magicians, but rather like learned scholars.</p>

        <h2>Part 3.2: I know what you are.</h2>
        <hr>

        <p>Consider our primary Mage, Sollux: Mage of Doom. He's a prophet. Of Doom. He knows Doom. He understands it. But, there's a clear difference in his understanding of oncoming apocalypse and Rose's understanding of fortune. His understanding and <b>suffering</b> (bolded for a reason!) is entirely for himself, limited in scope to himself. He's not a team strategist, he's the guy telling them to stop being idiots. That is where the distinction of Active and Passive lies.</p>

        <p>Lets also consider our secondary Mage and honorary actually bearable character, Meulin Leijon: Mage of Heart. Of what we know about her, we see she's a matchmaker. Cute. But isn't that group oriented? Shut up. Her engagement with her aspect -- quick crash course on Heart: The soul, one's emotions, the self -- is entirely in the domain of herself, just because she can part her conclusions to people to match them doesn't change SHIT.</p>

        <p>Let's bring back that bolded note from earlier: <b>suffering</b>. There it is. It's down here now. But what does that mean? Both Mages have a uniquely strained relationship with their aspects. The strain is perhaps less obvious for Sollux, since having your description be "guy who knows we're fucked" wouldn't excite most, but having the voices of the damned is a pretty unique way to get fucked over by your aspect. And how about Meulin? She was a matchmaker, but she couldn't matchmake her way into a healthy relationship to save her life. Or her hearing. 'nuff said.</p>

        <p>Addendum: Couldn't find a spot to squeeze it in, but Sollux, Rose, and Terezi have something in common. No, it's not liking women. All three can hear the voice of their Exile clearly. This is a pretty obvious parallel between Seer and Mage, I'd say.</p>

        <h2>Part 3 Intermission: Did it really take 4.5 paragraphs to establish knowing things is like knowing things?</h2>
        <hr>

        <p>Lets return to the chart:</p>
        <table>
            <tr>
                <th>ACTIVE</th>
                <th> - </th>
                <th>PASSIVE</th>
            </tr>
            <tr>
                <td>LORD</td>
                <td> [COMMAND] </td>
                <td>MUSE</td>
            </tr>
            <tr>
                <td>THIEF</td>
                <td> [STEAL] </td>
                <td>ROGUE</td>
            </tr>
            <tr>
                <td>PRINCE</td>
                <td> [DESTROY] </td>
                <td>BARD</td>
            </tr>
            <tr>
                <td>MAGE</td>
                <td> [KNOW] </td>
                <td>SEER</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>HEIR</td>
            </tr>
            <tr>
                <td>WITCH</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>PAGE</td>
            </tr>
        </table>

        <p>Oh, much better. We substituted Page for Seer.  We've got Maid, Sylph, and Knight sitting on the bench. Now what? I've already got preconceived notions I have to fulfill, lest I feel like a fraud for not being right the first time. I will admit, and I think this to be the issue with most attempts at formulating class pairs, that Page is a pain in the ass. What the hell even IS a Page? </p>

        <p style="text-align: center; text-indent: 0;">Well...</p>

        <p style="text-align: center; text-indent: 0;">I'll tell you.</p>

        <p style="text-align: center; text-indent: 0;">A Page is the Passive counterpart of Sylph.</p>

        <p>Cue the boos from the crowd, and complain as you will, but you've sat through 7 messages of this crap, so BUCKLE THE FUCK IN. We're gonna need to explain a whole new aspect of Active/Passive alignments for this one: magnitude.</p>


        <!-- <h2>Part 3 Intermission.2: Wait, I don't need a new message to make a new part?</h2> -->

        <p>Active and Passive alignment can only go so far. Some classes are more Active or Passive than others. At the crux of Activity is Lord. Of Passivity, Muse. I will call this phenomenon magnitude. Now watch this:</p>
        
        <table>
            <tr>
                <th>ACTIVE</th>
                <th> - </th>
                <th>PASSIVE</th>
                <th>#</th>
            </tr>
            <tr>
                <td>LORD</td>
                <td> [COMMAND] </td>
                <td>MUSE</td>
                <td>7</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>PAGE</td>
                <td>6</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>HEIR</td>
                <td>5</td>
            </tr>
            <tr>
                <td>PRINCE</td>
                <td> [DESTROY] </td>
                <td>BARD</td>
                <td>4</td>
            </tr>
            <tr>
                <td>MAGE</td>
                <td> [KNOW] </td>
                <td>SEER</td>
                <td>3</td>
            </tr>
            <tr>
                <td>THIEF</td>
                <td> [STEAL] </td>
                <td>ROGUE</td>
                <td>2</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
            </tr>
            <tr>
                <td>WITCH</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>MAID</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>KNIGHT</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>SYLPH</td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <p>I've ranked  the Active/Passive magnitude of each class here. Don't worry too much about the ranking, and bare in mind "low magnitude" doesn't mean "weak-ass bitch", though it does have an impact on the degree to which one can manipulate their aspect.</p>

        <p>Knowing this, we can get a two for one combo.</p>


        <h2>Part 3.3: Getting my way.</h2>
        <hr>

        <p>Is it a stretch to say Heir and Witch are connected? No? I'll pretend I didn't hear that.</p>

        <p>Let's consider our Heirs: John and Equius; Breath and Void. From the one we see god tier, we can notice one thing quite clearly: Fuck Man, Egbert's Got Some Sick Powers. Between the two, we see a commonality: becoming their aspect, more so than most, -- save for Page ;) -- which I can explain quite simply. Passive alignment. Passive classes tend to embody their aspect. See Gamzee for more details. John becomes the breeze, Equius becomes the void. John becomes freedom and direction, Equius becomes obfuscation. I could waffle on.</p>

        <p>Let's now consider our Witches: Jade, Feferi, and Damara: Space... I'm ignoring the trolls this time. I don't hate myself THAT much. When Jade god tiers you can see one thing pretty clearly: Fuck Man, Harley's Got Some Sick Po- did I really need to do this bit?</p>

        <p>Whatever. Both awake and can immediately change shit with their aspect. I'll call it and say their verb is Manipulate before continuing to waffle about it.</p>

        <p>John throughout Homestuck is the main driving force. Once he obtains retcon powers he is the direction of the plot, effectively manipulating it to his will -- remember: Breath is direction, freedom, that stuff.</p>

        <p>Jade's manipulations of Space are pretty clear, but less all-consuming than John. Impressive though her power may be, she's not bending a narrative to her will.</p>

        <p>Can you tell I rushed that? I want to get to the crack already.</p>

        <p style="text-align: center; text-indent: 0;">What is a Sylph? Sort Of Like A Witch But More Magical.</p>
        
        <p style="text-align: center; text-indent: 0;">And so, you simply place the Sylph...</p>
        
        <table>
            <tr>
                <th>ACTIVE</th>
                <th> - </th>
                <th>PASSIVE</th>
                <th>#</th>
            </tr>
            <tr>
                <td>LORD</td>
                <td> [COMMAND] </td>
                <td>MUSE</td>
                <td>7</td>
            </tr>
            <tr>
                <td>SYLPH</td>
                <td> ? </td>
                <td>PAGE</td>
                <td>6</td>
            </tr>
            <tr>
                <td>WITCH</td>
                <td> [MANIPULATE] </td>
                <td>HEIR</td>
                <td>5</td>
            </tr>
            <tr>
                <td>PRINCE</td>
                <td> [DESTROY] </td>
                <td>BARD</td>
                <td>4</td>
            </tr>
            <tr>
                <td>MAGE</td>
                <td> [KNOW] </td>
                <td>SEER</td>
                <td>3</td>
            </tr>
            <tr>
                <td>THIEF</td>
                <td> [STEAL] </td>
                <td>ROGUE</td>
                <td>2</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
            </tr>
            <tr>
                <td></td>
                <td>MAID</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>KNIGHT</td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <p style="text-align: right; text-indent: 0;">...right there.</p>

        <h2>Part 3.4: A Witch But More Magical.</h2>
        <hr>

        <p>"Cold, what are you doing? This-" ababababuhbuhbuhbuh. Shut.</p>

        <p>Lets introduce this one with the verb. Probably should've done that last time. That's kinda the thesis of each of these, isn't it? Justifying the verb. So it should open as such. The Sylph and Page "Become" their aspect. And this is the easy part.</p>

        <p>Consider our Sylphs, Aranea and Kanaya: Light and Space. Aranea is an open and shut case. She forcefully becomes relevant, as is one of Light's constituent parts, for no gain but her own. Kanaya's takes some more squinting, but consider her role in perpetuating trolls: in effect she becomes the essence of propagation for the trolls. She is the barer of the matriorb. You could even go so far as to say she became the creator of the human's universe, but that'd be stretching a bit.</p>

        <p>Now consider our Pages. Need I say it? Tavros and Jake: Breath and Hope. Tavros, after his arc -- I haven't mentioned that too much, but I figure saying for every passive class "they had to go through an arc for their powers" is a bit redundant. You read Homestuck. -- after his arc, becomes the direction of an entire army just because he asked them. I can truly only put this under so much of a microscope at 12:37 am come on.</p>

        <p>And Jake. Jake's. Uh. Well he gets shafted by the narrative a little. Sorry Jake, you were simply too much Page and too much Hope for one 8000 page webcomic to resolve after introducing you half-way in. There was that time with the Hope bomb, during Caliborn's Masterpiece, where he became a beacon of Hope and singlehandedly defeated Caliborn. </p>

        <p>Addendum: I feel the need to mention, Pages start lacking their element and grow to have mastered it. </p>

    </main>
</div>