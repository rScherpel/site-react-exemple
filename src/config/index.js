export const SITE = {
  name: "R & I landing page",
  description: "Landing page institucional da R & I",
  email: "emaildeteste@gmail.com",
  phone: "5521971712259",
  phone_formatado:"(21) 97171-2259",
  whatsapp_message: "Boa tarde! Vim pelo site, gostaria de fazer um projeto.",
  owner:"Rafael Scherpel",
  linkedIn:"https://br.linkedin.com/in/rafael-guarnelli-scherpel-b091a6262",
  github:"https://github.com/rScherpel",

  get whatsapp_link() {
    //return `https://wa.me/${this.phone}?text=${encodeURIComponent(
    return `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(  
      this.whatsapp_message
    )}`;
  },
};
