<template>
  <teleport to='body'>
    <div v-if="show" class=" fixed top-0 left-0 h-screen w-full z-[90000] bg-[#000000] bg-opacity-80 flex justify-center items-center">
      <dialog open v-if="show" class="rounded-xl z-50 shadow-md bg-white max-w-[55%] max-w-full  fixed top-auto">
        <slot></slot>
      </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>