<!-- src/routes/useful/+page.svelte -->
<script>
  const usefulLinks = [
    { name: "Rust Book", url: "https://doc.rust-lang.org/book/" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
    { name: "Have I Been Pwned", url: "https://haveibeenpwned.com" },
    {name:"Consumet API" , url:"https://github.com/consumet/api.consumet.org" },
    {name:"Anna's Archive" , url:"annas-archive.org" },
    {name:"Library Genesis" , url:"https://libgen.is/" },
    {name:"Cool image processing" , url: "https://www.tooooools.app/"},
    {name:"Anime raccomandations AI" , url:"https://waifudex.com/" },
    {name:"Meme Grep" , url:"https://memegrep.com/" },
    {name:"Pepe" , url:"https://rarepepes.net/search" },
    {name:"Anime Streaming" , url:"https://aniwatchtv.to/" },
    {name:"CS Books" , url:"https://nick-black.com/dankwiki/index.php/Book_list_for_streetfighting_computer_scientists" },
    {name:"Reverse engineering ctf style thing" , url:"https://microcorruption.com/" },
    {name:"Reverse engineering ctg style thing 2" , url:"https://crackmes.one/" },

    {name:"Reverse engineering ctg style thing 2" , url:"https://crackmes.one/" },
    {name:"Reverse engineering ctg style thing 2" , url:"https://crackmes.one/" },
    { name:"From tensor to Diffusion", urk:"https://github.com/jla524/fromthetensor" },





];
</script>

<svelte:head>
  <title>dilo - Useful Things</title>  <meta name="viewport" content="width=device-width, initial-scale=1" />

</svelte:head>

  <main>
    <h1>useful links or to remember</h1>
    <ul>
      {#each usefulLinks as link}
        <li>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </li>
      {/each}
    </ul>
  </main>



