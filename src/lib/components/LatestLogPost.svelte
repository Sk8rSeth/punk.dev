<script>
  import { getContentFromDirectory } from '$lib/services/ghost.js';
  import { attachMouseMoveHandlers, attachAfterAsync } from '$lib/utils/mouseEffects.js';
  

  async function loadLatestLog() {
    const log = await getContentFromDirectory('log');
    if (log.length === 0) return null;
    
    const latestLog = log[0]; // First Log (most recent due to sorting)
    return {
      ...latestLog,
      link: `/logs/${latestLog.slug}`
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
  <a href={log.link} aria-label="" class="latest-log-post-container punkcard log-punkcard">
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

    a.latest-log-post-container {
      display: block;
    }

    .punkcard-content.bg {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .punkcard-content.bg .inner-container {
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      display: flex;
    }

    .log-title {
      text-align: center;
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