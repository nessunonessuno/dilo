<!-- src/routes/+page.svelte -->
<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>



  <main>
  <div class="hero">
    <img src="{base}/lain.png" class="imm" alt="Lain" width="300" height="300" style="object-fit: cover;" />
  </div>
    <h1>suuuper neet looser that likes computers</h1>
    <section class="intro">
      &gt; Yo im dilo, suuper neet, im currently unemployed trying to make it. I really likes computers and rust, and other things. Basically my entire existence is based on computers :3 
      <br>&gt; One day i will be god with ai (i hope).
    </section>
    <div class="learning-sections">
      <section class="posts">
        <h2>what i'm currently learning</h2>
        <ul style="color:white;">
          <li><a href="https://it.annas-archive.org/md5/ebf85b30d2d751196275d5dd14968935" target="_webcracy">Deep Learning by Ian Goodfellow</a></li>
          <li><a href="https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist" target="_webcracy">HTP CPTS</a></li>
          <li><a href="#" class="no_underline">playing guitar</a></li>
        </ul>
      </section>
      <section class="posts">
        <h2>what i will learn</h2>
        <ul style="color:white;">
          <li class="no_underline"><a href="#" class="no_underline">gpt from scratch in rust</a></li>
          <li><a href="https://it.annas-archive.org/md5/473751034788eed8b8a3509ac3eb7c31">algorithmic game theory</a></li>
          <li><a href="#" class="no_underline">gpus</a></li>
        </ul>
      </section>
    </div>
    <section class="misc">
      <h2>various</h2>
      <ul>
        <li><a href="{base}/useful">useful</a></li>
        <li><a href="{base}/meme">memes</a></li>
        <li><a href="{base}/like">things i like</a></li>
        <li><a href="{base}/dislike">things i dislike</a></li>
      </ul>
    </section>
    <section class="posts">
      <h2>recent posts or articles idk</h2>
      <ul style="color:white;">
        <li><a href="">no posts igig</a></li>
      </ul>
    </section>
  </main>
  <h2 style="margin-bottom:0px !important; text-align: left;"><a href="{base}/journal.txt" class="no_underline">Journal</a></h2>

