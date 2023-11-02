document.getElementById("reset").addEventListener("click", resetSessionStorage)
demo()


function demo(){
    let content = document.getElementById("content")
    let links = document.querySelectorAll('a')
    console.log(links)
    links.forEach((link) => {
        console.log(link)
        link.addEventListener('click', function (event) {
            let del = updateSessionStorage()
            // console.log(del)
            // console.log(event.target)
            content.textContent = ""
            var url = event.target.dataset.name;
            console.log(url)
            event.preventDefault(); // does not follow link
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
          })
    });
    
}



function playMovie(){
    let vid = document.querySelector('#container video')
    vid.removeAttribute("hidden")
    vid.play()
    // document.getElementById("container").textContent = "playing beautiful movie about slow travel"


    
    }
    
    function stopPlayingMovie(){
    console.log("trying to stop")
    let vid = document.querySelector('#container video')
    vid.pause()
    vid.hidden = true

    // document.getElementById("status").textContent = "stopped beautiful movie about slow travel"
    
    }

// session storage modifications

function updateSessionStorage() {
    let delayStorage = localStorage.getItem('slowtravel')
    if (!delayStorage){
        // localStorage.setItem('slowtravel', 1) // actually seems unnecessary
        delayStorage = 1
    }
    delayStorage *= 1.5
    localStorage.setItem('slowtravel', delayStorage)
    return delayStorage
}

function resetSessionStorage(){
    localStorage.setItem('slowtravel', 1)
    let test = localStorage.getItem('slowtravel')
    console.log("slowtravel = ", test)
    return test
}

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


let data = {
    "home": `        <a href="x" data-name="joan">load Joan's text</a>
    <a href="x" data-name="rob">load Walking Scores</a>
    <a href="x" data-name="soundmapping">Soundmapping</a>
    <div id="home_text"><p class="typed">This is a guide to slow travel, for beginners.</p>
    </div>
    
`,
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
"rob": `
<a href="x" data-name="home">travel home</a><br>
<img src="walkingscores/walking1.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking2.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking3.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking4.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking5.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking6.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking7.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking8.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking9.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking10.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking11.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking12.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking13.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking14.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking15.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking16.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking17.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking18.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking19.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking20.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking21.jpg" alt="photo from walking score book"><br>
<img src="walkingscores/walking22.jpg" alt="photo from walking score book"><br>

`
,
// don't add anything after here cos it gets messed up....
"slow_spatial_reader": `<a href="x" data-name="home">travel home</a><p>Slow Spatial Reader Chronicles of Radical Affection</p>

<p>9789492095978 SlowSpatialReader Spread3 72dpi Go back</p>
<img src="slowspatial.png" alt="Photo of Slow Spatial">

<p>NOT AVAILABLE A plea for slowness on different levels, ranging from individual to collective to global Successor of the successful Slow Reader (Valiz, 2016), in which &mdash; just like in this book &mdash; slow is the starting point for other rhythms, qualities, and scenarios. Trans-disciplinary, travelling through collective and individual power of imagination Author/Editor: Carolyn F. Strauss Contributors: Lara Almarcegui, Marijke Annema, Martina Buzzi, Nicolas Buzzi, Sol Camacho, Cave_bureau (Kabage Karanja and Stella Mutegi), Renske Maria van Dam, Chiara Dorbol&ograve;, Cocky Eek, Anna Maria Fink, David Habets, Ian Hanesworth, Maria Hassabi, Beate H&oslash;lmebakk, Saba Innab, K&#363; Kahakalau, Bronwyn Lace, Daniel Lie, Pia Lindman, Ruth Little, Megumi Matsubara, Ash McAskill, Kate Morales, Salima Naji, Ligia Nobre, Alessandra Pomarico, Maria Popova, Raqs Media Collective (Monica Narula, Jeebesh Bagchi, and Shuddhabrata Sengupta) Jane Rendell, Angela Sakrison, Cristine Taku&aacute;, Li Tavor, Alice Van der Wielen-Honinckx, Fran&ccedil;oise Verg&egrave;s, Sara Wookey Design: Zuzana Kostelansk&aacute; Summer 2021, Valiz in collaboration with Slow Research Lab | supported by Prins Bernhard Cultuurfonds and Creative Industries Fund NL | Pb | 352 pp. | 21 x 16 cm (h x w) | English | ISBN 978-94-92095-97-8 Presentation on July 8th at Het Nieuwe Instituut, Rotterdam, that can also be followed via online livestream. Slow Spatial Reader was read by MYCKET as part of the september 2021 edition of Site-Reading Writing Quarterly Slow Spatial Reader offers a collection of essays about &lsquo;Slow&rsquo; approaches to spatial practice and pedagogy from around the world. The book&rsquo;s contributors are from twenty-four countries on five continents. Each one brings distinct philosophical and disciplinary approaches&mdash;from &lsquo;spatial&rsquo; fields like architecture, sculpture, and installation, but also performative, somatic and/or dramaturgical practices&mdash;, exploring how we think about and engage with space at a range of scales, tempos, and durations. The essays chronicle projects and processes that amplify tangible and intangible qualities of spatial experience: reaching into the cracks of the body, probing the fuzzy borders of atmospheres, and extending out across both geographical and epistemological coordinates. The term &lsquo;radical affection&rsquo; in the book&rsquo;s title was coined to unite those diverse approaches in a call for tender acts of individual and collective imagination through which new forms of caring, connection, and resilience might emerge. Like its predecessor, Slow Reader (Valiz 2016), this new publication is intended to spur meaningful dialogue between disciplines and cultures, inspiring not only a different velocity of engaging the world but also critical shifts in consciousness that only Slow thinking and practice can provoke.</p>`,
}
