<script>
import "../style.css"
import Navbar from '$lib/Navbar.svelte';
import Footer from '$lib/Footer.svelte';
</script>
<div class="container">
 
  <main> <Navbar />
    <slot />
  </main>
  <Footer />
</div>


