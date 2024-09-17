<!-- src/routes/useful/+page.svelte -->
<script>
  import { base } from '$app/paths';

  const categories = [
    {
      name: "programming",
      items: [
        { name: "GitHub", url: "https://github.com" },
        { name: "Stack Overflow", url: "https://stackoverflow.com" },
        { name: "Rust Documentation", url: "https://doc.rust-lang.org" }
      ]
    },
    {
      name: "learning",
      items: [
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" }
      ]
    },


    {
      name: "security",
      items: [
        { name: "Have I Been Pwned", url: "https://haveibeenpwned.com" },
      ]
    }
  ];
</script>

<svelte:head>
  <title>dilo - Useful Things</title>  <meta name="viewport" content="width=device-width, initial-scale=1" />

</svelte:head>

  <main>
    <h1>useful links</h1>
    {#each categories as category}
      <section class="category">
        <h2>{category.name}</h2>
        <ul>
          {#each category.items as item}
            <li>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </main>



