<!-- src/routes/like/+page.svelte -->
<script>
  const items = [
  "weed",
  "slop",
  "java",
  "university (grrr)",
  "hype",
  "fomo",
  "python (jk)",
  "windows",
  "apple",
  "nextjs",
 "all books in the For Dummies series (useless)",
 "myself",
 "closed source informations",
 "paywalls",
 "and many other things..."

  ];
</script>

<svelte:head>
  <title>dilo - things i like</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

  <main>
    <h1>things i like</h1>
    {#each items as item}
      <section class="category">
        <ul>
            <li>{item}</li>
        </ul>
      </section>
    {/each}
  </main>



