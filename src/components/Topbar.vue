<template>
  <div class="topbar">
    <div class="topbar-left">
      <img src="/logo-inst1.png" alt="Institución 1" class="topbar-logo" />
      <img src="/logo-inst2.png" alt="Institución 2" class="topbar-logo" />
    </div>

    <div class="topbar-center">
      <span>{{ dateTime }}</span>
    </div>

    <div class="topbar-right">
      <form class="topbar-search" @submit.prevent>
        <input type="text" placeholder="Buscar..." class="topbar-input" />
        <button type="submit" class="topbar-button">
          <i class="bi bi-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return { dateTime: "" };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Bogota"
      };
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("es-CO", options);
      this.dateTime = "Hoy es " + formatter.format(now) + " hora Colombia";
    }
  }
};
</script>
