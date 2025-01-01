<script>
  import ListeningBox from "./ListeningBox.svelte";
</script>

<div class="flex">
  <main>
    <h1>Listening</h1>
    <p>I decided to share some of the music I'm listening to, in part since the design of this page struck me at 1 AM like a freight train and in part because, it'd be fun?</p>
    <hr>

    <div id="listening-box-container" class="flex" style="flex-wrap: wrap; gap: 5px;">
      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e02193ac4142fa040360d8efe64" link_a="https://open.spotify.com/track/5w5wBkH4ana9waptVsxJCq" text_a="Flavor Foley - Butcher Vanity (Spotify)" link_b="https://www.youtube.com/watch?v=vjBFftpQxxM" text_b="(YouTube)">
        <i>CW: Cannibalism</i>
        <p>This one got me through the latter half of senior year. I love just about everything in this track, from the growly and noisy synth to the knife foley, but <i>god</i> the violin at ~0:38 hits.</p>
      </ListeningBox>

      <ListeningBox cover="/listening/Vermillion.png" link_a="https://open.spotify.com/track/3CSIkb7MnhZ8UPvt3ZbGjn" text_a="CircusP - Vermilion (Spotify)" link_b="https://www.youtube.com/watch?v=wFLn_d51bNc" text_b="(YouTube)">
        <i>CW: Gore</i>
        <p>Though I've yet to fully penetrate the meaning of this one, I appreciate the running theme of <a href="https://www.youtube.com/watch?v=nrsr_-QXCv4">unhealthy relationships between art and the artist</a>. Perhaps there's something to be said about <i>pouring your heart out</i> with this one.</p>
      </ListeningBox>

      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e0221333eb66e3cf9f3818e789f" link_a="https://open.spotify.com/track/5ic62hKqeDhZsa9l6YQxzJ" text_a="32ki - Mesmerizer (Spotify)" link_b="https://www.youtube.com/watch?v=2c9FqIF600A" text_b="Will Stetson + rachie - Mesmerizer (English) (YouTube)">
        <p>You know what Mesmerizer is.<br>I've linked the official English cover in the YouTube slot, I just really like it.</p>
      </ListeningBox>

      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e02b34e7e66410f3d933d5bcdbd" link_a="https://open.spotify.com/track/26I5UfjfxqsUAB2Ryr4utP" text_a="Giga - Beyond the Way (Spotify)" link_b="https://www.youtube.com/watch?v=SJcgOWsDwi4" text_b="(YouTube)">
        <p>I don't really have anything to say about this one. It kinda just bangs.</p>
      </ListeningBox>

      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e0202e855eb06ad7974eadfcf6e" link_a="https://open.spotify.com/track/3WuBuCMPAJED2LRsSOG6wB" text_a="Vane Lily - Six Feet Under (Spotify)" link_b="https://www.youtube.com/watch?v=7gmGYDxlg20" text_b="(YouTube)">
        <i>CW: Gore</i>
        <p>I'd put some analysis here but the themes of this song are so clear I literally could not convey it more efficiently than the song itself. Just listen to it.</p>
      </ListeningBox>

      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e02395fd6d515bb8dfae8f1e3d1" link_a="https://open.spotify.com/track/2asWe7CTLmXiGRaWqHZ1rk" text_a="Flavor Foley - weathergirl (Spotify)" link_b="https://www.youtube.com/watch?v=M7VSEZOQIlg" text_b="(YouTube)">
        <p>Holy shit nothing notified me about this song. Probably because I didn't like their last song <i>at all</i> so the ~algorithm~ didn't bother, but this is so good.</p>
      </ListeningBox>

      <ListeningBox cover="https://i.scdn.co/image/ab67616d00001e0289e3b38cb86ef8cfb0cd8def" link_a="https://open.spotify.com/track/61KYsWS25JXUO4fGb1138X" text_a="Ado - Usseewa (Spotify)" link_b="https://www.youtube.com/watch?v=Qp3b-RXtz4w" text_b="(YouTube)">
        <style>
          @keyframes emphasis {
            0% {
              color: red;
              transform: translateX(8px);
            }
            33% {
              transform: translateY(5px);
            }
            25% {
              transform: translateX(-5px);
            }
            50% {
              color: white;
              transform: translateX(8px);
            }
            66% {
              transform: translateY(-5px);
            }
            75% {
              transform: translateX(-5px);
            }
            100% {
              color: red;
              transform: translateX(5px);
              transform: translateY(-2px);
            }
          }
          
          #usseewa {
            animation: 0.5s linear infinite emphasis;
          }
        </style>
        <i id="usseewa">USSEE USSEE USSEEWAA</i>
      </ListeningBox>

      <ListeningBox cover="/listening/badtaste.png" link_a="https://www.youtube.com/watch?v=riaRzUVHEfU" text_a="om - Bad Taste (YouTube)">
        <p>YouTube showed this to me like right when it came out and it had like 100 views. It's at 20k now and that's not nearly enough.</p>
      </ListeningBox>
    </div>

  </main>
</div>
