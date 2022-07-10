<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="text-center w-full error-page">
      <div class="display-2 mt-10">404</div>
      <div class="mt-1 mb-2">Not Found !</div>
      <p>
        お探しのページが見つかりませんでした。<br />
        申し訳ありません、お探しのページが見つかりませんでした。<br />
        お手数ですが、TOPページから再度検索をお願いします。
      </p>
    </div>
    <div v-else class="text-center w-full error-page pa-3">
      <div class="display-2 mt-10">An error occurred</div>
    </div>
    <nuxt-link :to="localePath({ name: '/' })" color="primary" class="link-home"
      >トップページに戻る</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.error-page {
  width: 50%;
}
.link-home {
  text-align: center;
  display: block;
  margin-top: -15px;
}
</style>
