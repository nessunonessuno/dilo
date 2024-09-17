<!-- src/routes/meme/+page.svelte -->
<script>
  import { onMount } from 'svelte';

  let memeFiles = [];
  let selectedMeme = null;

  onMount(async () => {
    try {
      const response = await fetch('/api/meme', { method: 'GET' });
      const data = await response.json();
      if (data.success) {
        memeFiles = data.data;
      } else {
        console.error('Error fetching memes:', data.message);
      }
    } catch (error) {
      console.error('Error fetching memes:', error);
    }
  });

  function openMeme(meme) {
    selectedMeme = meme;
  }

  function closeMeme() {
    selectedMeme = null;
  }
</script>

<svelte:head>
  <title>dilo - Memes</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

  <main>
    <h1>my memes</h1>
    <div class="meme-grid">
      {#each memeFiles as meme, index}
        <div class="meme-item" on:click={() => openMeme(meme)}>
          <img 
            src={`/meme/${meme}`} 
            alt={`Meme ${index + 1}`} 
            width="200"
            height="200"
          />
        </div>
      {/each}
    </div>
  </main>

  {#if selectedMeme}
    <div class="meme-modal" on:click={closeMeme}>
      <div class="meme-modal-content" on:click|stopPropagation>
        <img 
          src={`/meme/${selectedMeme}`} 
          alt="Selected Meme" 
          style="width: 100%; height: auto;"
        />
      </div>
    </div>
  {/if}

<style>
  .meme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .meme-item {
    cursor: pointer;
    transition: transform 0.2s;
  }
  .meme-item:hover {
    transform: scale(1.05);
  }
  .meme-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .meme-modal-content {
    max-width: 90%;
    max-height: 90%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
