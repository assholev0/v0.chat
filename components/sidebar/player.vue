<template>
  <div v-show="player" ref="aplayer" />
</template>

<script>
/*
文章使用示例：
var index = ap.list.audios.findIndex(x=>x.name==='我也可以是流浪诗人');
if(index !== -1) {
  ap.list.remove(index);
}
ap.list.add({
  name: '我也可以是流浪诗人',
  artist: '好妹妹',
  url: '//music.163.com/song/media/outer/url?id=33166563.mp3',
  cover: '//p1.music.126.net/pksSYxP3e_HkbX7zwPvxjg==/7841716930323893.jpg'
});
ap.list.switch(ap.list.audios.length - 1);

*/
import { player } from '../../player.config';

export default {
  name: 'Aplayer',
  computed: {
    player() {
      return typeof window !== 'undefined' && window.innerWidth > 812;
    }
  },
  mounted() {
    const that = this;
    import('aplayer').then(({ default: Aplayer }) => {
      const config = Object.assign({}, {
        container: that.$refs.aplayer,
        fixed: false,
        listFolded: false,
        listMaxHeight: '270px',
        autoplay: true,
        volume: 1,
        order: 'random',
        audio: []
      }, player);
      const ap = new Aplayer(config);
      // Fix Autoplay
      if (!window.ap && typeof document.addEventListener === 'function') {
        const play = () => {
          if (ap.paused) {
            ap.play();
          }
          document.removeEventListener('click', play);
        };
        document.addEventListener('click', play);
      }
      window.ap = ap;
    });
  }
};
</script>

<style lang="css" src="aplayer/dist/aplayer.min.css"></style>

<style lang="stylus">
.aplayer
  color: #330
  margin: 5px 0
  max-width: 320px
  display: inline-block
</style>
