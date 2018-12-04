<template>
  <nuxt />
</template>

<script>
export default {};
</script>

<style lang="stylus">
body
  font-size: 16px
  margin: 0
  background: #eee
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

*, *:before, *:after
  transition: all 0.5s ease-in-out 0.1s
  box-sizing: border-box

*
  cursor: url('/default.cur'),default

a, a *
  cursor: url('/pointer.cur'),pointer !important

a,a:link,a:visited
    color: #555
    text-decoration: none
    outline: none
    border-bottom: 1px solid #999
    word-wrap: break-word

.table
  display: table
  width: 100%
  height: 100%

.table-cell
  display: table-cell
  vertical-align: middle

#app > div
  display: flex

#main, #sidebar
  padding: 2rem

#main
  order: 1
  min-height: 100vh
  margin-left: 38.2%
  word-break: break-word;

#sidebar
  background: #444
  width: 38.2%
  position: fixed
  bottom: 0
  top: 0
  text-align: right
  z-index: 9
  .table
    color: #ddd

  .avatar
    border-radius: 50%
    border: 1px solid rgba(255,255,255,.25)
    width: 200px
    height: 200px
    cursor: pointer

  h1
    font-size: 4rem

  a
    border: 0
    color: #ddd
    &:hover img
      transform: rotate(360deg)


#main
  .post
    padding: 40px
    background: #fff
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12)
    margin-bottom: 20px
    h1
      font-size: 2rem
    .meta
      color: #999
      line-height: 2em

    .content
      color: #333
      h1,h2,h3,h4,h5,h6,p,li,blockquote
        line-height: 2em
      p,blockquote,ul,ol,pre
        margin-bottom: 1.5rem
      ul, ol
        padding-left 1.2em
      ol li
        list-style-type: simp-chinese-informal
        margin-left: 1.5em
      ul li
        list-style-type: square
        margin-left: 1em
      img
        max-width 100%
      hr
        display block
        height 1px
        border 0
        border-top 1px solid $borderColor
        margin 1.2rem 0
        padding 0
      strong
        font-weight 600
      a.header-anchor
        font-size 0.85em
        float left
        margin 0.125em 0 0 -0.85em
        opacity 0
        transition all 0.2s
        border: 0
        &:hover
          text-decoration none
      h1, h2, h3, h4, h5, h6
        &:hover > a.header-anchor
          opacity 1
      h1
        font-size 1.6rem
        padding-bottom 0.3em
        margin-bottom 0.5em
        border-bottom 1px solid $borderColor
      h2
        font-size 1.3rem
        padding-bottom 0.3em
        margin-bottom 0.5em
        border-bottom 1px solid $borderColor
        &:not(:first-child)
          margin-top 1.5rem
      h3
        font-size 1.1rem
      h4, h5, h6
        font-size 1rem
      h3,h4,h5,h6
        font-weight: bolder
      code, kbd
        font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace
      blockquote
        padding 0 1em
        color #6a737d
        border-left 0.25em solid #dfe2e5
        margin-left 0
        >:first-child
          margin-top 0
        >:last-child
          margin-bottom 0
      table
        max-width 100%
        border-collapse collapse
        margin 1rem 0

      tr
        border-top 1px solid #dfe2e5
        &:nth-child(2n)
          background-color #f6f8fa

      th, td
        border 1px solid #dfe2e5
        padding .6em 1em


@media only screen and (max-width:599px)
  #app > div
    display: block
  #sidebar
    position: static
    width: 100%
    display: block
    text-align: center

  #main
    padding: 0
    margin-left: 0
</style>
