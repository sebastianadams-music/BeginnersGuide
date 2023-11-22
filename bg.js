function startBG(){
    let homeObj = {
        "joan1": "slow travel diary",
        // "soundmapping": "soundmapping",
        // "linktest": "link test",
        "walk1": "walking scores", 
        "blink": "Blink Piece",   
        "hudd": "Journey to Huddersfield [19 Nov 23]",   
        "hudd_cows": "Joan sings to cows near Huddersfield",
    }
    
    window.homeObj = homeObj
                
    
    
    document.getElementById("vid").pause()
    // document.getElementById("reset").addEventListener("click", resetSessionStorage) // reset button
    loadHome(Object.entries(homeObj))
    demo()
}

function demo(){
    let content = document.getElementById("bg_content")
    let links = document.querySelectorAll('a')
    console.log(links)
    links.forEach((link) => {
        console.log(link)
        link.addEventListener('click', function (event) {
            let del = updateSessionStorage()
            // console.log(del)
            // console.log(event.target)
            var url = event.target.dataset.name;
            event.preventDefault(); // does not follow link
            var linkcheck = data[url].slice(0, 4)
            console.log("linkcheck", linkcheck)

            if (url === "home"){
                event.preventDefault(); // does not follow link

                console.log("it's not a link")
                // nothing
                 // if link is internal 
            content.textContent = ""
            url = event.target.dataset.name;
            console.log(url)
            playMovie()
            sleep((del) * 1000).then(()=>{
                stopPlayingMovie()
                console.log(data)
                console.log(data[url])
                console.log(url)
                loadHome(Object.entries(homeObj))
                demo()
            })
        }

            else if (String(linkcheck) === "link"){
                console.log("it's a link")
                    // if link is external
                    url = event.target.dataset.name
                    console.log("url", url)
                    link = data[url].slice(5);
                    console.log(link)
                    event.preventDefault(); // does not follow link
                    playMovie()
                 sleep(del * 1000).then(()=>{
                stopPlayingMovie()
                console.log(data)
                console.log(data[url])
                console.log(url)

                 })
                 window.open(link, "_blank")

            }    
            else{
                event.preventDefault(); // does not follow link

                console.log("it's not a link")
                // nothing
                 // if link is internal 
            content.textContent = ""
            url = event.target.dataset.name;
            console.log(url)
            playMovie()
            sleep(del * 1000).then(()=>{
                stopPlayingMovie()
                console.log(data)
                console.log(data[url])
                console.log(url)
                content.innerHTML = data[url]
                demo()
    
    
                // window.open(url, '_self') // opens link
            })
                
            }
            

           
            

          })
    });
    
}



function playMovie(){
    let vid = document.querySelector('#container video')
    
    vid.removeAttribute("hidden")
    var els = document.querySelectorAll('.hidewhenvid');
    for (var i=0; i < els.length; i++) {
        els[i].hidden = true;
    }
    vid.play()
    // document.getElementById("container").textContent = "playing beautiful movie about slow travel"


    
    }
    
    function stopPlayingMovie(){
    console.log("trying to stop")
    let vid = document.querySelector('#container video')
    vid.pause()
    vid.hidden = true
    var els = document.querySelectorAll('.hidewhenvid');
    for (var i=0; i < els.length; i++) {
        els[i].hidden = false;
    }

    // document.getElementById("status").textContent = "stopped beautiful movie about slow travel"
    
    }


function loadHome(array){
    let content = document.getElementById("bg_content")
    content.innerHTML = ""
    array.forEach(
        (entry) => {
            const [key, value] = entry;
            let a = document.createElement("a")
            a.textContent = value
            a.href = "x"
            a.dataset.name = key
            content.appendChild(a)
            let br = document.createElement("br")
            content.appendChild(br)
        }
    )
    let div = document.createElement("div")
    div.id = "home_text"
    let p = document.createElement("p")
    p.classList.add("typed")
    p.textContent = "This is a guide to slow travel, for beginners."
    div.appendChild(p)
    content.appendChild(div)
    let img = document.createElement("img")
    img.src = "https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/small_snail.jpg"
    img.alt = "photo of tiny snail"
    content.appendChild(img)
       
    
    
}


// session storage modifications

function updateSessionStorage() {
    let ttl = 3600000
    let delayStorage = getWithExpiry("slowtravel") 
    console.log(delayStorage)
    if (!delayStorage){
        // localStorage.setItem('slowtravel', 1) // actually seems unnecessary
        delayStorage = .5
    }
    if (delayStorage <= 8){
        delayStorage *= 1.5

    }
    else {
        delayStorage *= 1.2

    }

    setWithExpiry('slowtravel', delayStorage, ttl)
    return delayStorage
}

function resetSessionStorage(){
    localStorage.setItem('slowtravel', 1)
    let test = localStorage.getItem('slowtravel')
    console.log("slowtravel = ", test)
    return test
}

function setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}




let data = {
    "home": `        <a href="x" data-name="joan1">load Joan's text</a>
    <a href="x" data-name="rob">load Walking Scores</a>
    <a href="x" data-name="soundmapping">Soundmapping</a>
    <div id="home_text"><p class="typed">This is a guide to slow travel, for beginners.</p>
    </div>
    
`,
// JOAN
    "joan": `    <a href="x" data-name="home">travel home</a>
    <p>god I find it hard enough to reply to emails on the SailRail, let alone make art</p>

    <p>funny how much energy &amp; attention goes to all the other people (it&rsquo;s almost always a lot of people when I&rsquo;m going this direction), even when you don&rsquo;t want it to</p>
    
    <p>I suppose it&rsquo;s an interesting&#8230;soundscape</p>
    
    <p>(the girls beside me are talking about dog psychics)</p>
    
    <p>reading - or trying to - the <a href="x" data-name="slow_spatial_reader">Slow Spatial Reader</a></p>
    
    <p>&lsquo;I don&rsquo;t think it is possible to contribute to the present moment in any meaningful way while being wholly engulfed by it. It is only by stepping out of it, by taking a telescopic perspective, that we can then dip back in and do the work which our times asks of us.&rsquo; -Maria Popova</p>
    
    <p>when you travel slower, you encounter more. because there&rsquo;s just more time to. I rarely talk to people on planes, but I often do, even if it&rsquo;s just a short chat, on the SailRail. and there are more parts of the journey where you have an opportunity for conversation too</p>
    
    <p>there&rsquo;s also the bonding that happens when there are cancellations or delays &amp; you find yourself allied, at least in a small way, to strangers trying to travel to the same place. I suppose that happens with planes too, but it&rsquo;s a bit different. with the SailRail it&rsquo;s a more active figuring things out together, helping each other. which train to get, which station to change at, what time the ferry after the one we&rsquo;re going to miss is at&#8230;</p>
    
    <p>&lsquo;I think it&rsquo;s important to practice new forms of movement in the Anthropocene, in order to encounter climate change on the ecosystem&rsquo;s terms (...). You are caught up in the flows, move at the same speed as the trash and algae and seaweed around you. And it makes me wonder, how do we normally move through the world in ways that limit, or prohibit the world from entering us?&rsquo; -Angela Sakrison, Rowboat Phenomenology</p>
    
    <p>(from the Slow Spatial Reader again)</p>
    
    <p>the first few times I made the journey over land (and sea) between Ireland, where I&rsquo;m from, and Belgium, where I live, I felt almost embarrassed telling people. it felt like a ridiculously long journey, and a lot of money to spend on it too, when there are such cheap flights between those places. I felt self-conscious about my decision to travel by land for environmental reasons, even though I knew it was justified and a perfectly innocuous decision that didn&rsquo;t affect anyone else, simply because air travel, especially for Irish people wanting to get off our little island, is such a norm. I thought people might think I was some kind of climate martyr trying to make them feel bad for taking planes</p>
    
    <p>making that first journey, I thought, ok, this isn&rsquo;t something I&rsquo;m going to be able to do every time, but why not do it now, I have the time, and it&rsquo;s a kind of dramatic way to move country. but four years later, I now make the majority of my journeys between Ireland and Belgium by land. Last Christmas, last Easter, in June for a wedding, to Scotland in July for a holiday and then to Dublin from there, this time for work. I have flown this year too. once from Brussels to Dublin in March for an interview, because I had to book last minute and couldn&rsquo;t afford the Eurostar, and again from Dublin to Brussels in August, travelling with a group of participants for a film project. I still feel guilty when I fly. rather than working on not feeling guilty, which is what other people (read: my parents) tell me to do, I see that guilt as being symptomatic of a gap between what I want to be doing and what I am doing, and want to work on reducing the gap as much as I can. which, as I start to work increasingly often in Ireland, is going to mean asking to have my over-land travel costs (and potentially travel time) covered by project money, which I have occasionally been successful in. it helps that I have, over time, normalised it even just for myself</p>
    
    <img src="joan1.png" alt="Photos of Joan's journey">


    <p>the more times I made the journey, the less special it became. it also became less long, less slow. or so it seemed. my perception shifted. I didn&rsquo;t think about the work I could get done in the extra time needed to travel by train and ferry instead of by plane. I didn&rsquo;t think about what a lovely time I would have gazing out at the scenery and reflecting on my life while on the train (sometimes I do, but it&rsquo;s not a given). it&rsquo;s just become a habit, not something I am doing to prove a point or be virtuous. it is my auto-pilot way to move between my two homes (pun intended)</p>
    
    <p>things observed on the journey, June 9th -the foot statue (although not the first time I've seen it) -women sitting across from me on the train taking ecstasy on their way to a festival -a very red sun setting (from the deck of the ferry) -a lot of bad ferry art (but good ferry port art)</p>`
    ,
"soundmapping": `<a href="x" data-name="home">travel home</a><p>SOUNDMAPPING - Robert Coleman <br> <br> On a map, plan out a route for a walk. Imagine the sounds you might hear while on the walk and note down on the map where you think these sounds will be.  Walk the route and bring your map. Compare the sounds you hear with the sounds you imagined you would hear. (This could be a nice rehearsal improvisation to do imagining our slow travel journey)</p>`
,
// ROB
"rob": `
<a href="x" data-name="home">travel home</a><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking1.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking2.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking3.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking4.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking5.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking6.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking7.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking8.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking9.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking10.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking11.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking12.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking13.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking14.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking15.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking16.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking17.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking18.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking19.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking20.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking21.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking22.jpg" alt="photo from walking score book"><br>

`,
// JOAN 1 2 and 3
"joan1": 
`<a href="x" data-name="home">travel home</a>
<p>god I find it hard enough to reply to emails on the SailRail, let alone make art</p>

<p>funny how much energy &amp; attention goes to all the other people (it&rsquo;s almost always a lot of people when I&rsquo;m going this direction), even when you don&rsquo;t want it to</p>

<p>I suppose it&rsquo;s an interesting&#8230;soundscape</p>

<p>(the girls beside me are talking about dog psychics)</p>

<p>reading - or trying to - the <a href="x" data-name="slow_spatial_reader">Slow Spatial Reader</a></p>

<p class="right">&lsquo;I don&rsquo;t think it is possible to contribute to the present moment in any meaningful way while being wholly engulfed by it. It is only by stepping out of it, by taking a telescopic perspective, that we can then dip back in and do the work which our times asks of us.&rsquo; <br>-Maria Popova</p>

<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_13.jpg" alt="">


<p>when you travel slower, you encounter more. <br>because there&rsquo;s just more time to. I rarely talk to people on planes, but I often do, even if it&rsquo;s just a short chat, on the SailRail. <br>and there are more parts of the journey where you have an opportunity for conversation too</p>

<p>there&rsquo;s also the bonding that happens when there are cancellations or delays &amp; you find yourself allied, at least in a small way, to strangers trying to travel to the same place. I suppose that happens with planes too, but it&rsquo;s a bit different. with the SailRail it&rsquo;s a more active figuring things out together, helping each other. which train to get, which station to change at, what time the ferry after the one we&rsquo;re going to miss is at&#8230;</p>



<p class="right">&lsquo;I think it&rsquo;s important to practice new forms of movement in the Anthropocene, in order to encounter climate change on the ecosystem&rsquo;s terms (...). You are caught up in the flows, move at the same speed as the trash and algae and seaweed around you. And it makes me wonder, how do we normally move through the world in ways that limit, or prohibit the world from entering us?&rsquo; -Angela Sakrison, Rowboat Phenomenology</p>

<p class="right">(from the Slow Spatial Reader again)</p>

<a href="x" data-name="joan2">more</a>`,
"joan2": 
` <a href="x" data-name="home">travel home</a>
<p>the first few times I made the journey over land (and sea) between Ireland, where I&rsquo;m from, and Belgium, where I live, I felt almost embarrassed telling people. it felt like a ridiculously long journey, and a lot of money to spend on it too, when there are such cheap flights between those places. I felt self-conscious about my decision to travel by land for environmental reasons, even though I knew it was justified and a perfectly innocuous decision that didn&rsquo;t affect anyone else, simply because air travel, especially for Irish people wanting to get off our little island, is such a norm. I thought people might think I was some kind of climate martyr trying to make them feel bad for taking planes</p>

<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_9.jpg" alt="Photos of Joan's journey">


<p>making that first journey, I thought, ok, this isn&rsquo;t something I&rsquo;m going to be able to do every time, but why not do it now, I have the time, and it&rsquo;s a kind of dramatic way to move country. but four years later, I now make the majority of my journeys between Ireland and Belgium by land. Last Christmas, last Easter, in June for a wedding, to Scotland in July for a holiday and then to Dublin from there, this time for work. I have flown this year too. once from Brussels to Dublin in March for an interview, because I had to book last minute and couldn&rsquo;t afford the Eurostar, and again from Dublin to Brussels in August, travelling with a group of participants for a film project. I still feel guilty when I fly. rather than working on not feeling guilty, which is what other people (read: my parents) tell me to do, I see that guilt as being symptomatic of a gap between what I want to be doing and what I am doing, and want to work on reducing the gap as much as I can. which, as I start to work increasingly often in Ireland, is going to mean asking to have my over-land travel costs (and potentially travel time) covered by project money, which I have occasionally been successful in. it helps that I have, over time, normalised it even just for myself</p>

<a href="x" data-name="joan3">more</a>`,
"joan3": 
` <a href="x" data-name="home">travel home</a>

<p>the more times I made the journey, the less special it became. it also became less long, less slow. or so it seemed. my perception shifted. I didn&rsquo;t think about the work I could get done in the extra time needed to travel by train and ferry instead of by plane. I didn&rsquo;t think about what a lovely time I would have gazing out at the scenery and reflecting on my life while on the train (sometimes I do, but it&rsquo;s not a given). it&rsquo;s just become a habit, not something I am doing to prove a point or be virtuous. it is my auto-pilot way to move between my two homes (pun intended)</p>

<p class="centre">things observed on the journey, June 9th<br><br> -the foot statue (although not the first time I've seen it) <br>
    <img class="cent" src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_2.jpg" alt="image of foot">
    <br>
    -women sitting across from me on the train taking ecstasy on their way to a festival 
    <br><img class="cent" src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_6.jpg" alt="image of foot"><br>
    <br>-a very red sun setting (from the deck of the ferry)
    <br><img class="cent" src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_11.jpg" alt="image of foot"><br>

    <br>         
     -a lot of bad ferry art (but good ferry port art)</p>
     <a href="x" data-name="joan4">more</a>`,

"joan4": ` <a href="x" data-name="home">travel home</a>

<p>if you fly you bypass the landscape in between the place you are at the beginning and the destination</p>
<p>for a long time the idea of ‘slowing down’ did not appeal to me. I liked going fast, getting lots of stimuli, feeling I was doing something, contributing something. In fact for many years, in which I taught drama and worked multiple side jobs between and alongside unpaid and underpaid creative projects to be able to pay my rent, I was fueled by an antsiness connected to wanting to do more, in terms of creative work, not less. earlier this year though my body took the executive decision to slow down. I developed hypothyroidism, likely triggered by ongoing high cortisol levels. the thyroid works hormonally, and basically regulates a lot of functions of your body, from energy levels to sleep to digestion. the main symptom I was experiencing was fatigue, on a level I had never experienced before. there were days when I could hardly get out of bed, which, as someone who used to move around very fast and do a lot of things in one day, was also mentally hard to deal with
</p>
<br><br><img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_19.jpg" alt="image of fern"><br>

     <a href="x" data-name="joan5">more</a>
`,
"joan5": `<a href="x" data-name="home">travel home</a>

<p>even after starting to implement recommendations of multiple doctors, and slowly feeling my energy levels rise somewhat, I decided that regardless of whether my hypothyroidism proved to be chronic or not, I wanted to try to do less. or maybe not less exactly, but do more on less projects. because over the years I had come to appreciate that, in art as in other aspects of life, doing nothing in not doing nothing. just as silence is not real silence. in my practice, what looks like doing less is not actually doing less. It took me some experience to realise how important those days in the studio where, apart from boiling the kettle, you spend the whole day staring at the wall or out the window, thinking. doing less is simply a different approach, and one that sometimes allows me to make more, or something that IS more. so when Sebastian invited me to work on this project, while I was initially excited at the prospect, I did doubt saying yes at first, and had to have a good think about whether it was a good idea to commit to an additional project, after having decided to focus in the coming year more on my own personal practice, and commit less energy than in previous years to other collective projects on top of that. In the end I decided that this project would give as much energy as it would take, and that I also just wanted more improvisation in my life, which I knew would be central to our process with the piece. my tiredness is making me be more unapologetic about choosing creative work over admin and planning and networking work connected to the creative work. my body is rejecting the admin, and wanting instead to sink into the moving, drawing, writing. I know that the admin side of the work is necessary, but it’s not what I want to be absorbed by right now. maybe I need to find a new way to do it. when I was starting out as a theatre maker, a lot of my energy went into writing applications, sending emails, trying to meet and connect with relevant people, coming up with proposals that would never happen, because I felt that was what I needed to do in order for someone to let me make the work. now that my energy levels are so quickly depleted it has become even more clear that I am not happy about the energy I put into my practice is divided. slash consumed. yes, emails need to be answered, but if you don’t make time for creating, no one is going to make it for you. granted it is partly thanks to many years of legwork setting up projects without money and connecting with people that I did do back when I had the energy for it, and some recent focused periods applying for funding, that I am now in a position to carve out more time to just be in the studio, messing around. and more time to do nothing. and to read. so of course I also read ‘How to Do Nothing: Resisting the Attention Economy,’ by Jenny Odell. which funnily enough is also about how doing nothing is not actually doing nothing. the book could be described as being about shifting our attention, and doing less in one framework (corporate social media for example), to do more in another, for example a birdwatching group in a local park or a neighbourhood Signal group:
</p>
<p class="right">‘When the logic of capitalist productivity threatens both endangered life and endangered ideas, I see little difference between habitat restoration in the traditional sense and restoring habitats for human thought.’
</p><a href="x" data-name="joan6">more</a>
`,
"joan6": `<a href="x" data-name="home">travel home</a>
<p>our rehearsal room, structured around naps, eating, talking and improvising, has felt like a habitat for thinking, together. not just through words but through sound, movement, contact and stillness. thinking but also resting, mourning, celebrating and imagining. 
</p>
<br>
<br><img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/googledoc_10.jpg" alt="image of seagull flying away"><br>
<p>the idea of making a piece about climate initially felt daunting. should we be making some kind of grand statement in the work? and who were we to be making a grand statement? we are just six artists, trying (although not always managing) to be engaged with the world and other people in it and with movements of resistance and protest, within and outside of our practices, no more experts on any of it than the next person. what got us excited, though, was considering different ways to think about and (re)do our relationships with other people, other creatures, and the landscapes around us, whether through creating travelling pirate radio stations, generating sound for plants through light energy, singing for cows, recording changing soundscapes in the natural environment on this island, or letting others rest of us on our bodies and instruments between playing
</p> 

         <a href="x" data-name="joan7">more</a>`,
"joan7": `<p>part of why I wanted to be an artist was the idea that, in art, there are rules, kind of, but you can also break them, or make your own rules, and that’s also kind of what it’s all about. I liked the idea of making and testing new rules or conditions for being in the world and interacting with each other, under the guise of performance. as I see it, we made the piece, and the process of making it (and travelling to rehearsals), a kind of micro-habitat for living and working differently in. and like me taking the SailRail, what begins as some kind of symbolic statement or artistic gesture neither practical or normal, once you start in-habiting it, can become just that - a habit for living in, too.</p>

<a href="x" data-name="home">travel home</a>`,


// WALKING SCORES
    "walk1": `    <a href="x" data-name="home">travel home</a>
    <br>
    <br>
    <i>Excerpts from the book <a href="x" data-name="walkingfromscores">Walking from Scores</a></i><br>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking1.jpg" alt="photo from walking score book"><br>
    <br>
    <a href="x" data-name="walk2">keep walking...</a>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/snailgif1.gif" alt="photo of a tiny snail on a chocolate bar"><br>`,
    "walk2": `<a href="x" data-name="home">travel home</a>
    <br>
    <br>
    <i>Excerpts from the book <a href="x" data-name="walkingfromscores">Walking from Scores</a></i><br>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking2.jpg" alt="photo from walking score book"><br>
    <br>
    <a href="x" data-name="walk3">keep walking...</a>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/snailgif2.gif" alt="photo of a tiny snail on a chocolate bar"><br>`,
    "walk3": `<a href="x" data-name="home">travel home</a>
    <br>
    <br>
    <i>Excerpts from the book <a href="x" data-name="walkingfromscores">Walking from Scores</a></i><br>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking3.jpg" alt="photo from walking score book"><br>
    <br>
    <a href="x" data-name="walk4">keep walking...</a>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/snailgif3.gif" alt="photo of a tiny snail on a chocolate bar"><br>`,
    "walk4": `<a href="x" data-name="home">travel home</a>
    <br>
    <br>
    <i>Excerpts from the book <a href="x" data-name="walkingfromscores">Walking from Scores</a></i><br>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking4.jpg" alt="photo from walking score book"><br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking5.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking6.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking7.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking8.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking9.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking10.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking11.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking12.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking13.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking14.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking15.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking16.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking17.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking18.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking19.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking20.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking21.jpg" alt="photo from walking score book"><br>
<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/walkingscores/walking22.jpg" alt="photo from walking score book"><br>
    <br>
    <a href="x" data-name="home">travel home</a>
    <br>
    <img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/tinysnailrobzoomedout.jpeg" alt="photo of a tiny snail on a chocolate bar"><br>`,

// BLINK PIECE

"blink": `<h3>Blink Piece - Jane Hackett</h3>
<p>Find a mirror and stand in front of it. <br>
    Look at yourself. Have a staring competition with yourself. <br>
    Whoever blinks first must create a rhythmic pattern with their eye blinks. <br>
    Don’t pre-empt the rhythm. Listen to your surroundings for inspiration. <br>
    Play with the contrast of blinks. <br>
    When the time is right, rest your eyes and notice what you see in the darkness. 
    </p>
    <br><img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/windmill.gif" alt="animated gif of windmill spinning with a ferry behind it" srcset=""><br><br>
<a href="x" data-name="home">travel home</a>`,

// JOURNEY TO HUDDERSFIELD

"hudd": `<h2>Journey to Huddersfield 21/11/23</h2>
<audio controls src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/audiomothhuddersfieldjourney.mp3"></audio>
<br>
<p>Journey made by Hannah, Jane, Rob, Sebastian, Yseult</p>
<p>We all got a lift with Sebastian's dad David, except for Jane - who was brought by her own dad.</p>
<p>8.05am ferry from Dublin to Holyhead with Irish Ferries</p>
<p>Sebastian misread the schedule and we missed a train at Holyhead, so we stopped for a sausage roll.</p>
<p>We nearly missed the next one by getting on the wrong train (marked 0000), but realised at the last moment...</p>
<p>Train from Holyhead to Crewe, then a change to Manchester Piccadilly.</p>
<p>Then finally, another change to take the train all the way to Huddersfield.</p>
<p>We piled the six of us and all our gear into one taxi, and most of us were shocked to discover that Northern Irish pounds are not legal tender in England.</p>
<p>We reached the hotel around 5pm - 11 hours after we left our houses. The travel went very smoothly - but we found the repeated changes of train very tiring. The people who hadn't done SailRail before were amazed at how nice the ferry was, and how chilled out the process was compared to flying.</p>
<br>    <a href="x" data-name="home">travel home</a><br><br>

<img src="https://raw.githubusercontent.com/sebastianadams-music/BeginnersGuide/main/i/port211123.jpg" alt="part of Kirkos at the port at dawn, photobombed by a cute little white fluffy dog">`,

// COWS IN HUDDERSFIELD

"hudd_cows": `<h3>Joan sings to cows near Huddersfield - 22/11/23</h3>
<video style="max-height:70vh; 
max-width:70%; position:relative" controls src="https://github.com/sebastianadams-music/BeginnersGuide/blob/main/cowshudd.mp4?raw=true"></video>
<br><br>
<a href="x" data-name="home">travel home</a>`,

// EXTERNAL LINKS

     "linktest": 
     `link http://www.sebastianadams.net`,

     "walkingfromscores": 
     `link https://www.lespressesdureel.com/EN/ouvrage.php?id=9429`,



// BLANK EXAMPLE
"eg": 
``,


// don't add anything after here cos it gets messed up....
"slow_spatial_reader": `<a href="x" data-name="home">travel home</a><p>Slow Spatial Reader Chronicles of Radical Affection</p>

<p>9789492095978 SlowSpatialReader Spread3 72dpi Go back</p>
<img src="slowspatial.png" alt="Photo of Slow Spatial">

<p>NOT AVAILABLE A plea for slowness on different levels, ranging from individual to collective to global Successor of the successful Slow Reader (Valiz, 2016), in which &mdash; just like in this book &mdash; slow is the starting point for other rhythms, qualities, and scenarios. Trans-disciplinary, travelling through collective and individual power of imagination Author/Editor: Carolyn F. Strauss Contributors: Lara Almarcegui, Marijke Annema, Martina Buzzi, Nicolas Buzzi, Sol Camacho, Cave_bureau (Kabage Karanja and Stella Mutegi), Renske Maria van Dam, Chiara Dorbol&ograve;, Cocky Eek, Anna Maria Fink, David Habets, Ian Hanesworth, Maria Hassabi, Beate H&oslash;lmebakk, Saba Innab, K&#363; Kahakalau, Bronwyn Lace, Daniel Lie, Pia Lindman, Ruth Little, Megumi Matsubara, Ash McAskill, Kate Morales, Salima Naji, Ligia Nobre, Alessandra Pomarico, Maria Popova, Raqs Media Collective (Monica Narula, Jeebesh Bagchi, and Shuddhabrata Sengupta) Jane Rendell, Angela Sakrison, Cristine Taku&aacute;, Li Tavor, Alice Van der Wielen-Honinckx, Fran&ccedil;oise Verg&egrave;s, Sara Wookey Design: Zuzana Kostelansk&aacute; Summer 2021, Valiz in collaboration with Slow Research Lab | supported by Prins Bernhard Cultuurfonds and Creative Industries Fund NL | Pb | 352 pp. | 21 x 16 cm (h x w) | English | ISBN 978-94-92095-97-8 Presentation on July 8th at Het Nieuwe Instituut, Rotterdam, that can also be followed via online livestream. Slow Spatial Reader was read by MYCKET as part of the september 2021 edition of Site-Reading Writing Quarterly Slow Spatial Reader offers a collection of essays about &lsquo;Slow&rsquo; approaches to spatial practice and pedagogy from around the world. The book&rsquo;s contributors are from twenty-four countries on five continents. Each one brings distinct philosophical and disciplinary approaches&mdash;from &lsquo;spatial&rsquo; fields like architecture, sculpture, and installation, but also performative, somatic and/or dramaturgical practices&mdash;, exploring how we think about and engage with space at a range of scales, tempos, and durations. The essays chronicle projects and processes that amplify tangible and intangible qualities of spatial experience: reaching into the cracks of the body, probing the fuzzy borders of atmospheres, and extending out across both geographical and epistemological coordinates. The term &lsquo;radical affection&rsquo; in the book&rsquo;s title was coined to unite those diverse approaches in a call for tender acts of individual and collective imagination through which new forms of caring, connection, and resilience might emerge. Like its predecessor, Slow Reader (Valiz 2016), this new publication is intended to spur meaningful dialogue between disciplines and cultures, inspiring not only a different velocity of engaging the world but also critical shifts in consciousness that only Slow thinking and practice can provoke.</p>`,
}
