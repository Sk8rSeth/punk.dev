<script>
  import { getContentFromDirectory } from '$lib/utils/content.js';
  

  async function loadLatestLog() {
    const log = await getContentFromDirectory('log');
    if (log.length === 0) return null;
    
    const latestLog = log[0]; // First Log (most recent due to sorting)
    return {
      ...latestLog,
      link: `/log/${latestLog.slug}`
    };
  }
  
  let latestLogPromise = loadLatestLog();

</script>

{#await latestLogPromise}
<div class="latest-log-post-container punkcard">
    <div class="punkcard-content">
        <div class="inner-container">
            <h2 class="section-title">//Latest Log</h2>
        </div>
    </div>
  </div>
  {:then log}
  {#if log}
  <!-- log content goes here -->
  <a href={log.link} aria-label="" class="latest-log-container punkcard log-punkcard">
            <div class="punkcard-content bg" style="background-image: radial-gradient(ellipse, rgba(24, 24, 27, .25) 20%, rgb(24, 24, 27) 80%), url({log.featuredImage}) ;">
              <div class="inner-container">
                <h2 class="section-title">//Latest Log</h2>
                <h3 class="log-title">{log.title}</h3>
              </div>
            </div>
        </a>
      {:else}
      <div class="latest-log-post-container punkcard">
        <div class="punkcard-content">
            <div class="inner-container">
                <h2 class="section-title">//Latest Log</h2>
                <div>No logs available</div>
            </div>
        </div>
      </div>
      {/if}
      {:catch error}
        <div>Error loading log: {error.message}</div>
      {/await}
  
  <style>
    .latest-log-post-container {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .content-area {
      flex-grow: 1;
    }
    
    @media (max-width: 768px) {
      .latest-log-post-container {
        padding: 0.5rem;
      }
      
    }
  </style>