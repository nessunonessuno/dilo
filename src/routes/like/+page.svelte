<!-- src/routes/like/+page.svelte -->
<script>
  const categories = [
    {
      name: "tech",
      items: [
        "rust",
        "llms",
        "open source things",
        "piracy",
        "javascript",
        "nvim",
        "arch",
        "thinkpad"
        ]
    },
    {
      name: "music",
      items: [
        "breakcore",
        "idm",
        "nightcore",
        "classical piano",
        "oldschool hiphop"
      ]
    },
    {
      name: "books",
      items: [
        "Snow Crash by Neal Stephenson",
        "Permutation City by Greg Egan",
        "Infinite Jest by David Foster Wallace",
        "Hostess by Asimov",
        "The C Programming Language",

      ]
    },
    {
      name: "games",
      items: [
        "Minecraft",
        "The Legend of Zelda",
        "Elden ring",
        "Pokemons",
        "Chess"
      ]
    },
    {
      name: "anime",
      items: [
        "Cowboy Bebop",
        "Serial Experiments Lain",
        "Cyberpunk: Edgerunners",
        "Steins;Gate",
        "Vinland saga",
        "Girls' Last Tour",
        "No Game No Life",
        "Berserk",
        "Made in Abyss",
        "Attack on titan",
        "Welcome to the NHK",
        "Paprika",
        "Kakegurui",
        "Bocchi the Rock!",
        "Darling in the Franxx"
      ]
    },
    {
    name:"random",
    items:[
    "skate",
    "free information",
    "eggs",
    "free food",
    "green tea",
    "cats (super cool)",
    "nicotine"
    ]
    }
  ];
</script>

<svelte:head>
  <title>dilo - things i like</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

  <main>
    <h1>things i like</h1>
    {#each categories as category}
      <section class="category">
        <h2>{category.name}</h2>
        <ul>
          {#each category.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>
    {/each}
  </main>


