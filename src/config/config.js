export const SITE = {
  name: "R & I landing page",
  description: "Landing page institucional da R & I",
  email: "",
  phone: "5521983790705",
  whatsapp_message: "Boa tarde! Vim pelo site, gostaria de uma consulta.",

  get whatsapp_link() {
    //return `https://wa.me/${this.phone}?text=${encodeURIComponent(
    return `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(  
      this.whatsapp_message
    )}`;
  },
};
